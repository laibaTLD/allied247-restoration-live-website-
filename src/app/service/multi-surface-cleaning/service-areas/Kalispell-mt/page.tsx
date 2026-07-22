
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
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { Metadata } from "next";

// Page metadata
export const metadata: Metadata = {
  title: 'Multi-Surface Cleaning Services in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration provides expert multi-surface cleaning in Kalispell, MT. Certified specialists offer comprehensive cleaning for residential and commercial properties. Call now for trusted service!',
  openGraph: {
    title: 'Multi-Surface Cleaning Services in Kalispell, MT | Allied 24/7 Restoration',
    description: 'Allied 24/7 Restoration provides expert multi-surface cleaning in Kalispell, MT. Certified specialists offer comprehensive cleaning for residential and commercial properties. Call now for trusted service!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Affordable Garbage & Junk Clean Outs in Glendale AZ | Junks Butlers',
    description: 'Affordable garbage and junk clean outs in Glendale AZ. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Buildings Multi Surface Cleaning Services Contractor Kalispell MT",
  areaLabel: "Kalispell, MT",
  description:
    "Allied Restoration is Kalispell's trusted contractor for professional, affordable multi-surface cleaning. From expert tile and grout cleaning to certified window glass services, we provide reliable commercial and residential solutions. Book our local specialists today for a spotless property!",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local Kalispell experts provide personable, professional service focused on your property’s specific cleaning needs.",
    },
    {
      title: "Quick Response",
      description:
        "We prioritize your schedule with rapid, same-day multi-surface cleaning to restore your home or office fast.",
    },
    {
      title: "24/7 Support",
      description:
        "Our certified team is available around the clock to handle any urgent residential or commercial requests.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Window Glass, Tiles, and Slabs Cleaning Services Contractor or Company in Kalispell MT?",
  paragraphs: [
    "Look no further than Allied Restoration. As a certified multi-surface cleaning services contractor in Kalispell, MT, we specialize in restoring the beauty of your residential or commercial property with unmatched precision and care. Whether you need a skilled or professional all new or old home emergency multi-surface cleaning services contractor in Kalispell, MT, our team is ready to act fast. We are the premier professional emergency window glass, tiles, and kitchen or washroom slabs cleaning services company in Kalispell, MT, ensuring your surfaces are hygienic and spotless.As a trusted and premier window glass cleaning contractor in Kalispell, MT, we guarantee crystal-clear results every time. Beyond windows, Allied Restoration offers local and affordable fully home floor or driveways cleaning restoration services contractor solutions to enhance your curb appeal. We are the experienced and trusted all-kind buildings multi-surface cleaning services contractor or company in Kalispell, MT that locals rely on. Furthermore, our skilled or insured multi-surface cleaning services contractor or agency in Kalispell, MT ensures your property is protected while we work. Contact us today for premier cleaning solutions! ",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our multi-surface cleaning services in Kalispell, MT.",
  questions: [
    {
      question: " What services does Allied Restoration provide in Kalispell?",
      answer:
        "We offer comprehensive solutions including window glass, tile, grout, and concrete cleaning. As a skilled and professional multi-surface cleaning services contractor in Kalispell, MT, we handle residential and commercial properties, ensuring deep sanitization and restoration for all building types.",
    },
    {
      question: "Do you offer emergency cleaning services for local properties?",
      answer:
        "Yes! We are a certified emergency multi-surface cleaning services contractor in Kalispell, MT. Whether you face unexpected spills, move-out deadlines, or post-disaster grime, our team responds quickly to restore your interior and exterior surfaces to their original, pristine condition.",
    },
    {
      question: "Are your cleaning products safe for families and pets?",
      answer:
        "AAbsolutely. Allied Restoration is a trusted local No. 1 eco-friendly surface cleaning services contractor in Kalispell, MT. We use sustainable, non-toxic products that effectively remove stubborn dirt and allergens while ensuring a safe environment for your children, pets, and employees.",
    },
    {
      question: "Which areas do you serve in the Flathead Valley?",
      answer:
        "We provide expert cleaning across several locations, including Kalispell, Whitefish, Bigfork, Columbia Falls, and Lakeside, MT. Our local team is familiar with the specific environmental needs of Montana properties, offering reliable and high-quality service throughout the entire region.",
    },
    {
      question: "Why should I choose a professional contractor over DIY?",
      answer:
        "Hiring a skilled and professional multi-surface cleaning services contractor in Kalispell, MT, ensures industrial-grade results. We use specialized equipment and techniques that prevent surface damage while removing deep-seated grime that standard household tools and DIY methods simply cannot reach.",
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
    "Allied Restoration - Your Trusted Premier No.1 Multi Surface Cleaning Services Contractor, Company or Agency Kalispell MT",
  subHeading: "",
  description:
    "Choose Allied Restoration for top-tier cleaning in Kalispell, MT. As the premier No. 1 multi-surface contractor, we provide trusted residential and commercial services, including window, floor, and emergency cleaning. Experience certified, professional results that make your property shine today.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-1.jpg",
    alt: "Professional multi-surface cleaning services in Kalispell, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers premier multi-surface cleaning in Kalispell, MT. From expert basement deep cleaning and emergency interior/exterior restoration to certified window and carpet services, our skilled team ensures spotless, sanitized results for residential and commercial properties. Trust our local specialists for affordable, reliable, and high-quality cleaning solutions.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement Deep Multi Surface Cleaning Services Contractor or Company Kalispell MT",
    
description:"Is your basement looking dingy, or have you suffered recent water damage? Allied Restoration is the premier choice when you need to hire now most trusted basement deep multi surface cleaning services contractor or company in Kalispell, MT. Basements require specialized attention due to potential moisture issues, mold growth, and stubborn stains on concrete or vinyl flooring. Our team brings unmatched expertise to every job, ensuring a deep clean that improves indoor air quality and removes harmful allergens.We are not just surface cleaners; we are restoration specialists. As a certified and trusted all kinds buildings multi surface cleaning services contractor or company in Kalispell, MT, we utilize industrial-grade equipment to reach deep into porous materials. Whether it is removing mildew from walls or scrubbing heavy-duty floors, we guarantee comprehensive results. Furthermore, our skilled residential or commercial buildings interior or exterior surface cleaning services contractor, agency or company in Kalispell, MT ensures your basement is safe, sanitary, and fully restored. Don't let a dirty basement compromise your home’s value or health. Trust Allied Restoration to deliver unparalleled deep cleaning services that make your lower level look brand new.",
 },
{
 heading:"Local & Trusted Emergency Interior or Exterior Surface Cleaning Services Contractor or Company in Kalispell MT",

description:"When unexpected disasters strike, you need a local & trusted emergency interior or exterior surface cleaning services contractor or company in Kalispell, MT that responds instantly. Allied Restoration provides rapid, reliable cleaning services to handle everything from smoke damage to post-construction cleanup. We understand that emergencies don't wait for business hours, which is why we are committed to providing prompt solutions that minimize disruption to your daily life or business operations.Our expertise extends beyond hard surfaces. As a premier and skilled carpet and rug cleaning services contractor in Kalispell, MT, we can revitalize your flooring following spills, water infiltration, or heavy foot traffic. We handle both interior rejuvenation and exterior restoration, ensuring your entire property remains impeccable. Choosing Allied Restoration means choosing a skilled residential or commercial buildings interior or exterior surface cleaning services contractor, agency or company in Kalispell, MT that values quality and speed. We are dedicated to restoring your peace of mind with trusted, high-quality cleaning results you can see."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Multi Surface Cleaning Services Contractor Kalispell MT",
  description: `If you are looking for a skilled and top-rated multi surface cleaning services contractor in Kalispell, MT, look no further than the experts at Allied Restoration. We take pride in delivering a deeper clean that standard services simply can’t match. Our reputation as a skilled & professional multi surface cleaning services, contractor or company in Kalispell, MT is built on years of providing meticulous care for every square inch of your property. We understand that different surfaces require specific approaches. That is why we are recognized as a skilled home or offices home concrete surface cleaning services contractor in Kalispell, MT.
From oil-stained driveways to high-traffic office walkways, we use professional-grade equipment to lift deep-seated debris and restore the original finish. Beyond floors, we address your entire structure as a certified home or offices buildings wall and ceiling cleaning services contractor in Kalispell, MT. Dust, cobwebs, and pollutants often settle in hard-to-reach areas, but our team ensures your indoor environment is both healthy and visually stunning. Whether you are preparing for a sale or simply maintaining your investment, Allied Restoration provides the high-quality, local service you deserve. Contact us today to experience the difference a certified professional can make for your property.`,
  backgroundImage: {
    src: "/images/image-2.jpg",
    alt: "Multi-surface cleaning team in Kalispell, MT",
  },
  secondImage: {
    src: "/images/image-3.jpg",
    alt: "Multi-surface cleaning equipment in Kalispell, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Eco-friendly Surface Cleaning Services Contractor Kalispell MT",
    description:
      "Looking for a cleaner, healthier property? Allied Restoration is the certified or trusted local No.1 eco-friendly surface cleaning services contractor in Kalispell, MT. We believe in providing exceptional results without harsh chemicals, utilizing sustainable practices that are safe for your family, employees, and the environment. Whether you are relocating or preparing a property for new tenants, our experienced high-qualified local and trusted move-in move-out surface cleaning services company, contractor in Kalispell, MT ensures a spotless start. We pay meticulous attention to detail, making sure every corner is sanitized and ready for use.For business owners, we provide skilled & professional commercial floor and surface cleaning services contractor or company in Kalispell, MT, enhancing your professional image with pristine floors and surfaces. Additionally, our team offers skilled home or offices multi surface cleaning services contractor in Kalispell, MT for routine maintenance, keeping your environment hygienic year-round. Accidents happen, and when they do, you need immediate help. We are also a certified emergency multi surface cleaning services contractor in Kalispell, MT, ready to respond quickly to restore your property after unforeseen incidents. Choose Allied Restoration for top-quality, eco-friendly cleaning that truly makes a difference.",
    image: "/images/image-4.jpg",
    alt: "Eco-friendly multi-surface cleaning services in Kalispell, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Multi Surface Cleaning Services Contractor",
    description:
      "Allied Restoration proudly serves a wide range of locations throughout the Flathead Valley, providing top-tier solutions as the premier multi-surface cleaning services contractor for all kinds of buildings. Whether you need residential restoration or commercial maintenance, our expert team is ready to deliver exceptional results across the region. We are dedicated to providing fast, reliable, and thorough cleaning services to homes and businesses specifically in Kalispell, MT, ensuring local properties remain spotless and inviting. Our reach extends to Whitefish, MT, where we help maintain the pristine condition of both rustic homes and modern commercial spaces.Property owners in Bigfork, MT trust us for specialized surface care that enhances curb appeal and protects their investments. Furthermore, we are active in Columbia Falls, MT, offering comprehensive cleaning solutions tailored to both new construction and historic buildings. Finally, residents and business owners in Lakeside, MT can depend on Allied Restoration for high-quality, professional cleaning that meets the highest standards. No matter where you are located in these service areas, we are committed to being the most trusted local contractor for all your surface cleaning needs.",
    image: "/images/image-6.jpg",
    alt: "Same day multi-surface cleaning services in Kalispell, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Multi Surface Cleaning Services Contractor Kalispell MT?",
    description:
      "When it comes to maintaining the hygiene, safety, and aesthetic appeal of your property, choosing the right partner is crucial. Allied Restoration stands out as the premier skilled and professional multi surface cleaning services contractor in Kalispell, MT. We understand that both residential homes and commercial buildings require specialized care to handle unique challenges, from high-traffic floor wear to delicate window glass cleaning. What sets us apart is our commitment to quality, reliability, and customer satisfaction.As a trusted local company, we leverage advanced cleaning technologies and eco-friendly products to deliver superior results without compromising safety. Our team is fully insured and trained to tackle various surfaces, including concrete, tiles, grout, and siding, ensuring a comprehensive clean every time. Furthermore, Allied Restoration offers flexible scheduling to minimize disruption to your daily routine or business operations. We prioritize efficient, thorough work, making us the go-to solution for busy property owners in the region. When you need unparalleled expertise and dedicated service, trust the experts at Allied Restoration to revitalize your space and protect your investment.",
    image: "/images/image-9.jpg",
    alt: "Allied Restoration multi-surface cleaning team in Kalispell, MT",
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
