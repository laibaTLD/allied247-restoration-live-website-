"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AboutSectionProps {
  title: string;
  description: string;
  features: string[];
  ctaButton: {
    href: string;
    label: string;
  };
  image?: string;
  images?: Array<{
    slotName: string;
    imageUrl: string;
    category?: string;
    altText?: string;
  }>;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
  };
  businessName?: string;
}

export default function AboutSection({
  title,
  description,
  features,
  ctaButton,
  images = [],
  theme,
  businessName,
}: AboutSectionProps) {
  const { ref: contentRef, isVisible: contentVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const primaryColor = theme?.primaryColor || '#3b2b20';
  const secondaryColor = theme?.secondaryColor || '#6f6258';

  const aboutImage = images.find((img) => img.category === 'about' || img.slotName === 'about')?.imageUrl || images[0]?.imageUrl || "/images/about.jpg";

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT SIDE: Image with unique framing */}
          <div
            ref={contentRef}
            className={`relative w-full lg:w-1/2 transition-all duration-1000 transform ${contentVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-tl-[120px] rounded-br-[120px] overflow-hidden shadow-2xl">
              <Image
                src={aboutImage}
                alt="About our clinic"
                fill
                className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 opacity-20" style={{ borderColor: primaryColor }} />
          </div>

          {/* RIGHT SIDE: Typography & Content */}
          <div
            className={`w-full lg:w-1/2 space-y-10 transition-all duration-1000 delay-300 transform ${contentVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
          >
            <div className="space-y-6">
              <span
                className="inline-block text-sm font-bold tracking-[0.2em] uppercase opacity-60 font-sans"
                style={{ color: secondaryColor }}
              >
                About {businessName || 'Us'}
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-tight"
                style={{ color: primaryColor }}
              >
                {title}
              </h2>
            </div>

            <div className="space-y-8">
              <p
                className="text-lg md:text-xl leading-relaxed opacity-80 font-sans max-w-xl"
                style={{ color: secondaryColor }}
              >
                {description}
              </p>

              {features && features.length > 0 && (
                <div className="space-y-4">
                  <div className="w-12 h-px bg-current opacity-20" style={{ backgroundColor: primaryColor }} />
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm opacity-70 font-sans" style={{ color: secondaryColor }}>
                        <span className="w-1.5 h-1.5 rounded-full opacity-40" style={{ backgroundColor: primaryColor }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {ctaButton && (
              <div className="pt-4">
                <a
                  href={ctaButton.href}
                  className="group relative inline-flex items-center gap-4 text-lg font-medium transition-all font-sans"
                  style={{ color: primaryColor }}
                >
                  <span className="relative z-10">{ctaButton.label}</span>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-110 group-hover:translate-x-2"
                    style={{ backgroundColor: `${primaryColor}10` }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
