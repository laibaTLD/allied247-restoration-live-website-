"use client";

import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { ThemeData } from "@/types/template";

interface ServiceAreaIntroSectionProps {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  theme?: ThemeData;
}

const ServiceAreaIntroSection: React.FC<ServiceAreaIntroSectionProps> = ({ 
  title, 
  paragraphs, 
  bullets, 
  theme 
}) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  
  // Create sections data for staggered animation
  const sectionsData = bullets ? bullets.map(bullet => ({ 
    text: bullet,
    icon: getIconForIndex(bullets.indexOf(bullet))
  })) : [];
  
  const { ref: sectionsRef, visibleItems: sectionsVisible } = useStaggeredAnimation(sectionsData.length, 150);

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || '#1a1a1a';
  const secondaryColor = theme?.secondaryColor || '#6b7280';
  const accentColor = theme?.accentColor || primaryColor;

  // Get icon for bullet point
  function getIconForIndex(index: number) {
    const icons = [
      'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Check circle
      'M13 10V3L4 14h7v7l9-11h-7z', // Lightning bolt
      'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4', // Cog
      'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', // Chart
      'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', // Star
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' // Users
    ];
    return icons[index % icons.length];
  }

  return (
    <section
      id="service-area-intro"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#fafafa]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${primaryColor} 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 text-neutral-900 italic transition-all duration-1000 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          <div className="max-w-4xl mx-auto">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                ref={index === 0 ? descRef : undefined}
                className={`text-lg md:text-xl text-neutral-600 font-light leading-relaxed mb-6 transition-all duration-1000 ${
                  index === 0 && descVisible
                    ? "opacity-100 translate-y-0"
                    : index === 0
                    ? "opacity-0 translate-y-8"
                    : "opacity-90"
                }`}
                style={{ 
                  color: secondaryColor,
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        {sectionsData.length > 0 && (
          <div ref={sectionsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectionsData.map((section, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  sectionsVisible.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="relative h-full px-6 py-7 bg-white rounded-2xl transition-all duration-500 border group-hover:-translate-y-1"
                  style={{
                    borderColor: `${primaryColor}1a`,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.06)'
                  }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}15, ${accentColor}10)`,
                        border: `1px solid ${primaryColor}20`
                      }}
                    >
                      <svg 
                        className="w-7 h-7 transition-colors duration-300" 
                        style={{ color: primaryColor }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 
                    className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300"
                    style={{ color: primaryColor }}
                  >
                    {section.text.split(' - ')[0] || section.text}
                  </h3>
                  
                  {section.text.includes(' - ') && (
                    <p 
                      className="text-sm md:text-base text-neutral-600 font-light leading-relaxed"
                      style={{ color: secondaryColor }}
                    >
                      {section.text.split(' - ')[1]}
                    </p>
                  )}

                  {/* Hover Effect Background */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`
                    }}
                  />
                </div>

                {/* Floating Accent */}
                <div 
                  className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
                    animationDelay: `${index * 200}ms`
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Bottom Accent Line */}
        <div className="mt-16 flex justify-center">
          <div 
            className="h-1 w-24 rounded-full transition-all duration-1000"
            style={{
              background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
              opacity: titleVisible ? 1 : 0,
              transitionDelay: '600ms'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaIntroSection;
