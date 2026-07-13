import { createClient, createPublicClient } from '@/lib/supabase/server'
import { BlogPost, CreateBlogPostInput, UpdateBlogPostInput, BlogCategory, BlogPostCategory } from '@/types/blog'

/**
 * Fetch all published blog posts
 */
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
    const supabase = await createPublicClient()

    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })

    if (error) {
        console.error('Error fetching blog posts:', error)
        return []
    }

    return (data as unknown as BlogPost[]) || []
}

/**
 * Fetch published blog posts with pagination
 */
export async function getPublishedBlogPostsPaginated(page: number = 1, limit: number = 6): Promise<{
    posts: BlogPost[];
    totalPages: number;
    currentPage: number;
    totalPosts: number;
}> {
    const supabase = await createPublicClient()
    const offset = (page - 1) * limit

    // Get total count
    const { count: totalPosts, error: countError } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true })
        .eq('published', true)

    if (countError) {
        console.error('Error counting blog posts:', countError)
        return {
            posts: [],
            totalPages: 0,
            currentPage: page,
            totalPosts: 0
        }
    }

    // Get posts for current page
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .range(offset, offset + limit - 1)

    if (error) {
        console.error('Error fetching blog posts:', error)
        return {
            posts: [],
            totalPages: 0,
            currentPage: page,
            totalPosts: totalPosts || 0
        }
    }

    const totalPages = Math.ceil((totalPosts || 0) / limit)

    return {
        posts: (data as unknown as BlogPost[]) || [],
        totalPages,
        currentPage: page,
        totalPosts: totalPosts || 0
    }
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

    if (error) {
        console.error('Error fetching blog post:', error)
        return null
    }

    return data as BlogPost
}

/**
 * Fetch all blog posts (including unpublished) - Admin only
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching all blog posts:', error)
        return []
    }

    return data as unknown as BlogPost[]
}

/**
 * Create a new blog post - Admin only
 */
export async function createBlogPost(input: CreateBlogPostInput): Promise<BlogPost | null> {
    const supabase = await createClient()

    // Get current user
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        console.error('User not authenticated')
        return null
    }

    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = input.content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)

    const blogPost: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'> = {
        ...input,
        author_id: user.id,
        author_name: user.email?.split('@')[0] || 'Admin',
        read_time: readTime,
        published_at: input.published ? new Date().toISOString() : undefined,
    }

    const { data, error } = await supabase
        .from('blog_posts')
        .insert(blogPost)
        .select()
        .single()

    if (error) {
        console.error('Error creating blog post:', error)
        return null
    }

    return data as BlogPost
}

/**
 * Update a blog post - Admin only
 */
export async function updateBlogPost(input: UpdateBlogPostInput): Promise<BlogPost | null> {
    const supabase = await createClient()

    const { id, ...updates } = input

    // If publishing for the first time, set published_at
    if (updates.published && !updates.published_at) {
        updates.published_at = new Date().toISOString()
    }

    // Recalculate read time if content changed
    if (updates.content) {
        const wordCount = updates.content.split(/\s+/).length
        updates.read_time = Math.ceil(wordCount / 200)
    }

    const { data, error } = await supabase
        .from('blog_posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

    if (error) {
        console.error('Error updating blog post:', error)
        return null
    }

    return data as BlogPost
}

/**
 * Delete a blog post - Admin only
 */
export async function deleteBlogPost(id: string): Promise<boolean> {
    const supabase = await createClient()

    const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Error deleting blog post:', error)
        return false
    }

    return true
}

/**
 * Get recent blog posts (for homepage/sidebar)
 */
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
    const supabase = await createPublicClient()

    const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, featured_image_url, published_at, read_time')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(limit)

    if (error) {
        console.error('Error fetching recent blog posts:', error)
        return []
    }

    return data as unknown as BlogPost[]
}

// ==================== CATEGORY FUNCTIONS ====================

/**
 * Fetch all blog categories
 */
export async function getAllCategories(): Promise<BlogCategory[]> {
    const supabase = await createPublicClient()

    const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name', { ascending: true })

    if (error) {
        console.error('Error fetching categories:', error)
        return []
    }

    return data as unknown as BlogCategory[]
}

/**
 * Fetch categories for a specific blog post
 */
export async function getPostCategories(postId: string): Promise<BlogCategory[]> {
    const supabase = await createPublicClient()

    const { data, error } = await supabase
        .from('blog_post_categories')
        .select(`
            category_id,
            blog_categories (
                id,
                name,
                slug,
                description,
                created_at
            )
        `)
        .eq('blog_post_id', postId)

    if (error) {
        console.error('Error fetching post categories:', error)
        return []
    }

    return data?.map(item => item.blog_categories as unknown as BlogCategory) || []
}

/**
 * Create a new blog category - Admin only
 */
export async function createCategory(name: string, description?: string): Promise<BlogCategory | null> {
    const supabase = await createClient()

    // Generate slug from name
    const slug = name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

    const category: Omit<BlogCategory, 'id' | 'created_at'> = {
        name,
        slug,
        description,
    }

    const { data, error } = await supabase
        .from('blog_categories')
        .insert(category)
        .select()
        .single()

    if (error) {
        console.error('Error creating category:', error)
        return null
    }

    return data as BlogCategory
}

/**
 * Update a blog category - Admin only
 */
export async function updateCategory(id: string, name: string, description?: string): Promise<BlogCategory | null> {
    const supabase = await createClient()

    // Generate slug from name
    const slug = name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

    const { data, error } = await supabase
        .from('blog_categories')
        .update({ name, slug, description })
        .eq('id', id)
        .select()
        .single()

    if (error) {
        console.error('Error updating category:', error)
        return null
    }

    return data as BlogCategory
}

/**
 * Delete a blog category - Admin only
 */
export async function deleteCategory(id: string): Promise<boolean> {
    const supabase = await createClient()

    // First, remove all associations with this category
    await supabase
        .from('blog_post_categories')
        .delete()
        .eq('category_id', id)

    // Then delete the category
    const { error } = await supabase
        .from('blog_categories')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Error deleting category:', error)
        return false
    }

    return true
}

/**
 * Set categories for a blog post - Admin only
 */
export async function setPostCategories(postId: string, categoryIds: string[]): Promise<boolean> {
    const supabase = await createClient()

    // Remove existing categories
    await supabase
        .from('blog_post_categories')
        .delete()
        .eq('blog_post_id', postId)

    // Add new categories
    if (categoryIds.length > 0) {
        const associations = categoryIds.map(categoryId => ({
            blog_post_id: postId,
            category_id: categoryId,
        }))

        const { error } = await supabase
            .from('blog_post_categories')
            .insert(associations)

        if (error) {
            console.error('Error setting post categories:', error)
            return false
        }
    }

    return true
}

/**
 * Get blog posts by category
 */
export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
    const supabase = await createPublicClient()

    const { data, error } = await supabase
        .from('blog_post_categories')
        .select(`
            blog_posts (
                id,
                title,
                slug,
                excerpt,
                content,
                featured_image_url,
                author_id,
                author_name,
                published,
                published_at,
                created_at,
                updated_at,
                meta_title,
                meta_description,
                tags,
                read_time
            )
        `)
        .eq('blog_categories.slug', categorySlug)
        .eq('blog_posts.published', true)

    if (error) {
        console.error('Error fetching posts by category:', error)
        return []
    }

    return data?.map(item => item.blog_posts as unknown as BlogPost) || []
}
