"use client";

import Image from "next/image";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";
import React, { useState } from "react";
import { ThemeData } from "@/types/template";

interface ServiceFeaturesSectionProps {
  title: string;
  description: string;
  features: string[];
  ctaButton?: {
    href: string;
    label: string;
  };
  image?: string;
  images?: Array<{
    slotName: string;
    imageUrl: string;
    altText?: string;
  }>;
  theme?: ThemeData;
}

const ServiceFeaturesSection: React.FC<ServiceFeaturesSectionProps> = ({
  title,
  description,
  features,
  ctaButton,
  image,
  theme,
}) => {

  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.2 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLParagraphElement>({ threshold: 0.2 });
  const { ref: featuresRef, visibleItems } = useStaggeredAnimation<HTMLUListElement>(
    features.length,
    100
  );

  // Theme colors with fallbacks
  const primaryColor = theme?.primaryColor || '#000000';
  const secondaryColor = theme?.secondaryColor || '#666666';

  // Animation state
  const [, setActiveFeature] = useState(0);

  // Hardcoded service images (reuse gallery images from public/images)
  const serviceImages = [
    {
      slotName: 'service-features',
      imageUrl: '/images/2731F45D-D0C7-47E9-96CE-9B4FF6AA2DD7.jpg',
      category: 'service-features'
    }
  ];

  return (
    <section
      id="service-features"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 min-h-screen overflow-hidden bg-white"
    >
      {/* Hero Section with Full-Width Background */}
      <div className="relative p-10 flex items-center justify-center">
        {/* Background Image/Video */}
        <div className="absolute inset-0 z-0">
          {serviceImages.length > 0 ? (
            <Image
              src={serviceImages[0].imageUrl}
              alt="Service features hero"
              fill
              className="object-cover"
              priority
            />
          ) : image ? (
            <Image
              src={image}
              alt="Service features hero"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
              }}
            />
          )}
          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>

        {/* Hero Content - Glassmorphism Card with two-column layout */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div
            className="rounded-3xl text-center border backdrop-blur-xl shadow-2xl px-8 py-10 md:px-12 md:py-12"
            style={{
              background: 'rgba(255,255,255,0.6)',
              borderColor: 'rgba(255,255,255,0.35)',
              boxShadow: `0 20px 60px ${primaryColor}26`
            }}
          >
            <h2
              ref={titleRef}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ color: primaryColor }}
            >
              {title}
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p
                  ref={descRef}
                  className={`text-lg md:text-xl mb-6 leading-relaxed transition-all duration-1000 delay-200 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ color: secondaryColor }}
                >
                  {description}
                </p>

                {ctaButton && (
                  <div className="transition-all duration-1000 delay-400">
                    <a
                      href={ctaButton.href}
                      className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-label-lg group transition-colors duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                      style={{ backgroundColor: primaryColor, color: '#ffffff' }}
                    >
                      {ctaButton.label}
                    </a>
                  </div>
                )}
              </div>

              {features && features.length > 0 && (
                <div>
                  <ul ref={featuresRef} className="space-y-3">
                    {features.map((feature, i) => (
                      <li
                        key={i}
                        className={`rounded-xl border-transparent hover:border-white hover:bg-white/20 px-5 border text-left py-3 transition-all duration-500 ${visibleItems.includes(i)
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                          }`}
                        style={{
                          borderColor: `${primaryColor}1a`,
                          color: primaryColor,
                          animationDelay: `${i * 0.1}s`
                        }}
                        onMouseEnter={() => setActiveFeature(i)}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceFeaturesSection;
