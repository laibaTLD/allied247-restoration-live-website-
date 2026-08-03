import Image from "next/image";
import Link from "next/link";
import ServiceRequestForm from "@/sections/ServiceRequestForm";

interface ContentSection {
  heading: string;
  description: string;
  bullets?: string[];
}

interface ServiceDetailLayoutProps {
  title: string;
  intro: string;
  breadcrumbLabel: string;
  heroImage: string;
  heroAlt: string;
  sections: ContentSection[];
  defaultService?: string;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
}

export default function ServiceDetailLayout({
  title,
  intro,
  breadcrumbLabel,
  heroImage,
  heroAlt,
  sections,
  defaultService,
  theme,
}: ServiceDetailLayoutProps) {
  const primary = theme?.primaryColor || "#003366";
  const secondary = theme?.secondaryColor || "#4b5563";

  return (
    <section className="relative bg-white pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-x-clip">
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-72 opacity-[0.07]"
        style={{
          background: `radial-gradient(ellipse at top center, ${primary} 0%, transparent 70%)`,
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 max-w-full">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-gray-800 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link href="/service" className="hover:text-gray-800 transition-colors">
                Services
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-800 font-medium truncate max-w-[60vw] md:max-w-none">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_380px] gap-10 lg:gap-12 items-start">
          {/* Left: content */}
          <div className="min-w-0 max-w-full">
            <h1
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold leading-tight tracking-tight mb-6 break-words"
              style={{ color: "#1a1a1a" }}
            >
              {title}
            </h1>

            <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-[22rem] overflow-hidden rounded-2xl border-4 border-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] mb-8">
              <Image
                src={heroImage}
                alt={heroAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: secondary }}>
              {intro}
            </p>

            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2
                    className="text-xl sm:text-2xl font-bold leading-snug mb-3 break-words"
                    style={{ color: primary }}
                  >
                    {section.heading}
                  </h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: secondary }}>
                    {section.description}
                  </p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-2.5">
                      {section.bullets.map((item) => {
                        const [label, ...rest] = item.split(":");
                        const hasLabel = rest.length > 0;
                        return (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-base leading-relaxed"
                            style={{ color: secondary }}
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: primary }}
                            />
                            <span className="min-w-0 break-words">
                              {hasLabel ? (
                                <>
                                  <strong className="font-semibold text-gray-900">{label}:</strong>
                                  {rest.join(":")}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky assessment form */}
          <aside className="w-full min-w-0 lg:sticky lg:top-28 lg:self-start z-20">
            <ServiceRequestForm theme={theme} defaultService={defaultService} />
          </aside>
        </div>
      </div>
    </section>
  );
}
