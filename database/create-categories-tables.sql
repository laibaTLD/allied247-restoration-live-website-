-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Add constraints
    CONSTRAINT blog_categories_name_length CHECK (length(name) >= 1),
    CONSTRAINT blog_categories_slug_length CHECK (length(slug) >= 1)
);

-- Create blog_post_categories junction table
CREATE TABLE IF NOT EXISTS blog_post_categories (
    blog_post_id UUID NOT NULL REFERENCES blog_posts(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES blog_categories(id) ON DELETE CASCADE,
    
    -- Add primary key to prevent duplicate associations
    PRIMARY KEY (blog_post_id, category_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);
CREATE INDEX IF NOT EXISTS idx_blog_categories_name ON blog_categories(name);
CREATE INDEX IF NOT EXISTS idx_blog_post_categories_post_id ON blog_post_categories(blog_post_id);
CREATE INDEX IF NOT EXISTS idx_blog_post_categories_category_id ON blog_post_categories(category_id);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_post_categories ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_categories
CREATE POLICY "Anyone can view categories" ON blog_categories
    FOR SELECT USING (true);

CREATE POLICY "Only authenticated users can manage categories" ON blog_categories
    FOR ALL USING (
        auth.role() = 'authenticated'
    );

-- Create policies for blog_post_categories
CREATE POLICY "Anyone can view post-category relationships" ON blog_post_categories
    FOR SELECT USING (true);

CREATE POLICY "Only authenticated users can manage post-category relationships" ON blog_post_categories
    FOR ALL USING (
        auth.role() = 'authenticated'
    );

-- No default categories - users will create their own categories as needed
