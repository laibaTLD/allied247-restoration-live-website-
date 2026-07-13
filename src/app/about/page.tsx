import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import CTASection from "@/sections/CTASection";
import ServiceHighlightsSection from "@/sections/ServiceHighlightsSection";
import CompanyDetails from "@/sections/CompanyDetails";
import { fetchLandingPageForSSG } from "@/lib/database";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Enable ISR with 60-second revalidation
export const revalidate = 60;

// Server-side data fetching for SSG
async function getLandingPageData() {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    console.error('Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID');
    notFound();
  }

  const landingPageData = await fetchLandingPageForSSG(templateId, id);

  if (!landingPageData) {
    console.error(`Landing page not found: templateId=${templateId}, id=${id}`);
    notFound();
  }

  return landingPageData;
}

// Generate metadata for Next.js App Router
export async function generateMetadata(): Promise<Metadata> {
  const landingPageData = await getLandingPageData();
  const { seoData, businessName, images } = landingPageData;

  // Get images for Open Graph
  const logoImage = images?.find((img) => img.slotName === 'logo-image')?.imageUrl;
  const heroImage = images?.find((img) => img.slotName === 'hero-image-1' || img.category === 'hero')?.imageUrl;
  const ogImage = logoImage || heroImage;

  // Use specific about page meta title and description
  const resolvedTitle = 'About Us - Allied 24/7 Restoration | Professional Restoration Services in Montana';
  const resolvedDescription = 'Learn about Allied 24/7 Restoration - your trusted partner for water damage, fire damage, mold remediation, and reconstruction services in Kalispell, MT and surrounding areas.';

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    keywords: seoData?.keywords?.join(', ') || undefined,
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    robots: seoData.isIndex ? 'index,follow' : 'noindex,nofollow',

    // Open Graph
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: `${seoData.canonicalUrl}/about`,
      siteName: businessName,
      images: ogImage ? [{
        url: ogImage,
        alt: `${businessName} - ${resolvedTitle}`,
      }] : [],
      locale: 'en_US',
      type: 'website',
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: ogImage ? [ogImage] : [],
    },

    // Additional metadata
    alternates: {
      canonical: `${seoData.canonicalUrl}/about`,
    },

    // Verification and other meta tags
    other: {
      'theme-color': landingPageData.themeData?.primaryColor,
      'focused-keywords': seoData.focusedKeywords?.join(', ') || '',
    },
  };
}

export default async function AboutPage() {
  const landingPageData = await getLandingPageData();

  return (
    <Layout
      title="About Us - Allied 24/7 Restoration"
      description="Learn about Allied 24/7 Restoration - your trusted partner for professional restoration services in Montana"
      theme={landingPageData.themeData}
      seoData={{
        ...landingPageData.seoData,
        canonicalUrl: `${landingPageData.seoData.canonicalUrl}/about`,
        title: "About Us - Allied 24/7 Restoration | Professional Restoration Services in Montana",
        description: "Learn about Allied 24/7 Restoration - your trusted partner for water damage, fire damage, mold remediation, and reconstruction services in Kalispell, MT and surrounding areas."
      }}
      landingPageData={landingPageData}
    >
      <Navbar
        businessName={landingPageData.businessName}
        logoImage={landingPageData.images?.find((img) => img.slotName === 'logo-image' || img.slotName === 'logo')?.imageUrl}
        themeData={landingPageData.themeData}
        phoneNumber={landingPageData.businessData?.phone}
      />
      
      <div className="animate-fade-in-up">
        <main>
          {/* Hero Section for About Page */}
          <section className="relative py-32 lg:py-40 overflow-hidden" style={{ backgroundColor: landingPageData.themeData?.primaryColor || '#003366' }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="container mx-auto px-6 lg:px-16 relative z-10">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h1 className="text-5xl lg:text-7xl font-serif font-light mb-8 tracking-wide">
                  About <span className="font-bold">Allied 24/7</span>
                </h1>
                <p className="text-xl lg:text-2xl font-light leading-relaxed opacity-90 max-w-3xl mx-auto">
                  Your trusted partner in professional restoration services across Montana
                </p>
              </div>
            </div>
          </section>

          {/* About Content Section */}
          {landingPageData.content.about && (
            <section className="py-24 lg:py-32 bg-white">
              <div className="container mx-auto px-6 lg:px-16">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="space-y-8">
                      <h2 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 leading-tight">
                        {landingPageData.content.about.title || "Our Commitment to Excellence"}
                      </h2>
                      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                        {landingPageData.content.about.description && (
                          <p className="text-lg leading-relaxed mb-6">
                            {landingPageData.content.about.description}
                          </p>
                        )}
                        <p className="text-lg leading-relaxed">
                          At Allied 24/7 Restoration, we understand that disasters don&apos;t wait for convenient times. 
                          That&apos;s why we&apos;re committed to providing rapid, professional restoration services when you need them most. 
                          Our team of certified professionals brings years of experience and cutting-edge technology to every project, 
                          ensuring your property is restored to its pre-loss condition with minimal disruption to your life.
                        </p>
                        <p className="text-lg leading-relaxed">
                          Serving communities across Montana including Kalispell, Whitefish, Bigfork, Columbia Falls, and Lakeside, 
                          we pride ourselves on our local expertise and personalized service. When you choose Allied 24/7, 
                          you&apos;re choosing a partner who understands your needs and is dedicated to exceeding your expectations.
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      {landingPageData.images?.find((img) => img.slotName === "about" || img.category === "about") ? (
                        <img
                          src={landingPageData.images.find((img) => img.slotName === "about" || img.category === "about")?.imageUrl}
                          alt="About Allied 24/7 Restoration"
                          className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                      ) : (
                        <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
                          <span className="text-gray-500 text-lg">About Image</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Service Highlights Section */}
          {landingPageData.content.serviceHighlights && (
            <ServiceHighlightsSection
              data={landingPageData.content.serviceHighlights}
              theme={landingPageData.themeData}
            />
          )}

          {/* Company Details Section */}
          {landingPageData.content.companyDetails && (
            <CompanyDetails
              data={landingPageData.content.companyDetails}
              images={landingPageData.images}
              theme={landingPageData.themeData}
            />
          )}

          {/* CTA Section */}
          {landingPageData.content.ctaSection && (
            <CTASection
              data={landingPageData.content.ctaSection}
              theme={landingPageData.themeData}
              images={landingPageData.images}
            />
          )}

          {/* Footer */}
          <FooterSection
            businessName={landingPageData.businessName}
            businessDescription={
              landingPageData.content?.about?.description ||
              "Professional restoration services you can trust. We're here to help with all your restoration needs."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
