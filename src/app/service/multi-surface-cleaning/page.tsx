import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import ServiceDetailLayout from "@/sections/ServiceDetailLayout";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Multi Surface Cleaning Services in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration provides experts multi-surface cleaning services to thoroughly clean, sanitize, and restore your home or business surfaces in Kalispell, MT.',
  openGraph: {
    title: 'Multi-Surface Cleaning Services | Professional Residential & Commercial',
    description: 'Expert multi-surface cleaning services for homes and businesses. Professional carpet, tile, hardwood, upholstery cleaning and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Surface Cleaning Services | Professional Residential & Commercial',
    description: 'Expert multi-surface cleaning services for homes and businesses. Professional carpet, tile, hardwood cleaning.',
  },
};

export const revalidate = 60;

async function getLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    console.error(
      "Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID"
    );
    notFound();
  }

  const landingPageData = await fetchLandingPageForSSG(templateId!, id!);

  if (!landingPageData) {
    console.error(
      `Landing page not found: templateId=${templateId}, id=${id}`
    );
    notFound();
  }

  return landingPageData;
}

export default async function MultiSurfaceCleaningPage() {
  const landingPageData = await getLandingPageData();

  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "Professional multi-surface cleaning for Bigfork homes and businesses"
    },
    {
      city: "columbia-falls",
      region: "MT",
      description: "Eco-friendly carpet, tile, and upholstery cleaning throughout Columbia Falls"
    },
    {
      city: "kalispell",
      region: "MT",
      description: "Complete residential and commercial surface cleaning for Kalispell properties"
    },
    {
      city: "whitefish",
      region: "MT",
      description: "Premium multi-surface cleaning and floor restoration for Whitefish homes and businesses"
    },
    {
      city: "lakeside",
      region: "MT",
      description: "Thorough cleaning services for Lakeside residential and commercial spaces"
    }
  ];

  return (
    <Layout
      title={landingPageData.seoData.title}
      description={landingPageData.seoData.description}
      theme={landingPageData.themeData}
      seoData={landingPageData.seoData}
      landingPageData={landingPageData}
    >
      <div className="animate-fade-in-up">
        <Navbar
          businessName={landingPageData.businessName}
          logoImage={
            landingPageData.images?.find((img) => img.slotName === "logo-image")
              ?.imageUrl
          }
          themeData={landingPageData.themeData}
          phoneNumber={landingPageData.businessData?.phone}
          serviceAreas={serviceAreas}
        />
        <main className="bg-white">
          <ServiceDetailLayout
            title="Allied 24/7 Restoration — Your Trusted Partner in Multi-Surface Cleaning"
            intro="Our professional multi-surface cleaning services keep your residential and commercial properties looking their best. We use eco-friendly products and advanced techniques to clean carpets, tile, hardwood, upholstery, and more for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside."
            breadcrumbLabel="Multi-Surface Cleaning"
            heroImage="/images/image-1.jpg"
            heroAlt="Multi-surface cleaning services"
            defaultService="Multi-Surface Cleaning"
            theme={landingPageData.themeData}
            sections={[
              {
                heading: "Why Choose Allied 24/7 for Cleaning?",
                description:
                  "Safe products, proven methods, and a satisfaction guarantee — with scheduling that fits your life.",
                bullets: [
                  "Eco-Friendly Products: Environmentally safe cleaners tough on dirt, gentle on surfaces",
                  "Advanced Techniques: State-of-the-art equipment for deep cleaning all surface types",
                  "Satisfaction Guaranteed: 100% satisfaction with flexible scheduling and custom plans",
                ],
              },
              {
                heading: "Our Cleaning Services",
                description:
                  "Eco-friendly products and advanced techniques for carpets, tile, hardwood, upholstery, and more.",
                bullets: [
                  "Carpet & rug cleaning",
                  "Tile & grout cleaning",
                  "Hardwood floor restoration",
                  "Upholstery & drapery cleaning",
                  "Pressure washing",
                  "Post-construction cleanup",
                ],
              },
              {
                heading: "Residential & Commercial",
                description:
                  "Flexible cleaning plans for homes, offices, medical facilities, and industrial spaces.",
                bullets: [
                  "Home & apartment cleaning",
                  "Office & retail spaces",
                  "Medical facility cleaning",
                  "Industrial cleaning",
                  "Window cleaning",
                  "Move-in/move-out cleaning",
                ],
              },
            ]}
          />

          <ServiceAreasSection
            serviceAreas={serviceAreas}
            themeData={landingPageData.themeData}
          />

          {landingPageData.content.faq && (
            <FAQSection
              title={landingPageData.content.faq.title}
              description={landingPageData.content.faq.description}
              questions={landingPageData.content.faq.questions}
              theme={landingPageData.themeData}
            />
          )}

          <FooterSection
            businessName={landingPageData.businessName}
            businessDescription={
              landingPageData.content?.about?.description ||
              "Professional multi-surface cleaning services you can trust. We keep your property looking its best with eco-friendly solutions."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
