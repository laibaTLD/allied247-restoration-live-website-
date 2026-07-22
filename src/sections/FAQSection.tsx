"use client";

import React, { useState } from "react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

interface FAQSectionProps {
  title: string;
  description: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
}

export default function FAQSection({
  title,
  description,
  questions,
  theme,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: faqRef, visibleItems } = useStaggeredAnimation(questions.length, 100);

  const primaryColor = theme?.primaryColor || '#3b2b20';
  const secondaryColor = theme?.secondaryColor || '#6f6258';

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!questions || questions.length === 0) return null;

  return (
    <section id="faq" className="relative py-6 sm:py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-16 lg:mb-24 transition-all duration-1000 transform ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-light leading-tight tracking-tight mb-6" style={{ color: primaryColor }}>
            {title || 'Frequently Asked Questions'}
          </h2>
          <p className="text-base md:text-lg lg:text-xl opacity-80 leading-relaxed font-sans font-light" style={{ color: secondaryColor }}>
            {description}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div ref={faqRef} className="max-w-4xl space-y-4">
          {questions.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 transform ${visibleItems.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            >
              <div
                className="group border-b transition-all duration-500"
                style={{ borderBottomColor: `${primaryColor}20` }}
              >
                <button
                  className="w-full py-5 text-left flex items-center justify-between group"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3
                    className="text-lg md:text-2xl font-serif font-light leading-tight tracking-tight transition-colors duration-300 pr-8"
                    style={{ color: openIndex === index ? primaryColor : `${primaryColor}CC` }}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className={`relative w-8 h-8 flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  >
                    <div className="absolute w-6 h-[1.5px] bg-current" style={{ color: primaryColor }} />
                    <div
                      className={`absolute w-6 h-[1.5px] bg-current transition-transform duration-500 ${openIndex === index ? 'rotate-0' : 'rotate-90'
                        }`}
                      style={{ color: primaryColor }}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-12' : 'max-h-0'
                    }`}
                >
                  <p
                    className="text-base md:text-lg leading-relaxed opacity-70 font-sans font-light"
                    style={{ color: secondaryColor }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
