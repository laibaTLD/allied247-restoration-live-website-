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

  // Radon testing and mitigation service areas for Montana
  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "Professional radon testing and mitigation system installation for Bigfork homes to ensure safe indoor air quality"
    },
    {
      city: "columbia-falls", 
      region: "MT",
      description: "Complete radon testing services and custom mitigation solutions throughout Columbia Falls for residential properties"
    },
    {
      city: "kalispell", 
      region: "MT",
      description: "Certified radon testing and mitigation system installation with post-mitigation verification for Kalispell homes"
    },
    {
      city: "whitefish", 
      region: "MT",
      description: "Expert radon level assessment and professional mitigation system design for Whitefish residential properties"
    },
    {
      city: "lakeside", 
      region: "MT",
      description: "Comprehensive radon testing and mitigation services with continuous monitoring options for Lakeside homes"
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
              titleText="Radon Mitigation"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Radon Testing & Mitigation Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Protect your family from the dangers of radon gas with our professional testing and mitigation services. 
                Radon is a colorless, odorless gas that can cause lung cancer. We provide certified testing, 
                custom mitigation systems, and post-installation verification for homes and businesses 
                across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Radon Testing Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Short-term testing (2-7 days)</li>
                    <li>• Long-term testing (90+ days)</li>
                    <li>• Continuous monitoring systems</li>
                    <li>• Professional analysis & reporting</li>
                    <li>• Real estate transaction testing</li>
                    <li>• Post-mitigation verification</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Radon Mitigation Systems</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sub-slab depressurization</li>
                    <li>• Drain-tile suction systems</li>
                    <li>• Sump hole suction</li>
                    <li>• Active soil depressurization</li>
                    <li>• Crawl space ventilation</li>
                    <li>• System maintenance & monitoring</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Why Test for Radon?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">EPA Recommended</h4>
                    <p className="text-blue-700 text-sm">The EPA recommends all homes be tested for radon, regardless of geographic location or home type</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Health Protection</h4>
                    <p className="text-blue-700 text-sm">Radon is the second leading cause of lung cancer after smoking - testing protects your family</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Peace of Mind</h4>
                    <p className="text-blue-700 text-sm">Professional testing gives you accurate results and guidance on next steps if mitigation is needed</p>
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
