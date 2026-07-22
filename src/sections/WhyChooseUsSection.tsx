"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { ThemeData } from "@/types/template";

interface WhyChooseUsSectionProps {
  title: string;
  paragraphs: string[];
  bullets: string[];
  theme?: ThemeData;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ 
  title, 
  paragraphs, 
  bullets, 
  theme 
}) => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: sectionsRef, visibleItems: sectionsVisible } = useStaggeredAnimation(bullets.length, 200);

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || '#000000';
  const secondaryColor = theme?.secondaryColor || '#666666';
  const accentColor = theme?.accentColor || primaryColor;

  // Hardcoded service area images
  const serviceImages = [
    "/images/0E57FD15-6FA3-40B4-AA72-42E8BA64D39D.jpg",
    "/images/2731F45D-D0C7-47E9-96CE-9B4FF6AA2DD7.jpg",
    "/images/5A25E868-EB83-496C-BD1F-85B92A5F2520.jpg",
    "/images/628DCDE6-DF6E-4E7C-B1C6-30674A563BC7.jpg",
    "/images/665442E0-A7E2-4037-8B09-20C5E1FA97DB.jpg",
    "/images/AEF3404F-1A77-40EC-9E38-C2F46D45A61A.jpg",
  ];

  // Helper function to get image by index
  const getImageByIndex = (index: number) => {
    return {
      id: `why-choose-${index}`,
      slotName: `why-choose-image-${index + 1}`,
      title: "Why Choose Us",
      altText: "Why Choose Us Image",
      imageUrl: serviceImages[index % serviceImages.length],
      category: "why-choose",
    };
  };

  // Process bullets into sections
  const sectionsData = bullets.map((bullet, index) => {
    const [heading, description] = bullet.includes(' - ') 
      ? [bullet.split(' - ')[0], bullet.split(' - ')[1]] 
      : [bullet, bullet];
    
    return {
      heading,
      description,
      image: getImageByIndex(index)
    };
  });

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-white"
    >
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-12">
            <h2
              ref={titleRef}
              className={`text-display-lg sm:text-display-xl md:text-display-xl lg:text-display-xl mb-6 transition-all duration-1000 ${
                titleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                color: primaryColor,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              {title}
            </h2>
            <p
              ref={descRef}
              className={`text-description-lg sm:text-description-xl md:text-description-xl max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                descVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                color: secondaryColor,
                textShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
              {paragraphs[0]}
            </p>
          </div>

          {/* Why Choose Us Sections */}
          <div ref={sectionsRef} className="space-y-20 lg:space-y-32">
            {sectionsData.map((section, index) => {
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-1000 ${
                    sectionsVisible.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredSection(index)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
                    {/* Section Image */}
                    {section.image && (
                      <div className="flex-1 w-full lg:max-w-lg">
                        <div className="relative group/image">
                          {/* Decorative Background */}
                          <div
                            className="absolute inset-0 rounded-3xl transform rotate-2 group-hover/image:rotate-3 transition-transform duration-500"
                            style={{
                              background: `linear-gradient(135deg, ${primaryColor}20, ${accentColor}15)`,
                              boxShadow: `0 20px 40px ${primaryColor}20`
                            }}
                          ></div>

                          {/* Image Container */}
                          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                              src={section.image.imageUrl}
                              alt={section.image.altText || section.heading}
                              width={600}
                              height={400}
                              className="w-full h-80 lg:h-96 object-cover transform -rotate-1 group-hover/image:-rotate-2 transition-transform duration-500 group-hover/image:scale-105"
                              loading="lazy"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>

                            {/* Image Badge */}
                            <div
                              className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                              style={{
                                background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                                color: '#ffffff',
                                boxShadow: `0 4px 15px ${primaryColor}30`
                              }}
                            >
                              {index + 1}
                            </div>

                            {/* Hover Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                              <div
                                className="w-16 h-16 rounded-full flex items-center justify-center"
                                style={{
                                  background: 'rgba(255, 255, 255, 0.2)',
                                  backdropFilter: 'blur(10px)'
                                }}
                              >
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Floating Decorative Elements */}
                          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-pulse"
                            style={{ background: primaryColor, animationDelay: `${index * 0.5}s` }}></div>
                          <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full animate-pulse"
                            style={{ background: secondaryColor, animationDelay: `${index * 0.7}s` }}></div>
                        </div>
                      </div>
                    )}

                    {/* Section Content */}
                    <div className="flex-1 w-full lg:max-w-lg">
                      <div
                        className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 transition-all duration-500 group-hover:bg-white/15 group-hover:shadow-2xl"
                        style={{
                          boxShadow: hoveredSection === index
                            ? `0 25px 50px ${primaryColor}20, 0 0 0 1px ${primaryColor}30`
                            : `0 15px 35px ${primaryColor}15`
                        }}
                      >
                        {/* Content Header */}
                        <div className="mb-8">
                          <div className="flex items-center space-x-4 mb-6">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                              style={{
                                background: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%)`,
                                boxShadow: `0 8px 25px ${primaryColor}30`
                              }}
                            >
                              <span className="text-white font-bold text-lg">{index + 1}</span>
                            </div>
                            <h3
                              className="text-heading-lg lg:text-heading-xl font-bold transition-colors duration-300"
                              style={{
                                color: primaryColor,
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                              }}
                            >
                              {section.heading}
                            </h3>
                          </div>

                          <p
                            className="text-description-md lg:text-description-lg leading-relaxed transition-colors duration-300"
                            style={{
                              color: secondaryColor,
                              textShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
                            }}
                          >
                            {section.description}
                          </p>
                        </div>

                        {/* Content Decorative Elements */}
                        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full animate-pulse"
                          style={{ background: primaryColor, animationDelay: `${index * 0.5}s` }}></div>
                        <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full animate-pulse"
                          style={{ background: secondaryColor, animationDelay: `${index * 0.7}s` }}></div>

                        {/* Hover Glow Effect */}
                        {hoveredSection === index && (
                          <div
                            className="absolute inset-0 rounded-3xl opacity-20 transition-opacity duration-300 pointer-events-none"
                            style={{
                              background: `radial-gradient(circle, ${primaryColor}40 0%, transparent 70%)`,
                              filter: 'blur(20px)'
                            }}
                          ></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
