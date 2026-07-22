"use client";

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface Service {
  name: string;
  description: string;
  price: string;
  features: string[];
  slug?: string;
}

interface ServicesSectionProps {
  title: string;
  description: string;
  services: Service[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
  images?: Array<{ imageUrl: string; altText?: string }>;
}

const ServiceIcon = ({ name, description, color }: { name: string; description: string; color: string }) => {
  const text = `${name} ${description}`.toLowerCase();

  // Icon 1: Water / Droplet (for water damage/flooding)
  const WaterIcon = (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 44C32.8366 44 40 36.8366 40 28C40 15 24 4 24 4C24 4 8 15 8 28C8 36.8366 15.1634 44 24 44Z" fill={color} />
    </svg>
  );

  // Icon 2: Flame / Fire (for fire/smoke damage)
  const FireIcon = (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 44C24 44 34 39 34 29C34 19 24 4 24 4C24 4 14 19 14 29C14 39 24 44 24 44Z" fill={color} />
      <path d="M24 38C28 38 30 35 30 30C30 25 24 18 24 18C24 18 18 25 18 30C18 35 20 38 24 38Z" fill="white" fillOpacity="0.3" />
    </svg>
  );

  // Icon 3: Organic / Growth (for mold/mildew/holistic)
  const BioIcon = (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="8" fill={color} />
      <circle cx="12" cy="18" r="6" fill={color} />
      <circle cx="36" cy="18" r="6" fill={color} />
      <circle cx="24" cy="38" r="7" fill={color} />
    </svg>
  );

  // Icon 4: Structure / House (for reconstruction/building)
  const BuildIcon = (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L4 20V44H44V20L24 4ZM16 44V28H32V44H16Z" fill={color} />
    </svg>
  );

  // Icon 5: Cleaning / Sparkle (for surface cleaning)
  const CleanIcon = (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8L28 18L38 22L28 26L24 36L20 26L10 22L20 18L24 8Z" fill={color} />
      <circle cx="40" cy="12" r="4" fill={color} />
      <circle cx="8" cy="40" r="3" fill={color} />
    </svg>
  );

  // Icon 6: Shield / Safety (for mitigation/protection/testing)
  const SafeIcon = (
    <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L6 12V24C6 36 24 44 24 44C24 44 42 36 42 24V12L24 4Z" fill={color} />
    </svg>
  );

  if (text.includes('water') || text.includes('flood') || text.includes('leak')) return WaterIcon;
  if (text.includes('fire') || text.includes('smoke') || text.includes('burn')) return FireIcon;
  if (text.includes('mold') || text.includes('mildew') || text.includes('fungal')) return BioIcon;
  if (text.includes('reconstruction') || text.includes('build') || text.includes('repair')) return BuildIcon;
  if (text.includes('clean') || text.includes('sanitize') || text.includes('surface')) return CleanIcon;
  if (text.includes('mitigation') || text.includes('radon') || text.includes('safety') || text.includes('test')) return SafeIcon;

  // Fallback to cycling holistic icons if no keywords match
  const fallbackIcons = [
    <svg key="f1" className="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 44C34 44 40 36 40 26C40 16 34 8 24 8C14 8 8 16 8 26C8 36 14 44 24 44Z" fill={color} />
      <path d="M24 4C24 4 20 8 20 12C20 16 24 20 24 20C24 20 28 16 28 12C28 8 24 4 24 4Z" fill={color} />
    </svg>,
    <svg key="f2" className="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="6" fill={color} />
      <path d="M24 12C24 12 28 4 24 4C20 4 24 12 24 12Z" fill={color} />
      <path d="M24 36C24 36 20 44 24 44C28 44 24 36 24 36Z" fill={color} />
      <path d="M34.39 18C34.39 18 41.32 14 43.32 17.46C45.32 20.93 34.39 21.46 34.39 21.46Z" fill={color} />
      <path d="M13.61 30C13.61 30 6.68 34 4.68 30.54C2.68 27.07 13.61 26.54 13.61 26.54Z" fill={color} />
    </svg>
  ];
  const charSum = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return fallbackIcons[charSum % fallbackIcons.length];
};

// Default fallback images that are confirmed to exist in /public/images
const DEFAULT_FALLBACK_IMAGES = [
  '/images/image-1.jpg',
  '/images/image-2.jpg',
  '/images/image-3.jpg',
  '/images/image-4.jpg',
  '/images/image-5.jpg',
];

const DecorativeImageSlider = ({ images, delay = 0 }: { images: Array<{ imageUrl: string; altText?: string }>, delay?: number }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [imagePool, setImagePool] = React.useState<string[]>([]);

  // Build image pool on mount - combine database images with fallbacks
  React.useEffect(() => {
    // Start with database images that have valid URLs
    const dbUrls = images
      .filter(img => img.imageUrl && typeof img.imageUrl === 'string' && img.imageUrl.trim() !== '')
      .map(img => img.imageUrl);
    
    // Always add fallback images to ensure we have enough
    const allImages = [...dbUrls, ...DEFAULT_FALLBACK_IMAGES];
    
    // Duplicate until we have at least 9 images for smooth cycling
    let pool = [...allImages];
    while (pool.length < 9) {
      pool = [...pool, ...allImages];
    }
    
    setImagePool(pool.slice(0, 12)); // Cap at 12 images
  }, [images]);

  // Cycle through images
  React.useEffect(() => {
    if (imagePool.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagePool.length);
    }, 2500 + delay);
    return () => clearInterval(interval);
  }, [imagePool.length, delay]);

  // If no images yet, show placeholder
  if (imagePool.length === 0) {
    return (
      <div className="absolute inset-0 w-full h-full bg-white/10 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/30 border-t-white/80 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      {imagePool.map((url, displayIdx) => (
        <div
          key={displayIdx}
          className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${displayIdx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          <img
            src={url}
            alt="Restoration service showcase"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              // If an image fails, try the next one
              const target = e.target as HTMLImageElement;
              const fallbackIdx = (displayIdx + 1) % DEFAULT_FALLBACK_IMAGES.length;
              target.src = DEFAULT_FALLBACK_IMAGES[fallbackIdx];
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
};

export default function ServicesSection({
  title,
  description,
  services,
  theme,
  images = [],
}: ServicesSectionProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const remainingSlots = (3 - (services.length % 3)) % 3;
  const totalGridItems = services.length + remainingSlots;
  const { ref: gridRef, visibleItems } = useStaggeredAnimation(totalGridItems, 100);

  const primaryColor = theme?.primaryColor || '#3b2b20';
  const secondaryColor = theme?.secondaryColor || '#6f6258';

  // Function to generate service detail page URL
  const getServiceUrl = (service: Service) => {
    if (service.slug) {
      return `/service/${service.slug}`;
    }
    // Fallback: generate slug from service name
    const slug = service.name.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    return `/service/${slug}`;
  };

  return (
    <section id="services" className="relative py-6 sm:py-8 md:py-10 overflow-hidden" style={{ backgroundColor: primaryColor }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">

        {/* Header Content */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-16 lg:mb-24 space-y-6 transition-all duration-1000 transform ${headerVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white font-light leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-sans">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex transition-all duration-1000 transform ${visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
            >
              <Link
                href={getServiceUrl(service)}
                className="w-full group"
              >
                <div
                  className="w-full bg-white rounded-[40px] p-8 lg:p-10 flex flex-col space-y-6 hover:-translate-y-2 transition-transform duration-500 shadow-xl group-hover:shadow-2xl cursor-pointer"
                >
                  {/* Icon area */}
                  <div className="pt-2">
                    <ServiceIcon name={service.name} description={service.description} color={primaryColor} />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <span
                        className="block text-xs font-bold uppercase tracking-[0.2em] opacity-40 font-sans"
                        style={{ color: primaryColor }}
                      >
                        {service.features[0] || 'Service Detail'}
                      </span>
                      <h3
                        className="text-2xl md:text-3xl font-serif font-light leading-tight tracking-tight"
                        style={{ color: primaryColor }}
                      >
                        {service.name}
                      </h3>
                    </div>
                    <p
                      className="text-sm md:text-base leading-relaxed opacity-70 font-sans line-clamp-4"
                      style={{ color: primaryColor }}
                    >
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Learn more indicator - links to service detail page */}
                  <div className="flex items-center text-sm font-sans" style={{ color: primaryColor }}>
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity underline-offset-2 group-hover:underline">Learn More</span>
                    <svg 
                      className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Decorative Image Slots with Auto-Cycling Gallery */}
          {Array.from({ length: remainingSlots }).map((_, i) => {
            const itemIndex = services.length + i;
            return (
              <div
                key={`decorative-${i}`}
                className={`hidden lg:flex transition-all duration-1000 transform ${visibleItems.includes(itemIndex) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                style={{ transitionDelay: `${itemIndex * 0.1}s` }}
              >
                <div className="w-full relative rounded-[40px] overflow-hidden shadow-xl min-h-[400px]">
                  <DecorativeImageSlider images={images} delay={i * 1200} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
