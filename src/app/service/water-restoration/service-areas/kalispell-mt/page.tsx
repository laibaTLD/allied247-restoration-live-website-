
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
  title: 'Water Damage Restoration Services Contractor Kalispell MT',
  description: 'Professional and certified specialists provide fast, affordable, and trusted water restoration for residential and commercial properties. Get expert inspection and restoration today—available 24/7 to protect your home or business.',
  openGraph: {
    title: 'Water Damage Restoration Services Contractor Kalispell MT',
    description: 'Professional and certified specialists provide fast, affordable, and trusted water restoration for residential and commercial properties. Get expert inspection and restoration today—available 24/7 to protect your home or business.',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water Damage Restoration Services Contractor Kalispell MT",
  areaLabel: "Bigfork, MT",
  description:
    "Trust Allied Restoration, Kalispell’s #1 local and certified 24/7 water damage restoration services contractor. Our professional and skilled specialists provide affordable, trusted flood water restoration for residential and commercial buildings. Get professional, certified inspection and expert restoration today.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local Kalispell specialists provide compassionate, professional guidance to navigate your property’s water damage restoration.",
    },
    {
      title: "Quick Response",
      description:
        "Allied Restoration arrives fast to mitigate flood damage, protecting your residential or commercial investment immediately.",
    },
    {
      title: "24/7 Support",
      description:
        "Emergency water restoration experts are available 24/7 to provide trusted, certified 24/7 disaster assistance.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award-Winning Flood Water Cleanup or Restoration Services Contractor or Agency Kalispell MT?",
  paragraphs: [
    "When disaster strikes, you need more than just a quick fix; you need a skilled or professional residential or commercial buildings flood water restoration or cleanup repair services contractor who understands the urgency of Montana’s climate. At Allied Restoration, we pride ourselves on being the professional local permanent residential or commercial flood water restoration cleanup services contractor or agency that Kalispell residents trust most. Whether you are facing a burst pipe or natural flooding, our trusted and premier commercial buildings flood water cleanup contractor team is equipped to handle any scale of damage. We operate as a certified mobile unit water remediation or restoration specialist services agency or contractor service, ensuring that our advanced drying equipment reaches your doorstep the moment you call.We understand that property damage is stressful, which is why we provide local and affordable emergency water remediation or restoration cleanup services without compromising on quality. From initial moisture inspection to final structural repairs, our technicians use industry-leading techniques to prevent mold and restore your peace of mind. As Kalispell’s premier experts, Allied Restoration combines local reliability with world-class technical skill. Don’t leave your property to chance—choose the certified professionals dedicated to permanent results and 24/7 rapid response. We are here to protect your home and business, ensuring a dry, safe, and professional recovery every time.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "How fast can you respond to a water emergency?",
      answer:
        "As the premier skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Kalispell MT, we offer 24/7 rapid response. Our mobile units arrive within hours to mitigate damage and protect your structural integrity.",
    },
    {
      question: "Does insurance cover my water damage restoration?",
      answer:
        "Most policies cover sudden, accidental water damage. As a professional certified 24/7 home or offices flood water damage repair or restoration services inspector, Allied Restoration works directly with your provider, handling documentation to streamline your claim and reduce stress.",
    },
    {
      question: "What are the signs of hidden water damage?",
      answer:
        "Look for yellow staining, peeling paint, or musty odors. If you notice soft spots, contact our skilled & professional residential or commercial buildings water damage repair or cleanup services specialist company for a professional, high-tech moisture inspection immediately.",
    },
    {
      question: "Can you restore both homes and businesses?",
      answer:
        "Yes. We are a skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company. Our team manages everything from small residential leaks to large-scale commercial floods with professional equipment and permanent repair solutions.",
    },
    {
      question: "Why is professional water extraction necessary?",
      answer:
        "Mopping isn't enough to prevent mold. Our certified or award winning water damage cleanup services experts contractor Kalispell MT uses industrial-grade dehumidifiers and pumps. This ensures deep structural drying, protecting your property from long-term rot and hazardous mold growth.",
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
    "Allied Restoration - Your Trusted Premier No.1 Water Remediation, Repair or Restore Services Expert Contractor, Company, Agency, Kalispell MT",
  subHeading: "",
  description:
    "Choose Allied Restoration, the skilled permanent mobile unit residential or commercial building water damage restoration services contractor Kalispell MT. We deliver premier and skilled on time water damage repair or restoration services, providing certified, 24/7 emergency cleanup to protect your property.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-41.webp",
    alt: "Professional water damage restoration services in Kalispell, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `As the premier and skilled on time water damage repair or restoration services experts, Allied Restoration provides comprehensive solutions for every crisis. From certified inspections to professional structural drying, our skilled permanent mobile unit residential or commercial building water damage restoration services contractor Kalispell MT ensures your property is restored perfectly.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor Kalispell MT",
    
description:"When structural integrity is at stake, you cannot afford to wait. Allied Restoration stands as the most reliable name for homeowners seeking a professional certified 24/7 home or offices flood water damage repair or restoration services inspector or contractor or agency Kalispell MT. Our inspection process is rigorous; we utilize advanced thermal imaging and moisture meters to identify hidden pockets of water behind drywall and under flooring.As a skilled permanent mobile unit residential or commercial building water damage restoration services contractor Kalispell MT, we arrive fully equipped to assess structural foundations and wood framing immediately. Our inspections don’t just find the water—they provide a roadmap for total recovery. By choosing a premier and skilled on time water damage repair or restoration services experts, you ensure that every structural vulnerability is documented for insurance and safety. Trust our local Kalispell team to deliver the precision your home deserves.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Water Damage Restoration or Cleanup Services Contractor Kalispell MT",

description:"Emergency leaks and flash floods don’t follow a 9-to-5 schedule, which is why Allied Restoration offers a professional certified 24/7 home or offices flood water damage repair or restoration services inspector or contractor or agency Kalispell MT. We specialize in high-efficiency extraction and rapid structural drying to prevent long-term mold growth and secondary damage.Our team is recognized as a skilled permanent mobile unit residential or commercial building water damage restoration services contractor Kalispell MT, capable of handling large-scale commercial floods or localized residential pipe bursts with equal expertise. As the premier and skilled on time water damage repair or restoration services experts, we prioritize permanent solutions over temporary patches. We work directly with your insurance providers to streamline the cleanup process, ensuring your office or home returns to pre-loss condition faster than anyone else in the valley. For 24/7 peace of mind and affordable, high-quality cleanup, Kalispell chooses us."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Water Remediation, Restoration and Cleanup Services Contractor or Company Kalispell MT",
  description: `When water invades your property, time is your greatest enemy. Allied Restoration stands as the trusted and top rated emergency water remediation or restoration services contractor or company expert, dedicated to saving your home or business from the devastating effects of moisture. Whether you are dealing with a sudden pipe burst or seasonal flooding, our team operates as a skilled & professional residential or commercial buildings water damage repair or cleanup services specialist company or contractor Kalispell MT. We understand that every minute counts, which is why we deploy a skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company immediately to your location.
Our technicians are more than just cleaners; they are certified or award winning water damage cleanup services experts contractor Kalispell MT who utilize industrial-grade extraction and dehumidification technology. At Allied Restoration, we bridge the gap between emergency response and long-term structural integrity. We don't just remove water; we provide a comprehensive recovery plan that addresses hidden moisture and prevents mold growth. For those seeking the highest standards of care, our reputation as a trusted and top rated emergency water remediation or restoration services contractor or company expert ensures your property is in the best hands. Let us handle the stress of restoration with the precision and professionalism that only Kalispell’s local experts can provide.`,
  backgroundImage: {
    src: "/images/image-36.jpg",
    alt: "Water damage restoration team in Kalispell, MT",
  },
  secondImage: {
    src: "/images/image-37.webp",
    alt: "Water damage restoration equipment in Kalispell, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Water Damage Repairing or Restoration Experts Kalispell MT",
    description:
      "When your property faces unexpected flooding, you need the certified or trusted local no.1 home or offices water damage repairing or restoration experts Kalispell MT to step in. At Allied Restoration, we understand that every second counts. As an experienced high-qualified affordable emergency flood water damage repairing or restoration and cleanup services provider company or agency Kalispell MT, we provide rapid, reliable solutions designed to save your structure and your sanity. Our team doesn't just surface-dry your carpets; we dig deeper. Using state-of-the-art moisture detection and industrial-grade dehumidifiers, Allied Restoration ensures that every drop of moisture is extracted from your home or office.We pride ourselves on being an experienced high-qualified affordable emergency flood water damage repairing or restoration and cleanup services provider company or agency Kalispell MT that local residents can depend on 24/7. Whether it is a residential basement flood or a large-scale commercial pipe burst, our technicians apply rigorous industry standards to every project. We handle the dirty work—from debris removal to structural drying—so you can focus on getting back to normal. By choosing the certified or trusted local no.1 home or offices water damage repairing or restoration experts Kalispell MT, you are opting for a permanent fix rather than a temporary patch. Trust our experts to deliver high-quality, cost-effective restoration that stands the test of time.",
    image: "/images/image-38.jpg",
    alt: "Water extraction and drying equipment in Kalispell, MT",
  },
  row2: {
    heading: "Our Services Areas for Water Damage Remediation or Restoration Services",
    description:
      "Finding a reliable restoration partner shouldn't be a challenge when disaster strikes your property in the Flathead Valley. Allied Restoration is proud to offer comprehensive coverage across the region, ensuring that expert help is always just a phone call away. Our primary service hub is in Kalispell MT, where we provide rapid, 24/7 emergency response for both residential and commercial water crises. However, our commitment to excellence extends far beyond city limits. We frequently deploy our mobile units to Whitefish MT, helping homeowners and resort managers mitigate flood damage with professional precision.Further east, we serve the community of Columbia Falls MT, offering everything from structural drying to certified moisture inspections. If you are located along the scenic shores of the lake, you can rely on our skilled teams in Bigfork MT and Lakeside MT for permanent water damage solutions and debris cleanup. By maintaining a strong presence in these key locations, we ensure that our neighbors receive the fastest response times possible. Whether you are dealing with a burst pipe in the heart of town or storm damage in a rural area, our local expertise across these North Montana communities guarantees your property will be restored to its original condition quickly and affordably.",
    image: "/images/image-39.jpg",
    alt: "Water damage repair and restoration in Kalispell, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Buildings Flood Damage Restoration or Water Remediation Services Kalispell MT?",
    description:
      "When your property is under water, choosing the right partner determines the future safety of your building. Allied Restoration stands out as the skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Kalispell MT. We prioritize a combination of rapid response and technical excellence, ensuring that every project meets the highest industry standards for safety and structural integrity. What sets Allied Restoration apart is our commitment to permanent solutions. As a skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Kalispell MT, we utilize high-tech moisture detection and industrial-grade drying equipment to eliminate every trace of humidity.We don’t just address the visible water; we mitigate the hidden risks of mold and rot that often follow flood events. Our local team understands the specific challenges of Montana’s climate, allowing us to provide tailored care for both residential homes and commercial offices. By choosing us, you are opting for transparency, affordability, and the peace of mind that comes with hiring certified experts. We handle everything from initial inspection to final structural repair, making us the top choice for property owners who demand the very best in restoration quality.",
    image: "/images/image-42.webp",
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
