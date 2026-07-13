
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
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
  title: 'Home Mold Remediation Services Contractor Kalispell MT',
  description: 'Allied 24/7 Restoration offers immediate, professional mold inspection and remediation in Kalispell, MT. Certified experts ready 24/7 — call now for quick, trusted service!',
  openGraph: {
    title: 'Home Mold Remediation Services Contractor Kalispell MT',
    description: 'Allied 24/7 Restoration offers immediate, professional mold inspection and remediation in Kalispell, MT. Certified experts ready 24/7 — call now for quick, trusted service!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Affordable Garbage & in Whitefish, MT',
    description: 'Affordable garbage and in Whitefish, MT. Same-day junk removal, demolition contractor services, and residential or commercial trash clean.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Home Mold Remediation Services Contractor Kalispell MT",
  areaLabel: "Kalispell, MT",
  description:
    "Protect your property with Allied Restoration, your local and trusted certified mold removal contractor. From expert inspections to same-day remediation, our skilled team provides professional, residential, and commercial services you can trust.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local experts at Allied Restoration offer compassionate, professional guidance to navigate your mold concerns easily.",
    },
    {
      title: "Quick Response",
      description:
        "Need help fast? We provide professional same-day mold remediation services to protect your Kalispell home immediately",
    },
    {
      title: "24/7 Support",
      description:
        "Trust our certified team for 24/7 emergency mold removal, ensuring your property stays safe and healthy.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Black Mold Removal Services Contractor or Company in Kalispell MT? - Same Day Home Inspection",
  paragraphs: [
    "Don’t let a hidden mold problem turn your property into a health hazard overnight. If you are looking for a professional and trusted black mold removal services contractor or company in Kalispell, MT, Allied Restoration is the expert team you can rely on for a same-day home inspection. As a trusted and premier mold removal inspector or contractor, we know that mold doesn't wait—and neither should you. Whether you are a professional local buyer looking to flip a property or a homeowner protecting your family, our home mold remediation or removal services company provides the fast, effective solutions you need.We specialize in working as skilled or professional all new or old home mold removal services contractors, ensuring every structure is treated with the highest industry standards. At Allied Restoration, we pride ourselves on being an experienced and trusted all kind mold removal and remediation services contractor or company. We combine deep local knowledge with advanced tech to serve as your local and affordable fully home mold remediation or mold inspection services contractor. Your safety is our priority. As a skilled or insured home inspection services contractor, we provide certified mold inspection or removal inspector services that cover every square inch of your basement, attic, or crawlspace. Stop the spread today with Kalispell’s most reliable experts.",
  ],
}



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Whitefish, MT.",
  questions: [
    {
      question: "How quickly can you inspect my property?",
      answer:
        "As the premier skilled mold inspector services contractor in Kalispell, MT, Allied Restoration offers same-day inspections. We prioritize rapid response to identify moisture sources and prevent mold from spreading, ensuring your home or business stays safe and healthy.",
    },
    {
      question: "Are your mold removal treatments safe for families?",
      answer:
        "Yes! We are a skilled and professional safe and eco-friendly mold removal services contractor. Our team uses non-toxic, plant-based antimicrobials and HEPA filtration to eliminate spores without leaving harsh chemical residues, protecting your children, pets, and indoor air quality.",
    },
    {
      question: "Do you handle basement and crawl space mold?",
      answer:
        "Absolutely. We are a local and trusted fully home, basement, and crawl space mold removal services contractor. We specialize in these high-moisture areas, using professional-grade equipment to dry structural timber and sanitize every corner of your property’s foundation.",
    },
    {
      question: "Is Allied Restoration a certified and insured company?",
      answer:
        "Yes. We are a certified and trusted all kinds of mold damage repair and restoration and inspection services contractor. Our team is fully insured and follows strict industry standards, providing you with expert results and total peace of mind in Kalispell.",
    },
    {
      question: "How do I know if I have black mold?",
      answer:
        "Visible dark spots or persistent musty odors often indicate growth. As a certified black mold removal or mold inspector services contractor, we use advanced moisture meters and air sampling to confirm the presence of toxic strains and provide solutions.",
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
      city: "W",
      region: "MT",
      description: "Comprehensive mold inspection and remediation services for W area"
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
    "Allied Restoration - Your Trusted Premier No.1 Mold Inspection or Mold Remediation Services Inspector, Company or Agency Kalispell MT",
  subHeading: "",
  description:
    "Stop mold in its tracks with Allied Restoration. As the region’s premier experts, we provide certified mold inspection and professional remediation services. Our skilled team ensures your Kalispell home remains safe, healthy, and moisture-free with industry-leading technology.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-49.jpg",
    alt: "Professional mold remediation services in Kalispell, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `At Allied Restoration, we provide comprehensive solutions to keep your property safe. As a certified and trusted all kinds mold damage repair and restoration and inspection services contractor, we specialize in full-home sanitization. From skilled mold inspector services to deep crawl space cleaning, we ensure your Kalispell home is mold-free.`,
 service:[
  {
    heading:"Hire Now Most Trusted Mold Remediation Inspection or Mold Removal Contractor or Company in Kalispell, MT",
    
description:"When your property is at risk, you need more than just a quick fix; you need Allied Restoration, the most reliable name for mold solutions. As a skilled mold inspector services contractor or company in Kalispell, MT, we provide comprehensive evaluations that uncover hidden moisture and spores before they compromise your structural integrity.Our certified and trusted all kinds of mold damage repair and restoration and inspection services contractor or company ensures that every inch of your property is assessed with professional-grade equipment. We don't just find the mold; we identify the root cause to prevent it from ever coming back. Whether you are dealing with a post-flood emergency or a lingering damp smell, hiring our team means choosing precision, safety, and a healthier living environment for your family today.",
 },
{
 heading:"Local & Trusted Fully Home, Basement, and Crawl Space Mold Removal Services Contractor or Company in Kalispell, MT",

description:"Basements and crawl spaces are the most vulnerable areas of any Montana home, often trapping moisture that fuels toxic growth. Allied Restoration stands out as the premier and skilled fully home, basement, and crawl space mold removal or mold remediation contractor services contractor in Kalispell, MT. We understand that these confined spaces require specialized air scrubbing and containment protocols to ensure spores don't migrate into your living areas.As a certified and trusted all kinds of mold damage repair and restoration and inspection services contractor or company, we specialize in deep-cleaning porous surfaces and structural timber. From the attic down to the foundation, our local & trusted team provides the heavy-duty remediation required to protect your investment. Let us handle the difficult, dirty work of sanitizing your crawl space so you can breathe easy again."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Mold Removal, Mold Remediation, Inspection or Mold inspector Services Contractor Kalispell MT",
  description: `If you are looking for a skilled and top-rated safe and eco-friendly mold removal, mold remediation, inspection or mold inspector services contractor in Kalispell, MT, you’ve found your local experts. Allied Restoration is dedicated to providing high-quality solutions that protect both your family and the Montana environment. We believe that professional remediation shouldn't rely on harsh chemicals, which is why we specialize as a skilled & professional safe and eco-friendly mold removal services contractor or company in Kalispell, MT. Our process begins with a deep dive into your property’s health. As a skilled home inspection or inspector contractor in Kalispell, MT, we identify the exact source of growth using non-invasive technology.
We don't just remove the visible spots; we focus on long-term health. By serving as a certified mold prevention and moisture control inspector or inspection services contractor, we implement green solutions that regulate humidity and seal out dampness. Choosing Allied Restoration means you are opting for a "safety-first" approach. We use plant-based antimicrobials and HEPA-filtration to ensure your indoor air quality is pristine without leaving behind toxic residues. Whether you are dealing with a small attic leak or a major basement issue, our skilled & professional team delivers the premier, eco-conscious results you deserve. Let us help you breathe easier today with the most trusted, environmentally responsible team in the Flathead Valley.`,
  backgroundImage: {
    src: "/images/image-44.webp",
    alt: "Mold inspection and remediation team in Kalispell, MT",
  },
  secondImage: {
    src: "/images/image-45.jpg",
    alt: "Mold remediation equipment in Kalispell, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Mold Remediation Services Contractor Kalispell MT",
    description:
      "When it comes to protecting your property and health, settle for nothing less than the certified or trusted local no.1 mold remediation services contractor in Kalispell, MT. At Allied Restoration, we have built our reputation on providing immediate, effective, and lasting solutions for homeowners and businesses alike. As an experienced high-qualified local and trusted mold remediation company services contractor in Kalispell, MT, we understand the specific environmental factors that lead to moisture issues in our unique Montana climate. Our mission is to provide total peace of mind through technical excellence. We operate as a skilled & professional mold removal or mold inspector services contractor or company in Kalispell, MT, utilizing state-of-the-art detection tools to find what the naked eye misses.Every project begins with a comprehensive assessment from a skilled home mold inspection or inspector contractor in Kalispell, MT, ensuring we pinpoint the moisture source to prevent future outbreaks. Safety is our primary concern, especially when dealing with toxic strains. We are a certified black mold removal or mold inspector services contractor in Kalispell, MT, trained in rigorous containment and air filtration protocols. This ensures that harmful spores are neutralized and removed without cross-contaminating the rest of your home. Whether you are dealing with a damp crawl space or a major leak, Allied Restoration delivers the local expertise and certified results you need to breathe easy again.",
    image: "/images/image-46.jpg",
    alt: "Mold inspection and testing equipment in Kalispell, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Old or New House Mold Remediation or Mold Removal Inspection Services Contractor",
    description:
      "At Allied Restoration, we are proud to be the region’s premier choice for comprehensive property health, serving as a dedicated all kind old or new house mold remediation or mold removal inspection services contractor. Our expert team understands that moisture issues don't stop at city limits, which is why we have expanded our reach to ensure every homeowner in the Flathead Valley has access to certified protection. Whether you own a historic property requiring delicate care or a modern build with recent water damage, we provide localized expertise across Kalispell, MT, ensuring immediate response times for every emergency.Our mobile units are fully equipped to handle projects in Whitefish, MT, where we specialize in luxury home inspections and winter-related moisture control. We also serve the scenic community of Bigfork, MT, providing specialized basement and crawl space sanitization. For residents in Columbia Falls, MT, our technicians offer rapid black mold removal and structural drying services to keep your mountain home safe. Additionally, if you are located in Lakeside, MT, you can rely on our skilled inspectors for lakeside property moisture assessments and long-term prevention. No matter your location, Allied Restoration is the local partner you can trust for a mold-free environment.",
    image: "/images/image-47.avif",
    alt: "Mold removal and remediation services in Kalispell, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for your Home Mold Remediation Services Contractor Kalispell MT?",
    description:
      "Choosing the right partner for property restoration is a decision that impacts your family’s health and your home’s structural integrity. So, why choose Allied Restoration contractor or company for your home mold remediation services contractor in Kalispell, MT? The answer lies in our unwavering commitment to technical excellence and local accountability. As a skilled and professional trusted mold removal, mold remediation or mold inspection services contractor in Kalispell, MT, we don't just clean mold; we eliminate it at the source using industrial-grade filtration and eco-friendly antimicrobial treatments.Allied Restoration stands out because we combine deep local knowledge of Montana’s climate challenges with advanced diagnostic technology. Our team is fully insured and certified, providing you with the peace of mind that your project is handled by experts who follow strict industry protocols. Whether you are dealing with a hidden leak in a crawl space or visible growth in your attic, we operate as a skilled and professional trusted mold removal, mold remediation or mold inspection services contractor in Kalispell, MT, ensuring every spore is contained and neutralized. We pride ourselves on transparent communication, fair pricing, and a safety-first mentality that restores your home to a pristine, breathable condition.",
    image: "/images/image-48.jpg",
    alt: "Allied Restoration mold remediation team in Kalispell, MT",
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
