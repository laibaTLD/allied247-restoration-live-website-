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
  title: 'Get Now Our Fire & Smoke Damage Restoration Services in Kalispell & Surroundings',
  description: 'Our professional fire damage restoration services help you recover quickly from devastating fire damage. We provide comprehensive fire cleanup, soot removal, and complete property restoration for homes and businesses.',
  openGraph: {
    title: 'Fire & Smoke Damage Restoration Services | Professional Recovery',
    description: 'Expert fire damage restoration and smoke cleanup services for homes and businesses. Fast response to fire emergencies with complete property recovery solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fire & Smoke Damage Restoration Services | Professional Recovery',
    description: 'Expert fire damage restoration and smoke cleanup services for homes and businesses. Fast response to fire emergencies.',
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

export default async function FireRestorationPage() {
  const landingPageData = await getLandingPageData();

  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "24/7 emergency fire damage restoration and smoke cleanup for Bigfork homes and businesses"
    },
    {
      city: "columbia-falls",
      region: "MT",
      description: "Complete fire and smoke damage restoration including soot removal, odor elimination, and structural repairs throughout Columbia Falls"
    },
    {
      city: "kalispell",
      region: "MT",
      description: "Professional fire damage recovery and smoke remediation services for Kalispell residential and commercial properties"
    },
    {
      city: "whitefish",
      region: "MT",
      description: "Expert fire restoration with content cleaning and specialized smoke damage treatment for Whitefish properties"
    },
    {
      city: "lakeside",
      region: "MT",
      description: "Comprehensive fire damage restoration with emergency board-up and complete property recovery for Lakeside homes"
    }
  ];

  const detailBlocks = [
    {
      heading: "Our Fire Restoration Services",
      description:
        "From emergency board-up to final reconstruction, our certified team handles every stage of fire and smoke recovery for homes and businesses across Montana.",
      bullets: [
        "Emergency board-up & securing",
        "Fire damage assessment",
        "Smoke & soot removal",
        "Structural cleaning & deodorization",
        "Content cleaning & restoration",
        "Reconstruction & repairs",
      ],
      imageSrc: "/images/image-23.jpg",
      imageAlt: "Fire damage restoration and smoke cleanup crew at work",
    },
    {
      heading: "Why Choose Our Fire Restoration?",
      description:
        "We respond around the clock with IICRC-certified specialists and manage the full recovery process so you can focus on getting back to normal.",
      bullets: [
        "24/7 emergency response to secure your property and stop further damage",
        "IICRC certified fire restoration specialists trained in smoke and soot remediation",
        "Complete recovery from board-up through final reconstruction",
      ],
      imageSrc: "/images/image-25.png",
      imageAlt: "Professional fire restoration equipment and cleanup",
    },
    {
      heading: "Serving Flathead County",
      description:
        "Trusted fire and smoke damage restoration for Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside — with local crews ready when disaster strikes.",
      imageSrc: "/images/image-26.jpg",
      imageAlt: "Allied Restoration fire damage restoration team",
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
            title="Fire & Smoke Damage Restoration Services"
            description="Professional fire cleanup, smoke remediation, soot removal, and complete property restoration for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside."
            imageSrc="/images/image-21.jpg"
            imageAlt="Fire and smoke damage restoration services"
            breadcrumbLabel="Fire Restoration"
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
              "Professional fire and smoke damage restoration services you can trust. We're here to help restore your property after fire damage."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
