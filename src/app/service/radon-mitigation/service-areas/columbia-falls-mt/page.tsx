
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
  title: 'Radon Mitigation Services in Columbia Falls, MT | Allied 24/7 Restoration',
  description: 'Expert radon mitigation and testing services in Columbia Falls, MT. Certified specialists provide radon reduction systems to protect your home\'s air quality. Available 24/7—call now for expert service!',
  openGraph: {
    title: 'Radon Mitigation Services in Columbia Falls, MT | Allied 24/7 Restoration',
    description: 'Expert radon mitigation and testing services in Columbia Falls, MT. Certified specialists provide radon reduction systems to protect your home\'s air quality. Available 24/7—call now for expert service!',
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
  title: "Certified & Professional #1 Buildings Radon Mitigation Services Contractor Columbia Falls MT",
  areaLabel: "Columbia Falls, MT",
  description:
    "Protect your home or office with Columbia Falls’ #1 certified radon mitigation services. From professional inspections to affordable radon reduction, our trusted local team offers same-day, expert solutions. Ensure your property is safe—call the experts today!",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts at Allied Restoration provide compassionate, professional guidance for all your radon mitigation needs.",
    },
    {
      title: "Quick Response",
      description:
        "We prioritize your safety with rapid, same-day inspections and efficient radon reduction services in Columbia Falls, MT.",
    },
    {
      title: "24/7 Support",
      description:
        "Rest easy knowing our certified team is available 24/7 for constant property protection and peace.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Sub-Slab Radon Mitigation Services Contractor or Company in Columbia Falls MT? - Radon Gas Mitigation Services",
  paragraphs: [
    "Look no more than Allied Restoration, your local leader in lung cancer prevention and soil gas ventilation. As a certified radon mitigation services contractor in Columbia Falls, MT, we understand the unique geological challenges of the Flathead Valley and provide tailored solutions for every property. We serve as a skilled radon mitigation contractor for all new or old homes, ensuring that whether you are moving into a fresh build or renovating a family heirloom, your air quality remains pristine. Our reputation as a trusted and premier radon mitigation inspector and contractor is built on transparency, technical precision, and a commitment to local health standards.When gas levels spike unexpectedly, we act as your professional emergency radon mitigation services company, delivering fast-acting systems to restore safety. We believe everyone deserves a healthy environment, which is why we are the best local and affordable fully home sub-slab radon mitigation repair and restoration contractor. From high-suction fan installations to sealing foundation cracks, we are an experienced and insured radon mitigation and installation services company. Our skilled radon mitigation services contractors manage every detail of the process, ensuring your system is both aesthetically discreet and highly effective. Protect your family or employees with the most reliable radon gas mitigation services in Montana.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "Why is radon mitigation necessary for my home?",
      answer:
        "Radon is a radioactive gas that can cause lung cancer. Allied Restoration provides professional mitigation to reduce these levels, ensuring your family breathes clean, safe air. Our certified Columbia Falls MT team installs systems that effectively vent gas outside.",
    },
    {
      question: "How long does the mitigation process take?",
      answer:
        "Most residential installations by our skilled radon mitigation services contractors are completed within a single day. We prioritize a quick response and efficient setup, ensuring your Columbia Falls property is protected without causing major disruptions to your daily routine.",
    },
    {
      question: "Is sub-slab mitigation effective for older buildings?",
      answer:
        "Yes. Allied Restoration specializes in sub-slab radon mitigation for both new and old structures. We customize our suction points to fit your specific foundation, ensuring that even older homes in Columbia Falls receive premier, high-performance gas reduction.",
    },
    {
      question: "Do you offer emergency radon services?",
      answer:
        "Absolutely. As a trusted emergency radon mitigation services company, we act fast when tests show dangerous levels. Our team provides rapid inspections and immediate system repairs to restore safety to your residential or commercial building in Columbia Falls, MT.",
    },
    {
      question: "Are your radon reduction systems affordable?",
      answer:
        "We pride ourselves on being a local and affordable radon mitigation contractor. We offer transparent pricing and cost-effective solutions tailored to your budget, ensuring that every property owner in the Flathead Valley can afford a healthy, radon-free environment.",
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
    "Allied Restoration - Your Trusted Premier No.1 Radon Mitigation Services Contractor, Inspector, Company or Agency Columbia Falls MT",
  subHeading: "",
  description:
    "As Columbia Falls’ premier certified radon mitigation services company, Allied Restoration provides expert inspections and professional installations. We are the #1 local agency for affordable radon reduction, ensuring your home or office remains safe with our trusted, high-quality solutions.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-11.webp",
    alt: "Professional radon mitigation services in Columbia Falls, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration provides comprehensive, certified radon mitigation services in Columbia Falls, MT. From expert radon testing and inspection to professional sub-slab and crawl space installations, our skilled team ensures your property is safe. We also offer emergency repairs and maintenance to keep your mitigation systems running perfectly.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement and Crawl Space Radon Mitigation Services Contractor in Columbia Falls MT",
    
description:"When it comes to your home's foundation, Allied Restoration is the most reliable name for specialized basement and crawl space radon mitigation. These lower areas are the primary entry points for dangerous soil gases, making targeted ventilation essential. As a certified and trusted all kinds of buildings radon mitigation services contractor, we utilize high-grade vapor barriers and suction pits to intercept gas before it enters your living space.Whether you are dealing with a damp crawl space or a finished basement, our skilled residential or commercial buildings radon testing and mitigation solutions services company ensures a custom-fit installation. We don't just install pipes; we provide long-term security. If your existing setup is failing, we act as your premier and skilled radon system repair and maintenance services contractor, optimizing your equipment for peak performance. Choosing the right contractor in Columbia Falls, MT, means choosing a team that understands local soil conditions and foundation types.",
 },
{
 heading:"Local & Trusted Emergency Radon Testing and Mitigation Solutions Services Contractor in Columbia Falls MT",

description:"High radon levels require immediate action, not guesswork. Allied Restoration provides local and trusted emergency radon testing and mitigation solutions to bring your levels down to safe EPA standards instantly. As a certified and trusted all kinds of buildings radon mitigation services company, we have the specialized equipment needed to handle urgent spikes in gas concentration for both homes and businesses.Our reputation as a skilled residential or commercial buildings radon testing and mitigation solutions services contractor is built on our ability to deliver rapid, accurate results. We understand that discovering high radon levels can be stressful, which is why our Columbia Falls, MT team offers transparent pricing and fast-track installations. Furthermore, we serve as a premier and skilled radon system repair and maintenance services contractor, ensuring that your emergency fix remains a permanent solution. Don’t wait for a health crisis—partner with the local experts dedicated to keeping your air clean and your family safe."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Radon Mitigation Inspection Services Inspector and Contractor Columbia Falls MT",
  description: `If you are searching for a skilled and top-rated radon mitigation inspection services inspector and contractor in Columbia Falls, MT, your priority is accuracy and reliability. Allied Restoration stands at the forefront of local safety, providing the detailed analysis required to protect your environment. We are more than just a service provider; we are your skilled and professional radon mitigation inspection services company, dedicated to uncovering hidden risks in any structure. Every property has unique needs, which is why we offer specialized solutions as a skilled home or offices radon mitigation services contractor. Whether you are managing a cozy residence or a large corporate workspace, our team applies industry-leading techniques to ensure your air quality meets the highest standards.
As a certified home or offices buildings radon mitigation services inspector, we perform comprehensive site evaluations that go beyond surface-level testing. Our role as an inspection contractor in Columbia Falls, MT, involves using high-precision diagnostics to pinpoint gas entry routes. By choosing Allied Restoration, you are partnering with a certified radon mitigation services inspection contractor that understands the specific geological profile of Montana. We provide the technical expertise and high-performance equipment necessary to transition your property from a high-risk zone to a safe, breathable space. Don’t settle for uncertainty—trust the local experts who prioritize your health and peace of mind with every inspection.`,
  backgroundImage: {
    src: "/images/image-12.jpg",
    alt: "Professional radon mitigation services in Columbia Falls, MT",
  },
  secondImage: {
    src: "/images/image-13.jpg",
    alt: "Radon mitigation system installation in Columbia Falls, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster EPA Approved Radon Mitigation Services Contractor Columbia Falls MT",
    description:
      "When safety is on the line, you need a certified or trusted local no.1 disaster EPA approved radon mitigation services contractor in Columbia Falls, MT. Radon exposure is a leading environmental health risk, and Allied Restoration is dedicated to providing the gold standard in gas reduction. As an experienced high-qualified local and trusted EPA approved radon mitigation services company, we adhere to the strictest federal guidelines to ensure your indoor air quality is restored to safe levels. Our reputation as a skilled and professional radon control services inspector contractor is built on technical precision. We don’t just install systems; we diagnose the why and where behind gas infiltration.Whether you are safeguarding a private residence or a commercial site, we serve as your skilled home or offices radon control services contractor, customizing every exhaust system to fit the specific architecture of your building. In cases where testing reveals dangerously high concentrations, we act as your certified emergency radon mitigation services contractor, deploying rapid-response teams to mitigate the disaster immediately. By choosing Allied Restoration, you are hiring a contractor in Columbia Falls, MT, that understands local soil dynamics and atmospheric pressure changes. We combine years of field experience with state-of-the-art technology to provide a permanent barrier against soil gases. Protect your legacy and your health with the most trusted name in Montana radon control.",
    image: "/images/image-14.jpg",
    alt: "Radon mitigation equipment and testing devices in Columbia Falls, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Radon Mitigation Services Contractor",
    description:
      "Allied Restoration is proud to be the region’s premier all-kind buildings radon mitigation services contractor, offering specialized gas reduction solutions across the heart of Flathead County. Our service footprint is strategically designed to provide rapid, professional support to homeowners and commercial property managers throughout Columbia Falls, MT, and the surrounding communities. We understand that radon levels can vary significantly between neighborhoods, which is why we offer localized expertise in Kalispell, MT, ensuring that residents in the valley’s hub have access to certified, high-performance mitigation systems. Our team also caters to the luxury estates and residential corridors of Whitefish, MT, providing discreet and effective sub-slab depressurization.Furthermore, we extend our trusted radon mitigation services to the scenic communities of Bigfork, MT, and the lakeside properties in Lakeside, MT. Whether you are dealing with a complex crawl space near the water or a standard basement foundation, our certified technicians are equipped to handle the unique geological demands of each area. By choosing a local expert that covers the entire Flathead region, you ensure that your property—regardless of its location or size—is protected by a contractor who understands Montana’s specific environmental challenges.",
    image: "/images/image-15.jpg",
    alt: "Radon system installation team in Columbia Falls, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Radon Mitigation Services Contractor Columbia Falls MT?",
    description:
      "When it comes to protecting your property, choosing Allied Restoration means partnering with the most skilled and professional radon mitigation services contractor in Columbia Falls, MT. We understand that radon isn't just a number on a test kit; it is a serious health risk that requires precision engineering to neutralize. Whether you own a local business or a family home, our reputation as a premier residential or commercial buildings radon mitigation services contractor is built on a foundation of technical excellence and local trust. What sets us apart is our comprehensive approach to air quality. We don’t offer one-size-fits-all solutions.Instead, our team conducts a thorough site analysis to design a system that works specifically for your building's architecture and soil conditions. As a top contractor in Columbia Falls, MT, we utilize industry-leading technology to ensure quiet, efficient, and permanent gas reduction. Our commitment to the community goes beyond installation. We provide transparent communication, affordable pricing, and the peace of mind that comes from knowing your mitigation system is backed by certified experts. For reliable, long-term protection against radon gas, Allied Restoration is the clear choice for quality and safety.",
    image: "/images/image-16.webp",
    alt: "Allied Restoration radon mitigation team in Columbia Falls, MT",
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
