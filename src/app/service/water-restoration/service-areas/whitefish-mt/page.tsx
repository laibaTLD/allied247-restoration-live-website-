
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
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
  title: 'Get Our Expert Water Restoration Services In Whitefish, MT | Allied 24/7 Restoration',
  description: 'We provide expert water damage restoration services in Whitefish, MT. Our trusted specialists quickly dry, repair, and protect your property to prevent further damage—fast, reliable, and available 24/7.',
  openGraph: {
    title: 'Get Our Expert Water Restoration Services In Whitefish, MT | Allied 24/7 Restoration',
    description: 'We provide expert water damage restoration services in Whitefish, MT. Our trusted specialists quickly dry, repair, and protect your property to prevent further damage—fast, reliable, and available 24/7.',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water Damage Restoration Services Contractor Whitefish MT",
  areaLabel: "Bigfork, MT",
  description:
    "When disaster strikes, trust Allied Restoration, your local and certified No.1 24/7 water damage restoration services contractor. We provide professional and affordable water damage restore services in Whitefish, MT. Our trusted specialists ensure your property is dried and protected.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and trusted team provides compassionate, expert guidance to help you navigate stressful restorations.",
    },
    {
      title: "Quick Response",
      description:
        "As your No.1 water damage restoration services contractor, we arrive fast to prevent further damage.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our certified flood water damage restoration specialists are ready for any emergency.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award Winning Flood Water Cleanup or Restoration Services Contractor or Agency Whitefish MT?",
  paragraphs: [
    "When water invades your property, you need a professional local permanent residential or commercial flood water restoration cleanup services contractor or agency that understands the urgency of the Montana climate. Allied Restoration is the name Whitefish residents trust. As a skilled or professional residential or commercial buildings flood water restoration or cleanup repair services contractor Whitefish MT, we bring precision and care to every job site, ensuring your peace of mind. Our team operates as a certified mobile unit water remediation or restoration specialist services agency, arriving fully equipped to tackle everything from minor leaks to major sub-floor flooding.We have earned our reputation as a trusted and premier commercial buildings flood water cleanup contractor, helping local businesses minimize downtime and protect their assets with rapid-dry technology. We know that every minute counts, which is why we prioritize speed without sacrificing the thoroughness your building deserves. Beyond our technical expertise, we are committed to providing local and affordable emergency water remediation or restoration cleanup services. We bridge the gap between high-end industrial results and budget-friendly solutions, making professional recovery accessible to everyone in the valley. Whether you are dealing with a basement surge or a ceiling failure, our award-winning methods ensure a bone-dry finish. Contact us today to restore your property to its original, pristine condition. ",
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
        "As your certified No.1 24/7 water damage restoration services contractor in Whitefish, we offer rapid response. Our mobile unit is usually on-site within two hours to begin professional and affordable water damage restore services immediately.",
    },
    {
      question: "Does homeowners insurance cover water damage restoration?",
      answer:
        "Most policies cover \"sudden and accidental\" damage, like burst pipes. As a trusted and premier commercial buildings flood water cleanup contractor, Allied Restoration works directly with your insurance provider to streamline claims for professional and affordable repairs.",
    },
    {
      question: "How long does the water damage drying process take?",
      answer:
        "Typically, structural drying takes 3 to 5 days. Our skilled and professional trusted water damage restoration team uses industrial dehumidifiers and air movers to ensure your home or office is bone-dry before any reconstruction begins.",
    },
    {
      question: "Can I handle the water damage cleanup myself?",
      answer:
        "Small spills are manageable, but significant flooding requires a certified flood water damage restoration services specialist. Without professional-grade equipment, hidden moisture can lead to structural rot and mold growth within just 24 to 48 hours.",
    },
    {
      question: "What is the difference between clean and black water?",
      answer:
        "Clean water comes from broken pipes, while black water (sewage or floods) contains dangerous contaminants. Our professional certified 24/7 home or offices team is trained to safely sanitize and restore properties affected by all water categories.",
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
    "Allied Restoration - Your Trusted Premier No.1 Water Remediation, Repair or Restore Services Expert Contractor, Company, Agency, Whitefish MT",
  subHeading: "",
  description:
    "As Whitefish’s local and trusted leader, Allied Restoration provides elite recovery solutions. We are the certified No.1 24/7 water damage restoration services contractor, delivering professional and affordable repairs. Trust our skilled specialists for permanent, high-quality residential and commercial results.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-41.webp",
    alt: "Professional water damage restoration services in Whitefish, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers elite, skilled permanent mobile unit residential or commercial building water damage restoration services contractor Whitefish MT solutions. From structural drying to full cleanup, we are the premier and skilled on-time water damage repair or restoration services experts. We provide professional certified 24/7 home or offices recovery you can trust.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor Whitefish MT",
    
description:"Protecting the integrity of your home starts with a precision assessment. Allied Restoration is the premier and skilled on-time water damage repair or restoration services experts you can rely on for comprehensive structural evaluations. When moisture seeps into your foundation, framing, or drywall, it threatens the very stability of your property. As a skilled permanent mobile unit residential or commercial building water damage restoration services contractor Whitefish MT, we use advanced thermal imaging and moisture meters to locate hidden pockets of water that others miss.Our structural inspections are designed to provide a roadmap for full recovery. We aren't just looking at the surface; we are investigating the bones of your building. By hiring a professional certified 24/7 home or offices flood water damage repair or restoration services inspector or contractor or agency, you ensure that every beam and joist is accounted for before mold or rot can set in. Trust Whitefish’s local experts to deliver a detailed, honest report that prioritizes your safety and long-term property value.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Water Damage Restoration or Cleanup Services Contractor Whitefish MT",

description:"Disaster doesn't keep a 9-to-5 schedule, and neither does Allied Restoration. We provide immediate peace of mind as the professional certified 24/7 home or offices flood water damage repair or restoration services inspector or contractor or agency. Whether it’s a midnight pipe burst or a flash flood, our skilled permanent mobile unit residential or commercial building water damage restoration services contractor Whitefish MT is dispatched instantly to mitigate loss. We specialize in rapid extraction, industrial dehumidification, and complete sanitization to return your space to a pre-loss condition.Efficiency is our hallmark. As premier and skilled on-time water damage repair or restoration services experts, we manage the entire cleanup process—from moving furniture to document drying and structural repair. We understand the stress of property damage, which is why we offer permanent solutions rather than quick fixes. For local and trusted permanent 24/7 emergency home or offices water damage restoration or cleanup services, our team is the gold standard in the Flathead Valley. We don't just clean up the mess; we restore your way of life."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Water Remediation, Restoration and Cleanup Services Contractor or Company Whitefish MT",
  description: `If you are searching for a skilled & professional residential or commercial buildings water damage repair or cleanup services specialist company or contractor Whitefish MT, look no more than Allied Restoration. We provide the local community with high-caliber, trusted and top-rated emergency water remediation or restoration services contractor or company expert solutions. Whether you are dealing with a frozen pipe in a vacation home or a major flood in a downtown office, we stabilize and restore your property with unmatched precision. As a certified or award-winning water damage cleanup services experts contractor Whitefish MT, our team is trained to handle the most complex structural challenges.
We serve as a skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company, utilizing advanced moisture-detection technology and industrial-grade drying equipment to ensure every corner of your building is bone-dry. Our mobile units are available 24/7, providing the rapid response necessary to prevent mold growth and permanent structural rot. Allied Restoration doesn't just clean up the surface; we perform deep remediation that returns your property to a safe, pre-loss condition. When your investment is on the line, choose the Whitefish professionals who combine local expertise with award-winning technical standards.`,
  backgroundImage: {
    src: "/images/image-36.jpg",
    alt: "Water damage restoration team in Whitefish, MT",
  },
  secondImage: {
    src: "/images/image-37.webp",
    alt: "Water damage restoration equipment in Whitefish, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Water Damage Repairing or Restoration Experts Whitefish MT",
    description:
      "When your property is under threat from moisture or flooding, you need the immediate intervention of Allied Restoration. As the certified or trusted local No.1 home or offices water damage repairing or restoration experts Whitefish MT, we understand that every second counts. Our team is recognized as an experienced high-qualified affordable emergency flood water damage repairing or restoration and cleanup services provider company or agency Whitefish MT, dedicated to saving your structure and your sanity during a crisis. Water damage can be deceptive, often hiding behind walls and under floorboards where it causes long-term structural decay. By choosing Allied Restoration, you are partnering with specialists who utilize high-tech moisture mapping to ensure a complete dry-out.Whether it is a residential basement or a high-traffic commercial office, our experienced high-qualified affordable emergency flood water damage repairing or restoration and cleanup services provider company or agency Whitefish MT ensures a seamless recovery process from initial extraction to final repairs. We take pride in being the certified or trusted local No.1 home or offices water damage repairing or restoration experts Whitefish MT, offering 24/7 rapid response times that the Flathead Valley relies on. Our commitment to affordability and excellence means you receive premium service without the premium price tag. Don't let water damage define your property's future—trust the local leaders to restore your space to its original condition.",
    image: "/images/image-38.jpg",
    alt: "Water extraction and drying equipment in Whitefish, MT",
  },
  row2: {
    heading: "Our Services Areas for Water Damage Remediation or Restoration Services",
    description:
      "Allied Restoration is proud to be the premier provider of emergency recovery solutions throughout the Flathead Valley. Our rapid-response teams are strategically positioned to offer immediate assistance in Whitefish MT, ensuring that local homeowners and businesses receive the highest level of care during a flood crisis. We extend our professional expertise to Kalispell MT, where our certified technicians handle everything from burst pipes to large-scale commercial moisture mitigation. For those located near the water in Bigfork MT, we provide specialized remediation services designed to tackle the unique challenges of lakeside properties.Our commitment to the community also reaches Columbia Falls MT, offering reliable and affordable structural drying and cleanup to protect your property's long-term value. Additionally, we serve the growing community of Lakeside MT, bringing our industrial-grade equipment and advanced drying techniques to every doorstep. No matter where you are located within these regions, Allied Restoration ensures that expert help is only a phone call away. We pride ourselves on being the local authority for water damage restoration, providing consistent, high-quality results across the entire valley to keep our neighbors safe and dry.",
    image: "/images/image-39.jpg",
    alt: "Water damage repair and restoration in Whitefish, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Buildings Flood Damage Restoration or Water Remediation Services Whitefish MT?",
    description:
      "Choosing the right partner after a disaster can make the difference between a simple repair and a structural nightmare. Allied Restoration stands out as the most skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Whitefish MT. Our reputation is built on a foundation of rapid response, technical precision, and unwavering integrity. We don't just extract water; we provide a comprehensive recovery plan that addresses the root of the problem, ensuring your property is safe, dry, and fully restored. What sets us apart is our commitment to utilizing the latest industry technology.As a skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Whitefish MT, we employ high-grade thermal imaging to detect moisture hidden behind cabinetry and under flooring. This scientific approach prevents the long-term growth of hazardous mold and structural rot. Furthermore, Allied Restoration prides itself on transparent communication. We work directly with your insurance providers to streamline the claims process, reducing your stress during a difficult time. From our 24/7 availability to our certified expertise,",
    image: "/images/image-42.webp",
    alt: "Allied Restoration water damage restoration team in Whitefish, MT",
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
