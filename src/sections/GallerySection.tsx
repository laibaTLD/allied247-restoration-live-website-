"use client";

import React from 'react';
import NextImage from "next/image";
import { Image } from "@/types/template";

interface GallerySectionProps {
  title?: string;
  description?: string;
  images?: Image[];
  theme?: {
    primaryColor: string;
    secondaryColor?: string;
  };
}

export default function GallerySection({ title, description, images, theme }: GallerySectionProps) {
  if (!images || images.length === 0) return null;

  const primaryColor = theme?.primaryColor || '#3b2b20';
  const secondaryColor = theme?.secondaryColor || '#6f6258';

  // Take up to 4 images to create a balanced full-width strip
  const displayImages = images.slice(0, 4);
  const colWidth = displayImages.length === 3 ? "w-1/3" : "w-1/2 md:w-1/4";

  return (
    <section id="gallery" className="w-full bg-white overflow-hidden py-6 sm:py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light leading-tight tracking-tight mb-6" style={{ color: primaryColor }}>
          {title || "Our Gallery"}
        </h2>
        {description && (
          <p className="text-base md:text-lg lg:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed font-sans font-light" style={{ color: secondaryColor }}>
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-wrap w-full">
        {displayImages.map((image, index) => (
          <div
            key={image.id || index}
            className={`relative ${colWidth} h-[300px] md:h-[400px] overflow-hidden group`}
          >
            <NextImage
              src={image.imageUrl}
              alt={image.altText || "Gallery Image"}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Minimal overlay on hover */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
