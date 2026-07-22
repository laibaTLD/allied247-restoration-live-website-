"use client";

import React from "react";
import NextImage from "next/image";
import { motion } from "framer-motion";
import { ThemeData } from "@/types/template";

interface ServiceOverlayCardSectionProps {
  heading: string;
  description: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  secondImage?: {
    src: string;
    alt: string;
  };
  theme?: ThemeData;
}

export default function ServiceOverlayCardSection({
  heading,
  description,
  backgroundImage,
  secondImage,
  theme,
}: ServiceOverlayCardSectionProps) {
  const primaryColor = theme?.primaryColor || "#1a1a1a";
  const secondaryColor = theme?.secondaryColor || "#6b7280";

  // Calculate text length to determine optimal layout
  const textLength = heading.length + description.length;
  const isLongText = textLength > 500;
  const isVeryLongText = textLength > 1000;
  
  // Dynamic grid layout based on text length
  const gridCols = isVeryLongText ? "lg:grid-cols-12" : isLongText ? "lg:grid-cols-12" : "lg:grid-cols-12";
  const textColSpan = isVeryLongText ? "lg:col-span-6" : isLongText ? "lg:col-span-5" : "lg:col-span-4";
  const imageColSpan = isVeryLongText ? "lg:col-span-6" : isLongText ? "lg:col-span-7" : "lg:col-span-8";
  
  // Dynamic aspect ratio based on text length
  const imageAspectRatio = isVeryLongText ? "aspect-[3/2]" : isLongText ? "aspect-[4/3]" : "aspect-video";
  const secondImageAspectRatio = isVeryLongText ? "aspect-[3/2]" : isLongText ? "aspect-[4/3]" : "aspect-video";

  return (
    <section className="relative w-full py-6 sm:py-8 md:py-10 overflow-hidden bg-[#fafafa]">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${primaryColor} 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className={`grid grid-cols-1 ${gridCols} gap-10 lg:gap-16 items-start`}>
          {/* Left side: Heading and Description */}
          <div className={`${textColSpan} order-2 lg:order-1`}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2
                className={`font-serif leading-[1.1] mb-8 text-neutral-900 italic ${
                  isVeryLongText
                    ? "text-3xl md:text-4xl"
                    : isLongText
                      ? "text-4xl md:text-5xl"
                      : "text-4xl md:text-5xl lg:text-6xl"
                }`}
                style={{ color: primaryColor }}
              >
                {heading}
              </h2>

              <div
                className="text-base md:text-lg text-neutral-600 font-light leading-relaxed space-y-4"
                style={{ color: secondaryColor }}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </motion.div>
          </div>

          {/* Right side: Images */}
          <div className={`${imageColSpan} h-full flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12`}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className={`relative w-full ${imageAspectRatio} rounded-2xl overflow-hidden border`}
              style={{
                borderColor: `${primaryColor}1a`,
                boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
              }}
            >
              <NextImage
                src={backgroundImage.src}
                alt={backgroundImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
            {secondImage && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className={`relative w-full ${secondImageAspectRatio} rounded-2xl overflow-hidden border`}
                style={{
                  borderColor: `${primaryColor}1a`,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
                }}
              >
                <NextImage
                  src={secondImage.src}
                  alt={secondImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
