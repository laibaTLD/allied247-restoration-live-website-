import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import BusinessOverviewSection from "@/sections/BusinessOverviewSection";
import ServicePageBanner from "@/sections/ServicePageBanner";
import ServicePageDetail from "@/sections/ServicePageDetail";
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

  const detailBlocks = [
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
      imageSrc: "/images/image-2.jpg",
      imageAlt: "Professional multi-surface cleaning services",
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
      imageSrc: "/images/image-4.jpg",
      imageAlt: "Residential and commercial cleaning",
    },
    {
      heading: "Why Choose Our Cleaning Services?",
      description:
        "Safe products, proven methods, and a satisfaction guarantee — with scheduling that fits your life.",
      bullets: [
        "Eco-friendly products safe for families and pets",
        "Advanced equipment and proven deep-cleaning methods",
        "100% satisfaction guarantee with flexible scheduling",
      ],
      imageSrc: "/images/image-6.jpg",
      imageAlt: "Professional surface cleaning results",
    },
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
          <ServicePageBanner
            title="Multi-Surface Cleaning Services"
            description="Professional cleaning for carpets, tile, hardwood, upholstery, and more — eco-friendly products and advanced techniques for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside."
            imageSrc="/images/image-1.jpg"
            imageAlt="Multi-surface cleaning services"
            breadcrumbLabel="Multi-Surface Cleaning"
            theme={landingPageData.themeData}
          />

          <ServicePageDetail
            theme={landingPageData.themeData}
            blocks={detailBlocks}
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

          <BusinessOverviewSection
            content={landingPageData.content.businessOverview?.content}
            contact={
              landingPageData.content.contact || {
                title: "Contact Us",
                description: "Get in touch with us today",
                showMap: true,
              }
            }
            businessData={landingPageData.businessData}
            theme={landingPageData.themeData}
          />

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
