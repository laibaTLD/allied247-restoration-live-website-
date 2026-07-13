"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ThemeData } from "@/types/template";

interface ServiceAreaHeroSectionProps {
  serviceName: string;
  areaLabel: string;
  heading?: string;
  subheading?: string;
  description?: string;
  images?: Array<{
    id: string;
    imageUrl: string;
    slotName: string;
    altText: string;
    category?: string;
  }>;
  theme?: ThemeData;
  bullets?: { title: string; description: string }[];
}

export default function ServiceAreaHeroSection({
  serviceName,
  areaLabel,
  heading,
  subheading,
  description,
  images = [],
  theme,
}: ServiceAreaHeroSectionProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Filter hero images from the provided images array
  const dbHeroImages = images.filter(
    (img) =>
      img.slotName === "hero-image-1" ||
      img.slotName === "hero-image-2" ||
      img.slotName === "hero-image-3" ||
      img.category === "hero"
  );

  // Fallback images if no hero images are provided
  const fallbackHeroImages = [
    {
      id: "hero-local-1",
      slotName: "hero-image-1",
      altText: "Professional Iron Work",
      imageUrl: "/images/0E57FD15-6FA3-40B4-AA72-42E8BA64D39D.jpg",
    },
    {
      id: "hero-local-2",
      slotName: "hero-image-2",
      altText: "Custom Metal Fabrication",
      imageUrl: "/images/2731F45D-D0C7-47E9-96CE-9B4FF6AA2DD7.jpg",
    },
    {
      id: "hero-local-3",
      slotName: "hero-image-3",
      altText: "Structural Steel",
      imageUrl: "/images/5A25E868-EB83-496C-BD1F-85B92A5F2520.jpg",
    },
  ];

  const heroImages = dbHeroImages.length > 0 ? dbHeroImages : fallbackHeroImages;

  const mainImage = heroImages[0]?.imageUrl;
  const accentImage = heroImages[1]?.imageUrl;

  const primaryColor = theme?.primaryColor || "#0a0a0a";
  const secondaryColor = theme?.secondaryColor || "#4b5563";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#fafafa]"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center pt-24 md:pt-32">
        {/* LEFT SIDE: Typography & Content */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="inline-block text-sm font-bold tracking-[0.2em] uppercase mb-6"
              style={{ color: primaryColor }}
            >
              — {subheading || `${serviceName} in ${areaLabel}`}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 text-neutral-900 italic"
            >
              {heading || `${serviceName} Services in ${areaLabel}`}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed mb-10 max-w-md"
                style={{ color: secondaryColor }}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* RIGHT SIDE: Animated Imagery Layering */}
        <div className="relative h-[500px] md:h-[700px] w-full">
          {/* Main Large Image with Reveal Mask */}
          {mainImage && (
            <motion.div
              style={{ y: y1 }}
              className="absolute right-0 top-0 w-[85%] h-[90%] overflow-hidden rounded-2xl shadow-2xl"
            >
              <motion.div
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="w-full h-full"
              >
                <Image
                  src={mainImage}
                  alt={heroImages[0]?.altText || 'Main showcase'}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          )}

          {/* Smaller Accent Image (Floating) */}
          {accentImage && (
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute -left-4 bottom-10 w-[45%] h-[50%] z-20 overflow-hidden rounded-xl shadow-2xl border-8 border-white"
            >
              <Image
                src={accentImage}
                alt={heroImages[1]?.altText || 'Accent detail'}
                fill
                className="object-cover"
              />
            </motion.div>
          )}

          {/* Decorative Elements */}
          <div
            className="absolute -right-8 bottom-20 w-32 h-32 border-2 rounded-full opacity-20 animate-[spin_10s_linear_infinite]"
            style={{ borderColor: primaryColor }}
          />
        </div>
      </div>
    </section>
  );
}
