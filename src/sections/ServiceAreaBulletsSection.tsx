"use client";

import React from "react";
import { motion } from "framer-motion";
import { ThemeData } from "@/types/template";

type BulletItem = string | { title: string; description?: string };

function isBulletObject(item: BulletItem): item is { title: string; description?: string } {
  return typeof item === 'object' && item !== null && 'title' in item;
}

interface ServiceAreaBulletsSectionProps {
  bullets: BulletItem[];
  theme?: ThemeData;
}

const ServiceAreaBulletsSection: React.FC<ServiceAreaBulletsSectionProps> = ({
  bullets,
  theme,
}) => {
  if (!bullets || bullets.length === 0) return null;

  const primaryColor = theme?.primaryColor || "#1a1a1a";
  const secondaryColor = theme?.secondaryColor || "#6b7280";

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-[#fafafa]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {bullets.map((b, idx) => (
              <motion.li
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl border bg-white px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                style={{ borderColor: `${primaryColor}1a` }}
              >
                {(() => {
                  const titleText = isBulletObject(b) ? b.title : b;
                  const descText = isBulletObject(b) ? b.description : undefined;

                  return (
                    <>
                      <div className="flex items-start gap-4">
                        <span
                          className="mt-2 inline-block h-2 w-2 rounded-full"
                          style={{ backgroundColor: primaryColor }}
                        />

                        <div>
                          <div
                            className="text-base md:text-lg font-semibold text-neutral-900"
                            style={{ color: primaryColor }}
                          >
                            {titleText}
                          </div>

                          {descText && (
                            <p
                              className="mt-2 text-sm md:text-base text-neutral-600 font-light leading-relaxed"
                              style={{ color: secondaryColor }}
                            >
                              {descText}
                            </p>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaBulletsSection;
