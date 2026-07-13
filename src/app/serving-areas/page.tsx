import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData, Image } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Areas We Serve for Water & Fire Restoration in Montana | Allied 24/7 Restoration",
  description: "Allied 24/7 Restoration proudly serves Kalispell, Whitefish, Bigfork, Lakeside, Columbia Falls & nearby Montana areas with expert water, fire, mold & damage restoration services.",
};

export default async function ServingAreasPage() {
  const landingPageData = await getLandingPageData();
  const serviceAreas = landingPageData.businessData?.serviceAreas || [];

  return (
    <Layout
      theme={landingPageData.themeData}
      landingPageData={landingPageData}
    >
      <div className="animate-fade-in-up">
        <Navbar
          businessName={landingPageData.businessName}
          logoImage={landingPageData.images?.find((img: Image) => img.slotName === 'logo-image' || img.slotName === 'logo')?.imageUrl}
          themeData={landingPageData.themeData}
          phoneNumber={landingPageData.businessData?.phone}
          serviceAreas={landingPageData.businessData?.serviceAreas}
        />
        <main className="bg-white">
          <ServiceAreaHeroSection
            serviceName="Junk Removal"
            areaLabel="Service Areas"
            heading={
              `Junk Removal Service Areas`}
            subheading="Fast, reliable, and eco-friendly junk removal services in your neighborhood."
            description="We make junk removal easy with our professional team, transparent pricing, and commitment to environmentally responsible disposal. Whether it's residential cleanouts, construction debris, or commercial waste, we handle it all with care and efficiency."
            images={landingPageData.images || []}
            theme={landingPageData.themeData}
          />

          <ServiceAreaIntroSection
            title="Comprehensive Junk Removal Services"
            paragraphs={[
              "Serving homes and businesses across the region, we provide comprehensive junk removal solutions tailored to your needs. Our experienced team handles everything from single-item pickups to full property cleanouts with efficiency and care.",
              "We're committed to responsible disposal practices, ensuring that your unwanted items are recycled, donated, or disposed of in an environmentally friendly way whenever possible.",
            ]}
            bullets={[
              "Same-day and next-day service available in most areas",
              "No hidden fees - upfront pricing before we start",
              "Fully licensed, insured, and background-checked team",
              "Eco-friendly disposal with 60%+ recycling rate",
              "Residential, commercial, and construction cleanouts"
            ]}
            theme={landingPageData.themeData}
          />

          {serviceAreas.length > 0 && (
            <ServiceAreasSection
              serviceAreas={serviceAreas}
              themeData={landingPageData.themeData}
            />
          )}
          {landingPageData.content.faq && (
            <FAQSection
              title={landingPageData.content.faq.title}
              description={landingPageData.content.faq.description}
              questions={landingPageData.content.faq.questions}
              theme={landingPageData.themeData}
            />
          )}
        </main>
      </div>
    </Layout>
  );
}
