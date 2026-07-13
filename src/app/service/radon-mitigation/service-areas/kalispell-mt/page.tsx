
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
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
  title: 'Radon Mitigation Services in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration provides expert radon mitigation and testing in Kalispell, MT. Certified specialists install radon reduction systems to protect your home\'s air quality. Call now for trusted service!',
  openGraph: {
    title: 'Radon Mitigation Services in Kalispell, MT | Allied 24/7 Restoration',
    description: 'Allied 24/7 Restoration provides expert radon mitigation and testing in Kalispell, MT. Certified specialists install radon reduction systems to protect your home\'s air quality. Call now for trusted service!',
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
  title: "Certified & Professional #1 Buildings Radon Mitigation Services Contractor Kalispell MT",
  areaLabel: "Kalispell, MT",
  description:
    "Protect your property with Allied Restoration, Kalispell’s #1 certified radon mitigation services contractor. We provide professional, affordable, and same-day radon reduction for residential and commercial buildings. Trust our local, skilled inspectors for certified home radon mitigation you can rely on.",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local Kalispell experts provide compassionate, professional guidance throughout your entire radon mitigation and testing process.",
    },
    {
      title: "Quick Response",
      description:
        "Need immediate help? We offer rapid, same-day radon reduction services to keep your property safe today.",
    },
    {
      title: "24/7 Support",
      description:
        "Allied Restoration provides 24/7 assistance, ensuring your home or office stays protected from radon hazards.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Sub-slab Radon Mitigation Services Contractor or Company in Kalispell MT? - Radon gas mitigation Services",
  paragraphs: [
    "When it comes to your family's safety or the health of your employees, you cannot compromise on air quality. Are you looking for a professional and trusted sub-slab radon mitigation services contractor or company in Kalispell MT? Allied Restoration is the premier choice for comprehensive radon gas mitigation services. As an experienced and trusted all kind buildings radon mitigation and installation services contractor or company in Kalispell MT, we understand the geological risks unique to our area. Whether you require a skilled or professional all new or old home emergency radon mitigation services contractor in Kalispell MT, or a local and affordable fully home sub-slab radon mitigation repair or restoration services contractor, our team is ready to respond.We are a professional emergency radon mitigation services company in Kalispell MT that prioritizes your peace of mind with rapid, effective solutions. As a trusted and premier radon mitigation inspection inspector or contractor in Kalispell MT, we utilize advanced diagnostic tools to ensure your levels are safely below EPA guidelines. Choose a certified radon mitigation services contractor Kalispell MT that values precision and integrity. Our skilled or insured radon mitigation services contractor team handles everything from initial testing to complex system installations in residential and commercial properties. Don't leave your health to chance; partner with the most reliable experts in Montana to secure a radon-free environment today.",

  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "How does sub-slab radon mitigation actually work?",
      answer:
        "Our systems use a specialized fan to create a vacuum beneath your foundation. This suction pulls radon gas from the soil and vents it safely above your roofline, preventing it from ever entering your home’s living or working spaces.",
    },
    {
      question: "How long does a typical installation usually take?",
      answer:
        "As a professional Kalispell contractor, Allied Restoration typically completes most residential installations within a single day. Our skilled team ensures minimal disruption to your schedule while providing immediate, certified protection for your family or employees against dangerous gas levels.",
    },
    {
      question: "Why should I choose a certified radon contractor?",
      answer:
        "Yes, Allied Restoration offers competitive pricing for reRadon mitigation requires precise engineering and EPA-approved techniques. Hiring a certified professional ensures your system is properly sized, vented, and sealed, effectively reducing gas concentrations to safe levels while maintaining your building's structural integrity and energy efficiency.",
    },
    {
      question: "Do you offer emergency radon testing services?",
      answer:
        "Yes. If you suspect high radon levels or your existing system alarm sounds, we provide rapid-response testing and diagnostics. Our local team treats every high-level reading as a priority to ensure your Kalispell property returns to safety immediately.",
    },
    {
      question: "DIs maintenance required for my mitigation system?",
      answer:
        "Yes, to ensure long-term safety, we recommend checking your system’s pressure gauge regularly. Allied Restoration offers professional maintenance and fan replacement services to keep your mitigation system running at peak performance, ensuring continuous protection against fluctuating Montana soil gas levels.",
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
    "Allied Restoration - Your Trusted Premier No.1 Radon Mitigation Services Contractor, Inspector, Company or Agency Kalispell MT",
  subHeading: "",
  description:
    "Protect your property with Allied Restoration, the top-rated choice for professional radon solutions. As your certified local inspectors and contractors, we provide expert mitigation, testing, and system installations for residential and commercial buildings. Trust Kalispell’s premier agency for guaranteed safety.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-11.webp",
    alt: "Professional radon mitigation services in Kalispell, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers comprehensive radon solutions tailored to Kalispell’s unique terrain. From precision sub-slab suction and crawl space encapsulation to emergency testing and system repairs, our certified team ensures your air is safe. We provide professional, affordable mitigation for residential and commercial buildings, delivering same-day protection you can trust.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement and Crawl Space Radon Mitigation services Contractor or Company Kalispell MT",
    
description:"Protecting your property starts from the ground up. At Allied Restoration, we are recognized as the most trusted basement and crawl space radon mitigation services contractor or company in Kalispell MT. Basements and crawl spaces are primary entry points for hazardous soil gases; therefore, our specialized sub-membrane and sub-slab depressurization techniques are essential for safety. As a certified and trusted all kinds buildings radon mitigation services contractor or company, we use industrial-grade vapor barriers and precision-engineered suction systems to seal off earthen floors and foundation cracks.Whether you are a homeowner or a business manager, our skilled residential or commercial buildings radon testing and mitigation solutions services contractor or company in Kalispell MT ensures your air quality meets the highest standards. We don't just install systems; we provide peace of mind by securing the lowest levels of your structure against invisible threats.",
 },
{
 heading:"Local & Trusted Emergency Radon Testing and Mitigation Solutions Services Contractor or Company in Kalispell MT",

description:"When high radon levels are detected, time is of the essence. We are your local & trusted emergency radon testing and mitigation solutions services contractor or company in Kalispell MT, providing rapid-response diagnostics to protect your health. Allied Restoration understands that a failing system can lead to immediate spikes in gas concentration. That is why we act as a premier and skilled radon system repair and maintenance services contractor for the Flathead Valley.Our team handles everything from fan replacements to U-tube manometer calibrations and seal reinforcements. As a certified and trusted all kinds buildings radon mitigation services contractor or company, we offer comprehensive inspections to ensure your existing setup remains effective year-round. From initial emergency testing to long-term radon system repair and maintenance, our skilled technicians provide the reliable, local expertise required to keep Kalispell homes and offices safe and compliant."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Radon Mitigation Inspection Services Inspector and Contractor Kalispell MT",
  description: `If you are looking for a skilled and top-rated radon mitigation inspection services inspector and contractor in Kalispell MT, look no more than Allied Restoration. We specialize in identifying and neutralizing the "silent killer" in residential and commercial properties throughout the Flathead Valley. As a skilled & professional radon mitigation inspection services contractor or company in Kalispell MT, we provide thorough assessments that utilize the latest diagnostic technology to detect elevated gas levels. Whether you manage large-scale commercial facilities or need a skilled home or offices home radon mitigation services contractor, our team delivers precision results tailored to your foundation type.
We pride ourselves on being a certified home or offices buildings radon mitigation services inspector or inspection contractor, ensuring that every square foot of your property is audited for safety. Radon levels can vary significantly between neighboring properties, making a customized inspection plan essential. Our experts don't just find the problem; we design high-efficiency venting systems to redirect gases safely away from your living areas. From initial testing to final system verification, Allied Restoration remains the gold standard for quality and reliability. Choose the local experts who understand Montana’s soil and construction standards—schedule your professional inspection today to ensure a healthier, radon-free environment for everyone inside.`,
  backgroundImage: {
    src: "/images/image-12.jpg",
    alt: "Professional radon mitigation services in Kalispell, MT",
  },
  secondImage: {
    src: "/images/image-13.jpg",
    alt: "Radon mitigation system installation in Kalispell, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster EPA Approved Radon Mitigation Services Contractor Kalispell MT",
    description:
      "When health risks are detected in your foundation, you need a certified or trusted local no.1 disaster EPA approved radon mitigation services contractor in Kalispell MT. Allied Restoration stands as the region's leading authority in environmental safety and air quality management. As an experienced high-qualified local and trusted EPA approved radon mitigation services company and contractor, we strictly adhere to federal safety guidelines to ensure your property meets or exceeds clean air standards. We are recognized as a skilled & professional radon control services inspector contractor or company in Kalispell MT, utilizing advanced active soil depressurization (ASD) systems to pull gas from beneath your structure before it ever reaches your lungs.Whether you are dealing with a residential basement or a high-occupancy corporate suite, we serve as your skilled home or offices radon control services contractor, tailoring every pipe and seal to your specific architectural needs. In cases of extremely high readings, we act as your certified emergency radon mitigation services contractor, offering rapid response times to lower toxic concentrations immediately. Don’t settle for unverified methods; trust the experts who combine local Montana knowledge with EPA-approved science. Protect your investment and your health by partnering with Allied Restoration—the most reliable name for permanent radon solutions in Kalispell.",
    image: "/images/image-14.jpg",
    alt: "Radon mitigation equipment and testing devices in Kalispell, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Radon Mitigation Services Contractor",
    description:
      "Allied Restoration is proud to be the leading choice for comprehensive radon solutions across the Flathead Valley, serving as a dedicated radon mitigation services contractor for all types of residential and commercial properties. Our expert team extends its reach well beyond Kalispell MT, ensuring that families and businesses in Whitefish MT have access to top-tier sub-slab depressurization and soil gas venting. We understand the specific geological challenges found in Bigfork MT, where lakeside foundations often require specialized moisture and gas barriers.Our certified technicians also provide rapid-response testing and system installations in Columbia Falls MT, helping homeowners secure their air quality against high-risk Montana soil conditions. From the quiet neighborhoods of Lakeside MT to the bustling centers of the Flathead region, we bring state-of-the-art diagnostic tools and EPA-approved mitigation strategies to every job site. Whether you are managing a new construction project or retrofitting an older building, our regional presence ensures you receive prompt, localized expertise and long-term maintenance support. Trust our team to maintain a safe, radon-free environment throughout Northwest Montana's most vital communities.",
    image: "/images/image-15.jpg",
    alt: "Radon system installation team in Kalispell, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Radon Mitigation Services Contractor Kalispell MT?",
    description:
      "Choosing the right partner for soil gas ventilation is critical for long-term safety. Why choose Allied Restoration contractor or company for your commercial or residential buildings radon mitigation services contractor in Kalispell MT? The answer lies in our unwavering commitment to technical precision and local expertise. As a skilled and professional radon mitigation services contractor in Kalispell MT, we go beyond simple fan installations. We conduct rigorous diagnostic pressure field extension testing to ensure every square foot of your foundation is under negative pressure, effectively preventing radon entry. Allied Restoration utilizes premium, industrial-grade components designed to withstand the harsh Montana climate, ensuring your system remains operational year-round.We understand that commercial structures and residential homes have vastly different architectural requirements; therefore, we customize our routing and suction point locations to maintain your building’s aesthetic and structural integrity. Our team is fully insured, certified, and deeply familiar with Flathead County building codes. When you choose us, you aren't just hiring a laborer; you are partnering with a skilled and professional radon mitigation services contractor dedicated to providing data-driven results and transparent communication. From the initial consultation to the final post-mitigation clearance test, we ensure your environment is safe, compliant, and healthy.",
    image: "/images/image-16.webp",
    alt: "Allied Restoration radon mitigation team in Kalispell, MT",
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
