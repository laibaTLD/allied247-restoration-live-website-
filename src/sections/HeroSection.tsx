'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ThemeData } from '@/types/template';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: { href: string; label: string; };
  images?: Array<{ id: string; imageUrl: string; slotName: string; altText: string; category?: string; }>;
  theme?: ThemeData;
}

export default function HeroSection({
  title, subtitle, description, ctaButton, images = [], theme
}: HeroSectionProps) {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax effects for depth
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);


  const primaryColor = theme?.primaryColor || '#1a1a1a';


  const mainImage = images.find(img => img.slotName?.includes("hero-main"))?.imageUrl || images[0]?.imageUrl || "/images/hero.jpg";
  const accentImage = images.find(img => img.slotName?.includes("hero-accent"))?.imageUrl || images[1]?.imageUrl || "/images/accent.jpg";

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
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block text-sm font-bold tracking-[0.3em] uppercase mb-6"
              style={{ color: primaryColor }}
            >
              — {subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 text-neutral-900 italic"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed mb-10 max-w-md"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8"
            >
              <a
                href={ctaButton.href}
                className="group relative px-8 py-4 bg-neutral-900 text-white overflow-hidden rounded-full transition-transform active:scale-95"
              >
                <span className="relative z-10 mix-blend-difference">{ctaButton.label}</span>
                <motion.div
                  className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                />
              </a>

              <div className="h-[1px] w-24 bg-neutral-300 hidden md:block" />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Animated Imagery Layering */}
        <div className="relative h-[500px] md:h-[700px] w-full">
          {/* Main Large Image with Reveal Mask */}
          <motion.div
            style={{ y: y1 }}
            className="absolute right-0 top-0 w-[85%] h-[90%] overflow-hidden rounded-2xl shadow-2xl"
          >
            <motion.div
              initial={{ scale: 1.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Image
                src={mainImage}
                alt="Main showcase"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Smaller Accent Image (Floating) */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="absolute -left-4 bottom-10 w-[45%] h-[50%] z-20 overflow-hidden rounded-xl shadow-2xl border-8 border-white"
          >
            <Image
              src={accentImage}
              alt="Accent detail"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Decorative Elements */}
          <div
            className="absolute -right-8 bottom-20 w-32 h-32 border-2 rounded-full opacity-20 animate-[spin_10s_linear_infinite]"
            style={{ borderColor: primaryColor }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-neutral-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-400 to-transparent" />
      </motion.div>
    </section>
  );
}
