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
            title="Allied 24/7 Restoration — Your Trusted Partner in Property Reconstruction"
            intro="Our professional reconstruction services help rebuild and restore your property after damage from fire, water, storms, or other disasters. We provide complete structural repairs, remodeling, and rebuilding services for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside."
            breadcrumbLabel="Reconstruction"
            heroImage="/images/image-7.jpg"
            heroAlt="Property reconstruction services"
            defaultService="Property Reconstruction"
            theme={landingPageData.themeData}
            sections={[
              {
                heading: "Why Choose Allied 24/7 for Reconstruction?",
                description:
                  "Licensed trades, premium materials, and full project management from permits through final inspection.",
                bullets: [
                  "Licensed Contractors: Licensed builders, electricians, and plumbers for code-compliant work",
                  "Quality Materials: Premium materials and modern building techniques for lasting results",
                  "Project Management: Complete oversight from permits to final inspection",
                ],
              },
              {
                heading: "Reconstruction Services",
                description:
                  "Complete structural repairs and rebuilding after fire, water, storm, or other disaster damage.",
                bullets: [
                  "Structural repairs & framing",
                  "Drywall installation & finishing",
                  "Flooring restoration",
                  "Roofing & exterior repairs",
                  "Plumbing & electrical",
                  "HVAC system restoration",
                ],
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
