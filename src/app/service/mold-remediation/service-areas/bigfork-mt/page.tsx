
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
  title: 'Hire Now Our Mold Remediation Services Contractor in Bigfork, MT | Allied 24/7 Restoration',
  description: 'Our certified team provides professional and affordable 24/7 emergency services to restore your property quickly. Trust the local experts. We are ready to handle all your emergency Mold Remediation needs in Bigfork.',
  openGraph: {
    title: 'Hire Now Our Mold Remediation Services Contractor in Bigfork, MT | Allied 24/7 Restoration',
    description: 'Our certified team provides professional and affordable 24/7 emergency services to restore your property quickly. Trust the local experts. We are ready to handle all your emergency Mold Remediation needs in Bigfork.',
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
  title: "Certified & Professional #1 Home Mold Remediation Services Contractor Bigfork MT",
  areaLabel: "Bigfork, MT",
  description:
    "Restore your peace of mind with Allied Restoration, the most trusted local name for professional and affordable mold remediation in Bigfork, MT. Our certified inspectors provide skilled residential and commercial mold removal with same-day service. Fast, local, and professional.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts at Allied Restoration prioritize your peace of mind with compassionate, person-to-person service.",
    },
    {
      title: "Quick Response",
      description:
        "We arrive fast in Bigfork to stop mold spread, protecting your property with immediate, professional action.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our certified team is ready to handle your mold emergencies with constant availability.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Black Mold Removal Services Contractor or Company in Bigfork MT? - Same Day Home Inspection",
  paragraphs: [
    "If you are searching for a professional and trusted black mold removal services contractor or company in Bigfork, MT, look no more than Allied Restoration. As the area’s premier mold removal inspector and contractor, we understand that discovering mold in your residence requires an immediate, expert response. We offer same-day home inspections to identify risks quickly, providing peace of mind for both current residents and local buyer home mold remediation needs. Whether you own a historic property or a modern build, we act as a skilled or professional all-new or old home mold removal services contractor, ensuring every corner of your structure is safe and breathable.Our reputation as a local and affordable fully home mold remediation or mold inspection services contractor is built on transparency and precision. We take pride in being a skilled and insured home inspection services contractor in Bigfork, utilizing advanced technology to detect hidden moisture. As an experienced and trusted all-kind mold removal and remediation services company, we handle everything from minor spores to extensive infestations. Choosing Allied Restoration means partnering with a certified mold inspection or removal inspector services service that prioritizes your family's health. Don’t settle for less when you can hire a trusted and premier mold removal contractor in Bigfork, MT, dedicated to delivering long-lasting, professional results today. ",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: " How do I know if I need professional mold removal?",
      answer:
        "If you notice persistent musty odors, visible dark spots, or experience unexplained allergies, contact Allied Restoration. As a skilled mold inspector services contractor in Bigfork, MT, we provide thorough testing to identify hidden growth before it compromises your health.",
    },
    {
      question: " Is your mold remediation process safe for my family?",
      answer:
        "Yes. We are a skilled and professional safe and eco-friendly mold removal services company. We use non-toxic, green-certified treatments that effectively eliminate spores without leaving harmful chemical residues, ensuring a healthy environment for children and pets in Bigfork.",
    },
    {
      question: "Do you offer same-day mold inspections in Bigfork?",
      answer:
        "Absolutely. We prioritize emergencies and offer same-day home inspection services. Our certified mold inspection or removal inspector services team acts quickly to assess the damage, providing immediate peace of mind and a clear plan for professional restoration.",
    },
    {
      question: "Can you remove mold from basements and crawl spaces?",
      answer:
        "We specialize in these areas. As a premier and skilled fully home, basement, and crawl space mold remediation contractor, we address the unique moisture challenges of Montana, providing deep cleaning and moisture control to prevent future fungal outbreaks.",
    },
    {
      question: "  Why should I choose a certified contractor over a DIY fix?",
      answer:
        " DIY methods often spread spores further. Allied Restoration is an experienced, high-qualified local and trusted mold remediation company. We use professional containment and HEPA filtration, ensuring every spore is safely removed and your air quality is fully restored.",
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
    src: "/images/image-49.jpg",
    alt: "Professional mold remediation services in Bigfork, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration provides comprehensive solutions as the premier certified mold inspection or removal inspector services provider. From skilled home inspection services to affordable fully home mold remediation, we specialize in basement and crawl space mold removal. Trust our skilled mold inspector services company in Bigfork, MT, for expert restoration.`,
 service:[
  {
    heading:"Hire Now Most Trusted Mold Remediation Inspection or Mold Removal Contractor in Bigfork, MT",
    
description:"When your property is at risk, you need the Skilled Mold Inspector services Contractor or Company in Bigfork, MT, that locals rely on. Allied Restoration stands as the region’s leader, offering comprehensive assessments that go far beyond the surface. Our certified and trusted all-kinds mold damage repair and restoration and inspection services contractor team utilizes state-of-the-art moisture detection and air quality sampling to pinpoint the exact source of your issue.Whether you are dealing with a hidden leak or visible growth, our premier and skilled fully home, basement, and crawl space mold removal experts provide the forensic-level detail required to ensure your indoor environment is healthy. We don't just find mold; we provide a roadmap for permanent elimination. By hiring a certified and trusted all-kinds mold damage repair and restoration and inspection services company in Bigfork, you ensure that your home is treated with technical precision and professional care from the very first visit.",
 },
{
 heading:"Local & Trusted Fully Home, Basement, and Crawl Space Mold Removal Services Company in Bigfork, MT",

description:"Protecting your home's foundation and structural integrity requires a premier and skilled fully home, basement, and crawl space mold remediation contractor. At Allied Restoration, we specialize in the unique challenges of Montana climates, where damp basements and unventilated crawl spaces often become breeding grounds for toxic spores. As your local and trusted fully home, basement, and crawl space mold removal services contractor in Bigfork, MT, we implement high-grade containment, HEPA filtration, and antimicrobial treatments to sanitize your living areas completely.We are recognized as an experienced and trusted all-kind mold removal and remediation services company that doesn't cut corners. From specialized basement drying to total crawl space encapsulation, our skilled mold inspector services contractor or company in Bigfork ensures every inch of your property is restored. Trust our certified and trusted all-kinds mold damage repair and restoration team to return your home to a safe, mold-free state with lasting results."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Mold Removal, Mold Remediation, Inspection or Mold Inspector Services Contractor Bigfork MT",
  description: `If you are searching for a skilled and top-rated safe and eco-friendly mold removal, mold remediation, inspection, or mold inspector services contractor in Bigfork, MT, your health and property deserve the best. Allied Restoration is the region's leader in non-toxic remediation, offering a skilled and professional safe and eco-friendly mold removal services contractor or company in Bigfork, MT that prioritizes your family's safety. We understand that effective treatment shouldn't involve harsh chemicals; instead, we use advanced, green-certified solutions to eliminate spores while preserving your indoor air quality. As a skilled home inspection or inspector contractor in Bigfork, MT, we provide thorough assessments to identify hidden hazards before they become costly repairs.
Our team doesn't just remove the visible growth—we act as a certified mold prevention and moisture control inspector or inspection services contractor in Bigfork, MT, addressing the root cause of the problem. By controlling humidity and sealing entry points, we ensure that once the mold is gone, it stays gone. Whether you are dealing with a damp basement or a kitchen leak, Allied Restoration delivers a skilled and professional safe and eco-friendly mold removal experience tailored to your needs. Trust our certified mold prevention and moisture control expertise to protect your investment and provide a breathable, healthy environment for years to come.`,
  backgroundImage: {
    src: "/images/image-44.webp",
    alt: "Mold inspection and remediation team in Bigfork, MT",
  },
  secondImage: {
    src: "/images/image-45.jpg",
    alt: "Mold remediation equipment in Bigfork, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Mold Remediation Services Contractor Bigfork MT",
    description:
      "When it comes to protecting your property, choosing a certified or trusted local #1 mold remediation services contractor in Bigfork, MT, is essential for long-term safety. Allied Restoration is proud to be the most experienced, high-qualified local and trusted mold remediation company services contractor in Bigfork, MT, offering a comprehensive suite of solutions for homeowners and businesses alike. We know that mold can be a silent threat, which is why we serve as a skilled and professional mold removal or mold inspector services contractor or company in Bigfork, MT, dedicated to identifying and eliminating every trace of fungal growth using industry-leading protocols.Our reputation as a skilled home mold inspection or inspector contractor in Bigfork, MT, is built on our meticulous attention to detail. We don't just treat the symptoms; we investigate the source of moisture to prevent future outbreaks. If you are dealing with hazardous varieties, our certified black mold removal or mold inspector services contractor in Bigfork has the specialized equipment and training to perform high-risk containment and extraction safely. As the experienced, high-qualified local and trusted mold remediation company, Allied Restoration ensures that your air quality is restored and your structural integrity is preserved. Don't leave your health to chance—partner with a certified black mold removal expert today to ensure your home remains a safe haven.",
    image: "/images/image-46.jpg",
    alt: "Mold inspection and testing equipment in Bigfork, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Old or New House Mold Remediation or Mold Removal Inspection Services Contractor",
    description:
      "Allied Restoration is proud to be the leading all kind old or new house mold remediation or mold removal inspection services contractor, serving a wide range of communities across the Flathead Valley. We understand that whether you own a historic property or a modern build, moisture challenges can arise anywhere, which is why we have strategically expanded our service reach. Our expert teams are readily available in Kalispell, MT, providing rapid response times for residential and commercial emergencies. We also specialize in the high-end estates of Whitefish, MT, where we offer discreet and highly effective remediation solutions.As your premier contractor in Bigfork, MT, we focus on protecting lakeside properties from the unique humidity issues found near the water. Our reach extends to Columbia Falls, MT, where we help homeowners maintain healthy indoor air quality through rigorous inspections and professional removal. Additionally, we provide dedicated support to the community of Lakeside, MT, ensuring every basement and crawl space is free from fungal growth. No matter where you are located within these regions, our commitment remains the same: delivering certified, professional, and lasting mold restoration services that protect both your structural investment and your family's health.",
    image: "/images/image-47.avif",
    alt: "Mold removal and remediation services in Bigfork, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Home Mold Remediation Services Contractor Bigfork MT?",
    description:
      "Choosing the right experts is the most critical step in protecting your property's value and your family’s health. So, why choose Allied Restoration contractor or company for your home mold remediation services contractor in Bigfork, MT? The answer lies in our unwavering commitment to technical excellence and local reliability. As a skilled and professional trusted mold removal, mold remediation, or mold inspection services contractor in Bigfork, MT, we don't just provide a quick fix; we offer a permanent solution. Our team is deeply familiar with the Montana climate and the specific moisture challenges that Bigfork homeowners face, from lakeside humidity to seasonal snowmelt.At Allied Restoration, we utilize industrial-grade technology and proven protocols to ensure every spore is accounted for. We pride ourselves on being a skilled and professional trusted mold removal provider that maintains transparent communication, fair pricing, and rapid response times. When you partner with us, you are choosing a mold remediation or mold inspection services contractor in Bigfork, MT, that treats your home with the same care as our own. From initial air quality testing to final structural restoration, our comprehensive approach ensures your environment is safe, sanitized, and certified mold-free.",
    image: "/images/image-48.jpg",
    alt: "Allied Restoration mold remediation team in Bigfork, MT",
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
