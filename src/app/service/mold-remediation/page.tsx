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
  title: 'Professional Mold Remediation Services in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Professional mold remediation services protect your health and property. Certified mold testing, safe removal, and prevention for homes and businesses in Kalispell and surrounding areas.',
  openGraph: {
    title: 'Mold Remediation Services | Safe Mold Removal & Prevention',
    description: 'Expert mold inspection, testing, and safe removal with prevention solutions for homes and businesses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mold Remediation Services | Safe Mold Removal & Prevention',
    description: 'Expert mold inspection, testing, and safe removal with prevention solutions.',
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

export default async function MoldRemediationPage() {
  const landingPageData = await getLandingPageData();

  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "Professional mold inspection, testing, and safe removal for Bigfork homes and businesses"
    },
    {
      city: "columbia-falls",
      region: "MT",
      description: "Complete mold remediation including black mold removal and air quality improvement throughout Columbia Falls"
    },
    {
      city: "kalispell",
      region: "MT",
      description: "Certified mold remediation and moisture control solutions for Kalispell residential and commercial properties"
    },
    {
      city: "whitefish",
      region: "MT",
      description: "Expert mold testing and remediation with HEPA filtration for Whitefish properties"
    },
    {
      city: "lakeside",
      region: "MT",
      description: "Thorough mold removal and prevention strategies for Lakeside homes and businesses"
    }
  ];

  const detailBlocks = [
    {
      heading: "Our Mold Remediation Services",
      description:
        "Certified mold testing, safe removal, and air quality improvement to protect your health and restore your property.",
      bullets: [
        "Mold inspection & testing",
        "Black mold removal",
        "Air quality testing",
        "Containment & HEPA filtration",
        "Safe mold removal & cleaning",
        "Moisture control & prevention",
      ],
      imageSrc: "/images/image-44.webp",
      imageAlt: "Professional mold remediation and inspection",
    },
    {
      heading: "Common Signs of Mold",
      description:
        "Catch mold early. If you notice any of these warning signs, our team can inspect and remediate before the problem spreads.",
      bullets: [
        "Visible mold growth",
        "Musty odors",
        "Water stains on walls/ceilings",
        "Peeling paint or wallpaper",
        "Allergic symptoms indoors",
        "Recent water damage",
      ],
      imageSrc: "/images/image-46.jpg",
      imageAlt: "Mold damage inspection and remediation",
    },
    {
      heading: "Why Choose Our Mold Remediation?",
      description:
        "IICRC-certified specialists use containment protocols and moisture control so mold is removed safely — and stays gone.",
      bullets: [
        "IICRC certified mold remediation experts",
        "HEPA filtration and containment to prevent cross-contamination",
        "Moisture control and prevention strategies to stop mold from returning",
      ],
      imageSrc: "/images/image-48.jpg",
      imageAlt: "Safe mold removal and air quality restoration",
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
            title="Mold Remediation Services"
            description="Certified mold testing, safe removal, air quality improvement, and prevention solutions for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside."
            imageSrc="/images/image-49.jpg"
            imageAlt="Mold remediation services"
            breadcrumbLabel="Mold Remediation"
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
              "Professional mold remediation services you can trust. We safely remove mold and restore healthy indoor air quality."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
