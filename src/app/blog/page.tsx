import { getPublishedBlogPostsPaginated } from '@/lib/blog'
import { Metadata } from 'next'
import BlogPageClient from './BlogPageClient'
import { fetchLandingPageForSSG } from '@/lib/database'

export const metadata: Metadata = {
    title: 'Blog - Allied 24/7 Restoration',
    description: 'Read our latest articles about restoration, emergency response, and industry insights.',
}

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
    // Fetch initial blog posts
    const { posts, totalPages } = await getPublishedBlogPostsPaginated(1, 6)

    // Fetch landing page data
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const id = process.env.NEXT_PUBLIC_ID
    const landingPageData = templateId && id ? await fetchLandingPageForSSG(templateId, id) : null

    return (
        <BlogPageClient 
            initialPosts={posts}
            initialTotalPages={totalPages}
            landingPageData={landingPageData}
        />
    )
}
