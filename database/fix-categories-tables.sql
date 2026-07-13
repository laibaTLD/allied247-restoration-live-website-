-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can view categories" ON blog_categories;
DROP POLICY IF EXISTS "Only authenticated users can manage categories" ON blog_categories;
DROP POLICY IF EXISTS "Anyone can view post-category relationships" ON blog_post_categories;
DROP POLICY IF EXISTS "Only authenticated users can manage post-category relationships" ON blog_post_categories;

-- Recreate policies with proper names
CREATE POLICY "Categories - Public Read Access" ON blog_categories
    FOR SELECT USING (true);

CREATE POLICY "Categories - Authenticated Full Access" ON blog_categories
    FOR ALL USING (
        auth.role() = 'authenticated'
    );

CREATE POLICY "Post Categories - Public Read Access" ON blog_post_categories
    FOR SELECT USING (true);

CREATE POLICY "Post Categories - Authenticated Full Access" ON blog_post_categories
    FOR ALL USING (
        auth.role() = 'authenticated'
    );

-- Verify tables exist and show structure
SELECT table_name, table_type 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('blog_categories', 'blog_post_categories');
