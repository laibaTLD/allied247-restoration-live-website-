
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
  title: 'Certified & Professional #1 Water Restoration Services In Bigfork, MT',
  description: 'Our certified team provides professional and affordable 24/7 emergency services to restore your property quickly. Trust the local experts. We are ready to handle all your emergency water backup needs in Bigfork.',
  openGraph: {
    title: 'Certified & Professional #1 Water Restoration Services In Bigfork, MT',
    description: 'Our certified team provides professional and affordable 24/7 emergency services to restore your property quickly. Trust the local experts. We are ready to handle all your emergency water backup needs in Bigfork.',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water Damage Restoration Services Contractor Bigfork MT",
  areaLabel: "Bigfork, MT",
  description:
    "Don't let water damage ruin your home or business. Allied Restoration is Bigfork’s local and trusted No.1 specialist. Our certified team provides professional and affordable 24/7 emergency services to restore your property quickly. Trust the local experts.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our compassionate, certified specialists at Allied Restoration prioritize your peace of mind during stressful property emergencies.",
    },
    {
      title: "Quick Response",
      description:
        "We dispatch local teams immediately to Bigfork properties, ensuring rapid mitigation to prevent further water damage.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our professional restoration experts are standing by to provide urgent, around-the-clock emergency assistance.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award Winning Flood Water Cleanup or Restoration Services Contractor or Agency Bigfork MT?",
  paragraphs: [
    "Finding a trusted and premier commercial buildings flood water cleanup contractor is critical when disaster strikes. At Allied Restoration, we understand that whether it’s a burst pipe or a natural flood, time is your biggest enemy. As a professional local permanent residential or commercial flood water restoration cleanup services contractor or agency, we provide the stability and expertise needed to return your Bigfork property to its original condition. Our team operates as a skilled or professional residential or commercial buildings flood water restoration or cleanup repair services contractor Bigfork MT, utilizing advanced industrial equipment to extract water and dry structures thoroughly.We take pride in being a certified mobile unit water remediation or restoration specialist services agency or contractor service, meaning we arrive fully equipped to handle any scale of damage immediately upon arrival. We believe that high-quality recovery shouldn't break the bank. We offer local and affordable emergency water remediation or restoration cleanup services tailored to the specific needs of Bigfork residents. From initial inspection to the final repair, our Award Winning approach ensures that every inch of your home or business is treated with precision and care. Don't leave your investment to chance; choose the experts who combine local trust with professional excellence. Contact us today for a rapid assessment and let us restore your peace of mind.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "How quickly can Allied Restoration arrive at my Bigfork property?",
      answer:
        "As your local and trusted flood water restoration experts, we offer 24/7 emergency response. Our certified mobile unit typically arrives within 60 minutes to provide professional and affordable water damage restoration services, minimizing structural damage and preventing mold growth.",
    },
    {
      question: "Does insurance cover my water damage restoration in Bigfork?",
      answer:
        "Most policies cover sudden incidents like burst pipes. As a professional and trusted flood water restoration services agency, Allied Restoration works directly with your provider, providing the documentation needed for a skilled, on-time water damage repair or restoration claim.",
    },
    {
      question: "Can I handle water damage cleanup myself or should I hire experts?",
      answer:
        "While small spills are manageable, significant flooding requires a professional certified water damage restoration contractor. We use industrial-grade dehumidifiers and thermal imaging to detect hidden moisture, ensuring a permanent and skilled on-time water damage repair that DIY methods miss.",
    },
    {
      question: "What are the risks of delaying flood water restoration services?",
      answer:
        "Waiting even 24 hours can lead to hazardous mold and structural rot. Choosing a local and certified 24/7 water damage restoration services contractor like Allied Restoration ensures immediate extraction, protecting your building’s integrity and ensuring a safe environment for everyone.",
    },
    {
      question: "Is Allied Restoration licensed to handle both residential and commercial buildings?",
      answer:
        "Yes! We are a skilled or licensed home or offices buildings flood water damage cleanup services contractor. Whether you need a premier commercial buildings flood water cleanup contractor or residential repairs, our Bigfork team delivers top-rated, high-qualified restoration solutions.",
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
    "Allied Restoration - Your Trusted Premier No.1 mold Inspection or Mold Remediation Services Inspector, Company or Agency Bigfork MT",
  subHeading: "",
  description:
    "Choose Allied Restoration for Bigfork’s most reliable mold solutions. As the premier #1 mold remediation services agency, our certified inspectors deliver expert inspections and removal. We provide trusted, professional home mold remediation, ensuring your property remains safe, clean, and healthy.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-41.webp",
    alt: "Professional water damage restoration services in Bigfork, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers the premier and skilled on time water damage repair or restoration services experts Bigfork depends on. From professional certified 24/7 home or offices flood water damage repair to structural drying, our skilled permanent mobile unit delivers local and affordable emergency water remediation tailored for you.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor Bigfork MT",
    
description:"When structural integrity is at stake, you need more than a quick fix; you need a professional certified 24/7 home or offices flood water damage repair or restoration services inspector or contractor or agency. At Allied Restoration, we specialize in identifying the hidden moisture that threatens the bones of your property. As the most trusted skilled permanent mobile unit residential or commercial building water damage restoration services contractor Bigfork MT, we arrive equipped with advanced thermal imaging and moisture meters to detect water trapped behind drywall or under flooring.Structural damage can compromise your home’s safety and value. Our local inspection process is thorough, ensuring that every beam and joist is assessed for stability. By choosing a premier and skilled on time water damage repair or restoration services experts, you prevent long-term issues like mold growth or wood rot. Trust our Bigfork team to provide a detailed roadmap for your property's full recovery.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Water Damage Restoration or Cleanup Services Contractor Bigfork MT",

description:"Disaster doesn't keep office hours, which is why Allied Restoration provides immediate, around-the-clock relief. As a professional certified 24/7 home or offices flood water damage repair or restoration services inspector or contractor or agency, we are the first line of defense against rising waters in Bigfork. We act as a skilled permanent mobile unit residential or commercial building water damage restoration services contractor Bigfork MT, bringing industrial-grade pumps and dehumidifiers directly to your doorstep within minutes of your call.Our mission is to provide premier and skilled on time water damage repair or restoration services experts who prioritize both speed and quality. We handle everything from standing water extraction to deep cleaning and sanitization, ensuring your workspace or living area is safe and dry. For permanent results and a local-first approach, we are the dedicated cleanup team Bigfork neighbors rely on."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Water Remediation, Restoration and Cleanup Services Contractor or Company Bigfork MT",
  description: `When your property faces unexpected flooding, you need a skilled and professional residential or commercial buildings water damage repair or cleanup services specialist company or contractor Bigfork MT. At Allied Restoration, we provide immediate, high-caliber solutions to save your infrastructure from long-term decay. As a trusted and top rated emergency water remediation or restoration services contractor or company expert, we pride ourselves on a response time that minimizes loss and maximizes safety for both families and business owners. Our reputation is built on being a certified or award winning water damage cleanup services experts contractor Bigfork MT. We utilize cutting-edge moisture detection and extraction technology to ensure every drop of water is removed from your premises.
Whether you are dealing with a minor leak or a major overflow, our team functions as a skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company, handling everything from debris removal to complete structural drying. Choosing Allied Restoration means choosing a partner dedicated to restoring your peace of mind. We don't just "clean up"; we remediate and restore using industry-best practices. Our deep roots in the Bigfork community ensure you receive personalized, high-priority service from a local team that cares about your property as much as you do.`,
  backgroundImage: {
    src: "/images/image-42.webp",
    alt: "Water damage restoration team in Bigfork, MT",
  },
  secondImage: {
    src: "/images/image-37.webp",
    alt: "Water damage restoration equipment in Bigfork, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Water Damage Repairing or Restoration Experts Bigfork MT",
    description:
      "When water invades your property, you need more than just a cleanup crew; you need the certified or trusted local no.1 home or offices water damage repairing or restoration experts Bigfork MT. At Allied Restoration, we have built our reputation on precision, speed, and unwavering reliability. We serve as an experienced high-qualified affordable emergency flood water damage repairing or restoration and cleanup services provider company or agency Bigfork MT, ensuring that both homeowners and business managers have a dedicated partner during the most stressful times. Our expertise spans from minor leaks to major structural flooding. We understand that water damage is progressive, which is why our Bigfork team utilizes industrial-grade drying technology to halt damage in its tracks.As an experienced high-qualified affordable emergency flood water damage repairing or restoration and cleanup services provider company or agency Bigfork MT, we bridge the gap between high-end technical restoration and cost-effective solutions. Choosing Allied Restoration means you are opting for a permanent fix rather than a temporary patch. We meticulously inspect every corner of your office or home to ensure that moisture is fully eradicated, preventing future mold growth and structural weakening. For those in Bigfork seeking the gold standard in property recovery, our certified experts are available 24/7 to restore your environment to its pre-loss condition with total professionalism.",
    image: "/images/image-36.jpg",
    alt: "Water extraction and drying equipment in Bigfork, MT",
  },
  row2: {
    heading: "Our Services Areas for Water Damage Remediation or Restoration Services",
    description:
      "When disaster strikes, Allied Restoration provides rapid-response coverage across the entire Flathead Valley, ensuring help is never far away. We are proud to be the premier provider of water damage remediation and restoration services in Bigfork MT, where our local roots allow us to reach residential and commercial properties within minutes. Our expertise extends to the bustling community of Kalispell MT, handling everything from basement floods to large-scale industrial water extraction. We also serve the scenic area of Whitefish MT, offering specialized winterization and pipe-burst recovery services tailored to the local climate.For those located in Columbia Falls MT, our certified technicians provide comprehensive structural drying and mold prevention to protect your investment. Additionally, we offer full-service restoration in Lakeside MT, ensuring that properties along the water stay dry and structurally sound. No matter where you are located in these regions, our mobile units are fully equipped and ready to provide 24/7 emergency support. By maintaining a strong presence in these key Montana locations, we guarantee that high-quality, professional, and affordable restoration is always available to our neighbors.",
    image: "/images/image-39.jpg",
    alt: "Water damage repair and restoration in Bigfork, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Buildings Flood Damage Restoration or Water Remediation Services Bigfork MT?",
    description:
      "Choosing the right partner for property recovery can make the difference between a minor setback and a structural disaster. Allied Restoration stands out as the skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Bigfork MT. Our reputation is built on a foundation of technical excellence and deep local commitment. Unlike out-of-state franchises, we understand the specific environmental challenges faced by Bigfork property owners, from frozen pipe bursts in winter to seasonal flooding.We are a skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Bigfork MT that prioritizes cutting-edge technology. By utilizing high-velocity air movers and industrial-grade dehumidifiers, we ensure that moisture is removed from even the most inaccessible areas of your building. Our team is fully certified and follows rigorous industry standards to guarantee your home or office is safe, dry, and healthy. At Allied Restoration, we don't just provide a service; we provide a promise of quality, transparency, and 24/7 availability. When you choose us, you are choosing a local leader dedicated to restoring your property with the highest level of care and professional integrity.",
    image: "/images/image-40.webp",
    alt: "Allied Restoration water damage restoration team in Bigfork, MT",
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
