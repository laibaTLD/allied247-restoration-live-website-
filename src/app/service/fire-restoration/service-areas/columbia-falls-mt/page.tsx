
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
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { Metadata } from "next";

// Page metadata
export const metadata: Metadata = {
  title: "Columbia Fall's Certified Fire Damage Restoration Company |  Allied 24/7 Restoration",
  description: 'Fast, reliable fire damage restoration in Columbia Falls, MT. Certified specialists provide expert fire damage restoration. Available 24/7—call now for expert services!',
  openGraph: {
    title: "Columbia Fall's Certified Fire Damage Restoration Company |  Allied 24/7 Restoration",
    description: 'Fast, reliable fire damage restoration in Columbia Falls, MT. Certified specialists provide expert fire damage restoration. Available 24/7—call now for expert services!',
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
  title: "Certified & Professional #1 Fire Damage Restoration Services Contractor Columbia Falls MT",
  areaLabel: "Columbia Falls, MT",
  description:
    "Don’t let fire damage define your future. Allied Restoration provides professional and affordable fire cleanup and same-day soot removal. As your local, certified fire damage restoration experts in Columbia Falls, MT, we ensure your residential or commercial property is safe, clean, and fully restored.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our compassionate, certified Columbia Falls team guides you through every step of the fire recovery process.",
    },
    {
      title: "Quick Response",
      description:
        "Dispatched immediately, our local experts provide same-day soot removal to prevent further damage to your property.",
    },
    {
      title: "24/7 Support",
      description:
        "Fire doesn't wait, and neither do we. Allied Restoration offers round-the-clock emergency cleanup services anytime.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Fire Damage Repair Services Contractor or Company in Columbia Falls MT? - Same Day Fire Damage Inspection",
  paragraphs: [
    "When disaster strikes, finding a trusted and premier fire damage repair inspector or contractor in Columbia Falls, MT, is the first step toward reclaiming your peace of mind. Allied Restoration stands as the region's leading authority, offering a professional local buyer home fire restoration or cleanup services company in Columbia Falls, MT, that residents can rely on during their most difficult moments. Whether you own a historic property or a modern build, our skilled or professional all new or old home structural fire damage repair services contractor in Columbia Falls, MT, understands the nuances of structural integrity and safety. We prioritize your safety with a skilled or insured fire damage inspection services contractor who can be on-site for a same-day fire damage inspection.As a local and affordable fully home structural fire damage repair or restoration services contractor in Columbia Falls, MT, we bridge the gap between high-quality craftsmanship and budget-conscious solutions. Our team includes every certified fire damage repair services inspector Columbia Falls, MT, needs to ensure insurance compliance and structural stability. From minor soot issues to major rebuilds, our experienced and trusted all kind fire damage repair services contractor or company in Columbia Falls, MT, manages the entire lifecycle of your recovery. Trust Allied Restoration to provide the technical expertise and local care required to rebuild your home stronger than ever before.",
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
        "We offer a rapid response to all emergencies. As the premier fire damage restoration services contractor in Columbia Falls, MT, our team is available 24/7 to provide same-day inspections and immediate soot removal to prevent permanent property damage.",
    },
    {
      question: " Are your fire cleanup methods safe for my family?",
      answer:
        "Yes. Allied Restoration is a skilled and professional safe and eco-friendly fire damage removal services contractor. We use non-toxic, green cleaning agents and HEPA filtration to ensure your home’s air quality is safe for children, pets, and the environment.",
    },
    {
      question: "Do you handle both residential and commercial fire restoration?",
      answer:
        "Absolutely. We are a trusted local residential or commercial fire damage restoration services contractor. Whether it is a small home kitchen fire or a large industrial warehouse, we have the heavy-duty equipment and expertise to manage any scale of recovery.",
    },
    {
      question: "Can you help me with the insurance claims process?",
      answer:
        "Yes. As a certified fire damage repair services inspector in Columbia Falls, MT, Allied Restoration provides detailed documentation and professional damage assessments. We work closely with your insurance provider to ensure your claim is processed accurately and your repairs begin quickly.",
    },
    {
      question: "What is included in your smoke and soot removal?",
      answer:
        "Our skilled smoke damage restoration services include deep-cleaning walls, ceilings, and surfaces using specialized chemical sponges. We also utilize professional deodorization technology to eliminate stubborn odors, ensuring your property is clean, fresh, and structurally sound after a fire.",
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
    "Allied Restoration - Your Trusted Premier No.1 Fire Damage Inspection or Fire Restoration Services Inspector, Company or Agency Columbia Falls MT",
  subHeading: "",
  description:
    "Secure your property with Allied Restoration, the top-rated choice for comprehensive recovery. As the premier fire damage inspection and restoration agency in Columbia Falls, MT, we provide expert damage assessments and professional cleanup to restore your home safely and efficiently.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-7.jpg",
    alt: "Professional fire damage restoration services in Columbia Falls, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `As the leading certified and trusted all kinds fire damage repair and restoration and inspection services contractor or company, Allied Restoration offers comprehensive solutions. From deep soot removal to full structural rebuilds, our premier and skilled fire damage repair, restoration, or cleanup services contractor team handles every detail with care.`,
 service:[
  {
    heading:"Hire Now Most Trusted Fire Restoration Inspection and Fire Damage Cleanup Company in Columbia Falls, MT",
    
description:"When the smoke clears, the first step to recovery is securing a skilled fire damage inspector services contractor or company in Columbia Falls, MT. At Allied Restoration, we understand that the period immediately following a fire is critical. Our team provides an exhaustive assessment to identify hidden structural weaknesses and hazardous soot deposits that often go unnoticed.As a certified and trusted all kinds fire damage repair and restoration and inspection services contractor or company, we deliver the precision required to satisfy insurance requirements and ensure your property’s safety. Choosing us means hiring a premier and skilled fire damage repair, restoration, or cleanup services contractor dedicated to total property revival. From the initial thermal imaging of charred supports to the removal of toxic debris, our inspection process is the foundation of a successful rebuild. Don't wait for damage to set in—secure our expert inspection today.",
 },
{
 heading:"Local & Trusted Emergency Fire Damage Repair, Restoration, or Cleanup Services Contractor in Columbia Falls, MT",

description:"Emergency situations demand a local partner who can arrive on-site before secondary damage takes hold. Allied Restoration is the local & trusted emergency fire damage repair, restoration, or cleanup services contractor in Columbia Falls, MT, offering rapid response times to stabilize your home or business. We specialize in comprehensive recovery, acting as a certified and trusted all kinds fire damage repair and restoration and inspection services contractor for both residential and commercial clients.Our technicians are equipped with industrial-grade air scrubbers and specialized chemical sponges to manage complex soot and smoke odors. As a premier and skilled fire damage repair, restoration, or cleanup services contractor, we don't just clean—we restore. We handle everything from emergency board-ups to the final coat of paint, ensuring every inch of your property meets our rigorous safety standards. For immediate, professional relief, trust Columbia Falls' dedicated restoration experts."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Fire and Smoke Damage, Inspection or Repair Services Inspector and Contractor Columbia Falls MT",
  description: `When fire impacts your property, the recovery process should never compromise your indoor air quality or the local environment. Allied Restoration is proud to be the leading skilled & professional safe and eco-friendly fire damage removal services contractor or company in Columbia Falls, MT. We utilize advanced, non-toxic cleaning agents and sustainable practices to ensure your home or office is restored without leaving a harsh chemical footprint. Our skilled home or offices fire damage inspection or repair services contractor team meticulously evaluates every structure, ensuring that both visible char and microscopic contaminants are addressed.
As a certified smoke or soot damage repair or restoration services inspector or inspection contractor, we prioritize your health by using high-efficiency particulate air (HEPA) filtration and green deodorization techniques. This eco-conscious approach makes us the premier choice for families and businesses seeking a skilled and top-rated safe and eco-friendly fire and smoke damage inspection or repair services contractor in Columbia Falls, MT. Whether you are dealing with minor smoke odor or significant structural charring, our certified smoke or soot damage repair or restoration services inspector provides the detailed documentation and expert care required for a successful, healthy recovery. Trust Allied Restoration to deliver a cleaner, greener, and safer path back to normalcy with our specialized, professional restoration solutions tailored for the Columbia Falls community.`,
  backgroundImage: {
    src: "/images/image-20.webp",
    alt: "Fire damage restoration team in Columbia Falls, MT",
  },
  secondImage: {
    src: "/images/image-21.jpg",
    alt: "Fire damage cleanup equipment in Columbia Falls, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Fire Damage Recovery Solutions Services Contractor Columbia Falls MT",
    description:
      "When disaster strikes your property, you need more than just a cleaning crew; you need the certified or trusted local no.1 fire damage recovery solutions services contractor in Columbia Falls, MT. At Allied Restoration, we pride ourselves on being an experienced high-qualified local and trusted fire restoration company services contractor that understands the unique needs of our Montana community. Our mission is to provide seamless, end-to-end recovery that returns your life to normal as quickly as possible. As a skilled & professional fire damage recovery solutions inspector services contractor or company in Columbia Falls, MT, we begin every project with a comprehensive assessment. This isn't just a walkthrough; it’s a deep dive into the structural health of your building.Whether you need a skilled home or offices fire damage recovery solutions or inspector contractor, our team is trained to identify soot migration, smoke ionization, and structural weaknesses that untrained eyes might miss. Choosing a certified fire damage recovery services contractor ensures that your restoration meets all industry safety standards and insurance requirements. Allied Restoration combines technical mastery with local accountability, making us the premier choice for residential and commercial clients alike. From initial board-ups to final structural repairs, our commitment to excellence remains unwavering. Trust the local and trusted fire restoration company services contractor that puts your safety and satisfaction first—trust Allied Restoration to rebuild your future.",
    image: "/images/image-22.jpg",
    alt: "Fire damage restoration and smoke removal equipment in Columbia Falls, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Fire Damage Restoration or Cleanup Services Contractor",
    description:
      "Allied Restoration is proud to be the premier provider of comprehensive recovery solutions throughout the Flathead Valley. As a dedicated fire damage restoration or cleanup services contractor, we maintain a wide service radius to ensure that professional help is never far away when disaster strikes. Our primary service hub is in Columbia Falls, MT, but our mobile emergency teams are strategically positioned to provide rapid response across the entire region. We are the most trusted fire damage restoration or cleanup services contractor for homeowners and businesses in Kalispell, MT, offering everything from smoke odor removal to structural stabilization.Our expertise extends northward, where we serve as a leading fire damage restoration or cleanup services contractor in Whitefish, MT, catering to both residential estates and commercial properties. We also provide specialized, high-quality cleanup for the scenic community of Bigfork, MT, ensuring that every property is restored to its pre-loss condition with meticulous care. Additionally, our reach includes Lakeside, MT, where we offer 24/7 emergency support for waterfront properties and local businesses. No matter where you are located within these areas, Allied Restoration delivers the certified equipment and local expertise required to handle all levels of fire, soot, and smoke damage efficiently and professionally.",
    image: "/images/image-23.jpg",
    alt: "Fire damage repair and soot cleanup in Columbia Falls, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Fire Damage Restoration Services Contractor Columbia Falls MT?",
    description:
      "Choosing the right partner for property recovery is a decision that impacts the safety and longevity of your investment. Allied Restoration stands out as the premier choice because we combine local accountability with industrial-grade expertise. As a skilled and professional trusted fire damage, fire restoration or fire surface cleanup services contractor in Columbia Falls, MT, we understand the specific challenges that Montana property owners face, from harsh weather integration to local building codes. We prioritize a restoration first mentality, using specialized technology to save structures and surfaces that others might simply tear down.This approach makes us a skilled and professional trusted fire damage expert, saving you time and reducing overall costs. Whether it is a small kitchen flare-up in a residential home or a large-scale industrial fire, our team is equipped to handle the unique demands of both commercial or residential buildings. Our technicians undergo rigorous training to remain the most trusted fire restoration or fire surface cleanup services contractor in the region. By choosing Allied Restoration, you are choosing a company that treats your property with the respect it deserves, ensuring a thorough, safe, and efficient return to normalcy.",
    image: "/images/image-24.jpg",
    alt: "Allied Restoration fire damage restoration team in Columbia Falls, MT",
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
