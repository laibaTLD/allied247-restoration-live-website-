import { getBlogPostBySlug, getPublishedBlogPosts, getRecentBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import FooterSection from '@/sections/FooterSection'
import BusinessOverviewSection from '@/sections/BusinessOverviewSection'
import { fetchLandingPageForSSG } from '@/lib/database'
import { FaChevronUp, FaChevronDown, FaArrowLeft } from 'react-icons/fa'

interface BlogPostPageProps {
    params: Promise<{ slug: string }>
}

// export async function generateStaticParams() {
//     const posts = await getPublishedBlogPosts()
//     return posts.map((post) => ({
//         slug: post.slug,
//     }))
// }

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = await getBlogPostBySlug(slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt,
        openGraph: {
            title: post.meta_title || post.title,
            description: post.meta_description || post.excerpt,
            images: post.featured_image_url ? [post.featured_image_url] : [],
            type: 'article',
            publishedTime: post.published_at || undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.meta_title || post.title,
            description: post.meta_description || post.excerpt,
            images: post.featured_image_url ? [post.featured_image_url] : [],
        },
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = await getBlogPostBySlug(slug)

    if (!post) {
        notFound()
    }

    // Fetch landing page data for navbar and footer
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const id = process.env.NEXT_PUBLIC_ID
    const landingPageData = templateId && id ? await fetchLandingPageForSSG(templateId, id) : null

    // Get recent posts for sidebar
    const recentPosts = await getRecentBlogPosts(5)
    const currentIndex = recentPosts.findIndex((p) => p.slug === post.slug)
    const prevPost = currentIndex > 0 ? recentPosts[currentIndex - 1] : null
    const nextPost = currentIndex < recentPosts.length - 1 ? recentPosts[currentIndex + 1] : null
    const otherPosts = recentPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

    const primaryColor = landingPageData?.themeData?.primaryColor || '#0B1C2D'

    return (
        <div 
            className="min-h-screen bg-white"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
        >
            {/* Main Split Layout */}
            <main className="min-h-screen flex flex-col lg:flex-row">
                {/* Left Sidebar - Theme Primary Color */}
                <aside 
                    className="w-full lg:w-[30%] lg:min-w-[320px] lg:max-w-[400px] text-white flex flex-col"
                    style={{ backgroundColor: primaryColor }}
                >
                    {/* Mobile Header */}
                    <div className="lg:hidden flex items-center justify-between px-6 py-4 border-b border-white/10">
                        <Link href="/blog" className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
                            ← Back
                        </Link>
                        <span className="text-xs uppercase tracking-[0.2em] text-white/40">Blog</span>
                    </div>

                    {/* Sidebar Content */}
                    <div className="flex-1 flex flex-col px-8 lg:px-10 py-8 lg:py-12">
                        {/* Blog Label & Count */}
                        <div className="mb-10">
                            <div className="flex items-baseline gap-3 mb-1">
                                <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-medium">
                                    Blog
                                </span>
                            </div>
                            <span className="text-[11px] text-white/60 font-medium">
                                {String(recentPosts.length).padStart(2, '0')}
                            </span>
                        </div>

                        {/* Current Article Section - Reference Format */}
                        <div 
                            className="mb-10 pb-8 border-b border-white/10"
                        >
                            <span className="text-[11px] text-white/50 block mb-3">
                                {post.published_at
                                    ? new Date(post.published_at).toLocaleDateString('en-US', {
                                        month: '2-digit',
                                        day: '2-digit',
                                        year: 'numeric',
                                    }).replace(/\//g, '/')
                                    : 'Recently'}
                            </span>
                            <h2 className="text-[15px] font-semibold text-white leading-snug">
                                {post.title}
                            </h2>
                        </div>

                        {/* Other Articles List */}
                        <div className="flex-1 space-y-6">
                            {otherPosts.map((otherPost) => (
                                <Link
                                    key={otherPost.id}
                                    href={`/blog/${otherPost.slug}`}
                                    className="group block"
                                >
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mb-1">
                                        {otherPost.published_at
                                            ? new Date(otherPost.published_at).toLocaleDateString('en-US', {
                                                month: '2-digit',
                                                day: '2-digit',
                                                year: 'numeric',
                                            })
                                            : 'Recently'}
                                    </span>
                                    <span className="text-xs text-white/60 group-hover:text-white transition-colors leading-relaxed block">
                                        {otherPost.title}
                                    </span>
                                </Link>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                            {prevPost ? (
                                <Link
                                    href={`/blog/${prevPost.slug}`}
                                    className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/40 hover:text-white hover:border-white/40 transition-all"
                                    title="Previous article"
                                >
                                    <FaChevronUp className="text-xs" />
                                </Link>
                            ) : (
                                <span className="w-8 h-8 flex items-center justify-center border border-white/10 text-white/20 cursor-not-allowed">
                                    <FaChevronUp className="text-xs" />
                                </span>
                            )}
                            
                            {nextPost ? (
                                <Link
                                    href={`/blog/${nextPost.slug}`}
                                    className="w-8 h-8 flex items-center justify-center border border-white/20 text-white/40 hover:text-white hover:border-white/40 transition-all"
                                    title="Next article"
                                >
                                    <FaChevronDown className="text-xs" />
                                </Link>
                            ) : (
                                <span className="w-8 h-8 flex items-center justify-center border border-white/10 text-white/20 cursor-not-allowed">
                                    <FaChevronDown className="text-xs" />
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Scroll Indicator - Desktop Only */}
                    <div className="hidden lg:flex items-center justify-between px-10 py-8 border-t border-white/10">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 rotate-90 origin-left">
                            Scroll
                        </span>
                        <div className="flex flex-col items-center gap-1">
                            <span className="w-px h-4 bg-white/20" />
                            <span className="w-px h-4 bg-white/50" />
                        </div>
                    </div>
                </aside>

                {/* Right Content Area - White */}
                <section className="flex-1 bg-white">
                    {/* Desktop Header - Minimal */}
                    <div className="hidden lg:flex items-center justify-between px-12 lg:px-16 xl:px-20 py-8">
                        <Link 
                            href="/blog" 
                            className="text-xs uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors"
                        >
                            ← Back to Blog
                        </Link>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                            Blog
                        </span>
                    </div>

                    {/* Hero Banner with Featured Image and Overlaid Title */}
                    {post.featured_image_url ? (
                        <div className="relative h-[60vh] min-h-[400px] max-h-[700px] overflow-hidden mb-12">
                            <img
                                src={post.featured_image_url}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Dark Overlay for better text visibility */}
                            <div className="absolute inset-0 bg-black/40" />
                            
                            {/* Overlaid Content */}
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="text-center text-white max-w-5xl mx-auto px-6 lg:px-12 xl:px-16">
                                    {/* Title Only */}
                                    <h1 
                                        className="text-3xl md:text-4xl lg:text-5xl xl:text-[4rem] font-bold leading-[1.1] tracking-tight drop-shadow-lg"
                                        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
                                    >
                                        {post.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Fallback Header when no featured image */
                        <header className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
                            <div className="max-w-4xl mx-auto px-6 lg:px-12 xl:px-16 text-center">
                                {/* Category Label */}
                                <div className="mb-6">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-medium">
                                        Blog
                                    </span>
                                </div>
                                
                                {/* Title */}
                                <h1 
                                    className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
                                    style={{ fontFamily: 'var(--font-poppins), sans-serif', color: primaryColor }}
                                >
                                    {post.title}
                                </h1>
                                
                                {/* Excerpt */}
                                {post.excerpt && (
                                    <p className="text-lg lg:text-xl text-black/70 leading-relaxed max-w-3xl mx-auto">
                                        {post.excerpt}
                                    </p>
                                )}
                                
                                {/* Publication Date */}
                                <div className="mt-6">
                                    <span className="text-sm text-black/50">
                                        {post.published_at
                                            ? new Date(post.published_at).toLocaleDateString('en-US', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })
                                            : 'Recently Published'}
                                    </span>
                                </div>
                            </div>
                        </header>
                    )}

                    {/* Article Content */}
                    <article className="max-w-[800px] mx-auto px-6 lg:px-12 xl:px-16 pb-20 lg:pb-32">
                        {/* Article Body */}
                        <div
                            className="prose prose-lg max-w-none article-content"
                            style={{ 
                                color: 'black',
                                '--tw-prose-body': 'black',
                                '--tw-prose-headings': primaryColor,
                                '--tw-prose-h1': '3rem',
                                '--tw-prose-h2': '2.5rem',
                                '--tw-prose-h3': '2rem',
                                '--tw-prose-h4': '1.75rem',
                                '--tw-prose-h5': '1.5rem',
                                '--tw-prose-h6': '1.25rem',
                                '--tw-prose-links': primaryColor,
                                '--tw-prose-bullets': primaryColor,
                                '--tw-prose-blockquote-borders': primaryColor,
                                '--tw-prose-bold': primaryColor,
                            } as React.CSSProperties}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Article Footer */}
                        <div className="mt-16 pt-8 border-t border-black/10">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
                            >
                                <FaArrowLeft className="text-xs" />
                                View all blog posts
                            </Link>
                        </div>
                    </article>
                </section>
            </main>

            {landingPageData && landingPageData.content?.businessOverview && (
                <BusinessOverviewSection
                    content={landingPageData.content.businessOverview.content}
                    contact={landingPageData.content.contact}
                    businessData={landingPageData.businessData}
                    theme={landingPageData.themeData}
                />
            )}

            {landingPageData && (
                <FooterSection
                    businessName={landingPageData.businessName}
                    businessDescription={
                        landingPageData.content?.about?.description ||
                        'Professional restoration services you can trust.'
                    }
                    businessData={landingPageData.businessData}
                    themeData={landingPageData.themeData}
                />
            )}
        </div>
    )
}
