"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ServiceArea {
  city: string;
  region: string;
  description?: string;
}

interface NavbarProps {
  businessName?: string;
  logoImage?: string;
  themeData?: {
    primaryColor: string;
    secondaryColor: string;
  };
  phoneNumber?: string;
  serviceAreas?: ServiceArea[];
}

export default function Navbar({
  businessName,
  logoImage,
  themeData,
  phoneNumber,
  serviceAreas, // eslint-disable-line @typescript-eslint/no-unused-vars
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAreasModal, setShowAreasModal] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setActiveServiceIndex(0);
  }, []);


  // Use hardcoded service areas for Montana cities
  const hardcodedAreas: ServiceArea[] = [
    { city: "Bigfork", region: "MT" },
    { city: "Whitefish", region: "MT" },
    { city: "Kalispell", region: "MT" },
    { city: "Columbia Falls", region: "MT" },
    { city: "Lakeside", region: "MT" },
  ];

  // Helpers to format labels and slugs for service areas
  const formatAreaLabel = (area: ServiceArea) => `${area.city}, ${area.region}`;
  const areaToSlug = (area: ServiceArea, servicePath?: string) => {
    const city = area.city.toLowerCase().replace(/,/g, "").replace(/\s+/g, "-");

    const isMultiSurface = servicePath?.includes("multi-surface-cleaning");

    let citySlug = city;

    // Handle capital K for multi-surface-cleaning, lowercase for others
    if (citySlug === "kalispell") {
      citySlug = isMultiSurface ? "Kalispell" : "kalispell";
    }

    return `${citySlug}-mt`;
  };

  const allAreas: ServiceArea[] = hardcodedAreas;

  // Ensure we only show each city/region once in the dropdown (e.g., one Manhattan, NY)
  const uniqueAreas: ServiceArea[] = allAreas.filter((area, index, self) => {
    const key = `${area.city}-${area.region}`.toLowerCase();

    return (
      index ===
      self.findIndex(
        (other) => `${other.city}-${other.region}`.toLowerCase() === key
      )
    );
  });

  const servingAreaGroups = [
    {
      label: "Water Restoration",
      href: "/service/water-restoration",
      areas: uniqueAreas,
    },
    {
      label: "Fire Restoration",
      href: "/service/fire-restoration",
      areas: uniqueAreas,
    },
    {
      label: "Mold Remediation",
      href: "/service/mold-remediation",
      areas: uniqueAreas,
    },
    {
      label: "Damage Restoration",
      href: "/service/damage-restoration",
      areas: uniqueAreas,
    },
    {
      label: "Reconstruction",
      href: "/service/reconstruction",
      areas: uniqueAreas,
    },
    {
      label: "Radon Mitigation",
      href: "/service/radon-mitigation",
      areas: uniqueAreas,
    },
    {
      label: "Multi-Surface Cleaning",
      href: "/service/multi-surface-cleaning",
      areas: uniqueAreas,
    },
  ];

  return (
    <>
      {/* Fixed Logo Pill - Left Side */}
      <div className="fixed top-10 left-10 z-[100] hidden lg:block">
        <Link href="/" className="flex items-center bg-white/95 backdrop-blur-xl px-6 py-4 rounded-full shadow-2xl border border-white/20 transition-transform hover:scale-105 active:scale-95">
          {logoImage || "/logo.png" ? (
            <Image
              src={logoImage || "/logo.png"}
              alt={businessName || "Logo"}
              width={150}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
            />
          ) : (
            <span className="text-xl font-bold tracking-tight text-gray-900">
              {businessName || "Restoration"}
            </span>
          )}
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav className="fixed top-10 right-10 lg:right-20 z-[100] hidden lg:block">
        <div className="bg-white/95 backdrop-blur-xl px-8 py-4 rounded-full shadow-2xl border border-white/20">
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm tracking-wide"
            >
              About
            </Link>
            <Link
              href="/service"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm tracking-wide"
            >
              Services
            </Link>
            <div className="relative group">
              <Link
                href="/serving-areas"
                className="cursor-pointer text-gray-600 hover:text-black transition-colors font-medium text-sm tracking-wide"
              >
                Serving Areas
              </Link>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute left-0 mt-6 bg-white/98 text-gray-900 rounded-3xl shadow-2xl backdrop-blur-md z-50 overflow-hidden border border-gray-100 min-w-[450px]">
                <div className="flex flex-col lg:flex-row">
                  <div className="py-4 lg:w-1/2 bg-gray-50/50 border-r border-gray-100">
                    {servingAreaGroups.map((item, index) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onMouseEnter={() => setActiveServiceIndex(index)}
                        className={`flex w-full items-center justify-between px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all ${isMounted && activeServiceIndex === index
                          ? "bg-white text-black shadow-sm"
                          : "hover:bg-white/50 text-gray-400"
                          }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-lg">›</span>
                      </Link>
                    ))}
                  </div>
                  <div className="py-4 lg:w-1/2 bg-white max-h-[400px] overflow-y-auto custom-scrollbar">
                    {isMounted && activeServiceIndex !== null && servingAreaGroups[activeServiceIndex]?.areas.map((area: ServiceArea, index: number) => {
                      const group = servingAreaGroups[activeServiceIndex!];
                      const areaSlug = areaToSlug(area, group.href);

                      return (
                        <Link
                          key={`${area.city}-${area.region}-${index}`}
                          href={`${group.href}/service-areas/${areaSlug}`}
                          className="block px-6 py-3 text-sm text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          {formatAreaLabel(area)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm tracking-wide"
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-600 hover:text-black transition-colors font-medium text-sm tracking-wide"
            >
              Contact
            </Link>
            <Link
              href={phoneNumber ? `tel:${phoneNumber}` : "#"}
              className="text-white px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: themeData?.primaryColor || '#003366' }}
            >
              Call Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Logo Pill */}
      <div className="lg:hidden fixed top-8 left-8 z-[100]">
        <Link href="/" className="flex items-center bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-xl border border-white/40">
          {logoImage || "/logo.png" ? (
            <Image
              src={logoImage || "/logo.png"}
              alt={businessName || "Logo"}
              width={120}
              height={32}
              className="h-6 w-auto object-contain"
            />
          ) : (
            <span className="text-lg font-bold tracking-tight text-gray-900">
              {businessName || "Restoration"}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Trigger & Overlay */}
      <div className="lg:hidden fixed top-8 right-8 z-[100]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-xl border border-white/40 text-gray-900"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-[-1] backdrop-blur-2xl flex items-center justify-center animate-in fade-in zoom-in duration-300"
            style={{ backgroundColor: `${themeData?.primaryColor || '#003366'}F5` }}
          >
            <div className="flex flex-col items-center space-y-8 text-3xl font-serif text-white">
              <Link onClick={() => setIsOpen(false)} href="/" className="hover:italic transition-all">Home</Link>
              <Link onClick={() => setIsOpen(false)} href="/about" className="hover:italic transition-all">About</Link>
              <Link onClick={() => setIsOpen(false)} href="/service" className="hover:italic transition-all">Services</Link>
              <Link onClick={() => setIsOpen(false)} href="/blog" className="hover:italic transition-all">Blog</Link>
              <Link onClick={() => setIsOpen(false)} href="/contact-us" className="hover:italic transition-all">Contact</Link>
              <Link
                href={phoneNumber ? `tel:${phoneNumber}` : "#"}
                className="bg-white text-xl mt-6 shadow-2xl px-10 py-5 rounded-full font-sans font-bold"
                style={{ color: themeData?.primaryColor || '#003366' }}
              >
                Call Us Now
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Areas Modal */}
      {showAreasModal && (
        <div className="fixed inset-0 z-[110] overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowAreasModal(false)}
          />
          <div className="flex min-h-screen items-center justify-center p-4">
            <div
              className="relative w-full max-w-md max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden"
              style={{
                background: themeData
                  ? `linear-gradient(135deg, ${themeData.primaryColor}, ${(themeData.secondaryColor || themeData.primaryColor)}cc)`
                  : "linear-gradient(135deg, #1f2937, #111827)",
                border: themeData ? `1px solid ${(themeData.secondaryColor || themeData.primaryColor)}40` : "1px solid #374151"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Service Areas</h2>
                  <button
                    onClick={() => setShowAreasModal(false)}
                    className="p-2 -mr-2 text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  {servingAreaGroups.map((group) => (
                    <div key={group.href} className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 pb-2 text-white border-b border-white/20">
                        {group.label}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {group.areas.map((area) => {
                          const areaSlug = areaToSlug(area, group.href);
                          return (
                            <Link
                              key={`${area.city}-${area.region}-${group.href}`}
                              href={`${group.href}/service-areas/${areaSlug}`}
                              onClick={() => {
                                setIsOpen(false);
                                setShowAreasModal(false);
                              }}
                              className="block px-3 py-2 text-sm text-white/90 hover:text-white rounded-lg transition-colors text-center bg-white/5 hover:bg-white/10 border border-white/10"
                            >
                              {formatAreaLabel(area)}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-white/10 bg-black/30">
                <button
                  onClick={() => setShowAreasModal(false)}
                  className="w-full py-2 px-4 rounded-lg transition-colors font-medium bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
