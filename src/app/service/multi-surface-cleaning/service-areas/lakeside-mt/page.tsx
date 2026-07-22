
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
  title: 'Multi-Surface Cleaning Services in Lakeside, MT | Allied 24/7 Restoration',
  description: 'Professional multi-surface cleaning services in Lakeside, MT. Certified specialists provide comprehensive cleaning for residential and commercial properties. Available 24/7—call now for expert service!',
  openGraph: {
    title: 'Multi-Surface Cleaning Services in Lakeside, MT | Allied 24/7 Restoration',
    description: 'Professional multi-surface cleaning services in Lakeside, MT. Certified specialists provide comprehensive cleaning for residential and commercial properties. Available 24/7—call now for expert service!',
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
  title: "Certified & Professional #1 Buildings Multi Surface Cleaning Services Contractor Lakeside MT",
  areaLabel: "Lakeside, MT",
  description:
    "Remodel your property with Allied Restoration, Lakeside’s trusted contractor for professional, affordable residential and commercial cleaning. From expert tile and grout restoration to certified window cleaning, our skilled team delivers same-day, high-quality results. Local, certified, and ready to serve.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable Lakeside team provides expert cleaning advice with a neighborly touch and professional care.",
    },
    {
      title: "Quick Response",
      description:
        "Need urgent cleaning? Allied Restoration offers rapid, same-day service to restore your property’s shine immediately.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer 24/7 assistance, ensuring your commercial or residential cleaning needs are met anytime, daily.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "ArAre You Looking for a Professional and Trusted Window Glass, Tiles, and Slabs Cleaning Services Contractor or Company in Lakeside MT?",
  paragraphs: [
    "If you are searching for a premier partner to restore the brilliance of your property, Allied Restoration is the most experienced and trusted all kind buildings multi surface cleaning services contractor or company in Lakeside MT. We specialize in delivering high-impact results for both residential and commercial spaces, positioning ourselves as the trusted and premier window glass cleaning contractor in Lakeside MT. Whether you are managing a modern build or a historic property, our skilled or professional all new or old home emergency multi surface cleaning services contractor in Lakeside MT is ready to respond with precision and speed.We understand that kitchen and bathroom surfaces require specialized care, which is why we act as your professional emergency window glass, tiles, and kitchen or washroom slabs cleaning services company in Lakeside MT. Our team is a certified multi surface cleaning services contractor Lakeside MT locals rely on for safety and quality. From grime-heavy floors to exterior maintenance, we serve as your local and affordable fully home floor or driveways cleaning restoration services contractor, ensuring every inch of your property sparkles. As a skilled or insured multi surface cleaning services contractor or agency Lakeside MT, we combine technical expertise with affordable pricing to protect your investment. Choose our dedicated team for comprehensive, reliable, and professional cleaning solutions tailored to the unique needs of the Lakeside community.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "Why hire a professional for tile and grout cleaning?",
      answer:
        "Professional cleaning extracts deep-set grime that mopping misses. Allied Restoration uses specialized equipment to remove bacteria and mold from porous grout, restoring your floor’s original color and extending the lifespan of your surfaces through expert sealing and care.",
    },
    {
      question: "Do you offer emergency cleaning services in Lakeside?",
      answer:
        "Yes! As a certified emergency multi surface cleaning services contractor Lakeside MT, we provide rapid response for spills, post-flood restoration, or urgent move-in needs. Our local team is available 24/7 to ensure your property is cleaned and sanitized immediately.",
    },
    {
      question: "What makes your cleaning services eco-friendly?",
      answer:
        "We prioritize your health by using biodegradable, non-toxic products that are safe for pets and families. Our green methods reduce chemical runoff and improve indoor air quality while delivering the high-performance results expected from a premier cleaning company.",
    },
    {
      question: "Can you clean both residential and commercial properties?",
      answer:
        "Absolutely. We are a skilled and professional multi surface cleaning services contractor for both homes and offices. From large commercial floor scrubbing to detailed residential window and kitchen slab polishing, we tailor our equipment and techniques to suit any environment.",
    },
    {
      question: "How often should I have my windows professionally cleaned?",
      answer:
        "For the best results, we recommend professional cleaning at least twice a year. Regular maintenance by a trusted and premier window glass cleaning contractor prevents mineral buildup and etching, keeping your views clear and your property’s curb appeal high.",
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
    "Allied Restoration - Your Trusted Premier No.1 Multi Surface Cleaning Services Contractor, Company or Agency Lakeside MT",
  subHeading: "",
  description:
    "Experience excellence with Allied Restoration, the certified and trusted all kinds buildings multi surface cleaning services contractor or company Lakeside MT. We provide skilled, affordable solutions for windows, tiles, and slabs, ensuring your property shines with professional, top-tier care.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-1.jpg",
    alt: "Professional multi-surface cleaning services in Lakeside, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers complete care as your certified and trusted all kinds buildings multi surface cleaning services contractor or company Lakeside MT. We specialize in deep-cleaning tiles, grout, windows, and slabs. From emergency interior sanitization to exterior pressure washing, our skilled team ensures your residential or commercial property remains pristine.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement Deep Multi Surface Cleaning Services Contractor or Company Lakeside MT",
    
description:"When moisture and grime settle into your lower levels, you need Allied Restoration, the certified and trusted all kinds buildings multi surface cleaning services contractor or company Lakeside MT residents rely on. Basements require specialized attention to prevent mold growth and eliminate stubborn odors. As a premier and skilled carpet and rug cleaning services contractor Lakeside MT, we deep-clean every fiber and hard surface to ensure your basement is a healthy, usable space.Our team utilizes industrial-grade equipment to sanitize concrete, stone, and tiled basement floors, removing years of buildup. Whether you are dealing with post-flood residue or general seasonal maintenance, our technicians provide a level of detail that standard cleaners simply cannot match. We focus on high-touch areas and porous surfaces, ensuring that every corner of your basement meets professional hygiene standards. Trust the experts who understand the unique geological and climate needs of Montana properties.",
 },
{
 heading:"Local & Trusted Emergency Interior or Exterior Surface Cleaning Services Contractor or Company in Lakeside MT",

description:"In the event of unexpected spills, weather damage, or urgent property showings, Allied Restoration stands as your skilled residential or commercial buildings interior or exterior surface cleaning services contractor, agency or company in Lakeside MT. We provide rapid-response solutions to maintain your property’s curb appeal and interior integrity. From pressure washing exterior siding and driveways to detailed interior sanitization, our emergency crews are equipped to handle any scale of cleaning task on short notice.We take pride in being a certified and trusted all kinds buildings multi surface cleaning services contractor or company Lakeside MT, offering peace of mind through insured and bonded labor. Our exterior services remove environmental pollutants and organic growth, while our interior teams focus on restoring surfaces to their original luster. For businesses and homeowners alike, we offer the perfect blend of efficiency and excellence, ensuring your property remains a pristine landmark in the Lakeside community."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Multi Surface Cleaning Services Contractor Lakeside MT",
  description: `If you are looking for a skilled and top-rated multi surface cleaning services contractor Lakeside MT, look no further than the experts at Allied Restoration. Maintaining the pristine condition of your property requires more than just a surface wipe; it demands the precision of a skilled & professional multi surface cleaning services contractor or company in Lakeside MT. Our team is dedicated to restoring every inch of your environment, from the ground up. We take immense pride in being a skilled home or offices home concrete surface cleaning services contractor Lakeside MT, helping property owners eliminate tough stains, oil spots, and heavy debris from driveways, walkways, and garage floors with industrial-grade efficiency.
Beyond floors, we understand that dust and allergens often hide in plain sight. As a certified home or offices buildings wall and ceiling cleaning services contractor Lakeside MT, we utilize specialized techniques to refresh your vertical surfaces and overhead structures without damaging paint or finishes. This holistic approach ensures that your indoor air quality is improved alongside the aesthetic appeal of your space. At Allied Restoration, we combine local expertise with a commitment to excellence, making us the premier choice for those who refuse to compromise on quality. Whether you are prepping a home for sale or maintaining a high-traffic office, our tailored cleaning solutions provide the deep restoration your property deserves.`,
  backgroundImage: {
    src: "/images/image-2.jpg",
    alt: "Multi-surface cleaning team in Lakeside, MT",
  },
  secondImage: {
    src: "/images/image-3.jpg",
    alt: "Multi-surface cleaning equipment in Lakeside, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Eco-Friendly Surface Cleaning Services Contractor Lakeside MT",
    description:
      "As the certified or trusted local no.1 eco-friendly surface cleaning services contractor Lakeside MT, Allied Restoration is committed to providing a deeper clean that is safe for your family, pets, and the environment. We utilize green cleaning technologies that eliminate toxins while delivering a spotless finish. If you are transitioning between properties, we serve as the experienced high-qualified local and trusted move-in move-out surface cleaning services company, contractor Lakeside MT, ensuring your new beginning starts in a perfectly sanitized environment. We understand that moving is stressful; let our experts handle the scrubbing, from the baseboards to the ceilings.For business owners, maintaining a professional image is vital. We operate as a skilled & professional commercial floor and surface cleaning services contractor or company in Lakeside MT, tackling high-traffic wear and tear with ease. Our versatility makes us the skilled home or offices multi surface cleaning services contractor Lakeside MT for those who demand excellence across diverse materials like hardwood, stone, and tile. We also recognize that accidents happen, which is why we are available as your certified emergency multi surface cleaning services contractor Lakeside MT, ready to restore your property after spills or unexpected damage. Trust Allied Restoration to combine local accountability with world-class cleaning standards, keeping Lakeside beautiful one surface at a time.",
    image: "/images/image-4.jpg",
    alt: "Eco-friendly multi-surface cleaning services in Lakeside, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Multi Surface Cleaning Services Contractor Lakeside MT",
    description:
      "As your premier all kind buildings multi surface cleaning services contractor, Allied Restoration is proud to provide comprehensive coverage across the entire Flathead Valley. We have established ourselves as the top choice for property owners in Lakeside MT, but our reach extends far beyond to ensure that high-quality restoration is accessible to everyone in the region. Whether you are managing a historic home in Kalispell MT or a high-end commercial property in Whitefish MT, our mobile crews are equipped to deliver elite cleaning results right to your doorstep. We understand the unique environmental challenges that Montana properties face, from lakefront moisture to mountain dust.Our specialized cleaning teams also provide consistent, reliable service to the vibrant community of Bigfork MT, tackling everything from tile and grout restoration to specialized slab care. Additionally, we serve as the experts for residential and industrial cleaning in Columbia Falls MT, ensuring that every driveway, wall, and window we touch meets our rigorous standards. By maintaining a wide service area, we ensure that whether you are in the heart of the city or a secluded lakeside retreat, you have access to a certified, skilled, and professional cleaning agency dedicated to preserving your property’s value.",
    image: "/images/image-6.jpg",
    alt: "Same day multi-surface cleaning services in Lakeside, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Multi Surface Cleaning Services Contractor Lakeside MT?",
    description:
      "Choosing the right partner for your property maintenance is essential, and Allied Restoration stands out as the premier choice for those who demand perfection. Why choose us? Because we are the most skilled and professional multi surface cleaning services contractor in Lakeside MT, dedicated to protecting your investment with precision and care. We don't just clean; we restore. Our team understands that commercial and residential buildings have different needs, which is why we offer tailored solutions that address everything from heavy-duty industrial grime to delicate residential finishes.By choosing Allied Restoration, you are partnering with a skilled and professional multi surface cleaning services contractor in Lakeside MT that prioritizes transparency, reliability, and elite results. We utilize advanced technology and eco-friendly methods to ensure a deep clean that lasts longer and looks better. Our reputation as a top-tier multi surface cleaning services contractor Lakeside MT is built on a foundation of local trust and proven expertise. We take the stress out of property management by providing consistent, high-quality service that improves both the aesthetic appeal and the longevity of your surfaces. When you want the job done right the first time, our expert team is the only call you need to make.",
    image: "/images/image-9.jpg",
    alt: "Allied Restoration multi-surface cleaning team in Lakeside, MT",
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
