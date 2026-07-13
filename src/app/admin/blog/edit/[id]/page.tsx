import { redirect, notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import BlogPostForm from '../../BlogPostForm'
import { BlogPost } from '@/types/blog'
import Navbar from '@/components/Navbar'
import FooterSection from '@/sections/FooterSection'
import { fetchLandingPageForSSG } from '@/lib/database'

interface EditBlogPostPageProps {
    params: Promise<{ id: string }>
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
    const { id } = await params
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/admin/login')
    }

    // Fetch the blog post
    const { data: post, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !post) {
        notFound()
    }

    // Fetch landing page data for navbar and footer
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const id_env = process.env.NEXT_PUBLIC_ID
    const landingPageData = templateId && id_env ? await fetchLandingPageForSSG(templateId, id_env) : null

    return (
        <div className="min-h-screen bg-gray-50">
            {landingPageData && (
                <Navbar
                    businessName={landingPageData.businessName}
                    themeData={landingPageData.themeData}
                    phoneNumber={landingPageData.businessData?.phone}
                />
            )}

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Edit Blog Post</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Update your blog post content
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <BlogPostForm post={post as BlogPost} />
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
