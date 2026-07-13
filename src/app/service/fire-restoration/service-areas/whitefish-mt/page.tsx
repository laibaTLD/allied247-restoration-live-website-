
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
  title: 'Get Our Expert Fire Damage Services In Whitefish, MT | Allied 24/7 Restoration',
  description: 'We provide expert fire damage restoration services in Whitefish, MT. Our trusted specialists quickly repair, and full property restoration to prevent further damage—fast, reliable, and available 24/7.',
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Affordable Garbage & Junk Clean Outs in Glendale AZ | Junks Butlers',
    description: 'Affordable garbage and junk clean outs in Glendale AZ. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Fire Damage Restoration Services Contractor Whitefish MT",
  areaLabel: "Whitefish, MT",
  description:
    "Recover fast with Allied Restoration. As your local, trusted fire damage restoration services contractor in Whitefish, MT, we provide professional, affordable fire cleanup and same-day soot removal. Certified, skilled, and ready 24/7—protecting your residential or commercial property starts here.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our compassionate team provides personalized care, guiding you through the fire restoration process with genuine support.",
    },
    {
      title: "Quick Response",
      description:
        "Allied Restoration arrives fast to mitigate damage, securing your Whitefish property with urgent, expert fire cleanup.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer 24/7 emergency assistance, ensuring local homeowners receive professional restoration help whenever disaster strikes.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Fire Damage Repair Services Contractor or Company in Whitefish MT? - Same Day Fire Damage Inspection",
  paragraphs: [
    "When disaster strikes your property, finding a professional and trusted structural fire damage repair services contractor in Whitefish, MT is the first step toward recovery. Allied Restoration stands as the premier choice, offering a same-day fire damage inspection to assess the integrity of your building immediately. Whether you own a historic property or a modern build, we are a skilled or professional all new or old home structural fire damage repair services contractor dedicated to restoring safety and stability. As an experienced and trusted all kind fire damage repair services contractor or company in Whitefish, MT, we understand that every minute counts.Our team includes a certified fire damage repair services inspector who meticulously evaluates soot, smoke, and structural compromise. We take pride in being a professional local buyer home fire restoration or cleanup services company that Whitefish residents rely on for honesty and efficiency. From the initial assessment by a skilled or insured fire damage inspection services contractor to the final touch-ups, our work is thorough and guaranteed. If you need a local and affordable fully home structural fire damage repair or restoration services contractor, Allied Restoration provides the perfect balance of elite craftsmanship and competitive pricing. Don’t settle for less when your safety is at stake; choose a trusted and premier fire damage repair inspector or contractor in Whitefish, MT to rebuild your peace of mind.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "Is fire damage restoration covered by my insurance?",
      answer:
        "Most homeowners' policies in Whitefish cover fire and smoke damage. Allied Restoration works directly with your provider, handling the complex documentation and claims process to ensure you maximize your coverage for both structural repairs and personal property cleanup.",
    },
    {
      question: "How long does the restoration process typically take?",
      answer:
        "The timeline varies based on the fire’s severity. Minor smoke cleanup may take a few days, while major structural repairs can take several weeks. Allied Restoration provides a detailed schedule after our initial same-day inspection to keep you informed.",
    },
    {
      question: "Can I stay in my home during restoration?",
      answer:
        "This depends on the damage level and air quality. If the kitchen, bathrooms, or HVAC system are compromised, we recommend off-site housing. We prioritize your safety and will advise you immediately if your home is habitable during the cleanup.",
    },
    {
      question: "Can you remove the persistent smell of smoke?",
      answer:
        "Yes. Using industrial-grade ozone generators, thermal fogging, and eco-friendly deodorizers, Allied Restoration neutralizes smoke odors at the molecular level. We don’t just mask the scent; we permanently remove it from your walls, upholstery, and ductwork for a fresh start.",
    },
    {
      question: "Why should I hire a professional for small fires?",
      answer:
        "Even small fires leave acidic soot and hidden smoke residue that can corrode electronics and cause permanent staining within 48 hours. Professionals like Allied Restoration use specialized equipment to prevent secondary damage and ensure your indoor air is safe.",
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
    "Allied Restoration - Your Trusted Premier No1 Fire Damage Inspection or Fire Restoration Services Inspector, Company or Agency Whitefish MT",
  subHeading: "",
  description:
    "Secure your property with Allied Restoration, Whitefish’s premier agency for expert fire recovery. We provide top-tier fire damage inspection and comprehensive restoration services. Our certified team delivers professional, rapid, and trusted solutions to rebuild your home and peace of mind.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-7.jpg",
    alt: "Professional fire damage restoration services in Whitefish, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration provides comprehensive recovery solutions for Whitefish residents. From expert fire damage inspection and smoke removal to structural fire damage repair, our certified team handles it all. We specialize in emergency fire cleanup and soot mitigation, ensuring your property is restored to its pre-loss condition quickly and affordably.`,
 service:[
  {
    heading:"Hire Now Most Trusted Fire Restoration Inspection or Fire Damage Cleanup Contractor in Whitefish, MT",
    
description:"When the smoke clears, the true work begins. Allied Restoration is recognized as the skilled fire damage inspector services contractor or company in Whitefish, MT, providing the critical first step toward rebuilding: a comprehensive, expert evaluation. We don't just look at the surface; our certified and trusted all kinds fire damage repair and restoration and inspection services contractor team dives deep into the structural integrity and air quality of your property.Choosing a premier and skilled fire damage repair, restoration, or cleanup services contractor ensures that every trace of soot, char, and hazardous residue is professionally neutralized. Our inspection process is designed to give you a clear, honest roadmap to recovery, documenting every detail for insurance purposes. Don't leave your property's future to chance; hire the local experts who combine technical precision with a commitment to restoring your peace of mind.",
 },
{
 heading:"Local & Trusted Emergency Fire Damage Repair, Restoration, or Cleanup Services Contractor in Whitefish, MT",

description:"Emergency situations demand an immediate, high-caliber response. Allied Restoration serves as your local & trusted emergency fire damage repair, restoration, or cleanup services contractor or company in Whitefish, MT, operating 24/7 to mitigate loss. Fire doesn't wait for business hours, and neither do we. As a certified and trusted all kinds fire damage repair and restoration and inspection services contractor, we specialize in stabilizing damaged structures and preventing secondary issues like mold or permanent staining.We are proud to be a premier and skilled fire damage repair, restoration, or cleanup services contractor that prioritizes both speed and quality. Our crew utilizes industrial-grade equipment for deep cleaning and deodorization, ensuring your home or business is safe and habitable again. For residents seeking a skilled fire damage inspector services contractor or company in Whitefish, MT, Allied Restoration offers the reliability, local expertise, and rapid deployment necessary to handle any fire-related crisis with professional care."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Fire and Smoke Damage Inspection or Repair Services Inspector and Contractor in Whitefish, MT?",
  description: `When restoring your property after a fire, your health and the environment shouldn’t be compromised. Allied Restoration is the leading skilled & professional safe and eco-friendly fire damage removal services contractor or company in Whitefish, MT. We utilize advanced, non-toxic cleaning methods that effectively eliminate hazardous residues without introducing harsh chemicals into your living space. As a skilled home or offices fire damage inspection or repair services contractor, we understand the unique needs of both residential and commercial structures in our Montana climate. Our process begins with a thorough assessment by a certified smoke or soot damage repair or restoration services inspector or inspection contractor in Whitefish, MT.
We don't just mask odors; we remove them at the molecular level using green technology. Whether you are dealing with a minor kitchen flare-up or significant structural damage, our skilled and top-rated safe and eco-friendly fire and smoke damage inspection or repair services inspector and contractor team ensures every corner is decontaminated. By choosing Allied Restoration, you are opting for a sustainable recovery that protects your family, employees, and the Whitefish community. We take pride in being the most meticulous certified smoke or soot damage repair or restoration services inspector in the region, providing peace of mind through environmentally conscious, high-quality craftsmanship.`,
  backgroundImage: {
    src: "/images/image-21.jpg",
    alt: "Fire damage restoration team in Whitefish, MT",
  },
  secondImage: {
    src: "/images/image-22.jpg",
    alt: "Fire damage cleanup equipment in Whitefish, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No1 Fire Damage Recovery Solutions Services Contractor Whitefish, MT",
    description:
      "When the unthinkable happens, you need more than just a cleaning crew; you need a certified fire damage recovery services contractor in Whitefish, MT that understands the local landscape. Allied Restoration has built a reputation as the experienced high-qualified local and trusted fire restoration company services contractor by delivering excellence in every phase of the recovery process. Our team is dedicated to providing skilled and professional fire damage recovery solutions inspector services for both residential and commercial properties throughout the Flathead Valley. As a skilled home or offices fire damage recovery solutions or inspector contractor, we recognize that structural fires require a specialized touch.We don't just treat the visible damage; we address the hidden smoke pathways and structural weaknesses that others might miss. Our status as a certified or trusted local no1 fire damage recovery solutions services contractor means we adhere to the highest industry standards for safety and decontamination. Whether your loss is small or large, Allied Restoration provides the skilled and professional fire damage recovery solutions inspector services contractor or company in Whitefish, MT that you can rely on for a seamless transition from disaster to restoration. By choosing a certified fire damage recovery services contractor, you ensure that your property is handled with technical precision, helping you return to your normal life as quickly as possible.",
    image: "/images/image-23.jpg",
    alt: "Fire damage restoration and smoke removal equipment in Whitefish, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Fire Damage Restoration or Cleanup Services Contractor",
    description:
      "At Allied Restoration, we take pride in being the most reliable fire damage restoration or cleanup services contractor serving the heart of the Flathead Valley. We understand that when disaster strikes, every second counts, which is why we have strategically positioned our teams to provide rapid emergency response across our entire service area. From our primary hub in Whitefish, MT, to the bustling residential neighborhoods of Kalispell, MT, we are always ready to deploy certified experts to your doorstep. We are also the best provider for specialized fire recovery in Columbia Falls, MT, ensuring that local homeowners and business owners receive the professional care they deserve.Our reach extends to the scenic communities of Bigfork, MT, and down to the shores of Lakeside, MT, where we offer everything from smoke deodorization to full structural repairs. No matter where you are located within the region, our commitment remains the same: to provide top-tier, local expertise that helps our neighbors rebuild and recover. By choosing a fire damage restoration or cleanup services contractor that knows the unique needs of the Montana climate and community, you are ensuring your property is in the best possible hands.",
    image: "/images/image-24.jpg",
    alt: "Fire damage repair and soot cleanup in Whitefish, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for your commercial or residential buildings Fire damage Restoration Services Contractor Whitefish MT?",
    description:
      "Choosing the right team is critical for the safety and longevity of your property. Allied Restoration is the premier choice because we combine local expertise with industrial-strength technology. As a skilled and professional trusted fire damage, fire restoration or fire surface cleanup services contractor in Whitefish, MT, we understand the specific challenges that Montana property owners face, from soot penetration in heavy timber frames to smoke damage in modern HVAC systems. Our reputation is built on transparency, rapid response times, and a meticulous attention to detail that ensures no hidden hazards are left behind.Whether you are managing a large-scale commercial facility or a private family home, we offer a seamless, stress-free recovery process. We are not just a cleanup crew; we are a comprehensive fire restoration or fire surface cleanup services contractor dedicated to restoring your building to its original state—or better. By choosing Allied Restoration, you are partnering with a skilled and professional trusted fire damage expert that works directly with insurance companies to streamline your claim. We prioritize your health and safety, using professional-grade deodorization and structural reinforcement techniques that make us the most reliable fire damage restoration services contractor in Whitefish, MT.",
    image: "/images/image-25.png",
    alt: "Allied Restoration fire damage restoration team in Whitefish, MT",
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
        bullets={SERVICE_DATA.bullets}
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
