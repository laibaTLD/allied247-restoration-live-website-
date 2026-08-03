import Image from "next/image";
import Link from "next/link";

interface ServicePageBannerProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  breadcrumbLabel: string;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
}

export default function ServicePageBanner({
  title,
  description,
  imageSrc,
  imageAlt,
  breadcrumbLabel,
  theme,
}: ServicePageBannerProps) {
  const primary = theme?.primaryColor || "#003366";

  return (
    <section className="relative min-h-[52vh] md:min-h-[62vh] w-full flex items-end overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.25) 100%)`,
        }}
      />

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-28 pb-12 md:pt-36 md:pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70 mb-6">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li>
                <Link href="/service" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white font-medium truncate max-w-[60vw] md:max-w-none">
                {breadcrumbLabel}
              </li>
            </ol>
          </nav>

          <div className="h-1 w-20 rounded mb-6" style={{ backgroundColor: primary }} />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white leading-tight max-w-4xl mb-5">
            {title}
          </h1>
          <p className="text-base md:text-lg text-white/85 font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
