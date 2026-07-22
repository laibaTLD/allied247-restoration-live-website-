
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
  title: 'Reconstruction Services in Lakeside, MT | Allied 24/7 Restoration',
  description: 'Expert reconstruction and remodeling services in Lakeside, MT. Certified team handles complete home renovations, structural repairs, and property rebuilds. Available 24/7 for emergency service!',
  openGraph: {
    title: 'Reconstruction Services in Lakeside, MT | Allied Restoration',
    description: 'Professional reconstruction in Lakeside, MT. Certified team for structural repairs, fire and water damage restoration, and full property rebuilds.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allied Restoration – Reconstruction in Lakeside, MT',
    description: 'Certified reconstruction contractor for Lakeside, MT. Fast inspections and expert structural restoration for homes and businesses.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Buildings Reconstruction Services Contractor Lakeside MT",
  areaLabel: "Lakeside, MT",
  description:
    "Trust Allied Restoration, your certified local partner for professional and affordable residential or commercial reconstruction. From fire damage to structural repairs, our skilled inspectors provide trusted, same-day service to restore your home or office. Quality craftsmanship you can count on.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts at Allied Restoration provide compassionate, personalized guidance through every reconstruction project step.",
    },
    {
      title: "Quick Response",
      description:
        "We prioritize your peace of mind with rapid, same-day arrivals to secure and restore your property.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our trusted team remains available to handle your emergency reconstruction needs in Lakeside.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Reconstruction Services Contractor or Company in Lakeside MT? - Same Day Fire Damage Reconstruction Services",
  paragraphs: [
    "If you are searching for a professional and trusted structural reconstruction services contractor or company in Lakeside MT, Allied Restoration is your premier local partner for excellence. As a certified fire damage reconstruction services contractor Lakeside MT, we specialize in returning properties to their former glory with precision and speed. Whether you require same day fire damage reconstruction services or are dealing with the aftermath of a storm, our team acts as a skilled or professional all new or old home structural emergency reconstruction services contractor in Lakeside MT to ensure your safety. We understand that disasters don't wait, which is why we serve as a professional local buyer home emergency reconstruction services company in Lakeside MT, offering rapid assessments and reliable solutions.From minor repairs to major overhauls, we are the trusted and premier fire or water damage reconstruction inspector or contractor in Lakeside MT that homeowners rely on. If you've experienced a pipe burst or heavy rains, our local and affordable fully home flood damage reconstruction repair or restoration services contractor Lakeside MT provides the specialized care needed to mitigate mold and structural decay. As an experienced and trusted all kind buildings reconstruction and restoration services contractor or company in Lakeside MT, we handle both residential and commercial projects with equal expertise. Choose a skilled or insured fire damage reconstruction services contractor Lakeside MT that values your time and investment—choose Allied Restoration for guaranteed quality.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "Why choose Allied Restoration for my reconstruction project?",
      answer:
        "As a certified and trusted all Kinds buildings customized reconstruction services contractor, we provide expert craftsmanship and rapid response. Our team ensures your Lakeside property is restored safely, efficiently, and to the highest professional standards using premium, durable materials.",
    },
    {
      question: "Do you offer emergency same-day reconstruction services?",
      answer:
        "Yes. We are a professional and trusted same day property reconstruction services contractor Lakeside MT. We arrive quickly to secure your site, prevent further damage, and begin the structural recovery process immediately to protect your home or commercial office.",
    },
    {
      question: "Are your reconstruction services eco-friendly and safe?",
      answer:
        "Absolutely. We are a skilled & professional safe and eco-friendly home reconstruction services contractor. We utilize sustainable practices and non-toxic materials to ensure your restored environment is healthy for your family or employees while remaining environmentally responsible in Lakeside.",
    },
    {
      question: "Can you help with professional fire damage inspections?",
      answer:
        "Yes. Our skilled or professional home or offices reconstruction services inspector contractor provides detailed assessments. We evaluate structural integrity, smoke infiltration, and hidden hazards to create a comprehensive plan for your professional & certified fire damage property reconstruction services.",
    },
    {
      question: " Which areas do you serve outside of Lakeside, MT?",
      answer:
        "Allied Restoration proudly serves the entire Flathead Valley. Beyond Lakeside, we are the experienced high-qualified local and trusted disaster reconstruction services company for residents in Kalispell, Whitefish, Bigfork, and Columbia Falls, ensuring regional excellence in property restoration.",
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
    "Allied Restoration - Your Trusted Premier No.1 Reconstruction Services Contractor, Inspector, Company or Agency Lakeside MT",
  subHeading: "",
  description:
    "As the leading certified and trusted all kinds buildings customized reconstruction services contractor Lakeside MT, Allied Restoration delivers unmatched excellence. From expert inspections to full-scale recovery, we are the experienced and trusted all kind buildings reconstruction and restoration services contractor Lakeside MT relies on for quality.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-7.jpg",
    alt: "Reconstruction and structural restoration services in Lakeside, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers a full suite of recovery solutions tailored to your needs. As a skilled residential or commercial buildings interior or exterior reconstruction services contractor in Lakeside MT, we specialize in fire, water, and flood restoration. Our certified and trusted all kinds buildings customized reconstruction services ensure your property is restored with precision.`,
 service:[
  {
    heading:"Hire Now Most Trusted Water and Flood Damage Reconstruction services Contractor or Company Lakeside MT",
    
description:"When water invades your property, every second counts to prevent long-term structural decay. Allied Restoration stands as the most reliable choice for homeowners and businesses seeking a local and affordable fully home flood damage reconstruction repair or restoration services contractor Lakeside MT. Our team specializes in comprehensive recovery, acting as a certified and trusted all kinds buildings customized reconstruction services contractor or company Lakeside MT to ensure your space is not just dried, but fully rebuilt to code. Whether you are dealing with a burst pipe or natural flooding, we serve as a premier and skilled fire damage repair, restoration or cleanup services contractor services contractor Lakeside MT, bringing cross-functional expertise to every job site. We handle moisture extraction, dehumidification, and complete structural rebuilding with a focus on durability. Don't let water damage diminish your property's value; hire the experts who prioritize your safety and satisfaction.",
 },
{
 heading:"Local & Trusted Emergency buildings Interior or Exterior Reconstruction Services Contractor or Company in Lakeside MT",

description:"Disasters often strike without warning, leaving your property vulnerable to the elements. As a skilled residential or commercial buildings interior or exterior reconstruction services contractor or company in Lakeside MT, Allied Restoration provides the rapid response necessary to secure your investment. We are recognized as an experienced and trusted all kind buildings reconstruction and restoration services contractor or company in Lakeside MT, capable of handling everything from facade repairs to intricate interior remodeling. Our technicians are the skilled or professional home or offices reconstruction services inspector contractor Lakeside MT you need to assess damage accurately and create a custom restoration plan. Whether it’s a modern office or a historic home, we function as a skilled or professional all new or old home structural emergency reconstruction services contractor in Lakeside MT. We combine high-quality materials with master craftsmanship to restore the aesthetic and structural integrity of your building's interior and exterior surfaces seamlessly."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Home Reconstruction Services Inspector and Contractor Lakeside MT",
  description: `If you are searching for a partner who values both structural integrity and environmental responsibility, Allied Restoration is your premier choice. As a skilled & professional safe and eco-friendly home reconstruction services contractor or company in Lakeside MT, we prioritize sustainable building practices that protect your family and the local environment. Our approach ensures that every project uses non-toxic, high-quality materials, making us the most skilled home or offices home reconstruction services contractor Lakeside MT residents trust for healthy living and working spaces. We don't just rebuild; we optimize your property for long-term efficiency and safety.
Navigating the aftermath of a disaster requires a keen eye, which is why we provide a certified flood damage home reconstruction services inspector or inspection contractor Lakeside MT to evaluate your property’s specific needs. Whether you are dealing with moisture intrusion or structural compromise, Allied Restoration acts as a skilled or professional home or offices reconstruction services inspector contractor Lakeside MT to deliver precise, honest assessments. Our team is dedicated to being the local and trusted residential or commercial property reconstruction services contractor or inspector in Lakeside MT that puts your peace of mind first. By choosing our certified fire damage reconstruction services contractor Lakeside MT, you are guaranteed a restoration process that is as green as it is durable. Let us help you rebuild a safer, more sustainable future today.`,
  backgroundImage: {
    src: "/images/image-8.jpg",
    alt: "Home reconstruction project in Lakeside, MT",
  },
  secondImage: {
    src: "/images/image-5.jpg",
    alt: "Allied Restoration reconstruction team at work in Lakeside, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster Reconstruction Services Contractor Lakeside MT",
    description:
      "When catastrophe strikes, you need an experienced high-qualified local and trusted disaster reconstruction services company contractor Lakeside MT that can navigate the complexities of property recovery. Allied Restoration stands as the region's top-tier provider, offering comprehensive solutions for those facing the aftermath of unexpected events. As a skilled & professional disaster reconstruction services inspector contractor or company in Lakeside MT, we begin every project with a meticulous evaluation, ensuring every structural weakness is identified and addressed. Our goal is to provide a perfect transition from chaos to a fully restored environment, whether you are managing a residential property or a large-scale commercial facility.We specialize in specialized recovery, serving as your skilled home or offices fire damage disaster reconstruction services contractor Lakeside MT. We understand that fire damage involves more than just charred walls; it requires deep cleaning and structural reinforcement to ensure long-term safety. Additionally, we are a certified fire or flood water and mold damage recovery services contractor Lakeside MT, equipped with the advanced technology needed to eliminate hazardous spores and moisture. By choosing Allied Restoration, you are partnering with a local and trusted residential or commercial property reconstruction services contractor or inspector in Lakeside MT that treats your emergency with the urgency it deserves. From initial inspection to the final coat of paint, our professional and trusted same day property reconstruction services contractor Lakeside MT team is dedicated to excellence and your total peace of mind.",
    image: "/images/image-50.webp",
    alt: "Allied Restoration performing structural reconstruction in Lakeside, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Reconstruction Services Contractor",
    description:
      "Allied Restoration is proud to offer the region’s most reliable property recovery solutions, extending our expertise far beyond Lakeside MT to serve the entire Flathead Valley. As a premier local and trusted residential or commercial property reconstruction services contractor, we provide rapid response and master craftsmanship to our neighbors in Kalispell MT, ensuring that local businesses and homeowners have immediate access to emergency structural repairs. Our highly mobile teams are also frequently deployed to Whitefish MT, where we handle high-end residential restoration with the precision and care that luxury properties demand.We understand that disasters don't respect city limits, which is why we act as the best experienced and trusted all kind buildings reconstruction and restoration services contractor for the community of Bigfork MT. Whether it’s fire, water, or storm damage, our certified experts arrive on-site quickly to secure your investment. Furthermore, we provide dedicated support to Columbia Falls MT, offering everything from initial damage inspections to complete interior and exterior rebuilding. No matter where you are located in the valley, Allied Restoration remains the professional and trusted same day property reconstruction services contractor committed to restoring your peace of mind and your property’s value.",
    image: "/images/image-51.jpg",
    alt: "Service areas for reconstruction services in Flathead County, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Reconstruction Services Contractor Lakeside MT?",
    description:
      "Choosing the right partner for property recovery is critical to the longevity and safety of your investment. Allied Restoration stands out as the premier choice because we combine localized expertise with industry-leading certification. As a skilled and professional reconstruction services contractor in Lakeside MT, we understand the unique environmental challenges of the Flathead Valley, from heavy snow loads to moisture management. Our team doesn't just patch up damage; we rebuild with a focus on structural integrity and aesthetic seamlessness.What sets us apart is our commitment to a 'human-first' approach. We know that property damage is stressful, which is why we act as a local and trusted residential or commercial property reconstruction services contractor that prioritizes clear communication and transparent pricing. From the moment our skilled or professional home or offices reconstruction services inspector contractor arrives on-site, you gain a partner dedicated to navigating insurance hurdles and technical complexities on your behalf. Whether you are a business owner needing to minimize downtime or a homeowner looking to protect your family, Allied Restoration delivers the professional and trusted same day property reconstruction services required to bring your property back to life.",
    image: "/images/image-52.jpg",
    alt: "Allied Restoration reconstruction crew serving Lakeside, MT",
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
