
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
  title: 'Damage Restoration Services in Whitefish, MT | Allied 24/7 Restoration',
  description: 'Fast, reliable damage restoration services in Whitefish, MT. Certified specialists handle water, fire, storm, and mold damage to fully restore your home or business. Available 24/7 for emergency service!',
  openGraph: {
    title: 'Damage Restoration Services in Whitefish, MT | Allied 24/7 Restoration',
    description: 'Fast, reliable damage restoration services in Whitefish, MT. Certified specialists handle water, fire, storm, and mold damage to fully restore your home or business. Available 24/7 for emergency service!',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water or Mold Damage Restoration Services Contractor Whitefish MT",
  areaLabel: "Whitefish, MT",
  description:
    "When disaster strikes, Allied Restoration delivers professional, 24/7 emergency response. As Whitefish’s certified specialists, we provide affordable water and mold damage restoration for local homes and businesses. From flooded roofs to moldy walls, we ensure your property is restored fast..",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our compassionate, local experts guide you through the restoration process with clear communication and care.",
    },
    {
      title: "Quick Response",
      description:
        "We arrive onsite fast to mitigate damage, saving your property from further costly structural water issues.",
    },
    {
      title: "24/7 Support",
      description:
        "Disaster doesn’t wait for business hours, so our certified emergency team is available every single night.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award-Winning Mold and Water Damage Cleanup or Restoration Services Contractor or Agency Whitefish MT?",
  paragraphs: [
    "WWhen your property faces a crisis, you need the skilled or professional residential or commercial buildings mold or flood water restoration or cleanup repair services contractor Whitefish MT trusts most. Allied Restoration stands as the trusted and premier commercial buildings flood water or mold damage cleanup contractor Whitefish MT depends on for rapid, permanent results. We understand that disasters don't follow a schedule, which is why we operate as a certified mobile unit water remediation or restoration specialist services agency or contractor service Whitefish MT, arriving fully equipped to handle any emergency. Whether you are dealing with a burst pipe or structural leaks, we are the professional local permanent residential or commercial mold or water damage furniture, walls and roof restoration cleanup services contractor or agency Whitefish MT that restores your peace of mind.Our team specializes in deep-cleaning contaminated surfaces and structural drying to prevent long-term decay. We take pride in being the local and affordable emergency water remediation or restoration cleanup services Whitefish MT provider that balances high-end technical expertise with cost-effective solutions. From restoring moisture-damaged furniture to sanitizing mold-infested walls, Allied Restoration utilizes advanced technology to ensure your environment is safe, dry, and healthy once again. Don't let water damage linger; choose Whitefish’s award-winning experts to protect your investment with precision and professional care today.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "How quickly can you respond to a water emergency?",
      answer:
        "As the premier Allied Restoration team, we offer 24/7 emergency response. Our mobile units arrive onsite rapidly to start water remediation, preventing structural damage and mold growth. We prioritize speed to save your Whitefish property from further costly repairs.",
    },
    {
      question: "Is mold damage covered by my property insurance?",
      answer:
        "Many policies cover mold if it results from a sudden water breach. As a trusted water and mold damage restoration contractor Whitefish MT, we help document the damage and provide the professional reports your insurance company requires for claims.",
    },
    {
      question: "Why should I hire a professional for water cleanup?",
      answer:
        "Household vacuums cannot extract deep moisture from subfloors or drywall. Allied Restoration uses industrial-grade dehumidifiers and air movers to ensure a permanent dry. This scientific approach prevents hidden rot and hazardous mold colonies from forming inside your building’s walls.",
    },
    {
      question: "Can you restore moldy furniture and personal belongings?",
      answer:
        "Yes, our skilled specialists use advanced sanitization techniques to save furniture and office equipment. As a professional local restoration agency Whitefish MT, we focus on cleaning and deodorizing your items to return them to a safe, pre-loss condition quickly.",
    },
    {
      question: " How long does the restoration process typically take?",
      answer:
        "While every case varies, most structural drying takes three to five days. Allied Restoration monitors moisture levels daily to ensure total remediation. We work efficiently to minimize downtime for your home or office, ensuring a safe and thorough recovery.",
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
    "Allied Restoration - Your Trusted Premier No.1 Water Remediation, and Mold Restoration Services Expert Contractor, Company, Agency, Whitefish MT",
  subHeading: "",
  description:
    "As Whitefish’s leading authority, Allied Restoration delivers unmatched emergency response. We are the premier agency specializing in rapid water remediation and permanent mold removal. Trust our expert team to restore your residential or commercial property with professional, certified, and long-lasting solutions.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-9.jpg",
    alt: "Professional water and mold damage restoration services in Whitefish, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration provides comprehensive solutions as the premier skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor Whitefish MT. From expert inspections to total cleanup, our certified team handles flood recovery, mold remediation, and structural repairs to ensure your property remains safe and dry.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor in Whitefish, MT",
    
description:"When moisture compromises your home's integrity, you need the premier and skilled on-time water damage repair or restoration services experts Whitefish MT relies on. Allied Restoration provides a comprehensive approach to recovery, starting with a deep-dive structural assessment. As a skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor Whitefish MT, we utilize advanced moisture-detection technology to find hidden leaks behind drywall and under flooring.Our team acts as a professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services inspector or contractor or agency Whitefish MT, ensuring that every weakened beam and damp corner is identified before rot sets in. We don't just dry surfaces; we stabilize your entire residence. By choosing our local experts, you are securing a thorough inspection that prevents long-term structural failure and maintains your property’s total market value.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Mold Damage Restoration or Cleanup Services Contractor in Whitefish, MT",

description:"Mold growth is a race against time, requiring the immediate intervention of Allied Restoration. We serve the community as the professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services inspector or contractor or agency Whitefish MT. Our specialists understand that mold spores spread rapidly through HVAC systems and porous materials, which is why we offer skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor Whitefish MT solutions directly to your doorstep.We focus on total remediation, removing hazardous growth from furniture, walls, and office equipment. As the premier and skilled on-time water damage repair or restoration services experts Whitefish MT, we ensure that the root cause of the moisture is eliminated to prevent regrowth. Our permanent cleanup protocols guarantee a sanitized, breathable environment for your family or employees, backed by the most reliable 24-hour emergency response team in the region."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Water Remediation and Mold Restoration and Cleanup Services Contractor or Company Whitefish MT",
  description: `If you are currently facing property damage, you need the skilled & professional residential or commercial buildings water and mold damage repair or cleanup services specialist company or contractor Whitefish MT trusts to get the job done right. Allied Restoration stands out as the trusted and top-rated emergency water remediation or mold restoration services contractor or company expert Whitefish MT, offering rapid response times and precision-driven results. Whether your disaster involves a minor leak or a major flood, our team serves as the certified or award-winning water damage cleanup services experts contractor Whitefish MT, ensuring every inch of your property is thoroughly dried and sanitized.
As a skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company, we specialize in protecting both structural integrity and indoor air quality. We understand that time is critical when dealing with moisture; therefore, we utilize industrial-grade equipment to extract water and eliminate mold colonies before they spread. Allied Restoration is committed to providing Whitefish residents and business owners with seamless, stress-free recovery experiences. From initial inspection to the final restoration of your walls and flooring, our local experts provide the high-quality craftsmanship and reliable service you deserve. Don't settle for less when your investment is on the line—choose the region's premier specialists for a permanent, professional solution today.`,
  backgroundImage: {
    src: "/images/image-30.jpg",
    alt: "Professional water damage restoration team in Whitefish, MT",
  },
  secondImage: {
    src: "/images/image-31.webp",
    alt: "Water damage restoration equipment in Whitefish, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Water and Mold Damage Repairing or Restoration Experts Whitefish, MT",
    description:
      "When your property is compromised by leaks or fungal growth, you need the certified or trusted local no1 home or offices water and mold damage repairing or restoration experts Whitefish MT to intervene immediately. Allied Restoration has built a reputation as the most reliable name in the industry, providing comprehensive recovery solutions for both residential and commercial spaces. As an experienced high-qualified affordable emergency flood water or mold damage repairing or restoration and cleanup services provider company or agency Whitefish MT, we understand that every hour counts. Moisture left untreated can lead to structural failure and serious health risks, which is why our team is trained to deploy rapid-extraction and advanced drying techniques.Our approach combines technical precision with a commitment to customer care. We aren't just a cleanup crew; we are a full-service Allied Restoration agency dedicated to returning your life to normal. We tackle everything from saturated drywall and carpets to hidden mold colonies behind office partitions. By choosing the experienced high-qualified affordable emergency flood water or mold damage repairing or restoration and cleanup services provider company or agency Whitefish MT residents trust, you ensure that your repairs are handled by licensed professionals who prioritize safety and durability. Whether it’s a basement flood or a commercial roof leak, we provide the permanent, high-quality restoration required to protect your Whitefish property for the long term.",
    image: "/images/image-32.webp",
    alt: "Water damage extraction and drying equipment in Whitefish, MT",
  },
  row2: {
    heading: "Our Service Areas for Water and Mold Damage Remediation or Restoration Services",
    description:
      "Allied Restoration is proud to be the region’s premier rapid-response team, providing comprehensive coverage across the Flathead Valley. If you are searching for expert recovery solutions, our certified crews are strategically stationed to serve Whitefish MT, ensuring that local homeowners and businesses receive immediate assistance during a flood or mold crisis. We have expanded our reach to guarantee that residents in Kalispell MT have access to the same high-caliber structural drying and sanitization services that have made us a household name.Our mobile units are fully equipped to handle large-scale commercial projects or residential emergencies in Bigfork MT, where moisture issues from the lake often require specialized remediation techniques. Furthermore, we provide 24/7 emergency support to the growing community of Columbia Falls MT, protecting properties from the devastating effects of pipe bursts and snow melt. We also extend our No. 1 rated services to the scenic shores of Lakeside MT, offering permanent mold removal and structural repairs. No matter where you are located within these service areas, Allied Restoration delivers professional, affordable, and licensed expertise to restore your property to its pre-loss condition quickly and efficiently.",
    image: "/images/image-33.jpg",
    alt: "Mold remediation and water damage repair in Whitefish, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Buildings Flood Water or Mold Damage Restoration or Water Remediation Services Whitefish MT?",
    description:
      "Selecting the right partner for property recovery is critical to ensuring the longevity of your investment. Allied Restoration stands out as the most skilled and professional trusted water and mold damage restoration or repairing and water remediation services contractor in Whitefish MT. Our reputation is built on a foundation of technical excellence and unwavering reliability. Unlike general contractors, we specialize specifically in the physics of structural drying and the science of microbial remediation. We utilize industrial-grade dehumidifiers, high-velocity air movers, and moisture-tracking technology to ensure that every drop of water is accounted for, preventing the secondary damage that leads to structural rot or hazardous mold growth.As your local experts, we offer a seamless, stress-free experience during high-stress situations. When you choose Allied Restoration, you are hiring a skilled and professional trusted water and mold damage restoration or repairing and water remediation services contractor in Whitefish MT that prioritizes your safety and health. We handle everything from the initial emergency water extraction to the final sanitization and repair of your walls and floors. Our deep familiarity with the local climate and building codes ensures that every restoration project is completed to the highest industry standards, providing you with a permanent solution rather than a temporary fix.",
    image: "/images/image-34.jwebp",
    alt: "Allied Restoration water damage restoration team in Whitefish, MT",
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
