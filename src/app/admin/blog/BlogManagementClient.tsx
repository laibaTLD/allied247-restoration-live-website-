'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BlogPost } from '@/types/blog'
import { createClient } from '@/lib/supabase/client'
import { FaPlus, FaEdit, FaTrash, FaEye, FaFileAlt, FaCalendar, FaTag } from 'react-icons/fa'
import Link from 'next/link'

interface BlogManagementClientProps {
    initialPosts: BlogPost[]
    user: { email?: string }
    themeData?: {
        primaryColor?: string
        secondaryColor?: string
    }
}

export default function BlogManagementClient({ initialPosts, user, themeData }: BlogManagementClientProps) {
    const [posts, setPosts] = useState(initialPosts)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const primaryColor = themeData?.primaryColor || '#0B1C2D'
    const secondaryColor = themeData?.secondaryColor || '#1a3a5c'

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog post?')) {
            return
        }

        setLoading(true)
        const supabase = createClient()

        const { error } = await supabase
            .from('blog_posts')
            .delete()
            .eq('id', id)

        if (error) {
            alert('Error deleting post: ' + error.message)
        } else {
            setPosts(posts.filter(post => post.id !== id))
        }
        setLoading(false)
    }

    const handleLogout = async () => {
        const supabase = createClient()
        await supabase.auth.signOut()
        router.push('/admin/login')
        router.refresh()
    }

    return (
        <>
            {/* Split Layout - Similar to Blog Detail */}
            <main className="min-h-screen flex flex-col lg:flex-row">
                {/* Left Sidebar - Theme Primary Color */}
                <aside 
                    className="w-full lg:w-[30%] lg:min-w-[320px] lg:max-w-[400px] text-white flex flex-col"
                    style={{ backgroundColor: primaryColor }}
                >
                    {/* Sidebar Content */}
                    <div className="flex-1 flex flex-col px-8 lg:px-10 py-8 lg:py-12">
                        {/* Admin Label & Count */}
                        <div className="mb-10">
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-medium">
                                    Admin
                                </span>
                            </div>
                            <span className="text-[11px] text-white/60 font-medium">
                                {String(posts.length).padStart(2, '0')} Posts
                            </span>
                        </div>

                        {/* Current Section */}
                        <div 
                            className="mb-10 pb-8 border-b border-white/10"
                        >
                            <span className="text-[11px] text-white/50 block mb-3">
                                Management
                            </span>
                            <h2 className="text-[15px] font-semibold text-white leading-snug">
                                Blog Control Panel
                            </h2>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-4 mb-10">
                            <Link
                                href="/admin/blog/new"
                                className="group block py-2 px-4 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                            >
                                <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                                    + Create New Post
                                </span>
                            </Link>
                            <Link
                                href="/"
                                className="group block py-2 px-4 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                            >
                                <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                                    ← View Website
                                </span>
                            </Link>
                        </div>

                        {/* User Info */}
                        <div className="mt-auto">
                            <div className="text-xs text-white/40 mb-4">
                                Logged in as:
                            </div>
                            <div className="text-sm text-white/70 font-medium mb-4">
                                {user.email}
                            </div>
                            <button
                                onClick={handleLogout}
                                className="text-xs text-white/50 hover:text-white transition-colors"
                            >
                                Sign Out →
                            </button>
                        </div>
                    </div>

                    {/* Scroll Indicator - Desktop Only */}
                    <div className="hidden lg:flex items-center justify-between px-10 py-8 border-t border-white/10">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 rotate-90 origin-left">
                            Manage
                        </span>
                        <div className="flex flex-col items-center gap-1">
                            <span className="w-px h-4 bg-white/20" />
                            <span className="w-px h-4 bg-white/50" />
                        </div>
                    </div>
                </aside>

                {/* Right Content Area - White */}
                <section className="flex-1 bg-white">
                    {/* Desktop Header */}
                    <div className="hidden lg:flex items-center justify-between px-12 lg:px-16 xl:px-20 py-8">
                        <span className="text-xs uppercase tracking-[0.2em] text-black/40">
                            Blog Management
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                            Admin
                        </span>
                    </div>

                    {/* Blog Posts Content */}
                    <div className="flex-1 flex flex-col px-4 sm:px-6 lg:px-12 xl:px-16 py-6 sm:py-8 lg:py-12">
                        {/* Category Label */}
                        <div className="pt-8 lg:pt-12 mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-medium">
                                Blog Management
                            </span>
                        </div>

                        {/* Title */}
                        <header className="mb-10 lg:mb-14" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                            <h1 
                                className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
                                style={{ color: primaryColor }}
                            >
                                Blog Posts
                            </h1>
                        </header>

                        {posts.length === 0 ? (
                            <div className="text-center py-20">
                                <div 
                                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: `${primaryColor}10` }}
                                >
                                    <FaFileAlt className="text-2xl" style={{ color: primaryColor }} />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
                                <p className="text-gray-500 mb-6">Create your first blog post to get started</p>
                                <Link
                                    href="/admin/blog/new"
                                    className="inline-flex items-center gap-2 px-6 py-3 text-white rounded-lg transition font-medium"
                                    style={{ backgroundColor: primaryColor }}
                                >
                                    <FaPlus /> Create Your First Post
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {posts.map((post) => (
                                    <article
                                        key={post.id}
                                        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="p-6">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex-1">
                                                    {/* Title */}
                                                    <h3 
                                                        className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#0B1C2D] transition-colors"
                                                        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                                                    >
                                                        <Link href={`/admin/blog/edit/${post.id}`}>
                                                            {post.title}
                                                        </Link>
                                                    </h3>
                                                    
                                                    {/* Meta Info */}
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <div className="flex items-center gap-1">
                                                            <FaCalendar className="text-xs" />
                                                            <span>
                                                                {post.published_at
                                                                    ? new Date(post.published_at).toLocaleDateString('en-US', {
                                                                        month: 'short',
                                                                        day: 'numeric',
                                                                        year: 'numeric',
                                                                    })
                                                                    : 'Not published'}
                                                            </span>
                                                        </div>
                                                        {post.tags && post.tags[0] && (
                                                            <div className="flex items-center gap-1">
                                                                <FaTag className="text-xs" />
                                                                <span>{post.tags[0]}</span>
                                                            </div>
                                                        )}
                                                        <span
                                                            className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                                post.published
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-yellow-100 text-yellow-800'
                                                            }`}
                                                        >
                                                            {post.published ? 'Published' : 'Draft'}
                                                        </span>
                                                    </div>
                                                </div>
                                                
                                                {/* Actions */}
                                                <div className="flex gap-2 ml-4">
                                                    {post.published && (
                                                        <Link
                                                            href={`/blog/${post.slug}`}
                                                            className="p-2 text-blue-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all"
                                                            title="View"
                                                        >
                                                            <FaEye />
                                                        </Link>
                                                    )}
                                                    <Link
                                                        href={`/admin/blog/edit/${post.id}`}
                                                        className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 rounded-lg transition-all"
                                                        title="Edit"
                                                    >
                                                        <FaEdit />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(post.id)}
                                                        disabled={loading}
                                                        className="p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg transition-all disabled:opacity-50"
                                                        title="Delete"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            {/* Excerpt */}
                                            {post.excerpt && (
                                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                            
                                            {/* Slug */}
                                            <div className="mt-3 pt-3 border-t border-gray-100">
                                                <span className="text-xs text-gray-400 font-mono">/{post.slug}</span>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}
