
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
  title: 'Multi-Surface Cleaning Services in Columbia Falls, MT | Allied 24/7 Restoration',
  description: 'Expert multi-surface cleaning services in Columbia Falls, MT. Certified specialists provide comprehensive cleaning for residential and commercial properties. Available 24/7—call now for expert service!',
  openGraph: {
    title: 'Multi-Surface Cleaning Services in Columbia Falls, MT | Allied 24/7 Restoration',
    description: 'Expert multi-surface cleaning services in Columbia Falls, MT. Certified specialists provide comprehensive cleaning for residential and commercial properties. Available 24/7—call now for expert service!',
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
  title: "Certified & Professional #1 Buildings Multi Surface Cleaning Services Contractor Columbia Falls MT",
  areaLabel: "Columbia Falls, MT",
  description:
    "Allied Restoration is the #1 trusted local contractor for professional and affordable multi-surface cleaning in Columbia Falls, MT. Certified experts providing same-day window, tile, and grout cleaning for residential and commercial buildings. Call now for a free estimate!",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our professional, certified team in Columbia Falls treats your property with the care it deserves.",
    },
    {
      title: "Quick Response",
      description:
        "Get fast, same-day cleaning solutions from our trusted local contractors when you need them most.",
    },
    {
      title: "24/7 Support",
      description:
        "Reliable, 24/7 service ensuring your residential or commercial building looks perfect any time of day.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Window Glass, Tiles, and Slabs Cleaning Services Contractor or Company in Columbia Falls MT?",
  paragraphs: [
    "If you are searching for a professional and trusted window glass, tiles, and slabs cleaning services contractor or company in Columbia Falls, MT, look no further than Allied Restoration. We are the premier choice for all your property maintenance needs, offering unparalleled expertise in keeping your residential or commercial space pristine. As a certified multi surface cleaning services contractor in Columbia Falls, MT, we specialize in revitalizing every aspect of your property, from delicate window glass to heavy-duty driveways. Whether you need a skilled or professional all new or old home emergency multi surface cleaning services contractor in Columbia Falls, MT to handle unexpected messes, or a professional emergency window glass, tiles, and kitchen or washroom slabs cleaning services company in Columbia Falls, MT for urgent renovations, our team is equipped to handle it all with precision.We take pride in being a local and affordable fully home floor or driveways cleaning restoration services contractor, ensuring your investment is protected without breaking the bank. Allied Restoration is widely recognized as the most experienced and trusted all kind buildings multi surface cleaning services contractor or company in Columbia Falls, MT. When you hire our skilled or insured multi surface cleaning services contractor or agency in Columbia Falls, MT, you gain peace of mind knowing your property is in expert hands. Don't settle for less; choose the trusted and premier window glass cleaning contractor in Columbia Falls, MT to make your surfaces shine like new today.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "What surfaces can Allied Restoration clean?",
      answer:
        "We are a premier multi surface cleaning services contractor in Columbia Falls, MT, expertly cleaning windows, concrete, tiles, grout, and slabs for both residential and commercial buildings. Trust our certified team to restore any surface to pristine condition safely.",
    },
    {
      question: "Do you offer emergency cleaning services?",
      answer:
        "Yes, Allied Restoration is a certified emergency multi surface cleaning services contractor in Columbia Falls, MT. We provide fast, professional response for unexpected spills, water damage, or sudden messes to get your property back to normal immediately and efficiently.",
    },
    {
      question: "Are your cleaning products eco-friendly?",
      answer:
        "As a trusted local eco-friendly surface cleaning services contractor in Columbia Falls, MT, we prioritize sustainability. We use safe, green cleaning solutions that are effective on tough grime while protecting your family, pets, and the environment from harsh chemicals.",
    },
    {
      question: "Do you serve areas outside Columbia Falls?",
      answer:
        "Yes, Allied Restoration proudly serves Kalispell, Whitefish, Bigfork, and Lakeside, MT. As a top-rated multi surface cleaning services contractor for all kind buildings, we bring our professional cleaning expertise to residential and commercial properties throughout the entire region.",
    },
    {
      question: "Why should I choose Allied Restoration?",
      answer:
        "Choose Allied Restoration for unparalleled expertise as a skilled and professional multi surface cleaning services contractor in Columbia Falls, MT. We guarantee reliable, affordable, and high-quality results for both commercial and residential properties, ensuring total customer satisfaction every single time.",
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
    "Allied Restoration - Your Trusted Premier No.1 Multi Surface Cleaning Services Contractor, Company or Agency Columbia Falls MT",
  subHeading: "",
  description:
    "Allied Restoration is your trusted #1 premier multi surface cleaning services contractor, company, or agency in Columbia Falls, MT. We provide professional, certified residential and commercial cleaning to ensure your property looks pristine. Experience the highest standard of local service today.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-1.jpg",
    alt: "Professional multi-surface cleaning services in Columbia Falls, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `From spotless window glass to deep-cleaned tiles, Allied Restoration is Columbia Falls’ trusted expert for comprehensive property maintenance. As a certified and skilled multi-surface cleaning services contractor, we deliver professional, affordable results for both residential and commercial buildings. Let our team restore your surfaces to perfection today.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement Deep Multi Surface Cleaning Services Contractor or Company Columbia Falls MT",
    
description:"When your basement needs more than just a surface sweep, turn to Allied Restoration, the premier choice for deep cleaning in the area. Basements are prone to moisture, mold, and stubborn grime that regular cleaning simply cannot remove. As the most certified and trusted all kinds buildings multi surface cleaning services contractor or company in Columbia Falls, MT, we specialize in rejuvenating forgotten spaces. Our team understands the unique challenges of basement environments, ensuring that every corner is sanitized, dried, and cleaned to perfection.Whether you are dealing with post-construction dust or long-term neglect, our skilled residential or commercial buildings interior or exterior surface cleaning services contractor, agency, or company in Columbia Falls, MT delivers unmatched results. We use industrial-grade equipment to lift deep-seated dirt from concrete, remove water stains, and sanitize surfaces, making your basement safe and usable again. Don't let a dirty basement reduce your home's value or compromise your air quality; hire the experts today.",
 },
{
 heading:"Local & Trusted Emergency Interior or Exterior Surface Cleaning Services Contractor or Company in Columbia Falls MT",

description:"Disasters don't wait for business hours, and neither do we. Allied Restoration offers fast, reliable emergency services for both interior and exterior surfaces to get your property back to normal immediately. As a local and trusted emergency interior or exterior surface cleaning services contractor or company in Columbia Falls, MT, we respond rapidly to spills, vandalism, or storm damage. Beyond just structural cleaning, we are also a premier and skilled carpet and rug cleaning services contractor services contractor in Columbia Falls, MT, ensuring that soft surfaces are rescued from water damage or heavy stains.Our team is trained to handle delicate fabrics and rugged exterior materials with the same high level of care and precision. We are the certified and trusted all kinds buildings multi surface cleaning services contractor or company in Columbia Falls, MT that residents rely on during crises. Contact us immediately for professional, insured, and thorough emergency cleaning services."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Multi Surface Cleaning Services Contractor Columbia Falls MT",
  description: `If you are looking for a skilled and top-rated multi surface cleaning services contractor in Columbia Falls, MT, Allied Restoration is the premier choice for transforming your property. We pride ourselves on being the most skilled & professional multi surface cleaning services contractor or company in Columbia Falls, MT, delivering exceptional results for both residential and commercial clients. Our team utilizes advanced techniques to remove stubborn dirt, grime, and stains, ensuring your surfaces look brand new. Beyond standard cleaning, we are experts in specialized care. As a skilled home or offices home concrete surface cleaning services contractor in Columbia Falls, MT, we can revitalize driveways, walkways, and patios, removing oil stains and deep-seated grime effectively.
Furthermore, our services extend to vertical surfaces; we are a certified home or offices buildings wall and ceiling cleaning services contractor in Columbia Falls, MT. We safely remove dust, cobwebs, and surface stains from high spaces without causing damage. Allied Restoration brings professional-grade equipment and unmatched expertise to every job, ensuring your interior and exterior surfaces are pristine. Don't settle for mediocre cleaning when you can hire the best in the area. Contact Allied Restoration today for a consultation and experience the difference that skilled & professional multi surface cleaning services can make for your home or business in Columbia Falls.`,
  backgroundImage: {
    src: "/images/image-2.jpg",
    alt: "Multi-surface cleaning team in Columbia Falls, MT",
  },
  secondImage: {
    src: "/images/image-3.jpg",
    alt: "Multi-surface cleaning equipment in Columbia Falls, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No1 Eco-Friendly Surface Cleaning Services Contractor Columbia Falls MT",
    description:
      "For homeowners and businesses prioritizing sustainability without sacrificing quality, Allied Restoration is the premier choice. As a certified or trusted local #1 eco-friendly surface cleaning services contractor in Columbia Falls, MT, we utilize green cleaning solutions that are safe for your family, pets, and the environment. We combine this eco-conscious approach with unparalleled expertise to deliver superior cleaning results across all types of surfaces. Our team is also renowned as an experienced, high-qualified local and trusted move-in move-out surface cleaning services company or contractor in Columbia Falls, MT. We ensure your new home is perfectly sanitized before you arrive, or that your old property is spotless for new occupants.Additionally, Allied Restoration serves the business community as a skilled & professional commercial floor and surface cleaning services contractor or company in Columbia Falls, MT, helping you maintain a pristine professional image. Whether you need regular maintenance for your property or skilled home or offices multi surface cleaning services contractor in Columbia Falls, MT, we have the expertise to handle it. Furthermore, we understand that accidents happen unexpectedly. That is why we are also a certified emergency multi surface cleaning services contractor in Columbia Falls, MT, ready to respond rapidly to spills, water damage, or sudden messes. Choose Allied Restoration for a responsible, comprehensive cleaning experience.",
    image: "/images/image-4.jpg",
    alt: "Eco-friendly multi-surface cleaning services in Columbia Falls, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Multi Surface Cleaning Services Contractor",
    description:
      "Allied Restoration proudly serves a wide range of locations as the premier multi surface cleaning services contractor for all kind buildings. We bring our professional expertise, certified technicians, and top-tier equipment to residential and commercial properties throughout the Flathead Valley. Based in Columbia Falls, MT, we ensure quick and efficient service for all your cleaning needs. Our service area extends to Kalispell, MT, where we handle everything from high-rise exterior windows to commercial concrete cleaning. Property owners in Whitefish, MT trust us for specialized interior surface care and prompt emergency responses.Furthermore, we provide comprehensive multi-surface solutions in Bigfork, MT, ensuring homes and businesses look pristine inside and out. Our dedicated teams are also active in Lakeside, MT, offering reliable and affordable cleaning restoration services tailored to your property's specific requirements. No matter the size of the project or the complexity of the surface, Allied Restoration is committed to delivering unmatched quality and customer satisfaction across the entire region. Contact us today to schedule your service in any of our coverage areas and experience the best cleaning solutions in Northwest Montana.",
    image: "/images/image-6.jpg",
    alt: "Same day multi-surface cleaning services in Columbia Falls, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Multi Surface Cleaning Services Contractor Columbia Falls MT?",
    description:
      "Choosing the right partner for property maintenance is crucial, and Allied Restoration stands out as the premier choice for all your needs. When you need a skilled and professional multi surface cleaning services contractor in Columbia Falls, MT, our team delivers unmatched expertise and dedication. We understand that both commercial and residential buildings require specialized care to maintain their value and appearance, which is why we offer tailored solutions for every project. Allied Restoration is committed to using advanced cleaning technologies and eco-friendly products that ensure a spotless finish without harming your surfaces or the environment.Our highly trained technicians are equipped to handle everything from delicate window glass to heavy-duty concrete cleaning, ensuring top-tier results every time. By choosing us, you are opting for reliability, efficiency, and a guarantee of customer satisfaction. We take pride in our rapid response times, especially for emergency services, ensuring your property is restored to its pristine condition as quickly as possible. Don't settle for less when it comes to the cleanliness and maintenance of your investment; trust the skilled and professional multi surface cleaning services contractor in Columbia Falls, MT, that truly cares.",
    image: "/images/image-9.jpg",
    alt: "Allied Restoration multi-surface cleaning team in Columbia Falls, MT",
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
