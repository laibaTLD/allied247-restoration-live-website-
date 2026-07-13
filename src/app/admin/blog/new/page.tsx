import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import BlogPostForm from '../BlogPostForm'
import Navbar from '@/components/Navbar'
import FooterSection from '@/sections/FooterSection'
import { fetchLandingPageForSSG } from '@/lib/database'
import { FaPenFancy, FaFileAlt, FaRocket, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

export default async function NewBlogPostPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/admin/login')
    }

    // Fetch landing page data for navbar and footer
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const id = process.env.NEXT_PUBLIC_ID
    const landingPageData = templateId && id ? await fetchLandingPageForSSG(templateId, id) : null

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {landingPageData && (
                <Navbar
                    businessName={landingPageData.businessName}
                    themeData={landingPageData.themeData}
                    phoneNumber={landingPageData.businessData?.phone}
                />
            )}

            {/* Modern Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-red-700 to-blue-800 text-white">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        {/* Back Button */}
                        <div className="mb-8">
                            <Link
                                href="/admin/blog"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                            >
                                <FaArrowLeft className="text-sm" />
                                Back to Blog Management
                            </Link>
                        </div>

                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                            <FaPenFancy className="text-3xl" />
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                            Create New Blog Post
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Share your expertise and connect with your audience through compelling content
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center gap-3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                                <FaFileAlt className="text-blue-200" />
                                Rich Text Editor
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                                <FaRocket className="text-blue-200" />
                                Instant Publishing
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                                <FaPenFancy className="text-blue-200" />
                                SEO Optimized
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg className="w-full h-20" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="url(#gradient)" />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#1e40af" />
                                <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Form Header */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Blog Post Details</h2>
                                <p className="text-gray-600 mt-1">Fill in the information below to create your blog post</p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                Auto-saved
                            </div>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="p-8">
                        <BlogPostForm />
                    </div>
                </div>

                {/* Tips Section */}
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <FaPenFancy className="text-blue-600 text-xl" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Write Engaging Content</h3>
                        <p className="text-sm text-gray-600">Use our rich text editor to create compelling blog posts with formatting, images, and more.</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <FaRocket className="text-green-600 text-xl" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Optimize for SEO</h3>
                        <p className="text-sm text-gray-600">Add meta titles, descriptions, and categories to improve your search engine rankings.</p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <FaFileAlt className="text-purple-600 text-xl" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Preview & Publish</h3>
                        <p className="text-sm text-gray-600">Review your content and publish instantly or save as a draft for later.</p>
                    </div>
                </div>
            </div>

            {landingPageData && (
                <FooterSection
                    businessName={landingPageData.businessName}
                    businessData={landingPageData.businessData}
                    themeData={landingPageData.themeData}
                />
            )}
        </div>
    )
}
