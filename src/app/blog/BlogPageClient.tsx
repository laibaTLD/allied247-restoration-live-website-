'use client'

import { useState } from 'react'
import Link from 'next/link'
import FooterSection from '@/sections/FooterSection'
import { FaCalendar, FaSpinner } from 'react-icons/fa'
import { BusinessData, ThemeData } from '@/types/template'

interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    featured_image_url?: string
    published_at?: string
    read_time?: number
    tags?: string[]
}

interface LandingPageData {
    businessName?: string
    themeData?: ThemeData
    images?: Array<{
        slotName?: string
        category?: string
        imageUrl?: string
    }>
    content?: {
        about?: {
            description?: string
        }
    }
    businessData?: BusinessData
}

interface BlogPageClientProps {
    initialPosts: BlogPost[]
    initialTotalPages: number
    landingPageData: LandingPageData | null
}

export default function BlogPageClient({ 
    initialPosts, 
    initialTotalPages,
    landingPageData 
}: BlogPageClientProps) {
    const [posts, setPosts] = useState(initialPosts)
    const [loadingMore, setLoadingMore] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages] = useState(initialTotalPages)
    const postsPerPage = 6

    const loadMorePosts = async () => {
        if (loadingMore || currentPage >= totalPages) return
        
        try {
            setLoadingMore(true)
            const nextPage = currentPage + 1
            
            const response = await fetch(`/api/blog/posts?page=${nextPage}&limit=${postsPerPage}`)
            const result = await response.json()
            
            if (response.ok) {
                setPosts(prev => [...prev, ...result.posts])
                setCurrentPage(result.currentPage)
            } else {
                console.error('Error loading more posts:', result.error)
            }
        } catch (error) {
            console.error('Error loading more posts:', error)
        } finally {
            setLoadingMore(false)
        }
    }

    // Extract theme data from database
    const primaryColor = landingPageData?.themeData?.primaryColor || '#0B1C2D'
    
    // Get hero image from database or use local fallback image
    const heroImage = landingPageData?.images?.find((img) => 
        img.slotName === 'blog-hero' || img.category === 'blog'
    )?.imageUrl || '/images/image-1.jpg'
    
    // Get categories from post tags (dynamic) or use default
    const allTags = posts.flatMap((post) => post.tags || [])
    const uniqueCategories = ['All', ...Array.from(new Set(allTags)).slice(0, 6)]
    const categories = uniqueCategories.length > 1 ? uniqueCategories : [
        'All', 'Restoration', 'Water Damage', 'Fire Damage', 'Mold', 'Cleaning', 'Tips'
    ]
    
    // Use database business description or default
    const pageTitle = landingPageData?.businessName 
        ? `${landingPageData.businessName} Blog` 
        : 'Our Blog'
    const pageDescription = landingPageData?.content?.about?.description || 
        'Expert insights, tips, and stories from the restoration industry'

    return (
        <div 
            className="min-h-screen bg-white"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
        >
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />
                
                {/* Background Image from Database or Fallback */}
                <img
                    src={heroImage}
                    alt={pageTitle}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                        // If image fails, it will show the gradient background behind it
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                    }}
                />
                
                {/* Overlay - use primary color with opacity for better visibility */}
                <div className="absolute inset-0" style={{ backgroundColor: `${primaryColor}99` }} />
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                        >
                            {pageTitle}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            {pageDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-8 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                    index === 0
                                        ? 'text-white shadow-sm'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                                style={index === 0 ? { backgroundColor: primaryColor } : undefined}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                {posts.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No blog posts available yet. Check back soon!</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image */}
                                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                    {post.featured_image_url ? (
                                        <img
                                            src={post.featured_image_url}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div 
                                            className="w-full h-full flex items-center justify-center text-white text-2xl font-semibold"
                                            style={{ backgroundColor: primaryColor }}
                                        >
                                            {post.title?.charAt(0) || 'B'}
                                        </div>
                                    )}
                                </Link>
                                
                                {/* Content */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    
                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    
                                    {/* Meta */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            {/* Calendar Icon */}
                                            <FaCalendar className="text-gray-400 text-sm" />
                                            <span className="text-xs text-gray-500">
                                                {post.published_at
                                                    ? new Date(post.published_at).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })
                                                    : 'Recently'}
                                            </span>
                                        </div>
                                        
                                        {/* Read Time */}
                                        {post.read_time && (
                                            <span className="text-xs text-gray-400">
                                                {post.read_time} min read
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                        </div>

                        {/* Load More Button */}
                        {currentPage < totalPages && (
                            <div className="flex justify-center mt-12 lg:mt-16">
                                <button
                                    onClick={loadMorePosts}
                                    disabled={loadingMore}
                                    className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    style={{ backgroundColor: primaryColor }}
                                >
                                    {loadingMore ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            Loading...
                                        </>
                                    ) : (
                                        'Load More Articles'
                                    )}
                                </button>
                            </div>
                        )}

                        {/* End of posts message */}
                        {currentPage >= totalPages && posts.length > 0 && (
                            <div className="text-center mt-12 lg:mt-16 text-gray-500">
                                <p className="text-lg">You&apos;ve reached the end of our blog!</p>
                                <p className="text-sm mt-2">Showing all {posts.length} articles</p>
                            </div>
                        )}
                    </>
                )}
            </section>

            {/* Footer */}
            {landingPageData && (
                <FooterSection
                    businessName={landingPageData.businessName || 'Allied Restoration'}
                    businessDescription={
                        landingPageData.content?.about?.description ||
                        'Professional restoration services available 24/7'
                    }
                    businessData={landingPageData.businessData}
                    themeData={landingPageData.themeData}
                />
            )}
        </div>
    )
}
