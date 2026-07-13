
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
  title: 'Trusted & Experienced #1 Fire Damage Restoration Services Contractor Lakeside MT',
  description: 'Allied 24/7 Restoration delivers immediate fire damage restoration for homes and businesses in Lakeside, MT. Call now for expert services!',
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Affordable Garbage & Junk Clean Outs in Glendale AZ | Junks Butlers',
    description: 'Affordable garbage and junk clean outs in Glendale AZ. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Fire Damage Restoration Services Contractor Lakeside MT",
  areaLabel: "Lakeside, MT",
  description:
    "Recover quickly with Allied Restoration, your local certified contractor for professional and affordable fire damage restoration in Lakeside, MT. From expert smoke damage inspection to same-day soot removal, our skilled team provides trusted residential and commercial fire cleanup services you can count on.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our compassionate Lakeside team provides expert guidance and empathetic support throughout your entire fire recovery process.",
    },
    {
      title: "Quick Response",
      description:
        "We arrive fast to secure your property, preventing further damage with immediate, professional fire restoration solutions.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our emergency crews are standing by to provide instant fire damage restoration assistance.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Fire Damage Repair Services Contractor or Company in Lakeside MT? - Same Day Fire Damage Inspection",
  paragraphs: [
    "When disaster strikes, finding a trusted and premier fire damage repair inspector or contractor in Lakeside MT is essential for your property’s safety. Allied Restoration is the experienced and trusted all kind fire damage repair services contractor or company in Lakeside MT you can rely on for immediate recovery. As a skilled or professional all new or old home structural fire damage repair services contractor in Lakeside MT, we specialize in stabilizing compromised structures and ensuring your building is safe for occupancy. We are a professional local buyer home fire restoration or cleanup services company in Lakeside MT dedicated to restoring value and peace of mind to our community.If you need a certified fire damage repair services Inspector Lakeside MT, our team provides comprehensive assessments to identify hidden weaknesses. We pride ourselves on being a local and affordable fully home structural fire damage repair or restoration services contractor, offering high-quality workmanship that fits your budget. Our skilled or insured fire damage inspection services contractor team handles every detail, from the initial assessment to the final nail. Whether you are dealing with minor scorching or major structural compromise, choose the most professional & certified fire damage inspector or contractor in the region. Contact us today for a same day fire damage inspection and let Lakeside’s experts handle your restoration.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: " How quickly can you arrive for a fire inspection?",
      answer:
        "At Allied Restoration, we prioritize emergencies. As a top-rated Lakeside MT contractor, we offer same-day fire damage inspections to assess structural safety and begin the cleanup process immediately, ensuring your property is secured and further damage is mitigated fast.",
    },
    {
      question: "Is soot removal included in your restoration services?",
      answer:
        "YDefinitely. Our professional and trusted same-day soot removal services are a core part of our cleanup process. We use specialized equipment to neutralize corrosive soot and smoke particles from all surfaces, preventing permanent staining and protecting your building’s integrity.",
    },
    {
      question: "Are your fire restoration methods safe for my family?",
      answer:
        "Yes. We are a skilled and professional safe and eco-friendly fire damage removal services contractor. We use non-toxic, green cleaning solutions to remove soot and smoke odors, ensuring the air quality in your Lakeside home is healthy and safe.",
    },
    {
      question: " Do you handle both residential and commercial fire damage?",
      answer:
        "Absolutely. We are an experienced and trusted all kind fire damage repair services company equipped for any scale. From local Lakeside businesses to residential homes, we provide comprehensive structural repairs, soot removal, and full fire cleanup services tailored to you.",
    },
    {
      question: "Can you help with the insurance claims process?",
      answer:
        "Yes. As a certified and trusted fire damage restoration contractor, we provide detailed documentation and professional inspections required by insurance companies. We work closely with your adjuster to ensure your Lakeside property recovery is smooth, transparent, and fully covered.",
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
    "JAllied Restoration - Your Trusted Premier No.1 Fire Damage Inspection or Fire Restoration Services Inspector, Company or Agency Lakeside MT",
  subHeading: "",
  description:
    "As Lakeside’s top-rated experts, Allied Restoration provides elite fire damage inspection and recovery. We are the premier agency for homeowners seeking a certified and trusted all kinds fire damage repair and restoration contractor, ensuring rapid, professional cleanup and structural safety.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-7.jpeg",
    alt: "Professional fire damage restoration services in Lakeside, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `At Allied Restoration, we provide comprehensive recovery solutions tailored for Lakeside properties. As your premier and skilled fire damage repair, restoration, or cleanup services contractor, we handle everything from same-day fire damage inspections to structural repairs and soot removal, ensuring your home or business is returned to pristine condition.`,
 service:[
  {
    heading:"Hire Now Most Trusted ReHire Now Most Trusted Fire Restoration Inspection or Fire Damage Cleanup Contractor in Lakeside MT",
    
description:"When fire impacts your property, the first few hours are critical for salvaging what remains. Allied Restoration stands as the premier and skilled fire damage repair, restoration, or cleanup services contractor in Lakeside, MT, providing immediate stability in a time of crisis. Choosing a certified and trusted all kinds fire damage repair and restoration and inspection services contractor or company ensures that every square inch of your home is evaluated for safety.Our skilled fire damage inspector services contractor or company in Lakeside, MT, utilizes advanced thermal imaging and moisture detection to find hidden damage behind walls and under floorboards. We don’t just clean up the visible debris; we provide a comprehensive roadmap for full recovery. By hiring a local leader, you ensure that your insurance claims are supported by detailed, professional documentation. Trust our team to manage the heavy lifting while you focus on your family’s well-being.",
 },
{
 heading:"Local & Trusted Emergency Fire Damage Repair, Restoration, or Cleanup Services Company in Lakeside MT",

description:"Emergency situations require a rapid, disciplined response. As your local and trusted emergency fire damage repair, restoration, or cleanup services contractor or company in Lakeside, MT, Allied Restoration is available 24/7 to mitigate further loss. Fire doesn't just burn; it leaves behind corrosive soot and smoke odors that can become permanent if not treated immediately. Our certified and trusted all kinds fire damage repair and restoration and inspection services contractor or company arrives equipped to handle everything from board-ups to deep soot removal.As a premier and skilled fire damage repair, restoration, or cleanup services contractor, we prioritize structural integrity and air quality. We understand the specific needs of Lakeside residents and business owners, providing a tailored approach to every project. Whether it’s a minor kitchen fire or a major structural event, our local expertise ensures your property is restored to its pre-loss condition with efficiency and care."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Fire and Smoke Damage Inspection or Repair Services Inspector and Contractor Lakeside MT?",
  description: `When it comes to your health and the environment, choosing the right recovery partner is vital. Allied Restoration is the leading choice for those seeking a skilled & professional safe and eco-friendly fire damage removal services contractor or company in Lakeside, MT. We understand that fire cleanup involves more than just removing debris; it requires neutralizing toxic residues without introducing harsh chemicals into your living space. As a skilled home or offices fire damage inspection or repair services contractor, we utilize green cleaning technologies and sustainable practices to ensure your indoor air quality is restored safely.
Our team features every certified smoke or soot damage repair or restoration services inspector or inspection contractor necessary to navigate complex insurance requirements while protecting your property’s integrity. We specialize in non-toxic soot removal and advanced deodorization techniques that are safe for children, pets, and the Lakeside environment. By choosing a certified smoke or soot damage repair or restoration services inspector, you are guaranteed a meticulous evaluation that identifies hidden hazards. Allied Restoration prides itself on being an eco-conscious leader, proving that high-performance restoration doesn't have to come at the cost of the planet. Trust our experts to deliver a clean, safe, and sustainable recovery for your home or business today.`,
  backgroundImage: {
    src: "/images/image-21.jpg",
    alt: "Fire damage restoration team in Lakeside, MT",
  },
  secondImage: {
    src: "/images/image-22.jpg",
    alt: "Fire damage cleanup equipment in Lakeside, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No. 1 Fire Damage Recovery Solutions Services Contractor Lakeside MT",
    description:
      "When your property faces the devastating aftermath of a fire, partnering with a certified fire damage recovery services contractor is the most important step toward normalcy. Allied Restoration has earned its reputation as the experienced high-qualified local and trusted fire restoration company services contractor Lakeside MT, offering unparalleled expertise in property stabilization. We understand that every minute counts, which is why our skilled & professional fire damage recovery solutions inspector services contractor or company in Lakeside, MT, is available to provide immediate, on-site assessments to prevent secondary damage from soot or moisture.As a skilled home or offices fire damage recovery solutions or inspector contractor, we handle everything from high-rise commercial structures to cozy residential homes with the same level of precision and care. We utilize cutting-edge technology and proven methodologies to ensure that your recovery process is seamless and thorough. Being a certified fire damage recovery services contractor means we adhere to the highest industry standards for safety and structural integrity. Whether you are dealing with minor smoke infiltration or major structural loss, Allied Restoration provides the local and trusted fire restoration company services you need to rebuild. Don’t settle for less than the best; trust Lakeside’s top-rated specialists to restore your peace of mind and your property to its pre-fire condition.",
    image: "/images/image-23.jpg",
    alt: "Fire damage restoration and smoke removal equipment in Lakeside, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Fire Damage Restoration or Cleanup Services Contractor",
    description:
      "As the region’s premier recovery specialists, Allied Restoration is proud to provide comprehensive coverage across the Flathead Valley, ensuring that expert help is always just a phone call away. Our service areas for all kind fire damage restoration or cleanup services contractor include the heart of Lakeside MT, where we maintain a deep commitment to our local residential and commercial neighbors. We also extend our professional emergency response to Kalispell MT, offering rapid soot removal and structural repairs to the area’s busiest hubs. For those located in Whitefish MT, our team provides specialized, high-end restoration services tailored to preserve the unique beauty and integrity of mountain properties.We are a trusted partner in Bigfork MT, delivering meticulous fire cleanup and smoke deodorization for lakefront homes and local businesses alike. Additionally, we serve the growing community of Columbia Falls MT, providing certified fire damage inspections and full-scale reconstruction services. No matter where you are located within these surrounding areas, our mobile crews are equipped to handle any scale of disaster with local expertise and unmatched efficiency. We pride ourselves on being the most reliable resource for fire recovery across the entire valley.",
    image: "/images/image-24.jpg",
    alt: "Fire damage repair and soot cleanup in Lakeside, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Fire Damage Restoration Services Contractor Lakeside MT?",
    description:
      "Choosing the right partner for property recovery is a decision that impacts both your safety and your financial future. Allied Restoration stands out as the skilled and professional trusted fire damage, fire restoration, or fire surface cleanup services contractor in Lakeside, MT, by combining technical precision with genuine local care. We understand the unique architectural needs of Montana properties, from rustic residential cabins to modern commercial complexes. Our team is not just a cleaning crew; we are comprehensive recovery specialists who prioritize structural stabilization and deep-tissue decontamination.Property owners choose us because we bridge the gap between emergency mitigation and long-term reconstruction. As a skilled and professional trusted fire damage expert, we utilize industrial-grade equipment to remove corrosive soot and pervasive smoke odors that standard cleaning methods miss. Furthermore, our deep knowledge of local building codes in Lakeside, MT, ensures that your restoration meets every legal and safety requirement. When you choose Allied Restoration, you are choosing a company dedicated to transparent communication, insurance navigation assistance, and high-caliber craftsmanship. We treat every building as if it were our own, ensuring your commercial or residential space is safe, clean, and fully restored to its original glory.",
    image: "/images/image-25.png",
    alt: "Allied Restoration fire damage restoration team in Lakeside, MT",
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
