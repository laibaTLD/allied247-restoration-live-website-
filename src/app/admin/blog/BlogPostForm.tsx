'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import RichTextEditor from '@/components/RichTextEditor'
import CategoryField from '@/components/admin/CategoryField'
import { createClient } from '@/lib/supabase/client'
import { generateSlug } from '@/lib/utils'
import { BlogPost, BlogCategory } from '@/types/blog'
import { FaSave, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

interface BlogPostFormProps {
    post?: BlogPost
}

export default function BlogPostForm({ post }: BlogPostFormProps) {
    const [title, setTitle] = useState(post?.title || '')
    const [slug, setSlug] = useState(post?.slug || '')
    const [excerpt, setExcerpt] = useState(post?.excerpt || '')
    const [content, setContent] = useState(post?.content || '')
    const [featuredImageUrl, setFeaturedImageUrl] = useState(post?.featured_image_url || '')
    const [metaTitle, setMetaTitle] = useState(post?.meta_title || '')
    const [metaDescription, setMetaDescription] = useState(post?.meta_description || '')
    const [tags, setTags] = useState(post?.tags?.join(', ') || '')
    const [published, setPublished] = useState(post?.published || false)
    const [loading, setLoading] = useState(false)
    const [autoSlug, setAutoSlug] = useState(!post)
    const [currentPostId, setCurrentPostId] = useState<string | null>(post?.id || null)
    const [selectedCategories, setSelectedCategories] = useState<BlogCategory[]>([])

    const router = useRouter()

    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle)
        if (autoSlug) {
            setSlug(generateSlug(newTitle))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        console.log('=== SEO Debug Info ===')
        console.log('metaTitle state:', metaTitle)
        console.log('metaDescription state:', metaDescription)
        console.log('metaTitle length:', metaTitle?.length || 0)

        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            alert('You must be logged in to create a post')
            setLoading(false)
            return
        }

        // Calculate read time
        const wordCount = content.split(/\s+/).length
        const readTime = Math.ceil(wordCount / 200)

        const blogPostData = {
            title,
            slug,
            excerpt,
            content,
            featured_image_url: featuredImageUrl || null,
            meta_title: metaTitle || null,
            meta_description: metaDescription || null,
            tags: tags ? tags.split(',').map(t => t.trim()) : null,
            published,
            read_time: readTime,
            author_id: user.id,
            author_name: user.email?.split('@')[0] || 'Admin',
            published_at: published && !post?.published_at ? new Date().toISOString() : post?.published_at,
        }

        console.log('blogPostData.meta_title:', blogPostData.meta_title)
        console.log('Full blogPostData:', blogPostData)

        let error

        if (post) {
            // Update existing post
            console.log('Updating existing post with ID:', post.id)
            const result = await supabase
                .from('blog_posts')
                .update(blogPostData)
                .eq('id', post.id)
                .select()
                .single()
            error = result.error
            
            console.log('Update result:', result)
            console.log('Update error:', error)
            
            if (!error && result.data) {
                console.log('Post updated successfully with data:', result.data)
                
                // Verify the update by fetching the post again
                const { data: updatedPost, error: verifyError } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .eq('id', post.id)
                    .single()
                
                if (!verifyError && updatedPost) {
                    console.log('Verification successful - updated post from DB:', updatedPost)
                    console.log('Meta title in DB:', updatedPost.meta_title)
                    console.log('Meta description in DB:', updatedPost.meta_description)
                } else {
                    console.error('Verification failed:', verifyError)
                }
            }
        } else {
            // Create new post
            console.log('Creating new post')
            const result = await supabase
                .from('blog_posts')
                .insert(blogPostData)
                .select()
                .single()
            error = result.error
            console.log('Insert result:', result)
            console.log('Insert error:', error)
            
            if (!error && result.data) {
                setCurrentPostId(result.data.id)
                // Save categories for new post
                if (selectedCategories.length > 0) {
                    const categoryIds = selectedCategories.map(cat => cat.id)
                    await supabase
                        .from('blog_post_categories')
                        .insert(categoryIds.map(categoryId => ({
                            blog_post_id: result.data.id,
                            category_id: categoryId,
                        })))
                }
            }
        }

        // Update categories for existing post
        if (!error && currentPostId && selectedCategories.length > 0) {
            // Remove existing categories
            await supabase
                .from('blog_post_categories')
                .delete()
                .eq('blog_post_id', currentPostId)
            
            // Add new categories
            const categoryIds = selectedCategories.map(cat => cat.id)
            await supabase
                .from('blog_post_categories')
                .insert(categoryIds.map(categoryId => ({
                    blog_post_id: currentPostId,
                    category_id: categoryId,
                })))
        }

        if (error) {
            console.error('Database operation failed:', error)
            alert('Error saving post: ' + error.message)
            setLoading(false)
        } else {
            // Success - verify the operation worked
            if (post) {
                // For editing, verify update was successful
                console.log('Post update completed successfully')
                alert('Post updated successfully! SEO Meta Title and all data saved.')
                setLoading(false)
            } else {
                // For new posts, redirect to blog list
                console.log('New post created successfully')
                router.push('/admin/blog')
                router.refresh()
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            {/* Back Button */}
            <Link
                href="/admin/blog"
                className="inline-flex items-center gap-2 text-black hover:text-gray-900"
            >
                <FaArrowLeft /> Back to Blog Management
            </Link>

            {/* Title */}
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-black mb-2">
                    Title *
                </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="Enter blog post title"
                />
            </div>

            {/* Slug */}
            <div>
                <label htmlFor="slug" className="block text-sm font-medium text-black mb-2">
                    URL Slug *
                </label>
                <div className="flex gap-2">
                    <input
                        id="slug"
                        type="text"
                        value={slug}
                        onChange={(e) => {
                            setSlug(e.target.value)
                            setAutoSlug(false)
                        }}
                        required
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        placeholder="url-friendly-slug"
                    />
                    <button
                        type="button"
                        onClick={() => {
                            setSlug(generateSlug(title))
                            setAutoSlug(true)
                        }}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition"
                    >
                        Auto-generate
                    </button>
                </div>
                <p className="text-xs text-black mt-1">URL: /blog/{slug}</p>
            </div>

            {/* Excerpt */}
            <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt *
                </label>
                <textarea
                    id="excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="Brief summary of the blog post"
                />
            </div>

            {/* Featured Image */}
            <div>
                <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image URL
                </label>
                <input
                    id="featuredImage"
                    type="url"
                    value={featuredImageUrl}
                    onChange={(e) => setFeaturedImageUrl(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="https://example.com/image.jpg"
                />
                {featuredImageUrl && (
                    <img
                        src={featuredImageUrl}
                        alt="Featured preview"
                        className="mt-2 max-w-xs rounded-lg"
                    />
                )}
            </div>

            {/* Content */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content *
                </label>
                <RichTextEditor
                    content={content}
                    onChange={setContent}
                    placeholder="Write your blog post content here..."
                />
            </div>

            {/* Tags */}
            <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                </label>
                <input
                    id="tags"
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="restoration, tips, emergency (comma-separated)"
                />
            </div>

            {/* Categories */}
            <div>
                <CategoryField 
                    selectedCategories={selectedCategories}
                    onCategoriesChange={setSelectedCategories}
                    postId={currentPostId || undefined}
                />
            </div>

            {/* SEO Fields */}
            <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-2">
                            Meta Title
                        </label>
                        <input
                            id="metaTitle"
                            type="text"
                            value={metaTitle}
                            onChange={(e) => {
                                console.log('Meta title input changed:', e.target.value)
                                setMetaTitle(e.target.value)
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                            placeholder="SEO title (defaults to post title)"
                        />
                    </div>

                    <div>
                        <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
                            Meta Description
                        </label>
                        <textarea
                            id="metaDescription"
                            value={metaDescription}
                            onChange={(e) => setMetaDescription(e.target.value)}
                            rows={2}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                            placeholder="SEO description (defaults to excerpt)"
                        />
                    </div>
                </div>
            </div>

            {/* Published Toggle */}
            <div className="flex items-center gap-3 border-t pt-6">
                <input
                    id="published"
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="published" className="text-sm font-medium text-gray-700">
                    Publish this post (make it visible to the public)
                </label>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
                <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    <FaSave />
                    {loading ? 'Saving...' : post ? 'Update Post' : 'Create Post'}
                </button>
                <Link
                    href="/admin/blog"
                    className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition"
                >
                    Cancel
                </Link>
            </div>
        </form>
    )
}
