import React from "react";
import Image from "next/image";
import { LandingPageData, ServiceArea } from "@/types/template";

interface Props {
  landingPageData: LandingPageData | null;
}

export default function ServicesAreas({ landingPageData }: Props) {
  // Get images from landing page data
  const images = landingPageData?.images || [];
  
  // Use hardcoded service areas for Arizona cities
  const areas: ServiceArea[] = [
    {
      city: "Peoria",
      region: "AZ",
      description: "Trusted junk removal experts serving Peoria families with professional debris hauling and same-day trash pickup services"
    },
    {
      city: "Phoenix", 
      region: "AZ",
      description: "Arizona's capital city junk removal specialists - comprehensive commercial and residential waste management solutions for Phoenix metro area"
    },
    {
      city: "Glendale",
      region: "AZ", 
      description: "Fast and affordable junk removal services for Glendale communities - expert furniture disposal and appliance recycling"
    },
    {
      city: "Sun City",
      region: "AZ",
      description: "Specialized senior-friendly junk removal services for Sun City retirement communities - gentle cleanouts and estate clearances"
    },
    {
      city: "Surprise",
      region: "AZ",
      description: "Rapidly growing Surprise AZ junk removal service - same-day trash hauling and construction debris cleanup for new developments"
    },
    {
      city: "Scottsdale",
      region: "AZ",
      description: "Premium junk removal and estate cleanout services for Scottsdale's luxury communities and upscale residential properties"
    }
  ];

  // Helper function to get image by slot name or category
  const getImageBySlot = (slotName: string, category?: string) => {
    return images.find(img => 
      img.slotName === slotName || 
      img.category === category ||
      img.slotName?.includes(slotName) ||
      img.title?.toLowerCase().includes(slotName.toLowerCase())
    );
  };

  // Theme colors with fallbacks
  const primaryColor = landingPageData?.themeData?.primaryColor || 'var(--color-primary)';
  const secondaryColor = landingPageData?.themeData?.secondaryColor || 'var(--color-secondary)';

  const hasAreas = Array.isArray(areas) && areas.length > 0;

  // Only render this section if service areas are provided in context
  if (!hasAreas) return null;

  return (
    <section id="service-areas" className="bg-white">
      <div className="mx-auto w-full md:max-w-[70vw] px-4 sm:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Arizona Service Areas
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Junk Butlers proudly serves all Arizona communities with professional junk removal, debris hauling, and eco-friendly disposal services.
        </p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas!.map((a, idx) => {
            // Get image for this service area
            const areaImage = getImageBySlot(a.city.toLowerCase(), 'service-area') || 
                            getImageBySlot(a.region.toLowerCase(), 'service-area') ||
                            getImageBySlot('service-area', 'service-area');
            
            return (
              <li key={idx} className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6">
                {areaImage && (
                  <div className="mb-4 rounded-lg overflow-hidden relative h-40">
                    <Image
                      src={areaImage.imageUrl}
                      alt={`${a.city} ${a.region} - ${areaImage.altText || a.description}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{
                      color: primaryColor,
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    {a.city}, {a.region}
                  </h3>
                  <p
                    className="text-gray-600 text-sm leading-relaxed"
                    style={{
                      color: secondaryColor,
                    }}
                  >
                    {a.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
