import { createPublicClient } from '@/lib/supabase/public-client'
import { BlogPost, BlogCategory } from '@/types/blog'

/**
 * Fetch all published blog posts (client-side)
 */
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
    const supabase = createPublicClient()

    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })

    if (error) {
        console.error('Error fetching blog posts:', error)
        return []
    }

    return (data as BlogPost[]) || []
}

/**
 * Get recent blog posts (client-side)
 */
export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
    const supabase = createPublicClient()

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

    return data as BlogPost[]
}

// ==================== CATEGORY FUNCTIONS (CLIENT-SIDE) ====================

/**
 * Fetch all blog categories (client-side)
 */
export async function getAllCategoriesClient(): Promise<BlogCategory[]> {
    const supabase = createPublicClient()

    const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name', { ascending: true })

    if (error) {
        console.error('Error fetching categories:', error)
        return []
    }

    return data as BlogCategory[]
}

/**
 * Fetch categories for a specific blog post (client-side)
 */
export async function getPostCategoriesClient(postId: string): Promise<BlogCategory[]> {
    const supabase = createPublicClient()

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
 * Create a new blog category (client-side)
 */
export async function createCategoryClient(name: string, description?: string): Promise<BlogCategory | null> {
    const supabase = createPublicClient()

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
 * Update a blog category (client-side)
 */
export async function updateCategoryClient(id: string, name: string, description?: string): Promise<BlogCategory | null> {
    const supabase = createPublicClient()

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
 * Delete a blog category (client-side)
 */
export async function deleteCategoryClient(id: string): Promise<boolean> {
    const supabase = createPublicClient()

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
 * Set categories for a blog post (client-side)
 */
export async function setPostCategoriesClient(postId: string, categoryIds: string[]): Promise<boolean> {
    const supabase = createPublicClient()

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
