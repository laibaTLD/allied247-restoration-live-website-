import Image from "next/image";

interface ThemeProps {
  primaryColor?: string;
  secondaryColor?: string;
}

interface ImageSpec {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface RowContent {
  heading: string;
  description: string;
}

interface ServiceAreaDetailSectionProps {
  theme?: ThemeProps;
  row1: RowContent;
  row1Image: ImageSpec;
  row2: RowContent;
  row2Image: ImageSpec;
  row3?: RowContent;
  row3Image?: ImageSpec;
}

export default function ServiceAreaDetailSection({ theme, row1, row1Image, row2, row2Image, row3, row3Image }: ServiceAreaDetailSectionProps) {
  const primary = theme?.primaryColor ?? "#1a1a1a";
  const secondary = theme?.secondaryColor ?? "#6b7280";

  // Calculate text length for each row to determine optimal image sizing
  const row1TextLength = row1.heading.length + row1.description.length;
  const row2TextLength = row2.heading.length + row2.description.length;
  const row3TextLength = row3 ? row3.heading.length + row3.description.length : 0;

  // Dynamic image height based on text length
  const getImageHeight = (textLength: number) => {
    if (textLength > 800) return "h-80 sm:h-96 md:h-[450px] lg:h-[550px] xl:h-[650px]";
    if (textLength > 400) return "h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]";
    return "h-48 sm:h-64 md:h-80 lg:h-[400px] xl:h-[500px]";
  };

  // Dynamic text sizing based on text length
  const getTextSize = (textLength: number) => {
    if (textLength > 800) return "text-sm sm:text-base md:text-lg";
    if (textLength > 400) return "text-sm sm:text-base md:text-lg";
    return "text-sm sm:text-base md:text-lg";
  };

  // Common row class to reduce repetition
  const rowClass = "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24";
  const contentClass = "space-y-4 sm:space-y-5";
  const headingClass = "text-3xl md:text-4xl font-serif leading-[1.1] tracking-tight italic";
  const bodyClass = "text-base md:text-lg text-neutral-600 font-light leading-relaxed";

  return (
    <section className="relative bg-[#fafafa] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${primary} 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Row 1: Text left, Image right (stacked on mobile with image first) */}
        <div className={rowClass}>
          <div className="order-2 lg:order-1">
            <div className={contentClass}>
              <h2 className={headingClass} style={{ color: primary }}>
                {row1.heading}
              </h2>
              <p className={`${bodyClass} ${getTextSize(row1TextLength)}`} style={{ color: secondary }}>
                {row1.description}
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div
              className={`relative w-full ${getImageHeight(row1TextLength)} overflow-hidden rounded-2xl border transition-shadow duration-300`}
              style={{
                borderColor: `${primary}1a`,
                boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src={row1Image.src}
                alt={row1Image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Row 2: Image left, Text right (stacked on mobile with image first) */}
        <div className={rowClass}>
          <div className="order-1">
            <div
              className={`relative w-full ${getImageHeight(row2TextLength)} overflow-hidden rounded-2xl border transition-shadow duration-300`}
              style={{
                borderColor: `${primary}1a`,
                boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src={row2Image.src}
                alt={row2Image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="order-2">
            <div className={contentClass}>
              <h3 className={headingClass} style={{ color: primary }}>
                {row2.heading}
              </h3>
              <p className={`${bodyClass} ${getTextSize(row2TextLength)}`} style={{ color: secondary }}>
                {row2.description}
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Text left, Image right (stacked on mobile with image first) */}
        {row3 && row3Image && (
          <div className={rowClass}>
            <div className="order-2 lg:order-1">
              <div className={contentClass}>
                <h3 className={headingClass} style={{ color: primary }}>
                  {row3.heading}
                </h3>
                <p className={`${bodyClass} ${getTextSize(row3TextLength)}`} style={{ color: secondary }}>
                  {row3.description}
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div
                className={`relative w-full ${getImageHeight(row3TextLength)} overflow-hidden rounded-2xl border transition-shadow duration-300`}
                style={{
                  borderColor: `${primary}1a`,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
                }}
              >
                <Image
                  src={row3Image.src}
                  alt={row3Image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

