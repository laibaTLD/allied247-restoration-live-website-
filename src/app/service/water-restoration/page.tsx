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
  title: 'Kalispell Trusted #1 Water Damage Restoration Service Contractor | Call Now',
  description: 'Trusted water restoration professionals serving Kalispell & surrounding areas. Advanced Restoration is here for you 24/7, ready to handle all your emergency water backup needs.',
  openGraph: {
    title: 'Water Damage Restoration Services | 24/7 Emergency Water Removal',
    description: 'Expert water damage restoration and emergency water removal services for homes and businesses. Fast flood cleanup, drying, and restoration.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Damage Restoration Services | 24/7 Emergency Water Removal',
    description: 'Expert water damage restoration and emergency water removal services for homes and businesses. Fast flood cleanup.',
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

export default async function WaterRestorationPage() {
  const landingPageData = await getLandingPageData();

  // Water restoration service areas for Montana
  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "24/7 emergency water damage restoration and flood cleanup for Bigfork homes and businesses with fast drying services"
    },
    {
      city: "columbia-falls", 
      region: "MT",
      description: "Complete water extraction and structural drying services throughout Columbia Falls for residential and commercial properties"
    },
    {
      city: "kalispell", 
      region: "MT",
      description: "Professional water damage recovery including sewage cleanup and mold prevention for Kalispell properties"
    },
    {
      city: "whitefish", 
      region: "MT",
      description: "Expert water restoration with content cleaning and document recovery services for Whitefish homes and businesses"
    },
    {
      city: "lakeside", 
      region: "MT",
      description: "Comprehensive flood damage restoration with dehumidification and air quality control for Lakeside properties"
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
              titleText="Water Restoration"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Water Damage Restoration Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our professional water damage restoration services provide fast, reliable recovery from floods, leaks, and water-related disasters. 
                We offer 24/7 emergency response, water extraction, structural drying, and complete restoration 
                for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Water Restoration Process</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Emergency contact & inspection</li>
                    <li>• Water extraction & removal</li>
                    <li>• Drying & dehumidification</li>
                    <li>• Cleaning & sanitizing</li>
                    <li>• Structural repairs</li>
                    <li>• Content restoration</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Water Damage Causes</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Burst or leaking pipes</li>
                    <li>• Flooding from storms</li>
                    <li>• Appliance malfunctions</li>
                    <li>• Roof leaks</li>
                    <li>• Sewage backups</li>
                    <li>• Foundation seepage</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Why Choose Our Water Restoration?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">24/7 Emergency Response</h4>
                    <p className="text-blue-700 text-sm">Immediate response to water emergencies to prevent further damage and mold growth</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Advanced Equipment</h4>
                    <p className="text-blue-700 text-sm">Industrial-grade pumps, dehumidifiers, and air movers for fast, effective drying</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Complete Restoration</h4>
                    <p className="text-blue-700 text-sm">From water extraction to final repairs, we handle the entire restoration process</p>
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
              "Professional water damage restoration services you can trust. We respond 24/7 to restore your property after water damage."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
