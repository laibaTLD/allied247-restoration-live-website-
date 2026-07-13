export interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string // Rich text HTML content
    featured_image_url?: string
    author_id: string
    author_name?: string
    published: boolean
    published_at?: string
    created_at: string
    updated_at: string
    meta_title?: string
    meta_description?: string
    tags?: string[]
    read_time?: number // in minutes
}

export interface BlogCategory {
    id: string
    name: string
    slug: string
    description?: string
    created_at: string
}

export interface BlogPostCategory {
    blog_post_id: string
    category_id: string
}

export interface CreateBlogPostInput {
    title: string
    slug: string
    excerpt: string
    content: string
    featured_image_url?: string
    published: boolean
    meta_title?: string
    meta_description?: string
    tags?: string[]
}

export interface UpdateBlogPostInput extends Partial<CreateBlogPostInput> {
    id: string
    published_at?: string
    read_time?: number
}
