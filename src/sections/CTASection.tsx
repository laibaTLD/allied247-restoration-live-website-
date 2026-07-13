"use client";

import React, { useRef, useState, useEffect } from 'react';
import { CTAContent, ThemeData, Image } from '@/types/template';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTASectionProps {
  data: CTAContent;
  theme?: ThemeData;
  images?: Image[];
}

const CTASection: React.FC<CTASectionProps> = ({ data, theme, images }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const primaryColor = theme?.primaryColor || '#3b2b20';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Find suitable background image
  const ctaImage = images?.find(img => img.category === "cta" || img.slotName === "cta")
    || images?.[0];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] py-20 flex items-center justify-center overflow-hidden"
      style={{ clipPath: 'inset(0)' }}
    >
      {/* 
          Fixed Reveal Background 
          The image stays fixed while the section "reveals" it during scroll.
      */}
      <div
        className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${ctaImage?.imageUrl || data.backgroundImage?.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          visibility: isIntersecting ? 'visible' : 'hidden',
          opacity: isIntersecting ? 1 : 0,
          zIndex: -1,
          transform: 'scale(1.1)'
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 mix-blend-multiply opacity-80"
          style={{ backgroundColor: primaryColor }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div
          ref={contentRef}
          className={`max-w-5xl mx-auto text-center space-y-5 transition-all duration-1000 transform ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
        >
          {/* Tagline */}
          <div className="flex justify-center items-center space-x-4">
            <div className="h-px w-8 bg-white/40" />
            <span
              className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-white/80 font-sans"
            >
              {data.subHeading || 'Your Journey'}
            </span>
            <div className="h-px w-8 bg-white/40" />
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight tracking-tight text-white drop-shadow-2xl"
          >
            {data.heading}
          </h2>

          {/* Description */}
          <p
            className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-sans font-light"
          >
            {data.description}
          </p>

          {/* Action Button */}
          {data.ctaButton && (
            <div className="pt-4">
              <a
                href={data.ctaButton.href}
                className="group relative inline-block px-14 py-6 rounded-full text-white font-serif font-light italic text-2xl overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <div
                  className="absolute inset-0 backdrop-blur-md border border-white/20 transition-colors duration-500 group-hover:bg-white"
                  style={{ backgroundColor: `${primaryColor}CC` }}
                />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-sans font-medium">
                  {data.ctaButton.label}
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
