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
            title="Allied 24/7 Restoration — Your Trusted Partner in Fire & Smoke Damage Recovery"
            intro="Our professional fire damage restoration services help you recover quickly from devastating fire and smoke damage. We provide comprehensive fire cleanup, smoke remediation, soot removal, and complete property restoration for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside."
            breadcrumbLabel="Fire Restoration"
            heroImage="/images/image-21.jpg"
            heroAlt="Fire and smoke damage restoration services"
            defaultService="Fire & Smoke Restoration"
            theme={landingPageData.themeData}
            sections={[
              {
                heading: "Why Choose Allied 24/7 for Fire Restoration?",
                description:
                  "From emergency board-up to final reconstruction, our certified team handles every stage of fire and smoke recovery so you can focus on getting back to normal.",
                bullets: [
                  "24/7 Emergency Response: Immediate response to secure your property and stop further damage",
                  "IICRC Certified: Fire restoration specialists trained in smoke and soot remediation",
                  "Complete Recovery: From board-up through final reconstruction, we manage the full process",
                ],
              },
              {
                heading: "Our Fire Restoration Services",
                description:
                  "We deliver full-service fire and smoke recovery tailored to residential and commercial properties.",
                bullets: [
                  "Emergency board-up & securing",
                  "Fire damage assessment",
                  "Smoke & soot removal",
                  "Structural cleaning & deodorization",
                  "Content cleaning & restoration",
                  "Reconstruction & repairs",
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
