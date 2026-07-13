"use client";

import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { ServiceHighlightsContent } from "@/types/template";
import { useEffect } from "react";

interface ServiceHighlightsSectionProps {
  data: ServiceHighlightsContent;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
  };
}

export default function ServiceHighlightsSection({
  data,
  theme,
}: ServiceHighlightsSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.1 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.1 });
  const { ref: servicesRef, visibleItems } = useStaggeredAnimation(
    data.services.length,
    100
  );

  const primaryColor = theme?.primaryColor || '#3b2b20';
  const secondaryColor = theme?.secondaryColor || '#6f6258';

  useEffect(() => {
    console.log('[ServiceHighlightsSection] rendered', {
      title: data?.title,
      services: data?.services?.length
    });
  }, [data]);

  return (
    <section id="service-highlights" className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 lg:mb-24 gap-8">
          <div className="max-w-3xl">
            <h2
              ref={titleRef}
              className={`text-4xl md:text-5xl lg:text-7xl font-serif font-light leading-tight tracking-tight transition-all duration-1000 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ color: primaryColor }}
            >
              {data.title}
            </h2>
          </div>
          <div className="max-w-sm lg:text-right">
            <p
              ref={descRef}
              className={`text-lg transition-all duration-1000 delay-300 font-sans font-light opacity-70 ${descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ color: secondaryColor }}
            >
              {data.description}
            </p>
          </div>
        </div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {data.services?.map((service, index) => (
            <div
              key={`service-${index}`}
              className={`group transition-all duration-1000 transform ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
            >
              <div
                className="rounded-[40px] p-10 h-full shadow-sm hover:shadow-xl transition-all duration-500 border hover:border-transparent flex flex-col justify-between group-hover:-translate-y-2"
                style={{ backgroundColor: `${secondaryColor}10`, borderColor: `${secondaryColor}20` }}
              >
                <div className="space-y-6">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-2xl font-serif font-light italic text-center"
                    style={{ color: primaryColor, backgroundColor: `${primaryColor}10` }}
                  >
                    {service.description.replace(/[^0-9+%/]/g, "")}
                  </div>
                  <h3 className="text-2xl font-serif font-light leading-tight tracking-tight pt-2" style={{ color: primaryColor }}>
                    {service.name}
                  </h3>
                </div>
                <div className="mt-12 overflow-hidden">
                  <div className="w-full h-[2px] relative" style={{ backgroundColor: `${primaryColor}10` }}>
                    <div
                      className="absolute inset-0 transition-transform duration-700 -translate-x-full group-hover:translate-x-0"
                      style={{ backgroundColor: primaryColor }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
