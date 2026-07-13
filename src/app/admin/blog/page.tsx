import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getAllBlogPosts } from '@/lib/blog'
import BlogManagementClient from './BlogManagementClient'
import { fetchLandingPageForSSG } from '@/lib/database'

export default async function AdminBlogPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/admin/login')
    }

    const blogPosts = await getAllBlogPosts()

    // Fetch landing page data for navbar and footer
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const id = process.env.NEXT_PUBLIC_ID
    const landingPageData = templateId && id ? await fetchLandingPageForSSG(templateId, id) : null

    return (
        <div 
            className="min-h-screen bg-gray-50"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
        >
            {/* Dashboard Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            {/* Dashboard Icon */}
                            <div 
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: `${landingPageData?.themeData?.primaryColor || '#0B1C2D'}10` }}
                            >
                                <svg 
                                    className="w-6 h-6" 
                                    style={{ color: landingPageData?.themeData?.primaryColor || '#0B1C2D' }}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            
                            <div>
                                {/* Breadcrumb */}
                                <nav className="text-xs text-gray-500 mb-1">
                                    <span>Admin</span>
                                    <span className="mx-2">/</span>
                                    <span className="text-gray-900 font-medium">Blog Management</span>
                                </nav>
                                
                                {/* Page Title */}
                                <h1 
                                    className="text-2xl font-bold text-gray-900"
                                    style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                                >
                                    Blog Management Dashboard
                                </h1>
                            </div>
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="flex items-center space-x-6">
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Total Posts</p>
                                <p 
                                    className="text-2xl font-bold"
                                    style={{ color: landingPageData?.themeData?.primaryColor || '#0B1C2D' }}
                                >
                                    {blogPosts.length}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Published</p>
                                <p className="text-2xl font-bold text-green-600">
                                    {blogPosts.filter(post => post.published).length}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-500">Drafts</p>
                                <p className="text-2xl font-bold text-yellow-600">
                                    {blogPosts.filter(post => !post.published).length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <BlogManagementClient initialPosts={blogPosts} user={user} themeData={landingPageData?.themeData} />
        </div>
    )
}
