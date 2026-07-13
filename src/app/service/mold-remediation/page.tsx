import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/service/[id]/components/Breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Hire Now Our Skilled & Affordable Mold Remediation Contractor | Allied 24/7 Restoration',
  description: 'Our experienced & certified mold remediation services protect your health and property from harmful mold growth. Call now for expert services. Allied 24/7 Restoration is ready 24/7!',
  openGraph: {
    title: 'Mold Remediation Services | Professional Mold Removal & Testing',
    description: 'Expert mold remediation and removal services for homes and businesses. Certified mold testing, safe removal, and prevention solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mold Remediation Services | Professional Mold Removal & Testing',
    description: 'Expert mold remediation and removal services for homes and businesses. Certified mold testing and safe removal.',
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

  // Mold remediation service areas for Montana
  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "Professional mold testing and remediation services for Bigfork homes and businesses, ensuring safe indoor air quality"
    },
    {
      city: "columbia-falls", 
      region: "MT",
      description: "Complete mold removal and prevention services including air quality testing and moisture control throughout Columbia Falls"
    },
    {
      city: "kalispell", 
      region: "MT",
      description: "Certified mold remediation and black mold removal services for Kalispell residential and commercial properties"
    },
    {
      city: "whitefish", 
      region: "MT",
      description: "Expert mold inspection and remediation with HEPA filtration and safe removal techniques for Whitefish properties"
    },
    {
      city: "lakeside", 
      region: "MT",
      description: "Comprehensive mold remediation with prevention strategies and post-remediation testing for Lakeside homes"
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
          <section className="mx-auto w-full md:max-w-[70vw] px-4 sm:px-6 py-12 md:py-16">
            <Breadcrumbs 
              titleText="Mold Remediation"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mold Remediation Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our professional mold remediation services protect your health and property from harmful mold growth. 
                We provide certified mold testing, safe removal, air quality improvement, and prevention solutions 
                for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mold Remediation Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mold inspection & testing</li>
                    <li>• Black mold removal</li>
                    <li>• Air quality testing</li>
                    <li>• Containment & HEPA filtration</li>
                    <li>• Safe mold removal & cleaning</li>
                    <li>• Moisture control & prevention</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Signs of Mold</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Visible mold growth</li>
                    <li>• Musty odors</li>
                    <li>• Water stains on walls/ceilings</li>
                    <li>• Peeling paint or wallpaper</li>
                    <li>• Allergic symptoms indoors</li>
                    <li>• Recent water damage</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Why Choose Our Mold Remediation?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Certified Specialists</h4>
                    <p className="text-green-700 text-sm">IICRC certified mold remediation experts with advanced training in safe removal techniques</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Safe & Thorough</h4>
                    <p className="text-green-700 text-sm">HEPA filtration and containment protocols to prevent cross-contamination during removal</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Prevention Focus</h4>
                    <p className="text-green-700 text-sm">Moisture control solutions and prevention strategies to stop mold from returning</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
