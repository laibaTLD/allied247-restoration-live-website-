
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
  title: 'Radon Mitigation Services in Bigfork, MT | Allied 24/7 Restoration',
  description: 'Professional radon mitigation and testing services in Bigfork, MT. Certified specialists provide radon reduction systems to protect your home\'s air quality. Available 24/7—call now for expert service!',
  openGraph: {
    title: 'Radon Mitigation Services in Bigfork, MT | Allied 24/7 Restoration',
    description: 'Professional radon mitigation and testing services in Bigfork, MT. Certified specialists provide radon reduction systems to protect your home\'s air quality. Available 24/7—call now for expert service!',
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
  title: "Certified & Professional #1 Buildings Radon Mitigation Services Contractor Bigfork MT",
  areaLabel: "Bigfork, MT",
  description:
    "Need reliable radon reduction? Allied Restoration is Bigfork’s trusted, certified contractor for professional residential and commercial mitigation. Our skilled local team ensures safe air for your home or office. Call now for professional, affordable services in Bigfork, MT!",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local Bigfork radon mitigation experts are professional, friendly, and ready to secure your property.",
    },
    {
      title: "Quick Response",
      description:
        "Need fast results? Allied Restoration offers professional, same-day radon reduction services in Bigfork, MT.",
    },
    {
      title: "24/7 Support",
      description:
        "Get trusted radon mitigation support anytime for your residential or commercial property in Bigfork, MT.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Sub-Slab Radon Mitigation Services Contractor or Company in Bigfork MT? - Radon Gas Mitigation Services",
  paragraphs: [
    "If you are searching for a professional and trusted sub-slab radon mitigation services contractor or company in Bigfork, MT, look no more than Allied Restoration. We are the premier experts in reducing dangerous radon gas levels, ensuring your property is safe and healthy. As a certified radon mitigation services contractor in Bigfork, MT, we specialize in providing comprehensive solutions for both residential and commercial buildings. Whether you own an older home or a newly constructed property, our skilled, professional team offers emergency radon mitigation services to address high levels promptly. We are known as the trusted and premier radon mitigation inspection inspector or contractor in Bigfork, MT, offering thorough assessments to identify risks.For homeowners looking for local and affordable fully home sub-slab radon mitigation repair or restoration services contractor in Bigfork, MT, we deliver exceptional value without compromising quality. Our team consists of experienced and trusted all-kind buildings radon mitigation and installation services contractors who understand the unique structural needs of your property. We are fully insured, making us the skilled or insured radon mitigation services contractor in Bigfork, MT, that you can rely on for peace of mind. Don't leave your health to chance; trust the professional emergency radon mitigation services company in Bigfork, MT to secure your environment. Contact us today to schedule your inspection and mitigation. ",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "What is radon and why do I need mitigation?",
      answer:
        "Radon is a colorless, odorless radioactive gas that causes lung cancer. Allied Restoration provides professional mitigation to lower dangerous levels in your Bigfork, MT home or business, ensuring a safe, healthy environment for you and your family.",
    },
    {
      question: "How long does radon mitigation installation take?",
      answer:
        "Typically, Allied Restoration completes a standard sub-slab mitigation system installation in one day. Our skilled and professional Radon Mitigation Services contractor in Bigfork, MT works efficiently to minimize disruption while ensuring a high-quality, effective installation for your property.",
    },
    {
      question: "Is your radon mitigation service affordable for residential properties?",
      answer:
        "Yes, Allied Restoration offers competitive pricing for residential mitigation. As a local and trusted contractor in Bigfork, MT, we provide cost-effective solutions without compromising quality, making it affordable for all homeowners to secure their properties against radon gas.",
    },
    {
      question: "Do you offer commercial radon mitigation services?",
      answer:
        "Absolutely. Allied Restoration specializes in commercial radon mitigation services in Bigfork, MT. We protect employees and tenants by installing tailored systems for businesses, warehouses, and offices, ensuring compliance with safety standards and a healthier working environment for everyone.",
    },
    {
      question: "Do you offer a warranty on your radon systems?",
      answer:
        "Yes, Allied Restoration stands behind our work. We offer comprehensive warranties on our mitigation systems to guarantee they effectively reduce radon levels. Our skilled and professional Radon Mitigation Services contractor in Bigfork, MT ensures your long-term peace of mind.",
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
    "Allied Restoration - Your Trusted Premier No.1 Radon Mitigation Services Contractor, Inspector, Company or Agency Bigfork MT",
  subHeading: "",
  description:
    "Allied Restoration is the premier, #1 trusted contractor and agency for radon mitigation services in Bigfork, MT. Our certified inspectors and professional company provide reliable, affordable reduction solutions for residential and commercial properties. Secure your indoor air quality with the local experts.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-11.webp",
    alt: "Professional radon mitigation services in Bigfork, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers premier radon mitigation services for homes and businesses throughout Bigfork, MT. From fast emergency testing and sub-slab installations to system maintenance and repair, our certified local contractors deliver reliable, affordable solutions. Protect your family's health today with our skilled, trusted property mitigation and reduction services.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement and Crawl Space Radon Mitigation Services Contractor or Company Bigfork MT",
    
description:"When it comes to protecting your health, hiring the most trusted basement and crawl space radon mitigation services contractor or company in Bigfork, MT, is essential. Allied Restoration is the premier choice for ensuring your home is safe from harmful radon gas. Radon often accumulates in lower levels of a property, making specialized mitigation for basements and crawl spaces critical. Our team is fully certified and trusted for all kinds of buildings and radon mitigation services, providing tailored solutions that fit your property's specific structure. Whether you have a dirt crawl space or a concrete basement floor, we utilize advanced techniques to seal entry points and install active soil depressurization systems.Beyond just installation, we act as the premier and skilled radon system repair and maintenance services contractor in Bigfork, MT. Ensuring your system operates efficiently over the long term is just as important as the initial installation. We provide comprehensive inspections to guarantee your home remains radon-free for years to come. Do not settle for less when it comes to the air quality in your home. Hire now the experts who understand the unique geological challenges of Bigfork and prioritize your family’s safety above all else.",
 },
{
 heading:"LLocal & Trusted Emergency Radon Testing and Mitigation Solutions Services Contractor or Company in Bigfork MT",

description:"For fast and reliable results, choose the local and trusted emergency radon testing and mitigation solutions services contractor or company in Bigfork, MT. Allied Restoration understands that discovering high radon levels is stressful, which is why we offer rapid response services to protect your indoor air quality immediately. Our highly skilled residential or commercial buildings radon testing and mitigation solutions services contractor or company in Bigfork, MT, provides precise, accurate testing to identify the extent of the problem, followed by expert mitigation solutions tailored to your needs.As a local company, we are dedicated to serving the Bigfork community with prompt and affordable services. Our team acts quickly to install effective systems, ensuring your residential or commercial property is safe from this silent threat. We are recognized as the certified and trusted all kinds of buildings radon mitigation services contractor or company in Bigfork, MT, because we handle every aspect of the process with professionalism and care. Whether you need an urgent test to satisfy a real estate contingency or immediate mitigation to lower dangerous levels, we are ready to assist. Contact us today for reliable, emergency radon services that you can trust."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Radon Mitigation Inspection Services Inspector and Contractor Bigfork MT",
  description: `If you are looking for a skilled and top-rated radon mitigation inspection services inspector and contractor in Bigfork, MT, look no more than Allied Restoration. We are the leading experts in identifying dangerous radon levels and providing effective solutions to protect your property. As the premier skilled & professional radon mitigation inspection services, contractor or company in Bigfork, MT, we bring years of experience to every project. We understand that your health is paramount, which is why we offer comprehensive inspection services tailored to both residential and commercial buildings.
Our team consists of highly skilled home or offices home radon mitigation services contractors who are equipped to handle any challenge. We provide thorough assessments to identify radon entry points and recommend the best mitigation strategies. Allied Restoration is recognized as a certified home or offices buildings radon mitigation services inspector, or inspection contractor in Bigfork, MT, ensuring that our inspections meet the highest industry standards. Whether you are buying a new home or want to ensure your current office is safe, our detailed reports and expert advice will give you peace of mind. Trust our local team to deliver accurate, reliable, and professional service. Don't wait—secure a healthier environment for your family or employees by scheduling a professional radon inspection with us today.`,
  backgroundImage: {
    src: "/images/image-12.webp",
    alt: "Professional radon mitigation services in Bigfork, MT",
  },
  secondImage: {
    src: "/images/image-13.jpg",
    alt: "Radon mitigation system installation in Bigfork, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster EPA Approved Radon Mitigation Services Contractor Bigfork MT",
    description:
      "When disaster strikes through high radon levels, you need the most certified or trusted local #1 disaster EPA approved radon mitigation services contractor in Bigfork, MT. Allied Restoration is the premier choice for protecting your property and health. We are an experienced high-qualified local and trusted EPA approved radon mitigation services company, contractor in Bigfork, MT, specializing in swift, effective solutions to bring radon levels down to safe standards. Radon is a dangerous, colorless, and odorless gas, but our team ensures your environment is secure.Our skilled & professional radon control services inspector contractor or company in Bigfork, MT, utilizes advanced diagnostic tools to pinpoint the source of contamination. Whether it is a skilled home or offices radon control services contractor you need, Allied Restoration provides customized plans for any building type. We understand the urgency of these situations, offering certified emergency radon mitigation services contractor in Bigfork, MT, to provide immediate relief and long-term safety. Don't risk your family's health; trust the experts who are fully qualified, insured, and dedicated to delivering exceptional service. Contact Allied Restoration today for a comprehensive consultation and secure your home or business with the best mitigation solutions in the region.",
    image: "/images/image-14.jpg",
    alt: "Radon mitigation equipment and testing devices in Bigfork, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Radon Mitigation Services Contractor",
    description:
      "Allied Restoration is the premier, trusted contractor providing comprehensive radon mitigation services for all kinds of buildings across the Flathead Valley. We specialize in reducing dangerous radon gas levels to ensure safe, breathable air for residential homes, commercial offices, and industrial properties. Our certified team brings unmatched expertise to every job site, prioritizing your health and safety with effective, long-lasting mitigation systems.We are proud to serve as the leading radon mitigation services contractor in Bigfork, MT, and the surrounding areas. Our service coverage extends to Kalispell, MT, where we help homeowners and businesses secure their properties against this silent threat. Additionally, we provide professional radon reduction solutions in Whitefish, MT, ensuring top-rated services for both new and existing structures. Residents and commercial property owners in Columbia Falls, MT, can rely on us for fast, efficient, and affordable mitigation services. We are also committed to serving the community of Lakeside, MT, offering expert diagnostics and installation to keep families and employees safe. No matter where you are located in the region, Allied Restoration is your trusted partner for high-quality, professional radon mitigation.",
    image: "/images/image-15.jpg",
    alt: "Radon system installation team in Bigfork, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Radon Mitigation Services Contractor Bigfork MT?",
    description:
      "Choosing the right partner for air safety is crucial, and Allied Restoration stands out as the premier skilled and professional radon mitigation services contractor in Bigfork, MT. We understand that radon poses a significant threat to health, which is why we offer comprehensive, top-tier mitigation solutions for both commercial and residential buildings. Our dedication to quality ensures that every system we install is customized to your property’s unique structure, guaranteeing the most effective reduction possible. When you choose us, you are choosing a company that prioritizes safety, affordability, and exceptional customer service.Furthermore, Allied Restoration prides itself on being a local expert, meaning we understand the specific geological conditions of Bigfork that lead to high radon levels. Our team is fully certified and trained in the latest EPA-approved techniques, ensuring your home or business is secure. We don't just fix the problem; we provide peace of mind through reliable, lasting solutions and thorough maintenance services. If you need a trusted, skilled, and professional radon mitigation services contractor in Bigfork, MT, Allied Restoration is the only call you need to make. Trust us to protect your property and your health.",
    image: "/images/image-16.webp",
    alt: "Allied Restoration radon mitigation team in Bigfork, MT",
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
