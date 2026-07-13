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

  // Fire restoration service areas for Montana
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
          <section className="mx-auto w-full md:max-w-[70vw] px-4 sm:px-6 py-12 md:py-16">
            <Breadcrumbs 
              titleText="Fire Restoration"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fire & Smoke Damage Restoration Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our professional fire damage restoration services help you recover quickly from devastating fire and smoke damage. 
                We provide comprehensive fire cleanup, smoke remediation, soot removal, and complete property restoration 
                for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Fire Restoration Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Emergency board-up & securing</li>
                    <li>• Fire damage assessment</li>
                    <li>• Smoke & soot removal</li>
                    <li>• Structural cleaning & deodorization</li>
                    <li>• Content cleaning & restoration</li>
                    <li>• Reconstruction & repairs</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Bigfork, MT</li>
                    <li>• Columbia Falls, MT</li>
                    <li>• Kalispell, MT</li>
                    <li>• Whitefish, MT</li>
                    <li>• Lakeside, MT</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">Why Choose Our Fire Restoration Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">24/7 Emergency Response</h4>
                    <p className="text-orange-700 text-sm">Immediate response to fire emergencies to prevent further damage and secure your property</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">IICRC Certified</h4>
                    <p className="text-orange-700 text-sm">Certified fire restoration specialists with advanced training in smoke and soot remediation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Complete Recovery</h4>
                    <p className="text-orange-700 text-sm">From emergency board-up to final reconstruction, we handle the entire restoration process</p>
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
