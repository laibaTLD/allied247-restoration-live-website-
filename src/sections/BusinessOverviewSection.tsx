"use client";

import React, { useState } from 'react';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
// Types removed as they were unused

interface BusinessOverviewSectionProps {
  content?: unknown;
  contact?: {
    title: string;
    description: string;
    showMap?: boolean;
  };
  businessData?: unknown;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
}

export default function BusinessOverviewSection({
  contact,
  theme,
}: BusinessOverviewSectionProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const primaryColor = theme?.primaryColor || '#3b2b20';
  const secondaryColor = theme?.secondaryColor || '#6f6258';

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus({ type: 'success', message: 'Your message has been sent successfully.' });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-6 sm:py-8 md:py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">

        {/* Section Heading */}
        <div
          ref={headerRef}
          className={`mb-16 lg:mb-24 transition-all duration-1000 transform ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
        >
          <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight tracking-tight" style={{ color: primaryColor }}>
            {contact?.title || 'Book Your Next Treatment'}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

          {/* Left Side: Intro text */}
          <div className="lg:w-1/3 space-y-8">
            <p className="text-lg leading-relaxed max-w-sm font-sans font-light" style={{ color: secondaryColor }}>
              {contact?.description || 'Experience our personalized care and holistic approach. Fill out the form and we will reach out to schedule your session.'}
            </p>
          </div>

          {/* Right Side: Minimalist Form */}
          <div
            ref={formRef}
            className={`lg:w-2/3 transition-all duration-1000 delay-200 transform ${formVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {/* First Name */}
                <div className="relative group">
                  <label className="block text-xs uppercase tracking-widest mb-2 font-sans font-bold" style={{ color: primaryColor }}>First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full bg-transparent border-b-2 py-2 outline-none transition-all duration-300 font-sans"
                    style={{ borderBottomColor: primaryColor, color: primaryColor }}
                  />
                </div>
                {/* Last Name */}
                <div className="relative group">
                  <label className="block text-xs uppercase tracking-widest mb-2 font-sans font-bold" style={{ color: primaryColor }}>Last name *</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full bg-transparent border-b-2 py-2 outline-none transition-all duration-300 font-sans"
                    style={{ borderBottomColor: primaryColor, color: primaryColor }}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative group">
                <label className="block text-xs uppercase tracking-widest mb-2 font-sans font-bold" style={{ color: primaryColor }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b-2 py-2 outline-none transition-all duration-300 font-sans"
                  style={{ borderBottomColor: primaryColor, color: primaryColor }}
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <label className="block text-xs uppercase tracking-widest mb-2 font-sans font-bold" style={{ color: primaryColor }}>Phone number</label>
                <div className="flex items-center space-x-4 border-b-2 transition-all duration-300" style={{ borderBottomColor: primaryColor }}>
                  <span className="text-xl">🌐</span>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-transparent py-2 outline-none font-sans"
                    style={{ color: primaryColor }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <label className="block text-xs uppercase tracking-widest mb-2 font-sans font-bold" style={{ color: primaryColor }}>Write a message</label>
                <textarea
                  name="message"
                  rows={1}
                  className="w-full bg-transparent border-b-2 py-2 outline-none transition-all duration-300 resize-none font-sans"
                  style={{ borderBottomColor: primaryColor, color: primaryColor }}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-16 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 font-sans"
                  style={{ backgroundColor: primaryColor }}
                >
                  {submitting ? 'Sending...' : 'Submit'}
                </button>
              </div>

              {status && (
                <p className={`mt-4 text-sm font-sans ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
