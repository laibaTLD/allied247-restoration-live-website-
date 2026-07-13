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

  // Reconstruction service areas for Montana
  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "Complete property reconstruction and structural rebuilding services for Bigfork homes damaged by fire, water, or storms"
    },
    {
      city: "columbia-falls", 
      region: "MT",
      description: "Professional building restoration including framing, drywall, flooring, and full structural repairs throughout Columbia Falls"
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
      description: "Comprehensive property rebuilding from foundation to finish work for Lakeside homes affected by disasters"
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
              titleText="Reconstruction"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Property Reconstruction Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our professional reconstruction services help rebuild and restore your property after damage from fire, water, storms, or other disasters. 
                We provide complete structural repairs, remodeling, and rebuilding services 
                for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Reconstruction Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Structural repairs & framing</li>
                    <li>• Drywall installation & finishing</li>
                    <li>• Flooring restoration</li>
                    <li>• Roofing & exterior repairs</li>
                    <li>• Plumbing & electrical</li>
                    <li>• HVAC system restoration</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Remodeling & Improvements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Kitchen reconstruction</li>
                    <li>• Bathroom restoration</li>
                    <li>• Basement finishing</li>
                    <li>• Room additions</li>
                    <li>• Exterior renovations</li>
                    <li>• Custom carpentry</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-orange-900 mb-4">Why Choose Our Reconstruction Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Licensed Contractors</h4>
                    <p className="text-orange-700 text-sm">Our team includes licensed builders, electricians, and plumbers ensuring code-compliant reconstruction</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Quality Materials</h4>
                    <p className="text-orange-700 text-sm">We use premium materials and modern building techniques for lasting results</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Project Management</h4>
                    <p className="text-orange-700 text-sm">Complete oversight from permits to final inspection, keeping your project on time and budget</p>
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
