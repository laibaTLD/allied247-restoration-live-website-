"use client";

import React from 'react';
import Image from "next/image";
import { CompanyDetailsContent, Image as ImageType } from '@/types/template';
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface CompanyDetailsProps {
  data: CompanyDetailsContent;
  images?: ImageType[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ data, images, theme }) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: gridRef, visibleItems: gridVisible } = useStaggeredAnimation(data?.sections?.length || 0, 100);

  const primaryColor = theme?.primaryColor || '#3b2b20';
  const secondaryColor = theme?.secondaryColor || '#6f6258';

  if (!data || !data.sections || data.sections.length === 0) {
    return null;
  }

  const companyImages = Array.isArray(images) ? images : [];

  const getCardStyle = (index: number) => {
    const styles = [
      { bg: `${secondaryColor}10`, text: primaryColor },
      { bg: `${primaryColor}08`, text: primaryColor },
      { bg: primaryColor, text: '#FFFFFF' },
      { bg: `${secondaryColor}05`, text: primaryColor },
    ];
    return styles[index % styles.length];
  };

  return (
    <section id="company-details" className="relative py-6 sm:py-8 md:py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-20 space-y-8 transition-all duration-1000 transform ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight tracking-tight" style={{ color: primaryColor }}>
              {data.heading}
            </h2>
            <p className="text-xl md:text-2xl font-serif font-light italic opacity-80" style={{ color: secondaryColor }}>
              {data.description.split('.')[0]}.
            </p>
          </div>
          <p className="text-lg opacity-70 font-sans max-w-2xl mx-auto leading-relaxed" style={{ color: secondaryColor }}>
            {data.description.includes('.') ? data.description.substring(data.description.indexOf('.') + 1) : ''}
          </p>
        </div>

        {/* Staggered Grid Content */}
        <div ref={gridRef} className="columns-1 md:columns-2 gap-10 space-y-10">
          {data.sections.map((section, index) => {
            const style = getCardStyle(index);
            // Dynamic image selection from the DB images array


            const shouldRenderImageAfter = index === 1 || index === 3;
            // Get a specific image for the transition
            const transitionImage = companyImages[(index + 4) % companyImages.length];

            return (
              <React.Fragment key={index}>
                {/* Regular Treatment Card */}
                <div
                  className={`break-inside-avoid relative rounded-[40px] p-10 md:p-14 transition-all duration-1000 transform hover:-translate-y-2 hover:shadow-2xl ${gridVisible.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                  style={{ backgroundColor: style.bg, color: style.text }}
                >
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight tracking-tight pt-2">
                        {section.heading}
                      </h3>
                      <span className="block text-xs font-bold uppercase tracking-widest opacity-60 font-sans">
                        {section.heading.split(' ')[0]} Therapy
                      </span>
                    </div>
                    <p className="text-lg leading-relaxed opacity-80 font-sans">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Integrated High-End Image Card */}
                {shouldRenderImageAfter && transitionImage && (
                  <div
                    className={`break-inside-avoid relative rounded-[40px] overflow-hidden h-[450px] shadow-2xl transition-all duration-1000 transform hover:shadow-3xl ${gridVisible.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                      }`}
                  >
                    <Image
                      src={transitionImage.imageUrl}
                      alt={transitionImage.altText || "Treatment in progress"}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CompanyDetails;
