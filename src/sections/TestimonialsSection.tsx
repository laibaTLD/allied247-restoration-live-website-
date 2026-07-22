"use client";

import React from 'react';
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  company: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
}

export default function TestimonialsSection({ title, description, testimonials, theme }: TestimonialsSectionProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: listRef, visibleItems } = useStaggeredAnimation(testimonials.length, 150);

  const primaryColor = theme?.primaryColor || '#3b2b20';
  const secondaryColor = theme?.secondaryColor || '#6f6258';

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative py-6 sm:py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: Client Stories Title & Intro */}
          <div
            ref={headerRef}
            className={`lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8 transition-all duration-1000 transform ${headerVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-serif font-light leading-tight tracking-tight" style={{ color: primaryColor }}>
                {title || 'Client Stories'}
              </h2>
              <p className="text-base md:text-lg opacity-80 leading-relaxed font-sans font-light" style={{ color: secondaryColor }}>
                {description}
              </p>
            </div>
          </div>

          {/* Right Column: Stacked Testimonial Cards */}
          <div ref={listRef} className="lg:w-2/3 space-y-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 transform ${visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
              >
                <div
                  className="rounded-[40px] p-8 lg:p-10 space-y-6 shadow-sm hover:shadow-xl transition-shadow duration-500"
                  style={{ backgroundColor: `${primaryColor}08` }}
                >
                  <blockquote
                    className="text-xl md:text-2xl font-serif font-light italic leading-relaxed"
                    style={{ color: primaryColor }}
                  >
                    &quot;{testimonial.text}&quot;
                  </blockquote>

                  <div className="space-y-1">
                    <h4
                      className="text-base font-bold font-sans tracking-wide"
                      style={{ color: primaryColor }}
                    >
                      {testimonial.name}
                    </h4>
                    {testimonial.role && (
                      <p className="text-xs opacity-60 font-sans tracking-widest uppercase font-light" style={{ color: secondaryColor }}>
                        {testimonial.role} {testimonial.company ? `• ${testimonial.company}` : ''}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
