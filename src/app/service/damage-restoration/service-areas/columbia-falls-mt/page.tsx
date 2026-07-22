
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
  title: 'Damage Restoration Services Contractor Columbia Falls MT | Allied 24/7 Restoration',
  description: 'Fast, reliable damage restoration in Columbia Falls, MT. Certified specialists handle water, fire, storm, and mold damage to fully restore your home or business. Available 24/7 — call now for expert service!',
  openGraph: {
    title: 'Damage Restoration Services Contractor Columbia Falls MT | Allied 24/7 Restoration',
    description: 'Fast, reliable damage restoration in Columbia Falls, MT. Certified specialists handle water, fire, storm, and mold damage to fully restore your home or business. Available 24/7 — call now for expert service!',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water or Mold Damage Restoration Services Contractor Columbia Falls MT",
  areaLabel: "Columbia Falls, MT",
  description:
    "Experience peace of mind with Allied Restoration, the local and trusted No.1 24/7 water and mold damage restoration specialist in Columbia Falls, MT. From roofs to walls, our certified and professional team provides affordable, skilled solutions for any emergency.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and trusted team provides compassionate, professional guidance to help you navigate property recovery.",
    },
    {
      title: "Quick Response",
      description:
        "Need a certified flood water damage restoration specialist fast? We arrive quickly to prevent further damage.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer No.1 24/7 mold damage restoration services, ensuring Columbia Falls homes stay safe at all hours.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award-Winning Mold and Water Damage Cleanup or Restoration Services Contractor or Agency Columbia Falls MT?",
  paragraphs: [
    "Searching for a reliable partner to save your property? Allied Restoration is the professional local permanent residential or commercial mold or water damage furniture, walls and roof restoration cleanup services contractor or agency you can depend on. We combine years of expertise with advanced technology to handle any size disaster with unmatched efficiency. As a skilled or professional residential or commercial buildings mold or flood water restoration or cleanup repair services contractor in Columbia Falls, MT, we recognize that every minute counts. Standing water can quickly lead to structural decay and hazardous fungal growth. That is why we operate as a certified mobile unit water remediation or restoration specialist services agency or contractor service, ensuring our experts reach your doorstep fully equipped to begin the recovery process immediately.We take pride in being a trusted and premier commercial buildings flood water or mold damage cleanup contractor. Our team handles everything from complex industrial floods to delicate residential mold remediation with a focus on permanent results. By utilizing local and affordable emergency water remediation or restoration cleanup services, residents and business owners in Columbia Falls, MT can access top-tier care without breaking the budget. From restoring your water-damaged walls and roofs to cleaning specialized furniture, Allied Restoration delivers a seamless, stress-free experience. Trust the experts who put your safety first—contact us today for comprehensive property restoration.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "How quickly can Allied Restoration arrive in Columbia Falls?",
      answer:
        "We offer emergency water remediation or restoration cleanup services with a rapid response. Our certified mobile unit is available 24/7, ensuring we reach your property quickly to prevent structural damage and mold growth from spreading throughout your home or office.",
    },
    {
      question: "Are your restoration technicians certified and insured?",
      answer:
        "Yes, we are a skilled & professional residential or commercial buildings water and mold damage repair specialist company. Our team consists of certified and licensed experts who follow strict industry standards to ensure your property is restored safely and permanently.",
    },
    {
      question: "Can you handle mold remediation in commercial buildings?",
      answer:
        "Absolutely. We are a trusted and premier commercial buildings flood water or mold damage cleanup contractor. We utilize industrial-grade HEPA filtration and moisture detection to eliminate mold in offices, warehouses, and retail spaces across Columbia Falls, MT and beyond.",
    },
    {
      question: "Do you work with insurance companies for claims?",
      answer:
        "As a professional and trusted flood water or mold damage restoration services provider, we assist with the documentation process. We provide detailed inspections and reports to help streamline your claim, making the recovery process as stress-free as possible for you.",
    },
    {
      question: "What areas do you serve outside of Columbia Falls?",
      answer:
        "We are the local and trusted choice for the entire Flathead Valley. Our skilled permanent mobile unit provides water and mold restoration services in Kalispell, Whitefish, Bigfork, and Lakeside, ensuring professional property recovery is always just a phone call away.",
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
    "Allied Restoration - Your Trusted Premier No.1 Water Remediation, and Mold Restoration Services Expert Contractor, Company, Agency, Columbia falls MT",
  subHeading: "",
  description:
    "CAs the region’s premier and skilled on-time water damage repair or restoration services experts, Allied Restoration delivers unmatched property recovery. Our certified mobile unit provides local and affordable emergency water remediation, ensuring your home or office remains safe, dry, and healthy.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-9.jpg",
    alt: "Professional water and mold damage restoration services in Columbia Falls, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `As the premier and skilled on-time water damage repair or restoration services experts, Allied Restoration provides comprehensive property recovery. We are your professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services agency, specializing in structural drying, permanent mold remediation, and complete cleanup.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor in Columbia Falls, MT",
    
description:"When structural integrity is at stake, you cannot afford to wait. Allied Restoration is the premier and skilled on-time water damage repair or restoration services experts dedicated to protecting your home. As the most reliable residential structural water damage inspection services contractor in Columbia Falls, MT, we utilize advanced thermal imaging and moisture detection to identify hidden threats within your framework.Our skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor team arrives fully equipped to assess foundations, crawlspaces, and load-bearing walls. We provide a professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services inspector to ensure that every vulnerability is documented and addressed. Whether it’s a slow leak or a major flood, our structural inspections prevent long-term collapse and costly future repairs. Trust our local experts to provide the thorough, honest assessment your property deserves.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Mold Damage Restoration or Cleanup Services Contractor in Columbia Falls, MT",

description:"Mold doesn’t follow a 9-to-5 schedule, and neither do we. Allied Restoration stands as your local & trusted permanent 24/7 emergency home or offices mold damage restoration or cleanup services contractor in Columbia Falls, MT. We understand that fungal growth can compromise indoor air quality and health within hours, which is why our skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor is always on standby to intervene.Our comprehensive approach makes us the professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services agency of choice. We don't just scrub surfaces; we eliminate spores at the source and treat materials to prevent regrowth. As premier and skilled on-time water damage repair or restoration services experts, we handle everything from office partitions to residential drywall. For permanent results and immediate peace of mind, choose the local contractor that guarantees a clean, safe, and mold-free environment every time."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Water Remediation and Mold Restoration and Cleanup Services Contractor or Company Columbia Falls, MT",
  description: `When property damage occurs, Allied Restoration is the name you can trust for immediate, high-quality recovery. As a trusted and top-rated emergency water remediation or mold restoration services contractor or company expert, we understand the stress of dealing with property loss. Our mission is to provide skilled and professional residential or commercial buildings water and mold damage repair or cleanup services specialist company or contractor solutions tailored to the unique needs of Columbia Falls, MT. We take pride in being a certified or award-winning water damage cleanup services experts contractor.
Whether your property has suffered from a burst pipe, a leaking roof, or seasonal flooding, our skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company is equipped with the latest technology to extract moisture and sanitize your space. At Allied Restoration, we don't just treat the visible symptoms; we address the root cause to prevent future issues like structural decay or hazardous mold growth. Our comprehensive approach ensures that every inch of your building—from furniture to structural walls—is restored to its pre-loss condition. Don’t settle for sub-par results when your investment is on the line. Choose the Columbia Falls, MT specialists dedicated to excellence, efficiency, and long-term property health.`,
  backgroundImage: {
    src: "/images/image-30.jpg",
    alt: "Professional water damage restoration team in Columbia Falls, MT",
  },
  secondImage: {
    src: "/images/image-31.webp",
    alt: "Water damage restoration equipment in Columbia Falls, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Water and Mold Damage Repairing or Restoration Experts Columbia Falls, MT",
    description:
      "When your property faces a crisis, you need the Allied Restoration team on your side. As the certified or trusted local No.1 home or offices water and mold damage repairing or restoration experts in Columbia Falls, MT, we bring precision and urgency to every job site. We understand that water and mold don't wait for business hours, which is why we have established ourselves as the most reliable name for property recovery in the Flathead Valley. Choosing an experienced high-qualified affordable emergency flood water or mold damage repairing or restoration and cleanup services provider company or agency makes all the difference in the world for your repair costs and health.Our specialists utilize state-of-the-art moisture detection and air filtration systems to ensure that your living or working environment is not just dry, but safe for occupancy. We handle the heavy lifting—from extracting standing floodwater to deep-cleaning contaminated surfaces—with a focus on minimizing disruption to your daily life. In Columbia Falls, MT, Allied Restoration is committed to excellence, offering transparent pricing and rapid response times. Whether you are dealing with a basement flood or persistent mold growth in your office walls, our high-qualified team provides a permanent solution. Don’t gamble with your property’s structural integrity; contact the local experts who prioritize quality, affordability, and your total peace of mind.",
    image: "/images/image-32.webp",
    alt: "Water damage extraction and drying equipment in Columbia Falls, MT",
  },
  row2: {
    heading: "Our Services Areas for Water and Mold Damage Remediation or Restoration Services",
    description:
      "Allied Restoration is proud to provide the Flathead Valley with elite property recovery solutions, ensuring that high-quality care is never far away. As the premier Columbia Falls, MT specialist, our rapid-response mobile units extend their reach to serve the surrounding communities with the same level of dedication and expertise. We are the top choice for homeowners and businesses in Kalispell, MT, offering comprehensive moisture extraction and structural drying. In the resort community of Whitefish, MT, our team is trusted for high-end residential mold remediation and flood recovery. We also provide dedicated support to the residents of Bigfork, MT, ensuring that lakeside properties are protected from the unique humidity and water challenges they face.Furthermore, our certified technicians frequently travel to Lakeside, MT, delivering professional cleanup and restoration services to keep local buildings safe and structurally sound. No matter where you are located within these regions, Allied Restoration guarantees a quick arrival and a permanent solution to your water or mold crisis. From emergency pipe bursts to complex mold outbreaks, we are your local partners in maintaining a healthy, damage-free environment across the entire valley..",
    image: "/images/image-33.jpg",
    alt: "Mold remediation and water damage repair in Columbia Falls, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Buildings Flood Water or Mold Damage Restoration or Water Remediation Services Columbia Falls, MT?",
    description:
      "Selecting the right partner for property recovery can be the difference between a permanent fix and a recurring nightmare. Allied Restoration stands out as the skilled and professional trusted water and mold damage restoration or repairing and water remediation services contractor in Columbia Falls, MT. Our reputation is built on a foundation of technical excellence and a deep commitment to the local community. We don't just provide a service; we provide a guarantee that your home or office will be restored to a safe, pre-loss condition using the industry’s most advanced drying and sanitization protocols.What sets Allied Restoration apart is our comprehensive approach to property health. We utilize high-grade industrial dehumidifiers, HEPA air scrubbers, and moisture-tracking technology to ensure no hidden pockets of dampness remain. As a skilled and professional trusted water and mold damage restoration specialist, we handle everything from insurance coordination to the final structural repairs. Our team is trained to treat your property with the utmost respect, ensuring minimal disruption to your daily operations or family life. When you choose us in Columbia Falls, MT, you are choosing a partner dedicated to transparency, rapid response, and high-quality craftsmanship that stands the test of time.",
    image: "/images/image-34.webp",
    alt: "Allied Restoration water damage restoration team in Columbia Falls, MT",
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
