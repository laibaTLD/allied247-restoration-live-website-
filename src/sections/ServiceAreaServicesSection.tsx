"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Image as ImageType } from "@/types/template";
import Image from "next/image";

interface ServiceItem {
  heading: string;
  description: string;
}

interface ServiceAreaServicesSectionProps {
  title: string;
  description: string;
  services: ServiceItem[]; // Updated to match the actual data structure
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
  images: ImageType[];
}

export default function ServiceAreaServicesSection({
  title,
  description,
  services,
  theme,
  images,
}: ServiceAreaServicesSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || "#14532d";

  // Get the first image for the left side
  const mainImage = images[0]?.imageUrl || "/images/image-1.webp";
  const mainImageAlt = images[0]?.altText || "Junk removal services";

  return (
    <section id="services" className="relative bg-white py-6 sm:py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h2
            ref={titleRef}
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 transition-all duration-700 italic leading-tight sm:leading-tight md:leading-tight ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 sm:translate-y-8"
              }`}
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <p
            ref={descRef}
            className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 transition-all duration-700 delay-200 italic leading-relaxed ${descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 sm:translate-y-8"
              }`}
          >
            {description}
          </p>
        </div>

        {/* Image and Services Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Side - Image */}
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 2xl:h-[500px] order-1 xl:order-1 xl:sticky xl:top-6 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={mainImage}
              alt={mainImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Side - Services */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 xl:order-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-5 md:p-6 lg:p-7 rounded-lg sm:rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif leading-tight sm:leading-tight md:leading-tight mb-2 sm:mb-3 md:mb-4 text-neutral-900 italic"
                  style={{ color: primaryColor }}
                >
                  {service.heading}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
