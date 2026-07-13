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
  title: 'Multi Surface Cleaning Services in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration provides experts multi-surface cleaning services to thoroughly clean, sanitize, and restore your home or business surfaces in Kalispell, MT.',
  openGraph: {
    title: 'Multi-Surface Cleaning Services | Professional Residential & Commercial',
    description: 'Expert multi-surface cleaning services for homes and businesses. Professional carpet, tile, hardwood, upholstery cleaning and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Surface Cleaning Services | Professional Residential & Commercial',
    description: 'Expert multi-surface cleaning services for homes and businesses. Professional carpet, tile, hardwood cleaning.',
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

export default async function MultiSurfaceCleaningPage() {
  const landingPageData = await getLandingPageData();

  // Multi-surface cleaning service areas for Montana
  const serviceAreas = [
    {
      city: "bigfork",
      region: "MT",
      description: "Professional multi-surface cleaning for Bigfork homes and businesses including carpet, tile, and hardwood floor restoration"
    },
    {
      city: "columbia-falls", 
      region: "MT",
      description: "Complete residential and commercial cleaning services throughout Columbia Falls with eco-friendly products"
    },
    {
      city: "kalispell", 
      region: "MT",
      description: "Expert carpet cleaning, upholstery restoration, and tile & grout cleaning for Kalispell properties"
    },
    {
      city: "whitefish", 
      region: "MT",
      description: "Premium multi-surface cleaning with specialized hardwood floor care and pressure washing for Whitefish homes"
    },
    {
      city: "lakeside", 
      region: "MT",
      description: "Comprehensive cleaning services including drapery cleaning, rug restoration, and post-construction cleanup for Lakeside"
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
              titleText="Multi-Surface Cleaning"
              theme={landingPageData.themeData}
            />
            
            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Multi-Surface Cleaning Services
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our professional multi-surface cleaning services keep your residential and commercial properties looking their best. 
                We use eco-friendly products and advanced techniques to clean carpets, tile, hardwood, upholstery, and more 
                for homes and businesses across Bigfork, Columbia Falls, Kalispell, Whitefish, and Lakeside.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Cleaning Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Carpet & rug cleaning</li>
                    <li>• Tile & grout cleaning</li>
                    <li>• Hardwood floor restoration</li>
                    <li>• Upholstery & drapery cleaning</li>
                    <li>• Pressure washing</li>
                    <li>• Post-construction cleanup</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential & Commercial</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Home & apartment cleaning</li>
                    <li>• Office & retail spaces</li>
                    <li>• Medical facility cleaning</li>
                    <li>• Industrial cleaning</li>
                    <li>• Window cleaning</li>
                    <li>• Move-in/move-out cleaning</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Why Choose Our Cleaning Services?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Eco-Friendly Products</h4>
                    <p className="text-green-700 text-sm">Environmentally safe cleaning products that are tough on dirt but gentle on surfaces and safe for families and pets</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Advanced Techniques</h4>
                    <p className="text-green-700 text-sm">State-of-the-art equipment and proven methods for deep cleaning all types of surfaces</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Satisfaction Guaranteed</h4>
                    <p className="text-green-700 text-sm">100% satisfaction guarantee with flexible scheduling and customized cleaning plans</p>
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
              "Professional multi-surface cleaning services you can trust. We keep your property looking its best with eco-friendly solutions."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
