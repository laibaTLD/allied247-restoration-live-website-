"use client";

import React from "react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface ServiceArea {
  city: string;
  region: string;
  description?: string;
}

interface ThemeData {
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
}

interface ServiceAreasSectionProps {
  serviceAreas?: ServiceArea[];
  themeData?: ThemeData;
}

export default function ServiceAreasSection({
  serviceAreas,
  themeData,
}: ServiceAreasSectionProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const uniqueServiceAreas =
    serviceAreas?.filter((area, index, self) => {
      const key = `${area.city}-${area.region}`.toLowerCase();
      return (
        index ===
        self.findIndex(
          (other) =>
            `${other.city}-${other.region}`.toLowerCase() === key
        )
      );
    }) || [];

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: staggeredRef, visibleItems } = useStaggeredAnimation(uniqueServiceAreas.length || 0, 80);

  // Combine refs for the container
  const combinedRef = (node: HTMLDivElement) => {
    staggeredRef.current = node;
    scrollRef.current = node;
  };

  const primaryColor = themeData?.primaryColor || '#3b2b20';
  const secondaryColor = themeData?.secondaryColor || '#6f6258';
  const sectionBg = '#FFFFFF'; // Clean white for contrast

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!uniqueServiceAreas || uniqueServiceAreas.length === 0) return null;

  return (
    <section id="service-areas" className="relative py-6 sm:py-8 md:py-10" style={{ backgroundColor: sectionBg }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">

        {/* Section Header with Navigation */}
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 transition-all duration-1000 transform ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light leading-tight tracking-tight mb-6" style={{ color: primaryColor }}>
              Areas We Serve
            </h2>
            <p className="text-base md:text-lg lg:text-xl opacity-70 leading-relaxed font-sans font-light" style={{ color: secondaryColor }}>
              Bringing our professional wellness services directly to your neighborhood across the region.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              style={{ borderColor: `${primaryColor}20` }}
            >
              <span className="text-2xl">←</span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              style={{ borderColor: `${primaryColor}20` }}
            >
              <span className="text-2xl">→</span>
            </button>
          </div>
        </div>

        {/* Areas List in One Line */}
        <div
          ref={combinedRef}
          className="flex flex-row items-start gap-12 overflow-x-auto pb-8 no-scrollbar scroll-smooth"
        >
          {uniqueServiceAreas.map((area, index) => (
            <div
              key={index}
              className={`flex-shrink-0 transition-all duration-1000 transform ${visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            >
              <div className="group space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <h3
                    className="text-xl md:text-2xl font-serif font-light leading-tight tracking-tight"
                    style={{ color: primaryColor }}
                  >
                    {area.city}
                  </h3>
                </div>
                <div className="pl-4.5">
                  <p
                    className="text-sm uppercase tracking-widest opacity-50 font-sans font-medium"
                    style={{ color: secondaryColor }}
                  >
                    {area.region}
                  </p>
                  {area.description && (
                    <p className="mt-3 text-sm opacity-60 leading-relaxed max-w-xs font-sans font-light" style={{ color: secondaryColor }}>
                      {area.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-24 lg:mt-12 pt-5 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
          <div className="flex items-center space-x-4">
            <span className="w-12 h-px bg-current" />
            <span className="text-xs uppercase tracking-[0.3em] text-black">Currently Serving These Regions</span>
          </div>
          <p className="text-xs font-serif italic text-right text-black">Always expanding to reach more clients.</p>
        </div>
      </div>
    </section>
  );
}
