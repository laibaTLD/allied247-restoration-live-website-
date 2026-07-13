
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
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
  title: 'Radon Mitigation Services in Lakeside, MT | Allied 24/7 Restoration',
  description: 'Professional radon mitigation and testing services in Lakeside, MT. Certified specialists provide radon reduction systems to protect your home\'s air quality. Available 24/7—call now for expert service!',
  openGraph: {
    title: 'Radon Mitigation Services in Lakeside, MT | Allied 24/7 Restoration',
    description: 'Professional radon mitigation and testing services in Lakeside, MT. Certified specialists provide radon reduction systems to protect your home\'s air quality. Available 24/7—call now for expert service!',
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
  title: "Certified & Professional #1 Buildings Radon Mitigation Services Contractor Lakeside MT",
  areaLabel: "Lakeside, MT",
  description:
    "Ensure safety with Allied Restoration, Lakeside's #1 professional and certified radon mitigation services contractor. We provide trusted, affordable radon reduction for both residential and commercial properties. Contact our local skilled inspectors for fast, reliable service you can count on.",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our friendly agents provide professional, trusted radon mitigation services for your Lakeside residential or commercial property.",
    },
    {
      title: "Quick Response",
      description:
        "Get a quick response from our local, certified contractor for fast, professional radon reduction in Lakeside, MT.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer 24/7 support and professional, affordable radon mitigation services for Lakeside homes and commercial properties.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Sub-Slab Radon Mitigation Services Contractor or Company in Lakeside MT? - Radon Gas Mitigation Services",
  paragraphs: [
    "If you are searching for a professional and trusted sub-slab radon mitigation services contractor or company in Lakeside, MT, look no more than Allied Restoration. Radon is a silent threat, but our team is dedicated to securing your property. We are the premier certified radon mitigation services contractor in Lakeside, MT, specializing in comprehensive solutions for both new and old residential structures. Whether you need an emergency response or a scheduled installation, our skilled or professional all new or old home emergency radon mitigation services contractor in Lakeside, MT, is ready to help. At Allied Restoration, we take pride in being a local and affordable fully home sub-slab radon mitigation repair or restoration services contractor in Lakeside, MT.Our experts understand the unique structural needs of local buildings, ensuring effective reduction methods tailored to your property. As a trusted and premier radon mitigation inspection inspector or contractor in Lakeside, MT, we provide thorough assessments to identify risks accurately. Furthermore, our experienced and trusted all-kind buildings radon mitigation and installation services contractor or company in Lakeside, MT, ensures high-quality workmanship for long-term safety. We are fully insured, making us the skilled or insured radon mitigation services contractor in Lakeside, MT, you can trust with your health and property value. Don't leave your safety to chance; choose the leading professional emergency radon mitigation services company in Lakeside, MT, to breathe easier.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "How long does a radon mitigation system installation take?",
      answer:
        "Typically, installation by Allied Restoration takes one day. As a trusted radon mitigation services contractor in Lakeside, MT, our skilled team ensures a professional, efficient setup for your residential or commercial building, minimizing disruption while maximizing safety and radon reduction.",
    },
    {
      question: "Is sub-slab radon mitigation effective for all homes?",
      answer:
        "Yes, it is the most common and effective method for slab-on-grade homes. Allied Restoration provides expert sub-slab radon mitigation services in Lakeside, MT, tailored to your building’s unique structure, ensuring comprehensive gas removal and long-term protection for your property.",
    },
    {
      question: "Can I test for radon myself or need a professional?",
      answer:
        "DIY kits exist, but professional testing is more accurate. Allied Restoration offers certified radon inspection services in Lakeside, MT. Our skilled contractors ensure precise results and reliable mitigation strategies based on thorough assessments for your home or office building.",
    },
    {
      question: "Does a radon mitigation system require maintenance?",
      answer:
        "Systems are low maintenance but should be checked annually. Allied Restoration provides professional radon system repair and maintenance services in Lakeside, MT, ensuring your mitigation system operates efficiently and continues to protect your property from dangerous gas levels effectively.",
    },
    {
      question: "Why should I choose Allied Restoration over other contractors?",
      answer:
        "Allied Restoration is the #1 local and trusted radon mitigation services contractor in Lakeside, MT. Our certified, skilled technicians provide premier residential and commercial solutions, guaranteeing high-quality installation, reliable system maintenance, and a safer environment for your property and health.",
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
    "Allied Restoration - Your Trusted Premier No.1 Radon Mitigation Services Contractor, Inspector, Company or Agency Lakeside MT",
  subHeading: "",
  description:
    "Allied Restoration is the premier #1 radon mitigation services contractor and company in Lakeside, MT. Our trusted, certified inspectors provide professional residential and commercial radon reduction. Choose us for local, affordable solutions to ensure your property is safe from dangerous radon gas levels today.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-11.webp",
    alt: "Professional radon mitigation services in Lakeside, MT",
  },
  overlayText:
    "Allied Restoration offers premier, certified radon mitigation services in Lakeside, MT, for homes and businesses. Our trusted experts provide comprehensive testing, professional sub-slab installation, and emergency repairs. Ensure your property is safe and affordable with our skilled, local team dedicated to delivering reliable, high-quality radon reduction solutions.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers premier, certified radon mitigation services in Lakeside, MT, for homes and businesses. Our trusted experts provide comprehensive testing, professional sub-slab installation, and emergency repairs. Ensure your property is safe and affordable with our skilled, local team dedicated to delivering reliable, high-quality radon reduction solutions.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement and Crawl Space Radon Mitigation Services Contractor or Company Lakeside MT",
    
description:"When it comes to securing your property, Allied Restoration is the premier choice for professional radon solutions. If you need to hire now the most trusted basement and crawl space radon mitigation services contractor or company in Lakeside, MT, our team is ready to deliver unparalleled expertise. We specialize in comprehensive structural assessments and tailored mitigation plans to effectively lower radon levels in high-risk areas like basements and crawl spaces.As a skilled residential or commercial buildings radon testing and mitigation solutions services contractor or company in Lakeside, MT, we ensure that your property is safe from this silent health hazard. Our technicians are highly trained to identify the specific entry points in your foundation and implement durable, long-term solutions. Choosing Allied Restoration means opting for peace of mind, knowing that a certified and trusted all-kinds buildings radon mitigation services contractor or company in Lakeside, MT, is handling your safety needs with the highest standards of professionalism and care.",

 },
{
 heading:"Local & Trusted Emergency Radon Testing and Mitigation Solutions Services Contractor or Company in Lakeside MT",

description:"Radon emergencies require fast, reliable action. Allied Restoration acts as your local & trusted emergency radon testing and mitigation solutions services contractor or company in Lakeside, MT, providing rapid assessments when you need them most. We understand the urgency of protecting your family or employees from dangerous radon levels, which is why our team is equipped for immediate deployment.Beyond initial mitigation, we are the premier and skilled radon system repair and maintenance services contractor in Lakeside, MT. Regular maintenance is crucial for ensuring your system continues to operate at peak efficiency. Whether you require immediate testing to assess a crisis or routine maintenance to ensure ongoing protection, our skilled residential or commercial buildings radon testing and mitigation solutions services contractor or company in Lakeside, MT, delivers fast, effective results. Trust Allied Restoration for comprehensive, local, and reliable radon services that safeguard your health and property value consistently."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Radon Mitigation Inspection Services Inspector and Contractor Lakeside MT",
  description: `If you are looking for a skilled and top-rated radon mitigation inspection services inspector and contractor in Lakeside, MT, look no more than Allied Restoration. We understand that ensuring your property is free from dangerous radon gas is a top priority, which is why we provide comprehensive assessments tailored to your needs. Our team consists of skilled & professional radon mitigation inspection services, contractors, or companies in Lakeside, MT, dedicated to accuracy and reliability. Whether you need to secure a single-family home or a large commercial space, Allied Restoration is the premier choice. As a skilled home or office radon mitigation services contractor in Lakeside, MT, we provide tailored solutions that fit your specific structural requirements.
We utilize advanced technology to detect radon entry points and implement effective reduction strategies. Furthermore, we are a certified home or office buildings radon mitigation services inspector or inspection contractor in Lakeside, MT. Our experts are thoroughly trained to identify risks that others might miss, ensuring your safety and compliance with health standards. By choosing Allied Restoration, you are hiring a team committed to excellence and peace of mind. Don't compromise on your health—contact the experts today to schedule a comprehensive inspection and guarantee a safe environment for you, your family, or your employees.`,
  backgroundImage: {
    src: "/images/image-12.jpg",
    alt: "Professional radon mitigation services in Lakeside, MT",
  },
  secondImage: {
    src: "/images/image-13.jpg",
    alt: "Radon mitigation system installation in Lakeside, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster EPA Approved Radon Mitigation Services Contractor Lakeside MT",
    description:
      "When disaster strikes or high radon levels are detected, you need a certified or trusted local #1 disaster EPA approved radon mitigation services contractor in Lakeside, MT. Allied Restoration is the leading expert dedicated to securing your property immediately. We are an experienced, high-qualified, local, and trusted EPA approved radon mitigation services company and contractor in Lakeside, MT, committed to exceeding safety standards. Our team consists of skilled & professional radon control services inspector contractors and companies in Lakeside, MT, ready to tackle any challenge. Whether you require services for residential or commercial properties, we offer tailored solutions to ensure your environment is safe.We act as a skilled home or office radon control services contractor in Lakeside, MT, focusing on effective reduction techniques that work for your specific structure. Don't panic when facing high radon levels; rely on a certified emergency radon mitigation services contractor in Lakeside, MT. Our rapid response team is equipped to diagnose, design, and install a mitigation system swiftly, reducing your risk immediately. Allied Restoration prioritizes your safety and peace of mind above all else. Choose the best in the business to protect your home or office from this silent danger.",
    image: "/images/image-14.jpg",
    alt: "Radon mitigation equipment and testing devices in Lakeside, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Radon Mitigation Services Contractor",
    description:
      "Allied Restoration proudly serves as the premier radon mitigation services contractor for all kinds of buildings across the region. We understand that radon is a hidden danger that does not discriminate based on location, which is why we extend our top-tier services to multiple communities. Whether you are in Lakeside MT, seeking reliable reduction for a residential home, or in Kalispell MT, looking to secure a commercial property, our certified technicians are ready to assist. Our expertise covers Whitefish MT, where we handle specialized radon solutions for both historic structures and modern builds.We also provide comprehensive testing and mitigation in Bigfork MT, ensuring that waterfront properties and homes alike are safe from elevated radon gas. Furthermore, homeowners and business owners in Columbia Falls MT can rely on our skilled team for fast, affordable, and professional radon control services. By operating in these key areas, Allied Restoration ensures that high-quality, EPA-approved radon reduction is accessible to all residents, safeguarding health and property values throughout the vicinity. No matter the type of building, our localized approach ensures effective results.",
    image: "/images/image-15.jpg",
    alt: "Radon system installation team in Lakeside, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Radon Mitigation Services Contractor Lakeside MT?",
    description:
      "When choosing a partner to secure your property, Allied Restoration stands out as the premier skilled and professional radon mitigation services contractor in Lakeside, MT. Choosing us means opting for peace of mind, backed by years of experience and a commitment to safety. We understand that radon mitigation is not a one-size-fits-all solution; therefore, we provide customized assessments for both commercial and residential buildings to ensure the highest reduction efficiency. Our team utilizes state-of-the-art testing equipment to identify entry points accurately before designing a robust mitigation system tailored to your building's specific structural needs.As a trusted local contractor, we prioritize prompt service, transparent communication, and affordable solutions without compromising on quality. Allied Restoration is fully certified and insured, guaranteeing that your home or office is in safe hands. By choosing us, you are investing in a healthier environment and long-term protection against radon gas. Don't compromise on the safety of your family or employees; trust the expertise of Allied Restoration to deliver reliable, high-quality radon reduction results every time.",
    image: "/images/image-16.webp",
    alt: "Allied Restoration radon mitigation team in Lakeside, MT",
  },
};


async function getLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    throw new Error(
      "Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID"
    );
  }

  const landingPageData = await fetchLandingPageForSSG(templateId, id);

  if (!landingPageData) {
    throw new Error(
      `Landing page not found: templateId=${templateId}, id=${id}`
    );
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
