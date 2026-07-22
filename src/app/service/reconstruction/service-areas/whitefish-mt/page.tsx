
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
  title: 'Reconstruction Services in Whitefish, MT | Allied 24/7 Restoration',
  description: 'Expert reconstruction and remodeling services in Whitefish, MT. Certified team handles complete home renovations, structural repairs, and property rebuilds. Available 24/7 for emergency service!',
  openGraph: {
    title: 'Reconstruction Services in Whitefish, MT | Allied Restoration',
    description: 'Professional reconstruction in Whitefish, MT. Certified team for structural repairs, fire and water damage restoration, and full property rebuilds.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allied Restoration – Reconstruction in Whitefish, MT',
    description: 'Certified reconstruction contractor for Whitefish, MT. Fast inspections and expert structural restoration for homes and businesses.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Buildings Reconstruction Services Contractor Whitefish MT",
  areaLabel: "Whitefish, MT",
  description:
    "Restore your peace of mind with Allied Restoration, the local leader for professional and affordable residential or commercial reconstruction services. Our certified team provides trusted, same-day solutions for fire damage and structural recovery. Quality craftsmanship you can count on!",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and trusted team at Allied Restoration provides compassionate, professional guidance for every client.",
    },
    {
      title: "Quick Response",
      description:
        "Expect professional and trusted same-day service from our Whitefish MT experts during any property emergency.",
    },
    {
      title: "24/7 Support",
      description:
        "Get professional residential or commercial reconstruction services anytime with our dedicated, 24/7 emergency support line.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Reconstruction Services Contractor or Company in Whitefish MT? - Same Day Fire Damage Reconstruction Services",
  paragraphs: [
    "Finding a professional and trusted structural reconstruction services contractor in Whitefish, MT is critical when your property’s integrity is at stake. At Allied Restoration, we provide the immediate relief homeowners need through our professional and trusted same-day fire damage reconstruction services. We understand that emergencies don’t wait, which is why we act as your skilled or professional all-new or old home structural emergency reconstruction services contractor to stabilize and secure your assets instantly. As a trusted and premier fire or water damage reconstruction inspector or contractor in Whitefish, MT, our process begins with a meticulous evaluation.We pride ourselves on being a professional local buyer home emergency reconstruction services company that understands the specific building codes and environmental challenges of the Big Mountain region. If you are facing the aftermath of a pipe burst or heavy storms, our team serves as your local and affordable fully home flood damage reconstruction repair or restoration services contractor. We are more than just builders; we are a certified fire damage reconstruction services contractor equipped with the latest technology to erase all traces of soot and char. As an experienced and trusted all-kind buildings reconstruction and restoration services company, we handle everything from residential bungalows to expansive commercial offices. When you hire a skilled or insured fire damage reconstruction services contractor like us, you are choosing quality, speed, and local expertise.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our reconstruction services in Whitefish, MT.",
  questions: [
    {
      question: "How quickly can Allied Restoration respond to an emergency?",
      answer:
        "As a professional and trusted same day property reconstruction services contractor, we offer 24/7 emergency response. In Whitefish, MT, our skilled team typically arrives within two hours to assess damage and begin the structural stabilization process immediately to prevent further loss.",
    },
    {
      question: "Do you handle both residential and commercial projects?",
      answer:
        "Yes. We are an experienced and trusted all kind buildings reconstruction and restoration services company. From private family homes to large-scale commercial offices, our skilled residential or commercial buildings interior or exterior reconstruction services ensure every property meets local safety codes.",
    },
    {
      question: "Will my insurance cover the reconstruction costs?",
      answer:
        "Most policies cover sudden damage. As a certified and trusted all kinds buildings customized reconstruction services contractor, Allied Restoration works directly with your insurance provider. We provide detailed documentation and professional estimates to help streamline your claim and maximize your coverage.",
    },
    {
      question: "Is your reconstruction process eco-friendly and safe?",
      answer:
        "Absolutely. We are a skilled & professional safe and eco-friendly home reconstruction services contractor. We use non-toxic, sustainable materials and high-efficiency techniques to ensure your restored home or office is healthy, energy-efficient, and environmentally responsible for years to come.",
    },
    {
      question: "Can you help with mold after flood damage?",
      answer:
        "Yes. As a certified fire or flood water and mold damage recovery services contractor, we provide comprehensive cleanup. Our certified flood damage home reconstruction services inspector identifies hidden moisture to eliminate mold at the source before any structural rebuilding begins.",
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
    "Allied Restoration - Your Trusted Premier No.1 Reconstruction Services Contractor, Inspector, Company or Agency Whitefish MT",
  subHeading: "",
  description:
    "As the most trusted name in Whitefish, MT, Allied Restoration delivers certified and professional structural recovery. Our skilled inspectors provide affordable residential or commercial reconstruction, ensuring your property is restored with precision. Experience premier, same-day service from your local experts.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-7.jpg",
    alt: "Reconstruction and structural restoration services in Whitefish, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers premier solutions for every property crisis. As a certified and trusted all kinds buildings customized reconstruction services contractor, we handle everything from skilled residential or commercial buildings interior or exterior reconstruction to fire damage repair. Trust our professional and affordable team for expert restoration in Whitefish.`,
 service:[
  {
    heading:"Hire Now Most Trusted Water and Flood Damage Reconstruction Services Contractor or Company Whitefish MT",
    
description:"Water intrusion can devastate a property in hours, making it vital to partner with a local and affordable fully home flood damage reconstruction repair or restoration services contractor. At Allied Restoration, we specialize in rapid recovery, serving as your trusted and premier fire or water damage reconstruction inspector or contractor in Whitefish, MT. Our team doesn't just dry out the space; we provide a certified and trusted all kinds buildings customized reconstruction services contractor or company experience to return your property to its pre-loss condition.From burst pipes to seasonal flooding, we act as a professional and trusted same day property reconstruction services contractor. We are recognized as an experienced and trusted all kind buildings reconstruction and restoration services contractor or company, ensuring structural safety and mold prevention. When you need a professional local buyer home emergency reconstruction services company, our experts are ready to deliver high-quality, long-lasting results.",
 },
{
 heading:"Local & Trusted Emergency Buildings Interior or Exterior Reconstruction Services Contractor or Company in Whitefish MT",

description:"Whether your property has suffered from extreme weather or wear, Allied Restoration is the skilled residential or commercial buildings interior or exterior reconstruction services contractor or company in Whitefish, MT you can rely on. We provide comprehensive solutions, acting as a skilled or professional all-new or old home structural emergency reconstruction services contractor. Our expertise extends to specialized recovery, functioning as a premier and skilled fire damage repair, restoration or cleanup services contractor to handle the most complex restoration challenges.Our technicians are local and certified reconstruction services inspector services for home owners, ensuring every inch of your building meets safety standards. As a professional & certified fire damage property reconstruction services contractor, we seamlessly blend interior finishes with exterior durability. We are a skilled or insured fire damage reconstruction services contractor committed to excellence, providing professional and affordable residential or commercial reconstruction services that protect your investment and restore your peace of mind."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Home Reconstruction Services Inspector and Contractor Whitefish MT",
  description: `When disaster hits, your priority is a safe return to normalcy. If you are looking for a skilled and top-rated safe and eco-friendly home reconstruction services inspector and contractor in Whitefish, MT, look no further than Allied Restoration. We specialize in rebuilding properties using sustainable practices that protect both your family and the local Montana environment. As a skilled and professional safe and eco-friendly home reconstruction services contractor or company in Whitefish, MT, we ensure your project meets the highest health and safety standards. Our expertise is diverse, making us the go-to skilled home or offices home reconstruction services contractor for projects of any scale.
Whether you are revitalizing a workspace or restoring a family residence, we utilize non-toxic materials and energy-efficient methods to provide a superior finish. Following water-related disasters, we provide a certified flood damage home reconstruction services inspector or inspection contractor to verify that your structure is free of contaminants and moisture before the rebuilding process begins. At Allied Restoration, we believe that a "top-rated" service means combining structural integrity with environmental responsibility. We don't just patch up walls; we enhance your property’s longevity. By choosing a skilled and professional safe and eco-friendly home reconstruction services contractor, you are investing in a healthier future for your property. Contact us today for a comprehensive consultation and see why Whitefish residents trust us for their most critical restoration needs.`,
  backgroundImage: {
    src: "/images/image-5.jpg",
    alt: "Home reconstruction project in Whitefish, MT",
  },
  secondImage: {
    src: "/images/image-8.jpg",
    alt: "Allied Restoration reconstruction team at work in Whitefish, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster Reconstruction Services Contractor Whitefish MT",
    description:
      "In the wake of a catastrophe, your property deserves the care of a certified or trusted local no.1 disaster reconstruction services contractor in Whitefish, MT. At Allied Restoration, we understand that every minute counts. As an experienced high-qualified local and trusted disaster reconstruction services company and contractor, we are dedicated to restoring the safety and beauty of your property with unmatched efficiency. Our deep roots in the Whitefish community allow us to respond faster and navigate local regulations with ease. We pride ourselves on having a skilled & professional disaster reconstruction services inspector contractor or company in Whitefish, MT ready to evaluate your site.This initial assessment is critical for creating a roadmap to recovery. Whether you are managing a commercial site or a private residence, we serve as your skilled home or offices fire damage disaster reconstruction services contractor, handling everything from debris removal to final structural finishes. Our technicians are certified fire or flood water and mold damage recovery services contractors, ensuring that every restoration project is handled with precision and care. We don't just rebuild walls; we eliminate hazards like mold and smoke residue to ensure your indoor air quality is safe. When you choose Allied Restoration, you are choosing a partner who values integrity, speed, and craftsmanship. Contact us today for the premier disaster recovery solutions that Whitefish residents depend on most.",
    image: "/images/image-50.webp",
    alt: "Allied Restoration performing structural reconstruction in Whitefish, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Reconstruction Services Contractor",
    description:
      "Allied Restoration is proud to be the region’s premier choice for comprehensive structural recovery, providing expert care across a wide range of communities. As a leading all kind buildings reconstruction services contractor, we maintain a rapid-response network designed to reach you when urgency matters most. Our dedicated teams provide top-tier restoration and rebuilding solutions throughout Whitefish, MT, ensuring that local homeowners and businesses have immediate access to certified expertise. We have also expanded our footprint to serve the growing needs of Kalispell, MT, where our reputation for quality and reliability continues to set the industry standard.Whether you are dealing with the aftermath of a storm in Bigfork, MT, or require professional structural repairs in Columbia Falls, MT, our technicians arrive fully equipped to handle any challenge. We also provide specialized services in Lakeside, MT, focusing on both interior and exterior restoration for lakeside estates and commercial properties alike. By maintaining a strong presence in these key areas, Allied Restoration ensures that expert disaster recovery, flood damage repair, and fire reconstruction are never more than a phone call away. Our commitment to these communities is built on a foundation of trust, local knowledge, and an unwavering dedication to rebuilding the Flathead Valley stronger than ever before.",
    image: "/images/image-51.jpg",
    alt: "Service areas for reconstruction services in Flathead County, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Reconstruction Services Contractor Whitefish MT?",
    description:
      "Choosing the right partner for property recovery is a decision that impacts the long-term value and safety of your investment. Allied Restoration stands out as the premier choice because we combine local expertise with industrial-grade precision. As a skilled and professional reconstruction services contractor in Whitefish, MT, we understand the unique structural demands and climate challenges of the Flathead Valley. Whether you are managing a large-scale commercial site or a private family home, our team provides a seamless transition from disaster to restoration. We pride ourselves on transparent communication, ensuring that every phase of the project—from the initial damage assessment to the final coat of paint—is handled with the utmost care.Choosing Allied Restoration means you are opting for a company that prioritizes structural integrity and aesthetic excellence. We are not just builders; we are restoration specialists who utilize advanced technology and high-quality materials to rebuild stronger than before. Our reputation as a skilled and professional reconstruction services contractor in Whitefish, MT is built on a foundation of reliability, rapid response times, and a commitment to client satisfaction. We handle the complexities of insurance claims and building codes so you don't have to, making us the most trusted name for commercial or residential buildings reconstruction in the region.",
    image: "/images/image-52.jpg",
    alt: "Allied Restoration reconstruction crew serving Whitefish, MT",
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
