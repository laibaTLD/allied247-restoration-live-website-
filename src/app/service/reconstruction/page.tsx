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
  title: 'Hire Now Our Expert Reconstruction Contractor For Your Homes & Offices | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration provides professional reconstruction services to rebuild and restore your property after fire, water, storm, or other disaster damage in Kalispell, MT. Trusted, fast, and available 24/7.',
  openGraph: {
    title: 'Property Reconstruction Services | Professional Building Restoration',
    description: 'Expert property reconstruction and building restoration services for homes and businesses. Complete structural repairs, remodeling, and rebuilding.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Reconstruction Services | Professional Building Restoration',
    description: 'Expert property reconstruction and building restoration services for homes and businesses. Complete structural repairs.',
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

export default async function ReconstructionPage() {
  const landingPageData = await getLandingPageData();

  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "Complete property reconstruction and structural rebuilding services for Bigfork homes damaged by fire, water, or storms"
    },
    {
      city: "columbia-falls",
      region: "MT",
      description: "Professional rebuilding and remodeling after disaster damage throughout Columbia Falls"
    },
    {
      city: "kalispell",
      region: "MT",
      description: "Expert home reconstruction with modern building techniques and quality materials for Kalispell residential properties"
    },
    {
      city: "whitefish",
      region: "MT",
      description: "Custom remodeling and reconstruction services restoring Whitefish properties to better-than-before condition"
    },
    {
      city: "lakeside",
      region: "MT",
      description: "Full-service property reconstruction and repairs for Lakeside homes and businesses"
    }
  ];

  const detailBlocks = [
    {
      heading: "Reconstruction Services",
      description:
        "Complete structural repairs and rebuilding after fire, water, storm, or other disaster damage — done right the first time.",
      bullets: [
        "Structural repairs & framing",
        "Drywall installation & finishing",
        "Flooring restoration",
        "Roofing & exterior repairs",
        "Plumbing & electrical",
        "HVAC system restoration",
      ],
      imageSrc: "/images/image-8.jpg",
      imageAlt: "Property reconstruction and structural repairs",
    },
    {
      heading: "Remodeling & Improvements",
      description:
        "Beyond repairs — rebuild with upgrades that improve comfort, value, and long-term durability.",
      bullets: [
        "Kitchen reconstruction",
        "Bathroom restoration",
        "Basement finishing",
        "Room additions",
        "Exterior renovations",
        "Custom carpentry",
      ],
      imageSrc: "/images/image-50.webp",
      imageAlt: "Home remodeling and reconstruction project",
    },
    {
      heading: "Why Choose Our Reconstruction Services?",
      description:
        "Licensed trades, premium materials, and full project management from permits through final inspection.",
      bullets: [
        "Licensed builders, electricians, and plumbers for code-compliant work",
        "Premium materials and modern building techniques",
        "Complete oversight from permits to final inspection",
      ],
      imageSrc: "/images/image-52.jpg",
      imageAlt: "Allied Restoration reconstruction crew",
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
            title="Property Reconstruction Services"
            description="Rebuild and restore your property after fire, water, storm, or other disaster damage — complete structural repairs, remodeling, and rebuilding across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside."
            imageSrc="/images/image-7.jpg"
            imageAlt="Property reconstruction services"
            breadcrumbLabel="Reconstruction"
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
              "Professional property reconstruction services you can trust. We rebuild and restore your property after damage."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
