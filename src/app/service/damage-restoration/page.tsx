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
  title: 'Get Now Experienced Damage Restoration Services Contractor in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration of Kalispell is your trusted partner when it comes to water & fire damage restoration, specialty cleaning, construction, mold mitigation, We offer 24-hour emergency service for restoration in homes and businesses.',
  openGraph: {
    title: 'Professional Damage Restoration Services | Fast & Reliable Property Recovery',
    description: 'Expert damage restoration services for homes and businesses. Fast, reliable, and professional property restoration with complete recovery solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Damage Restoration Services | Fast & Reliable Property Recovery',
    description: 'Expert damage restoration services for homes and businesses. Fast, reliable, and professional property restoration.',
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

export default async function TrashRemovalPage() {
  const landingPageData = await getLandingPageData();

  // Use hardcoded service areas for Arizona cities
  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "24/7 emergency water damage restoration and fire damage repair for Bigfork properties"
    },
    {
      city: "columbia-falls", 
      region: "MT",
      description: "Complete damage restoration services including water extraction, mold remediation, and structural drying throughout Columbia Falls"
    },
    {
      city: "kalispell", 
      region: "MT",
      description: "Professional fire and smoke damage restoration plus storm damage recovery for Kalispell homes and businesses"
    },
    {
      city: "whitefish", 
      region: "MT",
      description: "Specialized senior home damage restoration with careful handling of contents and minimal disruption"
    },
    {
      city: "Lakeside", 
      region: "MT",
      description: "Full-service disaster restoration with emergency response and insurance claim assistance"
    },
    {
      city: "whitefish",
      region: "MT",
      description: "High-end property damage restoration with discreet service and premium quality repairs"
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
              titleText="Damage Restoration"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Damage Restoration Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive damage restoration services handle everything from water extraction and fire damage cleanup to mold remediation and storm damage recovery. 
                We provide fast, reliable, and professional property restoration solutions for residential and commercial properties 
                across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Damage Restoration Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Water damage extraction & drying</li>
                    <li>• Fire & smoke damage restoration</li>
                    <li>• Mold remediation & removal</li>
                    <li>• Storm & flood damage repair</li>
                    <li>• Structural drying & dehumidification</li>
                    <li>• Emergency 24/7 response</li>
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

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-red-900 mb-4">Why Choose Our Damage Restoration?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">24/7 Emergency Response</h4>
                    <p className="text-red-700 text-sm">Rapid response when disaster strikes, minimizing further damage</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Certified Experts</h4>
                    <p className="text-red-700 text-sm">IICRC certified technicians with professional restoration training</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Insurance Assistance</h4>
                    <p className="text-red-700 text-sm">Complete documentation and support for insurance claims</p>
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
              "Professional damage restoration services you can trust. We're here to help restore your property after water, fire, or storm damage."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
