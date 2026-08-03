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
  title: 'Kalispell Trusted #1 Water Damage Restoration Service Contractor | Call Now',
  description: 'Trusted water restoration professionals serving Kalispell & surrounding areas. Advanced Restoration is here for you 24/7, ready to handle all your emergency water backup needs.',
  openGraph: {
    title: 'Water Damage Restoration Services | 24/7 Emergency Water Removal',
    description: 'Expert water damage restoration and emergency water removal services for homes and businesses. Fast flood cleanup, drying, and restoration.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Damage Restoration Services | 24/7 Emergency Water Removal',
    description: 'Expert water damage restoration and emergency water removal services for homes and businesses. Fast flood cleanup.',
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

export default async function WaterRestorationPage() {
  const landingPageData = await getLandingPageData();

  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "24/7 emergency water damage restoration and flood cleanup for Bigfork homes and businesses with fast drying services"
    },
    {
      city: "columbia-falls",
      region: "MT",
      description: "Complete water extraction and structural drying services throughout Columbia Falls for residential and commercial properties"
    },
    {
      city: "kalispell",
      region: "MT",
      description: "Professional water damage recovery including sewage cleanup and mold prevention for Kalispell properties"
    },
    {
      city: "whitefish",
      region: "MT",
      description: "Expert water restoration with content cleaning and document recovery services for Whitefish homes and businesses"
    },
    {
      city: "lakeside",
      region: "MT",
      description: "Comprehensive flood damage restoration with dehumidification and air quality control for Lakeside properties"
    }
  ];

  const detailBlocks = [
    {
      heading: "Our Water Restoration Process",
      description:
        "Fast, reliable recovery from floods, leaks, and water-related disasters — from emergency extraction through final repairs.",
      bullets: [
        "Emergency contact & inspection",
        "Water extraction & removal",
        "Drying & dehumidification",
        "Cleaning & sanitizing",
        "Structural repairs",
        "Content restoration",
      ],
      imageSrc: "/images/image-36.jpg",
      imageAlt: "Water damage extraction and drying equipment",
    },
    {
      heading: "Common Water Damage Causes",
      description:
        "We handle every type of water emergency so secondary damage and mold never get a chance to take hold.",
      bullets: [
        "Burst or leaking pipes",
        "Flooding from storms",
        "Appliance malfunctions",
        "Roof leaks",
        "Sewage backups",
        "Foundation seepage",
      ],
      imageSrc: "/images/image-38.jpg",
      imageAlt: "Flood and water damage restoration in progress",
    },
    {
      heading: "Why Choose Our Water Restoration?",
      description:
        "Industrial-grade equipment and round-the-clock response mean your property is dried thoroughly and restored completely.",
      bullets: [
        "24/7 emergency response to prevent further damage and mold growth",
        "Industrial-grade pumps, dehumidifiers, and air movers for fast drying",
        "Complete restoration from extraction to final repairs",
      ],
      imageSrc: "/images/image-39.jpg",
      imageAlt: "Professional water damage restoration team",
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
            title="Water Damage Restoration Services"
            description="24/7 emergency response, water extraction, structural drying, and complete restoration for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside."
            imageSrc="/images/image-41.webp"
            imageAlt="Water damage restoration services"
            breadcrumbLabel="Water Restoration"
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
              "Professional water damage restoration services you can trust. We respond 24/7 to restore your property after water damage."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
