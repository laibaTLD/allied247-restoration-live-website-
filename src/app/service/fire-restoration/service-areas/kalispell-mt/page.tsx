
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
  title: 'Fire Damage Restoration in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Allied Restoration provides professional, affordable fire and smoke damage restoration in Kalispell, MT. Our certified inspectors offer same-day soot removal and trusted cleanup for local residential and commercial properties.',
  openGraph: {
    title: 'Fire Damage Restoration in Kalispell, MT | Allied 24/7 Restoration',
    description: 'Allied Restoration provides professional, affordable fire and smoke damage restoration in Kalispell, MT. Our certified inspectors offer same-day soot removal and trusted cleanup for local residential and commercial properties.',
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
  title: "Certified & Professional #1 Fire Damage Restoration Services Contractor Kalispell MT",
  areaLabel: "Kalispell, MT",
  description:
    "DReclaiming your home after a fire shouldn’t be a DIY nightmare. Allied Restoration provides professional, affordable fire and smoke damage restoration in Kalispell, MT. Our certified inspectors offer same-day soot removal and trusted cleanup for local residential and commercial properties.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local Kalispell team at Allied Restoration provides compassionate, certified guidance through your fire recovery process.",
    },
    {
      title: "Quick Response",
      description:
        "Need immediate help? We offer professional same-day soot removal and urgent fire damage inspections in Kalispell.",
    },
    {
      title: "24/7 Support",
      description:
        "Trust our local inspectors for 24/7 residential fire cleanup and emergency smoke restoration services anytime.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Fire Damage Repair Services Contractor or Company in Kalispell MT? - Same Day Fire Damage Inspection",
  paragraphs: [
    "When fire compromises the integrity of your property, you need more than just a cleanup crew; you need a professional and trusted structural fire damage repair services contractor in Kalispell, MT. At Allied Restoration, we specialize in returning safety and stability to your home with our same day fire damage inspection process. As a skilled and insured fire damage inspection services contractor, we evaluate every beam and joist to ensure your property is sound. Whether you require a skilled or professional all new or old home structural fire damage repair services contractor in Kalispell, MT, our team possesses the technical expertise to handle complex rebuilds.We are recognized as a trusted and premier fire damage repair inspector or contractor in Kalispell, MT, offering peace of mind through every phase of recovery. Our certified fire damage repair services inspector provides the documentation needed for insurance, while our crews act as a professional local buyer home fire restoration or cleanup services company. We take pride in being a local and affordable fully home structural fire damage repair or restoration services contractor, ensuring that premium quality remains accessible to our neighbors. From minor charring to major collapses, trust the most experienced and trusted all kind fire damage repair services contractor or company in Kalispell, MT to rebuild your future today.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "How quickly can Allied Restoration arrive for fire damage?",
      answer:
        "We offer emergency same-day service in Kalispell, MT. As a trusted fire damage restoration services contractor, we respond 24/7 to stabilize your property, perform soot removal, and begin the cleanup process immediately to prevent further permanent structural damage.",
    },
    {
      question: "Is your fire damage restoration process eco-friendly and safe?",
      answer:
        "Yes. Allied Restoration is a professional fire damage restoration services contractor using safe, eco-friendly cleaning agents. Our certified inspectors prioritize non-toxic methods for soot removal and smoke deodorization, ensuring your residential or commercial building is safe for immediate re-entry.",
    },
    {
      question: " Do you handle both residential and commercial fire restoration?",
      answer:
        "Absolutely. We are a premier local fire damage restoration services contractor for all property types in Kalispell. From small home kitchen fires to large-scale commercial structural repairs, our skilled team provides comprehensive cleanup and certified inspection services tailored to you.",
    },
    {
      question: "Can you help with insurance claims after a fire?",
      answer:
        "As your certified fire damage restoration services contractor, we provide detailed inspection reports and documentation for your insurance provider. We work closely with adjusters in Kalispell, MT, to ensure your fire damage recovery and repair claims are processed smoothly.",
    },
    {
      question: " Why should I hire a professional for smoke damage?",
      answer:
        "Smoke and soot contain corrosive toxins that linger in walls. Hiring a professional fire damage restoration services contractor like Allied Restoration ensures deep cleaning that DIY methods miss. We eliminate odors and structural hazards using advanced, industrial-grade restoration technology.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Flathead County & Surrounding Areas",
  areas: [
    {
      city: "Lakeside",
      region: "MT",
      description: "Certified & professional fire damage cleanup and restoration services throughout Lakeside"
    },
    {
      city: "Kalispell",
      region: "MT",
      description: "Premium fire and smoke damage restoration services in Kalispell"
    },
    {
      city: "Whitefish",
      region: "MT", 
      description: "Fast and reliable fire damage cleanup and structural restoration in Whitefish"
    },
    {
      city: "Columbia Falls",
      region: "MT",
      description: "Complete fire, smoke, and soot removal services for Columbia Falls residents and businesses"
    },
    {
      city: "Bigfork",
      region: "MT",
      description: "Comprehensive fire damage assessment and restoration services for the Bigfork area"
    },
  ]
};

const CTA_DATA = {
  heading:
    "Allied Restoration - Your Trusted Premier No.1 Fire Damage Inspection or Fire Restoration Services Inspector, Company or Agency Columbia Falls MT",
  subHeading: "",
  description:
    "Secure your property with Allied Restoration, the top-rated choice for comprehensive recovery. As the premier fire damage inspection and restoration agency in Columbia Falls, MT, we provide expert damage assessments and professional cleanup to restore your home safely and efficiently.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-7.jpg",
    alt: "Professional fire damage restoration services in Kalispell, MT",
  },
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `As the leading certified and trusted all kinds fire damage repair and restoration and inspection services contractor or company, Allied Restoration offers comprehensive solutions. From professional smoke mitigation and same-day soot removal to full-scale structural rebuilding, our skilled fire damage inspector ensures your Kalispell home is restored safely and efficiently.`,
 service:[
  {
    heading:"Hire Now Most Trusted Fire Restoration Inspection or Fire Damage Cleanup Contractor or Company Kalispell MT",
    
description:"When disaster strikes, the first step to recovery is a comprehensive evaluation. As the skilled fire damage inspector services contractor or company in Kalispell, MT, Allied Restoration provides the critical oversight needed to document every detail of the damage. Hiring a certified and trusted all kinds fire damage repair and restoration and inspection services contractor or company ensures that hidden hazards—like scorched electrical systems or compromised floor joists—are identified before they become permanent problems.Our team bridges the gap between the initial fire and a clean slate, offering meticulous fire damage cleanup that removes toxic soot and odors. We understand that residents need a premier and skilled fire damage repair, restoration or cleanup services contractor who respects their property and timeline. By choosing a local leader, you secure a partner dedicated to restoring safety through precision-driven inspection and professional-grade cleanup techniques tailored specifically for the Flathead Valley area.",
 },
{
 heading:"Local & Trusted Emergency Fire Damage Repair, Restoration or Cleanup Services Contractor or Company in Kalispell MT",

description:"Emergency situations demand an immediate, high-caliber response. Allied Restoration stands as the local & trusted emergency fire damage repair, restoration or cleanup services contractor or company in Kalispell, MT, ready to stabilize your property 24/7. Fire doesn’t wait for business hours, and neither do we. As a premier and skilled fire damage repair, restoration or cleanup services contractor, we move quickly to board up structures and begin the restoration process to prevent further environmental degradation.Our reputation as a certified and trusted all kinds fire damage repair and restoration and inspection services contractor or company is built on our ability to handle everything from smoke mitigation to full-scale structural rebuilding. Whether you are dealing with a kitchen flare-up or a major residential loss, our skilled fire damage inspector services contractor team ensures every phase of the repair meets rigorous safety standards. Trust our experts to restore your home and your peace of mind with local, reliable expertise."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Fire and Smoke Damage, Inspection or Repair Services Inspector and Contractor Kalispell MT",
  description: `When your property is affected by fire, the cleanup process shouldn't introduce more toxins into your environment. Allied Restoration is proud to be the skilled & professional safe and eco-friendly fire damage removal services, contractor or company in Kalispell, MT. We prioritize the health of your family and the local environment by using sustainable methods to eliminate smoke odors and hazardous soot. As a skilled home or offices fire damage inspection or repair services contractor Kalispell, MT, we understand the unique needs of both residential and commercial structures.
Our team includes every certified smoke or soot damage repair or restoration services inspector, or inspection contractor Kalispell, MT residents rely on for detailed, non-toxic remediation plans. We don’t just mask smells; we neutralize them at the molecular level using eco-friendly technology. Whether you are dealing with a small kitchen fire or large-scale structural damage, our skilled & professional safe and eco-friendly fire damage removal services ensure your air quality is restored alongside your walls. By choosing Allied Restoration, you are partnering with a certified smoke or soot damage repair or restoration services inspector who values safety as much as speed. Let our local experts provide the green, effective solutions your Kalispell home deserves to be truly clean and safe again.`,
  backgroundImage: {
    src: "/images/image-21.jpg",
    alt: "Fire damage restoration team in Kalispell, MT",
  },
  secondImage: {
    src: "/images/image-22.jpg",
    alt: "Fire damage cleanup equipment in Kalispell, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No1 Fire Damage Recovery Solutions Services Contractor Kalispell MT",
    description:
      "When a fire disrupts your life, you need a partner who combines technical expertise with local reliability. Allied Restoration is recognized as the certified or trusted local no1 fire damage recovery solutions services contractor in Kalispell, MT, dedicated to helping families and business owners rebuild. As an experienced high-qualified local and trusted fire restoration company services contractor, we understand the specific challenges that Montana properties face, from smoke infiltration to structural compromises. Our team serves as a skilled & professional fire damage recovery solutions inspector services contractor or company in Kalispell, MT, ensuring that every inch of your property is thoroughly evaluated before the restoration begins.We take pride in our versatility, operating as a skilled home or offices fire damage recovery solutions or inspector contractor Kalispell, MT capable of handling both cozy residential spaces and complex commercial layouts. Every project is overseen by a certified fire damage recovery services contractor to ensure compliance with the highest safety and industry standards. By choosing Allied Restoration, you are opting for a comprehensive approach where precision meets compassion. Whether you are dealing with minor smoke damage or require total structural recovery, our experienced high-qualified local and trusted fire restoration company services contractor team is ready to deliver the no1 service you deserve. Trust our certified fire damage recovery services contractor experts to bring your Kalispell property back to life.",
    image: "/images/image-23.jpg",
    alt: "Fire damage restoration and smoke removal equipment in Kalispell, MT",
  },
  row2: {
    heading: "Our Service Areas for All Kind Fire Damage Restoration or Cleanup Services Contractor",
    description:
      "At Allied Restoration, we take immense pride in being the most reliable resource for property owners throughout the Flathead Valley. As your premier local fire damage restoration or cleanup services contractor, our reach extends far beyond a single zip code to ensure help is always nearby. We provide rapid, professional response teams to Kalispell, MT, ensuring that our neighbors in the city have immediate access to emergency cleanup. Our skilled crews also travel frequently to Whitefish, MT, delivering high-end restoration results for luxury homes and local businesses alike.For those located along the scenic shores, we are the go-to experts in Bigfork, MT, and Lakeside, MT, offering specialized smoke and fire damage solutions tailored to lakeside residential properties. Additionally, we provide comprehensive structural repairs and fire cleanup in Columbia Falls, MT, supporting the Gateway to Glacier with 24/7 emergency availability. No matter where you are located within these communities, Allied Restoration ensures that a certified and trusted contractor is ready to restore your property to its pre-loss condition with efficiency and care.",
    image: "/images/image-24.jpg",
    alt: "Fire damage repair and soot cleanup in Kalispell, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Fire Damage Restoration Services Contractor Kalispell MT?",
    description:
      "Choosing the right partner for property recovery is a decision that impacts the safety and longevity of your investment. Allied Restoration stands out as the premier choice because we combine localized expertise with industrial-strength solutions. As a skilled and professional trusted fire damage, fire restoration or fire surface cleanup services contractor in Kalispell, MT, we understand the unique structural requirements of both historic downtown buildings and modern residential estates. Our reputation is built on a foundation of transparency, rapid mobilization, and meticulous attention to detail.We go beyond surface-level cleaning; we utilize advanced thermal fogging and HEPA filtration to ensure your indoor air quality is pristine. When you hire Allied Restoration, you are partnering with a skilled and professional trusted fire damage, fire restoration or fire surface cleanup services contractor in Kalispell, MT that handles the heavy lifting of insurance coordination and structural stabilization. Our customer-first philosophy means we treat every commercial facility and family home as if it were our own. From the initial soot assessment to the final coat of paint, our comprehensive project management ensures your restoration is completed on time and within budget. Choose the local leader dedicated to revitalizing the Flathead Valley, one building at a time.",
    image: "/images/image-25.png",
    alt: "Allied Restoration fire damage restoration team in Kalispell, MT",
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
