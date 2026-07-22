
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
  title: 'Schedule Affordable Garbage & Junk Clean Outs in Glendale AZ | Junks Butlers',
  description: 'Affordable garbage and junk clean outs in Glendale AZ. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
  openGraph: {
    title: 'Schedule Affordable Garbage & Junk Clean Outs in Glendale AZ | Junks Butlers',
    description: 'Affordable garbage and junk clean outs in Glendale AZ. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
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
  title: "Certified & Professional #1 Buildings Radon Mitigation Services Contractor Whitefish MT",
  areaLabel: "Whitefish, MT",
  description:
    "Allied Restoration is the #1 local contractor for professional radon mitigation in Whitefish, MT. Trust our certified inspectors for affordable, same-day residential and commercial services.Keep your property safe and compliant with the most trusted mitigation experts in town.",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our certified Whitefish radon team offers professional, friendly service tailored to your specific property needs.",
    },
    {
      title: "Quick Response",
      description:
        "Get fast, same-day service from local, trusted contractors dedicated to securing your home or office.",
    },
    {
      title: "24/7 Support",
      description:
        "We are available anytime for professional radon mitigation services to keep your Whitefish property safe.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Sub-Slab Radon Mitigation Services Contractor or Company in Whitefish MT? - Radon Gas Mitigation Services",
  paragraphs: [
    "If you are searching for a certified radon mitigation services contractor in Whitefish, MT, look no more than Allied Restoration. We are the premier local experts dedicated to protecting your family or employees from the dangers of radon gas. Whether you own an old home or a newly constructed property, our skilled and insured radon mitigation services contractor in Whitefish, MT, provides comprehensive solutions tailored to your needs. We specialize in local and affordable fully home sub-slab radon mitigation repair or restoration services, ensuring your building is safe and compliant. As a trusted and premier radon mitigation inspector or contractor in Whitefish, MT, we conduct thorough inspections to identify risks and implement effective reduction techniques.Allied Restoration is a professional emergency radon mitigation services company in Whitefish, MT, ready to act fast when you need us most. We are the experienced and trusted all-kind buildings radon mitigation and installation services contractor or company in Whitefish, MT, bringing high-quality workmanship to every job. Our goal is to provide peace of mind through reliable, expert service. Don't compromise on safety; choose the top certified radon mitigation services contractor in Whitefish, MT for guaranteed results. Contact Allied Restoration today to schedule your inspection and secure your property against dangerous radon levels.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "What exactly is radon mitigation?",
      answer:
        "Radon mitigation is the process used to reduce radon gas concentrations in the breathing zones of occupied buildings. We install specialized ventilation systems that draw radon from beneath your foundation and safely vent it outdoors, away from windows and doors.",
    },
    {
      question: "How do I know if I need radon mitigation?",
      answer:
        "You need mitigation if professional testing reveals radon levels at or above the EPA action level. Even levels below this warrant consideration for reduction, as no level of radon is considered completely safe for long-term exposure for you or your family.",
    },
    {
      question: "How long does the mitigation installation process take?",
      answer:
        "YFor most residential properties, a qualified Allied Restoration contractor can install a complete, effective sub-slab depressurization system quickly, often within a single day. Commercial buildings may take longer depending on their size, foundation complexity, and the number of suction points required.",
    },
    {
      question: "What is the cost of radon mitigation in Whitefish?",
      answer:
        "Costs vary based on building size, foundation type (basement, crawl space, or slab), and complexity. We provide free, detailed estimates after a thorough on-site inspection of your property to determine the best, most affordable solution for your specific mitigation needs.",
    },
    {
      question: "Will the mitigation system make noise or affect my home?",
      answer:
        "The systems are designed to be quiet. The fan is typically installed outside or in the attic. You will see PVC piping running from your basement or crawl space to the roof, but it is engineered to be as unobtrusive as possible.",
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
    "Allied Restoration - Your Trusted Premier No.1 Radon Mitigation Services Contractor, Inspector, Company or Agency Whitefish MT",
  subHeading: "",
  description:
    "Allied Restoration is the premier #1 radon mitigation services contractor in Whitefish, MT. Our certified team provides expert inspections and affordable, same-day residential and commercial mitigation solutions. Trust the local experts to keep your indoor air safe, clean, and compliant with all safety regulations.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-11.webp",
    alt: "Expert radon mitigation services in Whitefish, MT for safe and healthy indoor air",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration provides expert radon mitigation and testing services for homes and businesses in Whitefish, MT. Our certified team offers affordable, same-day solutions, including basement sealing and sub-slab repairs. Trust our skilled contractors for comprehensive emergency radon services to keep your property safe and compliant.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement and Crawl Space Radon Mitigation Services Contractor or Company Whitefish MT",
    
description:"When it comes to safeguarding your property, Allied Restoration is the premier choice for professional radon solutions in Whitefish. Radon gas often accumulates in lower levels, making basement and crawl space radon mitigation services essential for maintaining a healthy indoor environment. Our team consists of highly certified and trusted all kinds of buildings radon mitigation services contractors or companies in Whitefish, MT, ensuring that no matter the structure, we have the expertise to reduce radon levels effectively.We specialize in sub-slab depressurization and crawl space sealing techniques designed to stop radon at its source. As a premier contractor, we prioritize not just reduction, but also compliance with all safety regulations, giving you complete peace of mind. We pride ourselves on fast turnaround times, professional conduct, and affordable pricing that doesn't compromise on quality. Do not leave your health to chance. Trust our skilled residential or commercial buildings radon testing and mitigation solutions services contractor or company in Whitefish, MT to deliver comprehensive, effective results.",
 },
{
 heading:"Local & Trusted Emergency Radon Testing and Mitigation Solutions Services Contractor or Company in Whitefish MT",

description:"If you suspect high radon levels, you need a rapid, reliable response from a team you can trust. Allied Restoration offers local and trusted emergency radon testing and mitigation solutions services contractors or companies in Whitefish, MT, providing peace of mind when you need it most. Our certified technicians use state-of-the-art equipment to quickly identify dangerous concentrations of gas in your home or office. Once detected, our skilled residential or commercial buildings radon testing and mitigation solutions services contractor or company in Whitefish, MT acts immediately to install effective reduction systems.We understand the urgency of these situations, which is why we provide fast, efficient, and certified and trusted all kinds of buildings radon mitigation services contractors or companies in Whitefish, MT. Whether you require immediate premier and skilled radon system repair and maintenance services or a complete new installation, Allied Restoration is committed to keeping your indoor air safe, breathable, and compliant with safety standards."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Radon Mitigation Inspection Services Inspector and Contractor Whitefish MT",
  description: `If you are looking for a skilled and top-rated radon mitigation inspection services inspector and contractor in Whitefish, MT, Allied Restoration is the trusted name you need. Radon is a dangerous, colorless, and odorless gas that can accumulate in your property, posing serious health risks. Our skilled and professional radon mitigation inspection services contractor or company in Whitefish, MT, specializes in identifying these hidden dangers quickly and accurately. We take pride in delivering comprehensive solutions for both residential and commercial clients, ensuring that every corner of your building is thoroughly assessed.
Whether you are buying a new home or looking to secure your current office, our certified home or offices buildings radon mitigation services inspector, or inspection contractor in Whitefish, MT, provides unparalleled expertise. We offer tailored mitigation plans designed to efficiently reduce radon levels and ensure compliance with safety standards. Trust Allied Restoration for a skilled home or offices home radon mitigation services contractor in Whitefish, MT, committed to protecting your health. Don't wait until it's too late; schedule your inspection with the premier local experts today to guarantee a safe and healthy environment for your family or employees.`,
  backgroundImage: {
    src: "/images/image-12.jpg",
    alt: "Expert radon mitigation inspection services in Whitefish, MT for safe and healthy indoor air",
  },
  secondImage: {
    src: "/images/image-13.jpg",
    alt: "Radon mitigation system installation in Whitefish, MT for effective radon reduction",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster EPA Approved Radon Mitigation Services Contractor Whitefish MT",
    description:
      "When facing dangerous levels of radon, you need a certified or trusted local No.1 disaster EPA approved radon mitigation services contractor in Whitefish, MT. Allied Restoration stands out as the premier expert in providing safe, compliant solutions for both residential and commercial properties. As an experienced, high-qualified local and trusted EPA approved radon mitigation services company and contractor in Whitefish, MT, we ensure your property meets all safety standards effectively. Our team of skilled and professional radon control services inspector contractors or companies in Whitefish, MT, is dedicated to identifying risks and implementing reliable reduction strategies fast.We understand the urgency of protecting your indoor air quality, which is why we offer certified emergency radon mitigation services contractor solutions to address immediate threats. Whether it is a residential home or a commercial office building, our skilled home or offices radon control services contractor ensures a thorough job from inspection to installation. Allied Restoration combines expertise with local knowledge, making us the top choice for safeguarding your environment. Don't compromise on safety—choose the certified or trusted local No.1 disaster EPA approved radon mitigation services contractor in Whitefish, MT, to guarantee a healthy, compliant space. Contact us today for a comprehensive assessment and reliable, professional service you can trust.",
    image: "/images/image-14.jpg",
    alt: "Expert radon mitigation equipment and testing devices in Whitefish, MT for accurate detection and reduction",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Radon Mitigation Services Contractor",
    description:
      "Allied Restoration is proud to offer top-tier, comprehensive radon mitigation services to a wide range of properties throughout the Flathead Valley. As a premier contractor, we understand that radon gas poses a threat to both residential homes and commercial buildings alike, regardless of their age or construction type. Our certified experts are dedicated to ensuring your environment is safe, healthy, and compliant with all safety standards. We proudly serve clients in Whitefish MT, providing fast and effective solutions to keep homes and offices secure. Furthermore, our professional team extends its reliable services to Kalispell MT, delivering customized mitigation systems designed to fit specific property needs.Residents and business owners in Bigfork MT can trust us for thorough inspections and expert installations that guarantee results. We are also committed to protecting the community in Columbia Falls MT with our specialized reduction techniques. Additionally, our radon mitigation contractor services are available in Lakeside MT, ensuring comprehensive coverage for all buildings in the area. No matter where you are located in the region, Allied Restoration is ready to deliver professional, trusted, and affordable radon solutions.",
    image: "/images/image-15.jpg",
    alt: "Expert radon mitigation system installation team in Whitefish, MT for effective radon reduction",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your  Commercial or Residential Buildings Radon Mitigation Services Contractor Whitefish MT?",
    description:
      "Choosing the right partner for air quality control is crucial for safety and compliance. When looking for a skilled and professional Radon Mitigation Services contractor in Whitefish, MT, Allied Restoration is the undisputed leader. We specialize in comprehensive solutions for both commercial and residential buildings, ensuring that your property is safe from dangerous radon gas levels. Our team consists of highly trained experts dedicated to delivering top-tier service tailored to your specific structural needs, whether it's a bustling office complex or a cozy family home.Why do residents and business owners trust us? Allied Restoration utilizes state-of-the-art diagnostic tools to identify the precise source of radon intrusion, followed by the installation of efficient, long-lasting mitigation systems. As a premier contractor, we prioritize not just reduction, but also compliance with all safety regulations, giving you complete peace of mind. We pride ourselves on fast turnaround times, professional conduct, and affordable pricing that doesn't compromise on quality. Don't risk the health of your occupants; choose the expertise and reliability that comes with hiring the top-rated skilled and professional Radon Mitigation Services contractor in Whitefish, MT. Protect your investment and your health by scheduling a consultation with us today.",
    image: "/images/image-16.webp",
    alt: "Allied Restoration radon mitigation team in Whitefish, MT, providing expert solutions for safe and healthy indoor air",
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
