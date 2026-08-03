import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import BusinessOverviewSection from "@/sections/BusinessOverviewSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  const primary = landingPageData.themeData?.primaryColor || "#003366";
  const secondary = landingPageData.themeData?.secondaryColor || "#6b7280";

  const services = [
    {
      href: "/service/water-restoration",
      title: "Water Damage Restoration",
      description: "24/7 emergency water extraction, drying, and complete restoration for flood and water damage.",
      image: "/images/image-41.webp",
      alt: "Water damage restoration",
    },
    {
      href: "/service/fire-restoration",
      title: "Fire & Smoke Restoration",
      description: "Complete fire damage recovery including smoke cleanup, soot removal, and structural repairs.",
      image: "/images/image-21.jpg",
      alt: "Fire and smoke restoration",
    },
    {
      href: "/service/mold-remediation",
      title: "Mold Remediation",
      description: "Professional mold inspection, testing, and safe removal with prevention solutions.",
      image: "/images/image-49.jpg",
      alt: "Mold remediation",
    },
    {
      href: "/service/damage-restoration",
      title: "Damage Restoration",
      description: "Comprehensive restoration for all types of property damage from disasters.",
      image: "/images/image-9.jpg",
      alt: "Damage restoration",
    },
    {
      href: "/service/reconstruction",
      title: "Property Reconstruction",
      description: "Full rebuilding and remodeling services to restore your property after damage.",
      image: "/images/image-7.jpg",
      alt: "Property reconstruction",
    },
    {
      href: "/service/radon-mitigation",
      title: "Radon Mitigation",
      description: "Certified radon testing and custom mitigation systems for safe indoor air quality.",
      image: "/images/image-11.webp",
      alt: "Radon mitigation",
    },
    {
      href: "/service/multi-surface-cleaning",
      title: "Multi-Surface Cleaning",
      description: "Professional cleaning for carpets, upholstery, tile, grout, and all surfaces.",
      image: "/images/image-1.jpg",
      alt: "Multi-surface cleaning",
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
        />
        <main className="bg-[#fafafa]">
          <section
            className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 overflow-hidden"
            style={{ backgroundColor: primary }}
          >
            <div className="absolute inset-0 bg-black/25" />
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-white/70 mb-4">
                  What we offer
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-tight mb-5">
                  Our Restoration Services
                </h1>
                <p className="text-base md:text-lg text-white/85 font-light leading-relaxed max-w-2xl mx-auto">
                  Comprehensive property restoration and recovery for homes and businesses across Montana —
                  from water and fire damage to mold, radon, reconstruction, and specialty cleaning.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {services.map(({ href, title, description, image, alt }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group relative flex flex-col overflow-hidden rounded-2xl bg-white transition-transform duration-500 hover:-translate-y-1"
                    style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.06)" }}
                  >
                    <div className="relative h-52 sm:h-56 overflow-hidden">
                      <Image
                        src={image}
                        alt={alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div
                        className="h-0.5 w-10 mb-4 transition-all duration-500 group-hover:w-16"
                        style={{ backgroundColor: primary }}
                      />
                      <h2
                        className="text-xl sm:text-2xl font-serif font-light leading-snug mb-3"
                        style={{ color: primary }}
                      >
                        {title}
                      </h2>
                      <p
                        className="text-sm sm:text-base font-light leading-relaxed line-clamp-3 flex-1"
                        style={{ color: secondary }}
                      >
                        {description}
                      </p>
                      <span
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
                        style={{ color: primary }}
                      >
                        Learn more
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

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
