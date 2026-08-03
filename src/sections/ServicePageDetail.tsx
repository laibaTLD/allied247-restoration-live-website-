import Image from "next/image";

interface ThemeProps {
  primaryColor?: string;
  secondaryColor?: string;
}

interface DetailBlock {
  heading: string;
  description: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
}

interface ServicePageDetailProps {
  theme?: ThemeProps;
  blocks: DetailBlock[];
}

export default function ServicePageDetail({ theme, blocks }: ServicePageDetailProps) {
  const primary = theme?.primaryColor ?? "#1a1a1a";
  const secondary = theme?.secondaryColor ?? "#6b7280";

  return (
    <section className="relative bg-[#fafafa] py-10 sm:py-14 md:py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${primary} 1px, transparent 0)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 space-y-16 lg:space-y-24">
        {blocks.map((block, index) => {
          const imageLeft = index % 2 === 1;

          return (
            <div
              key={block.heading}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div className={imageLeft ? "order-1" : "order-2 lg:order-1"}>
                <div className="space-y-5">
                  <h2
                    className="text-3xl md:text-4xl font-serif leading-[1.15] tracking-tight italic"
                    style={{ color: primary }}
                  >
                    {block.heading}
                  </h2>
                  <p
                    className="text-base md:text-lg font-light leading-relaxed"
                    style={{ color: secondary }}
                  >
                    {block.description}
                  </p>
                  {block.bullets && block.bullets.length > 0 && (
                    <ul className="space-y-2.5 pt-1">
                      {block.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-base font-light"
                          style={{ color: secondary }}
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: primary }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className={imageLeft ? "order-2" : "order-1 lg:order-2"}>
                <div
                  className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[480px] overflow-hidden rounded-2xl"
                  style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.06)" }}
                >
                  <Image
                    src={block.imageSrc}
                    alt={block.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
