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
  title: 'Kalispell Radon Mitigation Experts | 24/7 Professional Service',
  description: 'Our professional radon mitigation services help detect, reduce, and fully eliminate harmful radon gas from your home or business in Kalispell, MT. Allied 24/7 Restoration protects your property and keeps your family safe. Call now for expert services!',
  openGraph: {
    title: 'Radon Testing & Mitigation Services | Professional Radon Removal',
    description: 'Expert radon testing and mitigation services for homes and businesses. Certified radon removal, testing, and reduction systems.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radon Testing & Mitigation Services | Professional Radon Removal',
    description: 'Expert radon testing and mitigation services for homes and businesses. Certified radon removal and testing.',
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

export default async function RadonMitigationPage() {
  const landingPageData = await getLandingPageData();

  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "Certified radon testing and custom mitigation systems for Bigfork homes and businesses"
    },
    {
      city: "columbia-falls",
      region: "MT",
      description: "Professional radon detection and reduction systems throughout Columbia Falls"
    },
    {
      city: "kalispell",
      region: "MT",
      description: "Expert radon testing and mitigation for Kalispell residential and commercial properties"
    },
    {
      city: "whitefish",
      region: "MT",
      description: "Reliable radon testing and post-mitigation verification for Whitefish properties"
    },
    {
      city: "lakeside",
      region: "MT",
      description: "Complete radon mitigation system installation and monitoring for Lakeside homes"
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
            title="Allied 24/7 Restoration — Your Trusted Partner in Radon Testing & Mitigation"
            intro="Protect your family from the dangers of radon gas with our professional testing and mitigation services. Radon is a colorless, odorless gas that can cause lung cancer. We provide certified testing, custom mitigation systems, and post-installation verification for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside."
            breadcrumbLabel="Radon Mitigation"
            heroImage="/images/image-11.webp"
            heroAlt="Radon testing and mitigation services"
            defaultService="Radon Mitigation"
            theme={landingPageData.themeData}
            sections={[
              {
                heading: "Why Test for Radon?",
                description:
                  "Radon is colorless and odorless — and the second leading cause of lung cancer after smoking. Testing protects your family.",
                bullets: [
                  "EPA Recommended: The EPA recommends all homes be tested for radon",
                  "Health Protection: Testing protects your family from a known lung cancer risk",
                  "Peace of Mind: Professional results with clear next steps if mitigation is needed",
                ],
              },
              {
                heading: "Radon Testing Services",
                description:
                  "Accurate testing options for every situation — from short-term screens to continuous monitoring.",
                bullets: [
                  "Short-term testing (2-7 days)",
                  "Long-term testing (90+ days)",
                  "Continuous monitoring systems",
                  "Professional analysis & reporting",
                  "Real estate transaction testing",
                  "Post-mitigation verification",
                ],
              },
              {
                heading: "Radon Mitigation Systems",
                description:
                  "Custom mitigation systems designed for your property to reduce radon to safe levels.",
                bullets: [
                  "Sub-slab depressurization",
                  "Drain-tile suction systems",
                  "Sump hole suction",
                  "Active soil depressurization",
                  "Crawl space ventilation",
                  "System maintenance & monitoring",
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
              "Professional radon testing and mitigation services you can trust. We protect your family from the dangers of radon gas."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
