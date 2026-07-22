
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import { notFound } from "next/navigation";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServiceAreaServicesSection from "@/sections/ServiceAreaServicesSection";
import CTASection from "@/sections/CTASection";
import ServiceOverlayCardSection from "@/sections/ServiceOverlayCardSection";
import FAQSection from "@/sections/FAQSection";
import ServiceAreaBulletsSection from "@/sections/ServiceAreaBulletsSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { Metadata } from "next";

// Page metadata
export const metadata: Metadata = {
  title: 'Multi-Surface Cleaning Services in Bigfork, MT | Allied 24/7 Restoration',
  description: 'Professional multi-surface cleaning services in Bigfork, MT. Certified specialists provide comprehensive cleaning for residential and commercial properties. Available 24/7—call now for expert service!',
  openGraph: {
    title: 'Multi-Surface Cleaning Services in Bigfork, MT | Allied 24/7 Restoration',
    description: 'Professional multi-surface cleaning services in Bigfork, MT. Certified specialists provide comprehensive cleaning for residential and commercial properties. Available 24/7—call now for expert service!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Affordable Garbage & in Bigfork, MT',
    description: 'Affordable garbage and in Bigfork, MT. Same-day junk removal, demolition contractor services, and residential or commercial trash clean.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Buildings Multi Surface Cleaning Services Contractor Bigfork MT",
  areaLabel: "Bigfork, MT",
  description:
    "Allied Restoration delivers professional and trusted multi-surface cleaning for homes and offices. As your local and certified Bigfork contractor, we specialize in expert tile, grout, and window glass cleaning. Affordable, same-day service from a property inspector you can trust.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and certified team provides personalized service, ensuring every Bigfork property receives professional care.",
    },
    {
      title: "Quick Response",
      description:
        "Need same-day cleaning? Allied Restoration offers rapid, reliable service to restore your surfaces immediately.",
    },
    {
      title: "24/7 Support",
      description:
        "We provide trusted residential and commercial support around the clock, keeping your Bigfork property spotless.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Window Glass, Tiles, and Slabs Cleaning Services Contractor or Company in Bigfork MT?",
  paragraphs: [
    "When you need pristine results, Allied Restoration stands out as the premier window glass cleaning contractor in Bigfork, MT. Finding an experienced and trusted all kind buildings multi surface cleaning services contractor or company is essential for maintaining your property’s value. We are the skilled or professional all new or old home emergency multi surface cleaning services contractor you can rely on for urgent needs. Our team serves as a professional emergency window glass, tiles, and kitchen or washroom slabs cleaning services company in Bigfork, MT, specializing in deep sanitation for high-use areas. As a certified multi surface cleaning services contractor, we utilize advanced techniques to restore even the most stubborn stains.We take pride in being a local and affordable fully home floor or driveways cleaning restoration services contractor, ensuring your exterior surfaces look as good as the interior. Whether you require a skilled or insured multi surface cleaning services contractor or agency, our experts handle every job with precision. From delicate glass to rugged driveways, Allied Restoration is the trusted and premier window glass cleaning contractor in Bigfork, MT, dedicated to excellence. Choose the most experienced and trusted all kind buildings multi surface cleaning services contractor or company for your next project. We provide the local and affordable solutions that Bigfork residents deserve, keeping every home and office in top-tier condition.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "What services does Allied Restoration provide in Bigfork?",
      answer:
        "As a certified and trusted multi surface cleaning services contractor, we offer expert tile, grout, window, and concrete cleaning. Our skilled and professional team handles both residential and commercial buildings, ensuring every surface in your property is perfectly restored.",
    },
    {
      question: "Do you offer emergency cleaning services?",
      answer:
        "Yes! We are a certified emergency multi surface cleaning services contractor in Bigfork, MT. Whether you need urgent move-out cleaning or immediate restoration after an accident, our local and trusted team provides same-day support to handle your cleaning emergencies.",
    },
    {
      question: " Are your cleaning products safe for homes and offices?",
      answer:
        "Absolutely. We are the No.1 eco-friendly surface cleaning services contractor in Bigfork. Allied Restoration uses high-quality, non-toxic solutions that are safe for families, pets, and employees while delivering a skilled and professional deep clean to every surface.",
    },
    {
      question: "Which areas do you serve in Montana?",
      answer:
        "Our skilled and professional multi surface cleaning services contractor team covers the Flathead Valley. We proudly serve Bigfork, Kalispell, Whitefish, Columbia Falls, and Lakeside, providing premier residential and commercial cleaning restoration services to our local Montana communities.",
    },
    {
      question: "Why should I hire a professional for surface cleaning?",
      answer:
        "Hiring a skilled residential or commercial buildings contractor ensures the longevity of your surfaces. Allied Restoration uses specialized equipment to remove deep-seated grime that standard cleaning misses, providing a certified and trusted result that enhances your property's value.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Flathead County & Surrounding Areas",
  areas: [
    {
      city: "Lakeside",
      region: "MT",
      description: "Certified & Professional #1 Mold Remediation Contractor - Professional mold removal and remediation services throughout Lakeside"
    },
    {
      city: "Kalispell",
      region: "MT",
      description: "Premium mold inspection and removal services in Kalispell"
    },
    {
      city: "Whitefish",
      region: "MT", 
      description: "Fast and reliable mold remediation and restoration in Whitefish"
    },
    {
      city: "Columbia Falls",
      region: "MT",
      description: "Complete mold removal and water damage restoration for Columbia Falls residents and businesses"
    },
    {
      city: "Bigfork",
      region: "MT",
      description: "Comprehensive mold inspection and remediation services for Bigfork area"
    },
    {
      city: "Somers",
      region: "MT",
      description: "Specialized mold removal services for Somers properties"
    }
  ]
};

const CTA_DATA = {
  heading:
    "Allied Restoration - Your Trusted Premier No.1 Multi Surface Cleaning Services Contractor, Company or Agency Bigfork MT",
  subHeading: "",
  description:
    "Allied Restoration is Bigfork’s leading certified and trusted multi surface cleaning services contractor. We provide skilled residential and commercial solutions, from premier carpet cleaning to emergency exterior washing. Choose our local agency for professional, high-quality results that protect your property.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-1.jpg",
    alt: "Professional multi-surface cleaning services in Bigfork, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `As a certified and trusted all kinds buildings multi surface cleaning services contractor, Allied Restoration delivers excellence across Bigfork. We specialize in skilled residential or commercial buildings interior or exterior surface cleaning, including premier carpet and rug cleaning. From basement deep cleans to emergency restoration, we are your local experts.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement Deep Multi Surface Cleaning Services Contractor in Bigfork, MT",
    
description:"Transform your lower level with Allied Restoration, the certified and trusted all kinds buildings multi surface cleaning services contractor or company in Bigfork, MT. Basements often harbor stubborn grime and moisture-related stains, requiring the touch of a skilled residential or commercial buildings interior or exterior surface cleaning services contractor, agency, or company. Our team specializes in deep-cleaning porous concrete, stone, and finished basement flooring to ensure a healthy environment.As the premier and skilled carpet and rug cleaning services contractor in Bigfork, MT, we also tackle basement textiles, removing deep-seated allergens and odors. Whether you are dealing with a post-flood situation or seasonal maintenance, choosing a certified and trusted all kinds buildings multi surface cleaning services contractor ensures the job is done right the first time. We bring professional-grade equipment to every project, providing the deep-clean your basement deserves.",
 },
{
 heading:"Local & Trusted Emergency Interior or Exterior Surface Cleaning Services Contractor in Bigfork, MT",

description:"When disaster strikes, you need an immediate response from Allied Restoration, your local and trusted emergency interior or exterior surface cleaning services contractor or company in Bigfork, MT. We understand that property damage doesn't wait, which is why we act as a skilled residential or commercial buildings interior or exterior surface cleaning services contractor, agency, or company available when you need us most.From pressure washing exterior masonry to detailed indoor sanitation, we are the certified and trusted all kinds buildings multi surface cleaning services contractor or company that Bigfork residents rely on for restoration. Furthermore, if your emergency involves water damage, our role as a premier and skilled carpet and rug cleaning services contractor ensures your flooring is salvaged and sanitized. Trust our skilled residential or commercial experts to restore your property’s curb appeal and interior safety with efficiency and professional care."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Multi Surface Cleaning Services Contractor Bigfork MT",
  description: `When you are looking for a skilled and top-rated multi surface cleaning services contractor in Bigfork, MT, quality and reliability are non-negotiable. Allied Restoration has established itself as the leading name for comprehensive property care, offering a skilled & professional multi surface cleaning services contractor or company in Bigfork, MT that residents trust. Whether you are managing a busy storefront or a private residence, our team provides tailored solutions to maintain every square inch of your property. We take pride in being a skilled home or offices home concrete surface cleaning services contractor in Bigfork, MT, utilizing industrial-grade equipment to lift deep-set oil stains, dirt, and grime from driveways, walkways, and garage floors.
Beyond flooring, we are a certified home or offices buildings wall and ceiling cleaning services contractor in Bigfork, MT. This specialized service is essential for removing dust, allergens, and smoke residue that accumulate over time, instantly brightening your interior spaces and improving air quality. Choosing Allied Restoration means partnering with a skilled & professional multi surface cleaning services contractor or company that understands the specific needs of Bigfork’s climate. From high-pressure concrete washing to delicate wall treatments, our certified home or offices buildings experts ensure a meticulous finish. Don't settle for less than the best; contact Bigfork’s premier skilled and top-rated multi surface cleaning services contractor today for a revitalized home or office.`,
  backgroundImage: {
    src: "/images/image-2.jpg",
    alt: "Multi-surface cleaning team in Bigfork, MT",
  },
  secondImage: {
    src: "/images/image-3.jpg",
    alt: "Multi-surface cleaning equipment in Bigfork, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Eco-Friendly Surface Cleaning Services Contractor Bigfork MT",
    description:
      "Maintaining a healthy environment is a top priority for modern property owners, which is why we are proud to be your certified or trusted local no.1 eco-friendly surface cleaning services contractor in Bigfork, MT. At Allied Restoration, we combine green cleaning solutions with high-performance techniques to ensure your space is spotless without the use of harsh chemicals. As an experienced high-qualified local and trusted move-in move-out surface cleaning services company or contractor, we understand the stress of relocating. We provide deep sanitation that ensures a fresh start for new homeowners or helps renters secure their deposits.For business owners, we act as a skilled & professional commercial floor and surface cleaning services contractor or company in Bigfork, MT, delivering a polished image that impresses clients and keeps employees safe. Our versatility makes us the skilled home or offices multi surface cleaning services contractor in Bigfork, MT, capable of handling everything from delicate hardwood to rugged stone. We also recognize that accidents happen, which is why we remain a certified emergency multi surface cleaning services contractor ready to respond to your urgent needs. By choosing Allied Restoration, you are partnering with a local and trusted team dedicated to sustainability and excellence. Whether it’s a scheduled commercial maintenance plan or a one-time move-out scrub, we provide the eco-friendly results Bigfork expects.",
    image: "/images/image-6.jpg",
    alt: "Eco-friendly multi-surface cleaning services in Bigfork, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Multi Surface Cleaning Services Contractor",
    description:
      "As the leading multi surface cleaning services contractor, Allied Restoration is proud to provide comprehensive property care across the Flathead Valley. We understand that residents and business owners throughout Northwest Montana require a certified and trusted partner to maintain their investments. Our primary service hub is in Bigfork, MT, where we have established a reputation as the top-rated local expert. However, our mobile units are fully equipped to bring our professional cleaning technology to Kalispell, MT, ensuring that the valley’s largest commercial and residential center has access to premier surface restoration.We also cater to the unique needs of mountain properties in Whitefish, MT, providing specialized care for luxury homes and high-traffic vacation rentals. Our reach extends to Columbia Falls, MT, where we offer affordable and reliable solutions for all kind buildings, from industrial floors to family homes. Additionally, we serve the beautiful community of Lakeside, MT, delivering expert shoreline property cleaning that stands up to the elements. No matter where you are located within these regions, Allied Restoration remains the most skilled and professional choice for interior and exterior cleaning. When you need a local expert who knows the specific environmental demands of Bigfork, Kalispell, and beyond, we are just a phone call away.",
    image: "/images/image-10.jpg",
    alt: "Same day multi-surface cleaning services in Bigfork, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Multi Surface Cleaning Services Contractor Bigfork MT?",
    description:
      "Choosing the right partner for your property maintenance is a critical decision, so why choose Allied Restoration contractor or company for your commercial or residential buildings multi surface cleaning services contractor in Bigfork, MT? The answer lies in our unwavering commitment to quality and our deep roots in the local community. As a skilled and professional multi surface cleaning services contractor in Bigfork, MT, we bring years of hands-on experience to every project, ensuring that your stone, tile, wood, and concrete surfaces are handled with the utmost precision.Allied Restoration stands out because we don't believe in one-size-fits-all solutions. We understand that a commercial storefront in downtown Bigfork has different needs than a residential lakeside home. Our team utilizes cutting-edge technology and eco-friendly methods to deliver a deep clean that preserves the integrity of your surfaces while enhancing their appearance. When you hire a skilled and professional multi surface cleaning services contractor, you aren't just paying for a service; you are investing in the longevity of your building. From our transparent pricing to our rapid response times, we prioritize your satisfaction above all else. Trust the local experts who combine technical expertise with a customer-first mentality to keep Bigfork looking its absolute best.",
    image: "/images/image-9.jpg",
    alt: "Allied Restoration multi-surface cleaning team in Bigfork, MT",
  },
};


async function getLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    notFound();
  }

  const landingPageData = await fetchLandingPageForSSG(templateId, id);

  if (!landingPageData) {
    notFound();
  }

  return landingPageData;
}

export default async function JunkRemovalPhoenixPage() {
  const landingPageData = await getLandingPageData();  const servicesImages = landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  return (
    <ServiceAreaLayout
      landingPageData={landingPageData}
    >
      <ServiceAreaHeroSection
        serviceName={SERVICE_DATA.title}
        areaLabel={SERVICE_DATA.areaLabel}
        heading={SERVICE_DATA.title}
        subheading={SERVICE_DATA.subheading}
        description={SERVICE_DATA.description}
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
        bullets={SERVICE_DATA.bullets}
      />



 <ServiceAreaBulletsSection
        bullets={SERVICE_DATA.bullets}
        theme={landingPageData.themeData}
      />
      <ServiceAreaIntroSection
        title={INTRO_SECTION.title}
        paragraphs={INTRO_SECTION.paragraphs}
        theme={landingPageData.themeData}
      />

       <ServiceAreaServicesSection
                title={SERVICES_CONTENT.title}
                description={SERVICES_CONTENT.description}
                services={SERVICES_CONTENT.service}
                
                theme={landingPageData.themeData}
                images={servicesImages}
              />


      <CTASection
        data={CTA_DATA}
        theme={landingPageData.themeData}
      />



      <ServiceOverlayCardSection
        heading={OVERLAY_CARD_SECTION.heading}
        description={OVERLAY_CARD_SECTION.description}
        backgroundImage={OVERLAY_CARD_SECTION.backgroundImage}
        secondImage={OVERLAY_CARD_SECTION.secondImage}
        theme={landingPageData.themeData}
      />

      <ServiceAreaDetailSection
        theme={landingPageData.themeData}
        row1={{
          heading: SERVICE_DETAIL_SECTION.row1.heading,
          description: SERVICE_DETAIL_SECTION.row1.description
        }}
        row1Image={{
          src: SERVICE_DETAIL_SECTION.row1.image,
          alt: SERVICE_DETAIL_SECTION.row1.alt
        }}
        row2={{
          heading: SERVICE_DETAIL_SECTION.row2.heading,
          description: SERVICE_DETAIL_SECTION.row2.description
        }}
        row2Image={{
          src: SERVICE_DETAIL_SECTION.row2.image,
          alt: SERVICE_DETAIL_SECTION.row2.alt
        }}
        row3={SERVICE_DETAIL_SECTION.row3 ? {
          heading: SERVICE_DETAIL_SECTION.row3.heading,
          description: SERVICE_DETAIL_SECTION.row3.description
        } : undefined}
        row3Image={SERVICE_DETAIL_SECTION.row3 ? {
          src: SERVICE_DETAIL_SECTION.row3.image,
          alt: SERVICE_DETAIL_SECTION.row3.alt
        } : undefined}
      />


 <ServiceAreasSection
        serviceAreas={SERVICE_AREAS.areas}
        themeData={landingPageData.themeData}
      />


      <FAQSection
        title={FAQ_SECTION.title}
        description={FAQ_SECTION.description}
        questions={FAQ_SECTION.questions}
        theme={landingPageData.themeData}
      />

    </ServiceAreaLayout>
  );
}
