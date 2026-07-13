import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Get Now Experienced Damage Restoration Services Contractor in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration of Kalispell is your trusted partner when it comes to water & fire damage restoration, specialty cleaning, construction, mold mitigation, We offer 24-hour emergency service for restoration in homes and businesses.',
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

export default async function ServicesIndexPage() {
  const landingPageData = await getLandingPageData();

  const services = [
    {
      href: "/service/water-restoration",
      title: "Water Damage Restoration",
      description: "24/7 emergency water extraction, drying, and complete restoration for flood and water damage."
    },
    {
      href: "/service/fire-restoration",
      title: "Fire & Smoke Restoration",
      description: "Complete fire damage recovery including smoke cleanup, soot removal, and structural repairs."
    },
    {
      href: "/service/mold-remediation",
      title: "Mold Remediation",
      description: "Professional mold inspection, testing, and safe removal with prevention solutions."
    },
    {
      href: "/service/damage-restoration",
      title: "Damage Restoration",
      description: "Comprehensive restoration for all types of property damage from disasters."
    },
    {
      href: "/service/reconstruction",
      title: "Property Reconstruction",
      description: "Full rebuilding and remodeling services to restore your property after damage."
    },
    {
      href: "/service/radon-mitigation",
      title: "Radon Mitigation",
      description: "Certified radon testing and custom mitigation systems for safe indoor air quality."
    },
    {
      href: "/service/multi-surface-cleaning",
      title: "Multi-Surface Cleaning",
      description: "Professional cleaning for carpets, upholstery, tile, grout, and all surfaces."
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
        />
        <main className="bg-white">
          <section className="mx-auto w-full md:max-w-[70vw] px-4 sm:px-6 py-12 md:py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Restoration Services
            </h1>
            <p className="text-gray-600 mb-10 max-w-2xl">
              Comprehensive property restoration and recovery services for homes and businesses across Montana. 
              From water damage to fire restoration, mold remediation to complete reconstruction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(({ href, title, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-600">
                    Learn more
                    <span className="ml-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <FooterSection
            businessName={landingPageData.businessName}
            businessDescription={
              landingPageData.content?.about?.description ||
              "Professional restoration services you can trust. We restore your property and peace of mind."
            }
            businessData={landingPageData.businessData}
            themeData={landingPageData.themeData}
          />
        </main>
      </div>
    </Layout>
  );
}
