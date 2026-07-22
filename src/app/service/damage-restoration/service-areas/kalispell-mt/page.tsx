
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
  title: 'Damage Restoration Services in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration provides expert water, fire, storm, and mold restoration in Kalispell, MT. Trusted, certified specialists are ready 24/7 — call now for immediate help!',
  openGraph: {
    title: 'Damage Restoration Services in Kalispell, MT | Allied 24/7 Restoration',
    description: 'Allied 24/7 Restoration provides expert water, fire, storm, and mold restoration in Kalispell, MT. Trusted, certified specialists are ready 24/7 — call now for immediate help!',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water or Mold Damage Restoration Services Contractor Kalispell MT",
  areaLabel: "Kalispell, MT",
  description:
    "Don’t let water or mold ruin your property. Allied Restoration provides 24/7 certified flood and mold damage services for Kalispell homes and businesses. From leaky roofs to moldy walls, our local specialists offer professional, affordable, and rapid recovery solutions.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local Kalispell experts provide compassionate, professional guidance to help you navigate stressful property damage.",
    },
    {
      title: "Quick Response",
      description:
        "Disaster strikes fast, so we move faster. Allied Restoration ensures rapid arrival to prevent further damage.",
    },
    {
      title: "24/7 Support",
      description:
        "Floods and mold don’t wait for business hours. Our certified team is available 24/7.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award-Winning Mold and Water Damage Cleanup or Restoration Services Contractor or Agency Kalispell MT?",
  paragraphs: [
    "If your property has suffered from a leak or flood, Allied Restoration is the name to trust. We are the trusted and premier commercial buildings flood water or mold damage cleanup contractor in Kalispell, MT, dedicated to restoring safety and comfort to your space. Our team delivers skilled or professional residential or commercial buildings mold or flood water restoration or cleanup repair services that cover every inch of your property, from the foundation to the ceiling. As a professional local permanent residential or commercial mold or water damage furniture, walls, and roof restoration cleanup services contractor, we specialize in total recovery. We don't just mitigate the surface; we perform deep structural drying and sanitization.By deploying our certified mobile unit water remediation or restoration specialist services agency, we bring high-tech moisture detection and industrial-grade air movers directly to your doorstep. We understand that emergencies are stressful, which is why we provide local and affordable emergency water remediation or restoration cleanup services that never compromise on quality. Whether you are dealing with mold-infested walls or water-damaged office furniture, our award-winning methods ensure a permanent solution. Don’t let dampness turn into a health hazard. Choose Kalispell’s top-rated restoration experts to handle your cleanup with precision, speed, and unmatched local expertise.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "How quickly can Allied Restoration arrive for an emergency?",
      answer:
        "We offer 24/7 rapid response throughout Kalispell. Our team typically arrives within hours to perform emergency water extraction and structural drying. Acting fast is critical to preventing permanent furniture damage and hazardous mold growth in your home or office.",
    },
    {
      question: "Are your mold remediation services permanent?",
      answer:
        "Yes. As a trusted contractor, we don’t just clean surfaces; we identify the moisture source. By fixing the root cause and using industrial-grade antimicrobials, Allied Restoration ensures a permanent solution for mold damage in your residential or commercial building.",
    },
    {
      question: "Do you assist with insurance claims for water damage?",
      answer:
        "Absolutely. We work directly with your insurance provider to streamline the claims process. Our skilled inspectors provide detailed documentation, moisture maps, and repair estimates, ensuring your flood or water damage restoration project is covered correctly and handled with professional care.",
    },
    {
      question: "Can you restore water-damaged walls and furniture?",
      answer:
        "Our certified specialists use advanced drying technology to save structural walls and valuable furniture. As Kalispell’s premier restoration agency, we employ specialized techniques to extract deep-seated moisture, preventing warping, rot, and the need for expensive full-scale replacements.",
    },
    {
      question: "Why is a professional moisture inspection necessary?",
      answer:
        "Water often hides behind drywall and under flooring where it can’t be seen. Our professional inspectors use thermal imaging to find hidden dampness. This prevents long-term structural decay and ensures your property is completely dry and safe from mold.",
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
    "Allied Restoration - Your Trusted Premier No.1 Water Remediation, and Mold Restoration Services Expert Contractor, Company, Agency, Kalispell MT",
  subHeading: "",
  description:
    "Experience the gold standard with Allied Restoration, Kalispell’s top-rated agency for rapid recovery. Our certified specialists provide 24/7 emergency water remediation and permanent mold removal. We protect your property with advanced technology and skilled expertise, ensuring a safe, dry environment today.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-9.jpg",
    alt: "Professional water and mold damage restoration services in Kalispell, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers comprehensive recovery solutions for any property crisis. As Kalispell’s premier specialists, we provide expert water extraction, structural drying, and permanent mold remediation. Whether you need emergency flood repair or detailed moisture inspections, our certified team ensures your home or office is restored to peak condition quickly and affordably.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor in Kalispell, MT",
    
description:"When water infiltrates your home’s framework, every second counts to prevent long-term structural failure. Allied Restoration stands out as the premier and skilled on-time water damage repair or restoration services experts in Kalispell, MT. Our team specializes in identifying hidden moisture that threatens the integrity of your foundation, subflooring, and framing. As a skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor, we arrive fully equipped to assess the situation and implement immediate drying protocols.We understand that structural issues require a precise touch. Our professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services inspector conducts deep-tissue property scans to ensure no pocket of moisture is left behind. By choosing Kalispell’s top-rated inspectors, you ensure your residential property remains a safe, solid investment for years to come.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Mold Damage Restoration or Cleanup Services Contractor in Kalispell, MT",

description:"Mold doesn’t follow a 9-to-5 schedule, and neither do we. Allied Restoration provides a professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services contractor or agency to tackle infestations the moment they are discovered. Whether it is a localized colony on basement walls or widespread growth throughout a commercial HVAC system, we offer the most reliable, permanent solutions in the Flathead Valley.Our reputation as a skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor in Kalispell, MT is built on our ability to contain and eliminate spores effectively. We go beyond simple cleaning; we address the root cause of moisture to ensure mold never returns. As the premier and skilled on-time water damage repair or restoration services experts, we prioritize your health and safety, delivering affordable, medical-grade remediation services for both local homeowners and business managers."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top Rated Residential or Commercial Buildings Water Remediation and Mold Restoration and Cleanup Services Contractor or Company in Kalispell, MT?",
  description: `When your property faces an unexpected disaster, you need the expertise of Allied Restoration, the trusted and top-rated emergency water remediation or mold restoration services contractor or company expert in Kalispell, MT. We understand that whether it's a family home or a corporate facility, water and mold can compromise both structural integrity and health. Our team serves as a skilled & professional residential or commercial buildings water and mold damage repair or cleanup services specialist company or contractor, ensuring every drop of moisture is extracted and every spore is eliminated. As certified or award-winning water damage cleanup services experts contractor in the Flathead Valley, we utilize state-of-the-art moisture detection and industrial-grade dehumidification.
We don't just dry surfaces; we provide deep-tissue restoration. If you are dealing with a burst pipe or a flash flood, our skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company is ready to respond 24/7. We pride ourselves on being the local authority that homeowners and business managers turn to for permanent results. From sanitizing moldy drywall to restoring water-damaged flooring, Allied Restoration combines technical precision with a commitment to customer care. Don't let damage linger—choose Kalispell’s premier experts to bring your property back to its original, pristine condition with speed and professionalism.`,
  backgroundImage: {
    src: "/images/image-30.jpg",
    alt: "Professional water damage restoration team in Kalispell, MT",
  },
  secondImage: {
    src: "/images/image-31.webp",
    alt: "Water damage restoration equipment in Kalispell, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Water and Mold Damage Repairing or Restoration Experts in Kalispell, MT",
    description:
      "When your property is compromised by leaks, floods, or fungal growth, you need the immediate intervention of Allied Restoration, the certified or trusted local no.1 home or offices water and mold damage repairing or restoration experts in Kalispell, MT. Dealing with property damage is stressful, but our team simplifies the recovery process by providing an experienced high-qualified affordable emergency flood water or mold damage repairing or restoration and cleanup services provider company or agency. We combine local expertise with industrial-grade technology to ensure your living or workspace is returned to a safe, dry, and healthy state. Our approach to restoration is rooted in precision. We don't just clear the standing water; we perform deep structural drying to prevent long-term rot and secondary mold outbreaks.As the premier Kalispell, MT agency, we understand the specific environmental challenges of the Flathead Valley, from frozen pipes in the winter to basement dampness in the spring. Our highly qualified technicians are trained to handle everything from residential drywall repair to large-scale commercial moisture extraction. By choosing Allied Restoration, you are opting for a permanent solution rather than a temporary fix. We prioritize transparency, affordability, and rapid response times because we know that in a water emergency, every minute matters. Trust our award-winning team to safeguard your investment and restore your peace of mind with 24/7 expert care.",
    image: "/images/image-32.webp",
    alt: "Water damage extraction and drying equipment in Kalispell, MT",
  },
  row2: {
    heading: "Our Services Areas for Water and Mold Damage Remediation or Restoration Services",
    description:
      "At Allied Restoration, we take pride in being the region's most reliable rapid-response team, covering a wide geographic footprint to ensure no homeowner or business owner is left stranded during a crisis. Our primary hub is located in Kalispell, MT, where we serve as the top-rated choice for emergency property recovery. However, our mobile units are constantly on the move, providing elite water and mold damage remediation to our neighbors in Whitefish, MT, ensuring that luxury estates and local businesses alike receive premier care. We also maintain a strong presence in Bigfork, MT, specializing in moisture control and structural drying for lakeside properties and residential communities.Our commitment to the Flathead Valley extends into Columbia Falls, MT, where we provide round-the-clock flood cleanup and mold sanitization for both historic homes and modern industrial sites. Additionally, residents in Lakeside, MT, can rely on our certified technicians for professional moisture inspections and permanent restoration solutions. No matter where you are located within these service areas, Allied Restoration guarantees a prompt arrival, transparent pricing, and the high-quality craftsmanship required to protect your property from the devastating effects of water and mold.",
    image: "/images/image-33.jpg",
    alt: "Mold remediation and water damage repair in Kalispell, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Building's Flood Water or Mold Damage Restoration or Water Remediation Services in Kalispell, MT?",
    description:
      "Selecting the right partner for property recovery can mean the difference between a permanent fix and recurring structural headaches. Allied Restoration is widely recognized as the most skilled and professional trusted water and mold damage restoration or repairing and water remediation services contractor in Kalispell, MT. Our reputation is built on a foundation of technical excellence and a deep commitment to the Flathead Valley community. We don’t just remove water; we utilize advanced thermal imaging and moisture mapping to identify hidden threats within your walls and subfloors that others might miss.What truly sets us apart is our comprehensive, all-under-one-roof approach. As a premier Kalispell, MT provider, we handle everything from initial emergency extraction to final structural repairs and mold sanitization. Our technicians are highly certified and undergo rigorous training to stay ahead of industry standards for water remediation. We prioritize your health by using eco-friendly, medical-grade antimicrobials that eliminate mold at the source without leaving harsh chemical residues. When you choose Allied Restoration, you are choosing 24/7 reliability, transparent insurance coordination, and the peace of mind that comes with hiring a local expert dedicated to restoring your property to its original, pristine condition.",
    image: "/images/image-34.webp",
    alt: "Allied Restoration water damage restoration team in Kalispell, MT",
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
