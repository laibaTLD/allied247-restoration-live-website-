
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
  title: 'Hire Now Damage Restoration Services Contractor Lakeside MT',
  description: 'Our local specialists provide affordable, high-quality restoration for homes and businesses. Restore your property today with Lakeside\'s trusted contractors.',
  openGraph: {
    title: 'Hire Now Damage Restoration Services Contractor Lakeside MT',
    description: 'Our local specialists provide affordable, high-quality restoration for homes and businesses. Restore your property today with Lakeside\'s trusted contractors.',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water or Mold Damage Restoration Services Contractor Lakeside MT",
  areaLabel: "Lakeside, MT",
  description:
    "Trust Allied Restoration for professional, 24/7 emergency services. From flooded roofs to moldy walls, our local specialists provide affordable, high-quality restoration for homes and businesses. Restore your property today with Lakeside’s trusted contractors.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our certified Lakeside specialists provide compassionate, professional guidance to navigate your property’s water damage restoration.",
    },
    {
      title: "Quick Response",
      description:
        "Rapid local arrival ensures affordable, skilled restoration for your walls and roof before damage spreads further.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, Allied Restoration offers trusted, emergency flood and mold inspections across Lakeside, MT.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award-Winning Mold and Water Damage Cleanup or Restoration Services Contractor or Agency Lakeside MT?",
  paragraphs: [
    "When disaster strikes your property, you need more than just a quick fix—you need Allied Restoration, the skilled and professional residential and commercial buildings mold or flood water restoration or cleanup repair services contractor in Lakeside, MT. We understand that water and mold don't just affect your structure; they disrupt your life. That is why we offer professional local permanent residential or commercial mold or water damage furniture, walls and roof restoration cleanup services contractor expertise to return your space to its original condition. As a trusted and premier commercial buildings flood water or mold damage cleanup contractor Lakeside MT, we specialize in high-stakes remediation.Whether you are dealing with a burst pipe or structural dampness, our certified mobile unit water remediation or restoration specialist services agency or contractor service Lakeside MT is always ready to deploy. We utilize advanced thermal imaging and industrial-grade dehumidifiers to ensure every inch of your property is bone-dry and safe. We take pride in being the local and affordable emergency water remediation or restoration cleanup services Lakeside MT residents rely on 24/7. From salvaging delicate office furniture to deep-cleaning saturated drywall, our team delivers award-winning results with a focus on long-term prevention. Don't let moisture compromise your health or investment. Choose the certified experts dedicated to protecting the Lakeside community with integrity and speed.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "How quickly can Allied Restoration arrive for emergencies?",
      answer:
        "As your local Lakeside MT experts, we offer 24/7 rapid response. Our skilled mobile units typically arrive within hours to begin professional water remediation, preventing further structural damage to your residential or commercial buildings and ensuring a fast cleanup.",
    },
    {
      question: "Is your mold restoration process permanent and safe?",
      answer:
        "Yes. We are a trusted contractor using industrial-grade antimicrobial treatments and advanced filtration. Our certified specialists identify the moisture source to provide permanent mold damage restoration for walls and furniture, ensuring your home or office environment remains healthy and safe.",
    },
    {
      question: "Do you handle both residential and commercial restoration?",
      answer:
        "Absolutely. Allied Restoration is the No.1 agency for both homes and businesses. From small residential leaks to large-scale commercial flood cleanup in Lakeside MT, our licensed team has the equipment and expertise to manage any size restoration project efficiently.",
    },
    {
      question: "Can you help with insurance claims for water damage?",
      answer:
        "We certainly can. As a professional restoration company, we provide detailed documentation and structural inspection reports required by insurance providers. We work closely with adjusters to ensure your water and mold damage repair process is smooth, affordable, and stress-free.",
    },
    {
      question: "What areas do you serve besides Lakeside MT?",
      answer:
        "Beyond Lakeside, our skilled restoration units provide emergency services throughout Kalispell, Whitefish, Bigfork, and Columbia Falls. We are the premier choice for the entire Flathead Valley, offering on-time water remediation and mold cleanup wherever property disasters strike in Montana.",
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
    "Allied Restoration - Your Trusted Premier No.1 Water Remediation, and Mold Restoration Services Expert Contractor, Company, Agency, Lakeside MT",
  subHeading: "",
  description:
    "Choose Allied Restoration for Lakeside’s top-rated property recovery. As your certified local experts, we provide professional, 24/7 emergency water remediation and permanent mold removal. We restore residential and commercial buildings with precision, ensuring your property is safe, dry, and healthy.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-9.jpg",
    alt: "Professional water and mold damage restoration services in Lakeside, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `As the skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor Lakeside MT, Allied Restoration delivers excellence. We provide premier and skilled on-time water damage repair or restoration services experts Lakeside MT to handle everything from structural drying to permanent mold remediation and cleanup.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor Lakeside MT",
    
description:"Protecting the integrity of your home starts with a precision assessment. As the leading skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor Lakeside MT, Allied Restoration provides immediate peace of mind. Structural water damage is often invisible to the naked eye, hiding behind drywall or beneath flooring. Our premier and skilled on-time water damage repair or restoration services experts Lakeside MT arrive equipped with advanced moisture detection technology to identify compromised beams and foundations.We don't just dry surfaces; we ensure the bones of your home are secure. Our team serves as a professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services inspector or contractor or agency Lakeside MT, offering comprehensive evaluations that prevent long-term wood rot and structural failure. By choosing a local specialist, you ensure a rapid response that stops structural decay in its tracks, saving you thousands in potential reconstruction costs.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Mold Damage Restoration or Cleanup Services Contractor Lakeside MT",

description:"When moisture lingers, mold follows, posing a significant risk to both your property and your health. Allied Restoration is your skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor Lakeside MT, providing high-grade remediation that goes beyond the surface. We specialize in deep-cleaning protocols that eliminate spores from furniture, ventilation systems, and structural materials, ensuring your indoor air quality is restored to safe levels immediately.Our reputation as premier and skilled on-time water damage repair or restoration services experts Lakeside MT is built on our 24/7 availability. Whether it’s a basement leak in a family home or a major flood in a commercial office, our professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services inspector or contractor or agency Lakeside MT is ready to deploy. We focus on permanent solutions, treating the root cause of the mold to ensure it never returns, keeping your Lakeside property healthy and compliant."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Water Remediation and Mold Restoration and Cleanup Services Contractor or Company Lakeside MT?",
  description: `When your property faces a crisis, you shouldn't have to settle for anything less than the best. Allied Restoration stands out as the skilled & professional residential or commercial buildings water and mold damage repair or cleanup services specialist company or contractor Lakeside MT. We understand that whether it is a family home or a bustling storefront, moisture is a silent enemy that requires immediate, expert intervention to prevent long-term structural decay. As a trusted and top rated emergency water remediation or mold restoration services contractor or company expert Lakeside MT, we pride ourselves on our rapid response times and meticulous attention to detail.
Our team isn't just a cleanup crew; we are certified or award winning water damage cleanup services experts contractor Lakeside MT. We utilize industrial-grade extraction tools and advanced antimicrobial treatments to ensure that mold is not just moved, but permanently eliminated from your environment. Whether you are dealing with a localized leak or a major disaster, we serve as your skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company. From restoring saturated drywall to salvaging office assets, Allied Restoration ensures your transition back to normalcy is seamless and affordable. Don't risk your investment with amateurs—choose the local leaders dedicated to restoring the safety and beauty of the Lakeside community.`,
  backgroundImage: {
    src: "/images/image-30.jpg",
    alt: "Professional water damage restoration team in Lakeside, MT",
  },
  secondImage: {
    src: "/images/image-31.webp",
    alt: "Water damage restoration equipment in Lakeside, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No1 Home or Offices Water and Mold Damage Repairing or Restoration Experts Lakeside MT",
    description:
      "When moisture invades your living or workspace, immediate action from a certified or trusted local no1 home or offices water and mold damage repairing or restoration experts Lakeside MT is essential to prevent secondary damage. Allied Restoration is the cornerstone of property recovery in the Flathead Lake region, offering a level of precision that only true local specialists can provide. We don't just extract water; we stabilize your entire environment, ensuring that your home or office remains a safe, healthy place to occupy. As an experienced high-qualified affordable emergency flood water or mold damage repairing or restoration and cleanup services provider company or agency Lakeside MT, we bridge the gap between high-end technical expertise and budget-friendly solutions.Our team is trained in the latest IICRC standards, allowing us to tackle everything from hidden pipe bursts to extensive black mold infestations. We prioritize a restore over replace philosophy, which keeps costs down for our clients while maintaining the highest structural integrity of the building. Whether you are a homeowner facing a flooded basement or a business manager dealing with commercial roof leaks, Allied Restoration provides the 24/7 reliability you deserve. We are deeply committed to the Lakeside community, ensuring that every project is handled with the urgency and professionalism required to get your doors back open and your life back on track.",
    image: "/images/image-32.webp",
    alt: "Water damage extraction and drying equipment in Lakeside, MT",
  },
  row2: {
    heading: "Our Services Areas for Water and Mold Damage Remediation or Restoration Services",
    description:
      "At Allied Restoration, we take pride in being the region's most reliable lifeline when property disasters strike. Our rapid-response teams are strategically positioned to provide comprehensive water and mold damage remediation or restoration services across the entire Flathead Valley. While we are a leading presence in Lakeside MT, our expertise extends far beyond, ensuring that residents and business owners in Kalispell MT have access to the same high-caliber structural drying and microbial remediation. We understand the unique environmental challenges of our local climate, which is why we offer specialized, on-time restoration solutions in Whitefish MT for both luxury estates and commercial hubs.From the scenic shores of Bigfork MT to the growing residential neighborhoods of Columbia Falls MT, our certified mobile units are equipped to handle emergency flood extractions and permanent mold removal 24/7. We don’t just serve these communities; we live in them, which is why we prioritize affordable, high-quality workmanship for every neighbor. Whether you are dealing with a burst pipe in the heart of town or a complex mold issue in a rural setting, you can trust our local experts to arrive quickly and restore your property to its pre-loss condition with total professionalism.",
    image: "/images/image-34.webp",
    alt: "Mold remediation and water damage repair in Lakeside, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Buildings Flood Water or Mold Damage Restoration or Water Remediation Services Lakeside MT?",
    description:
      "Choosing the right partner for property recovery can be the difference between a permanent fix and a recurring nightmare. Allied Restoration has earned its reputation as the skilled and professional trusted water and mold damage restoration or repairing and water remediation services contractor in Lakeside MT by prioritizing scientific precision and local reliability. We don't just dry out a room; we utilize advanced psychrometry to manage air pressure and humidity, ensuring moisture is removed from the most stubborn structural materials.What sets us apart is our holistic approach to property health. As a premier Lakeside MT specialist, we understand how the local climate affects mold growth and structural integrity. Our team is fully certified, ensuring that every technician entering your home or office is trained in the latest IICRC remediation standards. We offer a seamless experience from the initial 24/7 emergency response to the final structural repairs, handling both the cleanup and the reconstruction phases. By choosing Allied Restoration, you are opting for a company that values transparency, affordable pricing, and a commitment to restoring your peace of mind alongside your property.",
    image: "/images/image-35.jpg",
    alt: "Allied Restoration water damage restoration team in Lakeside, MT",
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
