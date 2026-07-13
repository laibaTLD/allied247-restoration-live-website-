
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import ServiceAreaServicesSection from "@/sections/ServiceAreaServicesSection";
import ServiceAreaBulletsSection from "@/sections/ServiceAreaBulletsSection";
import CTASection from "@/sections/CTASection";
import ServiceOverlayCardSection from "@/sections/ServiceOverlayCardSection";
import FAQSection from "@/sections/FAQSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { Metadata } from "next";

// Page metadata
export const metadata: Metadata = {
  title: '24/7 Mold Remediation Experts in Columbia Falls, MT | Call Now',
  description: "Don't let mold spread! Allied 24/7 Restoration offers immediate, professional mold inspection and remediation in Columbia Falls, MT. Certified experts ready 24/7 — call now for trusted service!",
  openGraph: {
    title: '24/7 Mold Remediation Experts in Columbia Falls, MT | Call Now',
    description: "Don't let mold spread! Allied 24/7 Restoration offers immediate, professional mold inspection and remediation in Columbia Falls, MT. Certified experts ready 24/7 — call now for trusted service!",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Affordable Garbage & Junk Clean Outs in Columbia Falls, MT',
    description: 'Affordable garbage and junk clean outs in Columbia Falls, MT. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Home Mold Remediation Services Contractor Columbia Falls MT",
  areaLabel: "Columbia Falls, MT",
  description:
    "EProtect your property with Allied Restoration, the local and trusted choice for professional and affordable mold remediation services in Columbia Falls, MT. Our certified inspectors provide skilled, same-day residential and commercial solutions to keep your home healthy.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our compassionate, local and trusted experts at Allied Restoration prioritize your family’s safety and comfort.",
    },
    {
      title: "Quick Response",
      description:
        "Get a professional and trusted same day mold remediation services contractor on-site immediately in Columbia Falls.",
    },
    {
      title: "24/7 Support",
      description:
        "We provide skilled mold remediation services and emergency inspections for your home or business anytime, daily.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Black Mold Removal Services Contractor or Company in Columbia Falls MT? - Same Day Home Inspection",
  paragraphs: [
    "When dealing with potential health hazards, you deserve the peace of mind that comes from hiring Allied Restoration, the most experienced and trusted all kind mold removal and remediation services contractor or company in Columbia Falls, MT. We take pride in being a skilled or professional all new or old home mold removal services contractor in Columbia Falls, MT, capable of handling everything from minor surface growth to extensive structural remediation. Our team acts quickly, serving as a professional local buyer home mold remediation or removal services company in Columbia Falls, MT, to ensure real estate transactions and family moves aren't delayed by hidden air quality issues.By choosing a trusted and premier mold removal inspector or contractor in Columbia Falls, MT, you ensure that your property is evaluated with the highest level of technical expertise. We provide certified mold inspection or removal inspector services that accurately pinpoint moisture sources and spore concentrations. As a local and affordable fully home mold remediation or mold inspection services contractor in Columbia Falls, MT, we bridge the gap between high-end industrial results and budget-friendly residential pricing. Don’t settle for guesswork; hire a skilled or insured home inspection services contractor in Columbia Falls, MT, to safeguard your structure. Whether it’s a crawlspace or an attic, our comprehensive approach guarantees a cleaner, safer living environment for your entire household today. ",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our mold remediation services in Columbia Falls, MT.",
  questions: [
    {
      question: " How soon can Allied Restoration inspect my property?",
      answer:
        "As a professional and trusted same day mold remediation services contractor in Columbia Falls, MT, we prioritize emergencies. We offer rapid scheduling to ensure a skilled mold remediation services inspector evaluates your home’s air quality and safety without delay.",
    },
    {
      question: "Are your mold removal methods safe for my family?",
      answer:
        "Yes. As a skilled & professional safe and eco-friendly mold removal services contractor, Allied Restoration uses non-toxic treatments. We are a certified and trusted all kinds of mold damage repair company dedicated to protecting your health and the environment.",
    },
    {
      question: "Do you provide services for commercial buildings?",
      answer:
        "AAbsolutely. We are a local and trusted residential or commercial mold remediation services and mold removal contractor in Columbia Falls. Our team is an experienced high-qualified local and trusted mold remediation company capable of handling large-scale commercial projects.",
    },
    {
      question: "What causes mold in my basement or crawl space?",
      answer:
        "Moisture is the primary culprit. As a premier and skilled fully home, basement and crawl space mold remediation contractor, we identify leaks and high humidity. Our certified mold prevention and moisture control inspector services stop mold at the source.",
    },
    {
      question: "Is your company licensed and insured for home inspections?",
      answer:
        "Yes, we are a skilled or insured home inspection services contractor in Columbia Falls, MT. Allied Restoration maintains all necessary certifications as a professional & certified mold removal contractor, ensuring your property is in the most capable hands.",
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
    "Allied Restoration - Your Trusted Premier No.1 Mold Inspection or Mold Remediation Services Inspector, Company or Agency Columbia Falls MT",
  subHeading: "",
  description:
    "Experience the best with Allied Restoration, your premier and skilled partner for property safety. As the top-rated certified and trusted agency, we provide expert mold inspection and remediation services to protect your home or business throughout Columbia Falls, MT.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-49.jpg",
    alt: "Mold remediation services in Columbia Falls, MT",
  },
  overlayText:
    "Allied Restoration delivers reliable mold remediation solutions designed specifically for Columbia Falls residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration is your premier and skilled fully home, basement and crawl space mold removal, or mold remediation contractor services contractor in Columbia Falls, MT. From certified mold inspection to trusted all kinds mold damage repair and restoration, our skilled inspectors provide comprehensive solutions to keep your property safe.`,
 service:[
  {
    heading:"Hire Now Most Trusted Mold Remediation Inspection or Mold Removal Contractor or Company Columbia Falls MT",
    
description:"When your property is at risk, don’t settle for anything less than Allied Restoration, the most skilled mold inspector services contractor or company in Columbia Falls, MT. Mold growth is a time-sensitive emergency that requires the precision of a certified and trusted all kinds mold damage repair and restoration and inspection services contractor or company. Our team focuses on deep-tier detection, ensuring that every hidden spore is identified before it can compromise your building's structural integrity or your family’s respiratory health.As a premier and skilled fully home, basement and crawl space mold removal, or mold remediation contractor services contractor, we utilize state-of-the-art air scrubbing and moisture mapping technology. Choosing a trusted and premier mold removal inspector or contractor in Columbia Falls, MT, means you get a comprehensive plan that includes both removal and preventative moisture control. Protect your investment today by hiring the experts who prioritize safety and long-term property value.",
 },
{
 heading:"Local & Trusted Fully Home, Basement and Crawl Space Mold Removal Services Contractor or Company in Columbia Falls MT",

description:"Moisture often settles in the darkest corners of your property, making Allied Restoration the essential local & trusted fully home, basement and crawl space mold removal services contractor or company in Columbia Falls, MT. We specialize in difficult environments, acting as a premier and skilled fully home, basement and crawl space mold removal, or mold remediation contractor services contractor to tackle tough infestations in tight spaces. Basements and crawl spaces are notorious for humidity issues, but our certified and trusted all kinds mold damage repair and restoration and inspection services contractor or company ensures these areas remain dry and mold-free.We provide a local and affordable fully home mold remediation or mold inspection services contractor experience that doesn't skip on quality. By working with a skilled or professional all new or old home mold removal services contractor in Columbia Falls, MT, you ensure that your entire structure—from the foundation to the attic—is treated with the highest industry standards for cleanliness and restoration."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Mold Removal, Mold Remediation, Inspection or Mold Inspector Services Contractor Columbia Falls MT",
  description: `If you are searching for a skilled and top rated safe and eco-friendly mold removal, mold remediation, inspection or mold inspector services contractor Columbia Falls MT, your search ends with Allied Restoration. We understand that property owners today want results that don’t compromise their indoor air quality or environmental footprint. As a skilled & professional safe and eco-friendly mold removal services, contractor or company in Columbia Falls, MT, we use advanced, non-toxic methods to eliminate spores while ensuring your living space remains chemical-free and healthy for children and pets. Our comprehensive approach begins with a skilled home inspection or inspector contractor Columbia Falls, MT, who meticulously evaluates your property for hidden moisture pockets.
We don't just remove the visible problem; we act as a certified mold prevention and moisture control inspector, or inspection services contractor Columbia Falls, MT, to ensure the mold never returns. By identifying the root cause of humidity and leaks, our skilled or professional all new or old home mold removal services contractor team provides a permanent solution rather than a temporary fix. Whether you are a homeowner or a professional local buyer home mold remediation or removal services company in Columbia Falls, MT, we deliver the local and affordable fully home mold remediation you need. Trust our certified and trusted all kinds mold damage repair experts to restore your property using the safest, most effective industry standards available today.`,
  backgroundImage: {
    src: "/images/image-43.webp",
    alt: "Professional mold remediation services in Columbia Falls, MT",
  },
  secondImage: {
    src: "/images/image-45.jpg",
    alt: "Professional mold remediation team in Columbia Falls, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Mold Remediation Services Contractor Columbia Falls MT",
    description:
      "When you need a certified or trusted local no1 mold remediation services contractor Columbia Falls MT, you need a team that combines speed with technical precision. Allied Restoration has built a reputation as the most experienced high-qualified local and trusted mold remediation company services contractor Columbia Falls MT, helping residents reclaim their homes from invasive spores. We understand that mold isn't just an aesthetic issue; it’s a structural and health concern. That is why we operate as a skilled & professional mold removal or mold inspector services contractor or company in Columbia Falls, MT, utilizing industry-leading equipment to sanitize your property thoroughly. Our process starts with a deep dive into your home’s environment.As a skilled home mold inspection or inspector contractor Columbia Falls MT, we locate moisture sources that others miss. For more dangerous infestations, we are the best certified black mold removal or mold inspector services contractor Columbia Falls MT, trained to handle toxic strains with the utmost care and containment. Whether you are dealing with a small leak or major flood damage, our status as a local and trusted residential or commercial mold remediation services provider ensures you receive personalized, high-standard care. Don't leave your air quality to chance; partner with a skilled or professional all new or old home mold removal services contractor who puts your safety first. We provide the local and affordable fully home mold remediation solutions that Columbia Falls families have relied on for years.",
    image: "/images/image-46.jpg",
    alt: "Eco-friendly mold remediation services in Columbia Falls, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Old or New House Mold Remediation or Mold Removal Inspection Services Contractor",
    description:
      "At Allied Restoration, we take pride in being the premier skilled or professional all new or old home mold removal services contractor serving the entire Flathead Valley. Our mission is to provide comprehensive coverage for homeowners and businesses, ensuring that high-quality air restoration is always within reach. We are the most reliable local and trusted residential or commercial mold remediation services and mold removal contractor or inspector in Columbia Falls, MT, but our expertise extends far beyond city limits. We frequently deploy our certified and trusted all kinds mold damage repair and restoration teams to Kalispell, MT, providing rapid response times for urgent moisture issues.For residents in Whitefish, MT, we offer specialized skilled home mold inspection or inspector contractor services tailored to the unique climate of the region. We also serve the scenic community of Bigfork, MT, as a skilled & professional mold removal or mold inspector services contractor or company, helping to maintain the health and safety of lakeside properties. Additionally, our certified black mold removal or mold inspector services contractor teams are active in Lakeside, MT, delivering the same local and affordable fully home mold remediation that our brand is known for. No matter where you are located in the region, Allied Restoration is your experienced high-qualified local and trusted mold remediation company services contractor, dedicated to keeping your environment mold-free and safe for years to come.",
    image: "/images/image-47.avif",
    alt: "Same day mold remediation services in Columbia Falls, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Home Mold Remediation Services Contractor Columbia falls MT?",
    description:
      "Choosing the right professional can make the difference between a temporary fix and a permanent solution for your property. Allied Restoration stands out as the premier choice because we are a skilled and professional trusted mold removal, mold remediation or mold inspection services contractor in Columbia Falls, MT. We don't just treat the symptoms; we diagnose the root cause of moisture to ensure your home remains a healthy environment for the long term. Our reputation as a local and trusted residential or commercial mold remediation services provider is built on years of delivering transparent, high-quality results to our neighbors.When you partner with us, you are hiring an experienced high-qualified local and trusted mold remediation company services contractor Columbia Falls MT that utilizes cutting-edge technology and eco-friendly methods. We prioritize your family's safety by acting as a certified and trusted all kinds mold damage repair and restoration expert, handling everything from minor leaks to complex structural issues. As a skilled or professional all new or old home mold removal services contractor, we have the expertise to navigate the unique challenges of any building's age or design. For a local and affordable fully home mold remediation experience that never cuts corners, Allied Restoration is the only name you need to know.",
    image: "/images/image-48.jpg",
    alt: "Allied Restoration team working in Columbia Falls, MT",
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
