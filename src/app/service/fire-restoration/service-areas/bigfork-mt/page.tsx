
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
  title: 'Certified & Professional #1 Fire Damage Restoration Services Contractor Bigfork MT',
  description: 'Allied 24/7 Restoration delivers immediate cleanup, repair, and full property restoration for homes and businesses in Bigfork, MT. Call now for expert services!',
  openGraph: {
    title: 'Certified & Professional #1 Fire Damage Restoration Services Contractor Bigfork MT',
    description: 'Allied 24/7 Restoration delivers immediate cleanup, repair, and full property restoration for homes and businesses in Bigfork, MT. Call now for expert services!',
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
  title: "Certified & Professional #1 Fire Damage Restoration Services Contractor Bigfork MT",
  areaLabel: "Bigfork, MT",
  description:
    "Don’t face the aftermath alone. Allied Restoration is the local and trusted residential or commercial fire damage restoration expert in Bigfork, MT. We provide professional and affordable cleanup, skilled smoke damage restoration, and certified inspections to restore your home today.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our compassionate experts at Allied Restoration guide you through every step with care and local expertise.",
    },
    {
      title: "Quick Response",
      description:
        "We arrive fast in Bigfork to mitigate damage, securing your property and starting the restoration immediately.",
    },
    {
      title: "24/7 Support",
      description:
        "Fire emergencies don't wait. Our certified team is available 24/7 for immediate local assistance.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Fire Damage Repair Services Contractor or Company in Bigfork MT? - Same Day Fire Damage Inspection",
  paragraphs: [
    "When disaster strikes, navigating the aftermath requires a partner who understands the urgency of your situation. If you are looking for a professional and trusted structural fire damage repair services contractor or company in Bigfork, MT, Allied Restoration is here to provide an immediate same-day fire damage inspection. As a trusted and premier fire damage repair inspector or contractor in Bigfork, MT, we specialize in comprehensive recovery solutions for every type of property. Whether you need a skilled or professional all new or old home structural fire damage repair services contractor in Bigfork, MT, or a professional local buyer home fire restoration or cleanup services company in Bigfork, MT, our team delivers excellence.We pride ourselves on being a local and affordable fully home structural fire damage repair or restoration services contractor in Bigfork, MT, ensuring that high-quality recovery is accessible to our community. Our certified fire damage repair services inspector Bigfork, MT team conducts thorough assessments to secure your property's integrity. As an experienced and trusted all kind fire damage repair services contractor or company in Bigfork, MT, we manage everything from soot removal to deep structural reinforcement. Trust our skilled or insured fire damage inspection services contractor to handle your claim with precision and care, restoring safety and peace of mind to your household immediately.",
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
        "We provide same-day fire damage inspection in Bigfork, MT. Our local team is available 24/7 to respond immediately to your emergency, ensuring that we stabilize your property and begin the cleanup process to prevent further structural or soot damage.",
    },
    {
      question: " Are your fire restoration cleaning products safe for my family?",
      answer:
        "Yes, we are a skilled and top-rated safe and eco-friendly fire and smoke damage contractor. We use non-toxic, sustainable cleaning agents that effectively remove toxic soot and odors without leaving harmful chemical residues in your home or office environment.",
    },
    {
      question: "Do you handle both residential and commercial fire restoration?",
      answer:
        "Absolutely. Allied Restoration is a local and trusted residential or commercial fire damage restoration services provider. We have the industrial equipment and expertise to manage everything from small kitchen fires to large-scale commercial structural repairs throughout the Bigfork area.",
    },
    {
      question: "Can you help me with the insurance claims process?",
      answer:
        "Yes. As a certified fire damage repair services inspector, we provide detailed documentation and accurate damage assessments. We work closely with your insurance company to ensure all fire, smoke, and structural issues are professionally reported for a smoother claim experience.",
    },
    {
      question: " What areas do you serve outside of Bigfork?",
      answer:
        "Beyond being the No1 fire damage recovery solutions services contractor in Bigfork, we proudly serve the entire Flathead Valley. Our service areas include Kalispell, Whitefish, Columbia Falls, and Lakeside, providing expert emergency cleanup and repair services to these communities.",
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
    "Allied Restoration - Your Trusted Premier No1 Fire Damage Inspection or Fire Restoration Services Inspector, Company, or Agency Bigfork MT",
  subHeading: "",
  description:
    "As Bigfork’s premier experts, Allied Restoration provides elite fire damage inspection and fire restoration services. Our certified inspectors and professional company deliver rapid, high-quality recovery solutions, ensuring your property is safely restored by the area's most trusted agency.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-21.jpg",
    alt: "Professional fire damage restoration services in Bigfork, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration provides comprehensive recovery solutions tailored for the Bigfork community. As a certified and trusted all kinds fire damage repair and restoration and inspection services contractor, we handle everything from skilled smoke damage restoration to same-day soot removal, ensuring your residential or commercial property is returned to pre-loss condition quickly.`,
 service:[
  {
    heading:"Hire Now Most Trusted Fire Restoration Inspection or Fire Damage Cleanup Contractor in Bigfork, MT",
    
description:"When the smoke clears, your first priority is securing a safe future for your property. Allied Restoration stands as the premier and skilled fire damage repair, restoration, or cleanup services contractor in Bigfork, MT, offering immediate relief during your most difficult moments. Navigating the aftermath of a fire requires more than just a cleaning crew; it demands a skilled fire damage inspector services contractor or company in Bigfork, MT, to identify hidden structural weaknesses and hazardous soot deposits.We provide comprehensive assessments to ensure your insurance claim is accurate and your home is safe to inhabit. Our team is recognized as a certified and trusted all kinds fire damage repair and restoration and inspection services contractor or company, blending technical expertise with genuine local care. From initial air quality testing to deep char removal, we ensure every inch of your property is meticulously handled by professionals who prioritize your safety above all else.",
 },
{
 heading:"Local & Trusted Emergency Fire Damage Repair, Restoration, or Cleanup Services Company in Bigfork, MT",

description:"In an emergency, every second counts to prevent permanent structural failure and pervasive smoke odor. Allied Restoration is your local & trusted emergency fire damage repair, restoration, or cleanup services company in Bigfork, MT, ready to respond 24/7. We understand that fire doesn’t just damage what it touches; the lingering soot and water from firefighting efforts can cause secondary issues like mold and corrosion.As a premier and skilled fire damage repair, restoration, or cleanup services contractor, we utilize industrial-grade equipment to stabilize your home instantly. Residents choose us because we are a certified and trusted all kinds fire damage repair and restoration and inspection services contractor or company that manages the entire lifecycle of recovery. Whether you need a skilled fire damage inspector services contractor to evaluate the wreckage or a full-scale construction crew to rebuild, our local Bigfork team ensures a seamless, stress-free transition from ruin to restoration."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Fire and Smoke Damage, Inspection or Repair Services Inspector and Contractor Bigfork MT?",
  description: `When your property is affected by fire, choosing a recovery partner who prioritizes both structural integrity and environmental safety is essential. Allied Restoration is the premier choice for those seeking a skilled and professional safe and eco-friendly fire damage removal services contractor or company in Bigfork, MT. We understand that the cleaning agents used in your home or workspace matter, which is why we utilize non-toxic, sustainable methods to eliminate hazardous residues. As a skilled home or offices fire damage inspection or repair services contractor in Bigfork, MT, we provide meticulous assessments that cover everything from hidden structural charred beams to air quality concerns.
Our team features the most certified smoke or soot damage repair or restoration services inspector or inspection contractor in the region, ensuring that every lingering odor and fine particulate is eradicated using advanced, green technology. We pride ourselves on being a skilled and top-rated safe and eco-friendly fire and smoke damage, inspection or repair services inspector and contractor in Bigfork, MT, dedicated to protecting the beautiful Montana environment while restoring your peace of mind. Whether you are dealing with a minor kitchen flare-up or major structural damage, Allied Restoration delivers the expertise required to navigate the complexities of fire recovery. Trust our certified smoke or soot damage repair experts to deliver a clean, safe, and breathable environment for your family or employees today.`,
  backgroundImage: {
    src: "/images/image-23.jpg",
    alt: "Fire damage restoration team in Bigfork, MT",
  },
  secondImage: {
    src: "/images/image-24.jpg",
    alt: "Fire damage cleanup equipment in Bigfork, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Fire Damage Recovery Solutions Services Contractor Bigfork MT",
    description:
      "Navigating the aftermath of a fire requires more than just cleanup; it demands a strategic partner capable of handling complex structural and environmental challenges. Allied Restoration is proud to be recognized as the certified or trusted local No1 fire damage recovery solutions services contractor in Bigfork, MT. Our mission is to provide immediate, high-impact relief to our community, ensuring that every property is restored to its original safety and beauty. As an experienced high-qualified local and trusted fire restoration company services contractor in Bigfork, MT, we bring years of field expertise to every project, managing everything from initial board-ups to final reconstruction.Our team consists of skilled & professional fire damage recovery solutions inspector services contractors or companies in Bigfork, MT, who utilize advanced diagnostic tools to uncover hidden damage that others might miss. Whether you are managing a residential property or a commercial workspace, we act as the premier skilled home or offices fire damage recovery solutions or inspector contractor in Bigfork, MT, tailoring our recovery plan to your specific needs. Choosing a certified fire damage recovery services contractor means you are guaranteed a high standard of workmanship and adherence to strict safety protocols. At Allied Restoration, we don't just fix buildings; we rebuild lives by providing reliable, local No1 fire damage recovery solutions that Bigfork residents can trust during their most difficult times.",
    image: "/images/image-25.png",
    alt: "Fire damage restoration and smoke removal equipment in Bigfork, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Fire Damage Restoration or Cleanup Services Contractor",
    description:
      "Allied Restoration is proud to be the premier regional provider, offering our extensive service areas for all kind fire damage restoration or cleanup services contractor needs across the Flathead Valley. We understand that when disaster strikes, proximity and speed are the most critical factors for successful recovery. Our rapid-response teams are strategically positioned to serve Bigfork, MT, ensuring that local homeowners and business owners receive immediate, on-site assistance for soot removal and structural stabilization. Beyond Bigfork, we act as a dedicated fire damage restoration or cleanup services contractor in Kalispell, MT, handling large-scale commercial losses and residential emergencies with equal precision.In the mountain community of Whitefish, MT, our certified experts provide specialized smoke odor removal and high-end property restoration, preserving the integrity of your investment. We are also the trusted choice for families in Columbia Falls, MT, offering comprehensive cleanup services that focus on safety and total property decontamination. Furthermore, residents in Lakeside, MT, can rely on our skilled technicians for thorough fire damage inspections and eco-friendly recovery solutions. No matter where you are located within these key areas, Allied Restoration ensures that expert help is always just a phone call away, providing the local expertise and professional equipment necessary to restore your property to pre-loss condition efficiently.",
    image: "/images/image-20.webp",
    alt: "Fire damage repair and soot cleanup in Bigfork, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Fire Damage Restoration Services Contractor Bigfork MT?",
    description:
      "Choosing the right partner for property recovery can make all the difference in your peace of mind and the ultimate safety of your structure. So, why choose Allied Restoration contractor or company for your commercial or residential buildings fire damage restoration services contractor in Bigfork, MT? The answer lies in our unwavering commitment to quality, speed, and local expertise. We understand that fire damage is a multifaceted crisis involving structural compromise, smoke contamination, and water damage. As a skilled and professional trusted fire damage, fire restoration, or fire surface cleanup services contractor in Bigfork, MT, we provide a holistic approach that addresses every layer of the disaster.Allied Restoration stands out by combining advanced industrial technology with a personalized, neighborly touch. We don't just treat the visible damage; we use specialized equipment to neutralize deep-seated odors and microscopic soot particles that can pose long-term health risks. Our team is fully licensed and insured, providing a seamless bridge between your emergency and a fully restored home or office. By choosing a skilled and professional trusted fire damage expert, you ensure that your insurance claims are handled with precision and your property meets all safety codes. Trust the Bigfork leaders who prioritize your recovery above all else.",
    image: "/images/image-26.jpg",
    alt: "Allied Restoration fire damage restoration team in Bigfork, MT",
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
