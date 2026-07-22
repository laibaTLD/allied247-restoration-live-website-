
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
  title: 'Expert Mold Remediation Services in Whitefish, MT | Allied 24/7 Restoration',
  description: 'Fast, reliable mold remediation in Whitefish, MT. Certified specialists safely remove mold and restore your home or business. Available 24/7—call now for expert service!',
  openGraph: {
    title: 'Expert Mold Remediation Services in Whitefish, MT | Allied 24/7 Restoration',
    description: 'Fast, reliable mold remediation in Whitefish, MT. Certified specialists safely remove mold and restore your home or business. Available 24/7—call now for expert service!',
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
  title: "Certified & Professional #1 Home Mold Remediation Services Contractor Whitefish, MT",
  areaLabel: "Whitefish, MT",
  description:
    "Don’t let mold compromise your health. Allied Restoration is the local and trusted mold remediation services contractor in Whitefish, MT. Our certified inspectors offer professional and affordable residential or commercial mold removal, providing skilled, same-day solutions to restore your home safely.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our compassionate, local Whitefish experts guide you through the mold removal process with clear, honest communication.",
    },
    {
      title: "Quick Response",
      description:
        "We prioritize your safety with rapid inspections and same-day service to stop mold growth immediately.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our certified team is available to handle your mold emergencies throughout Whitefish.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Black Mold Removal Services Contractor or Company in Whitefish MT? - Same Day Home Inspection",
  paragraphs: [
    "Finding toxic mold in your property is stressful, but you don't have to face it alone. If you are searching for a professional and trusted black mold removal services contractor or company in Whitefish, MT, Allied Restoration is your premier local partner. As a trusted and premier mold removal inspector or contractor in Whitefish, MT, we specialize in identifying and eliminating fungal growth to protect your family’s health and your property’s structural integrity. Whether you are a homeowner or a professional local buyer home mold remediation or removal services company in Whitefish, MT, our team delivers results you can lean on.We pride ourselves on being a local and affordable fully home mold remediation or mold inspection services contractor Whitefish, MT, offering comprehensive solutions tailored to the Montana climate. From certified mold inspection or removal inspector services service Whitefish, MT to skilled or professional all new or old home mold removal services contractor in Whitefish, MT, we handle every project with precision. Our experienced and trusted all kind mold removal and remediation services contractor or company in Whitefish, MT utilizes advanced technology for same-day home inspections. When you need a skilled or insured home inspection services contractor Whitefish, MT, we provide the rapid, expert intervention necessary to restore your peace of mind. Trust our certified experts to keep your environment clean, safe, and mold-free.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Whitefish, MT.",
  questions: [
    {
      question: "How long does the mold remediation process usually take?",
      answer:
        "Most professional mold remediation projects in Whitefish are completed within one to three days. The exact timeline depends on the extent of the growth and whether structural drying or significant demolition of impacted materials like drywall or flooring is required.",
    },
    {
      question: "Is mold removal covered by my homeowners insurance policy?",
      answer:
        "Insurance typically covers remediation if the mold resulted from a sudden and accidental peril, like a burst pipe. However, mold caused by long-term neglect, high humidity, or lack of maintenance is generally excluded from standard policies in Montana.",
    },
    {
      question: "Why should I hire a professional instead of using bleach?",
      answer:
        "Bleach only kills surface mold on non-porous materials. On porous surfaces like wood or drywall, the water in bleach actually feeds the mold roots. Our professional-grade, eco-friendly treatments penetrate surfaces to eliminate the mold at its source permanently.",
    },
    {
      question: "How do I know if I have a mold problem?",
      answer:
        "Common signs include persistent musty odors, visible dark spotting, or unexplained health issues like increased allergies or respiratory distress. If you suspect an issue, our skilled inspectors use advanced moisture mapping to find hidden mold behind walls or under floors.",
    },
    {
      question: "Can I stay in my home during the remediation process?",
      answer:
        "In many cases, yes. We use professional containment barriers and high-efficiency HEPA air scrubbers to isolate the work area and keep your living environment safe. If the infestation is severe or widespread, we may recommend vacating for a few days.",
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
    "Allied Restoration - Your Trusted Premier No.1 Mold Inspection or Mold Remediation Services Inspector, Company or Agency Whitefish MT",
  subHeading: "",
  description:
    "Experience peace of mind with Allied Restoration, Whitefish’s leading certified mold inspection and remediation agency. We provide professional, same-day services to identify and eliminate toxic growth. Trust our skilled inspectors for affordable, high-quality solutions tailored to your home.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-49.jpg",
    alt: "Professional mold remediation services in Whitefish, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration provides comprehensive solutions as the premier mold remediation services contractor in Whitefish, MT. From certified mold inspection to skilled mold removal in basements and crawl spaces, our team delivers professional and affordable results. Trust our local experts for same-day inspections and expert damage restoration.`,
 service:[
  {
    heading:"Hire Now Most Trusted Mold Remediation Inspection or Mold Removal Contractor Whitefish MT",
    
description:"When it comes to protecting your property's value and your family's health, you need a skilled mold inspector services contractor or company in Whitefish, MT. Allied Restoration stands as the region’s leader, providing comprehensive diagnostic services that go far beyond the surface. Our certified and trusted all kinds of mold damage repair and restoration and inspection services contractor or company Whitefish, MT utilizes state-of-the-art moisture mapping and air quality testing to pinpoint hidden spores.As a premier and skilled fully home, basement, and crawl space mold removal or mold remediation contractor services contractor Whitefish, MT, we understand that every hour counts. We offer immediate, detailed inspections that provide the roadmap for total eradication. Choosing a certified and trusted all kinds mold damage repair and restoration and inspection services contractor ensures that you aren't just cleaning mold, but preventing its return through expert insight and professional-grade solutions.",
 },
{
 heading:"Local & Trusted Fully Home, Basement, and Crawl Space Mold Removal Contractor Whitefish MT",

description:"The unique climate of the Flathead Valley requires a local and trusted fully home, basement, and crawl space mold removal services contractor or company in Whitefish, MT. At Allied Restoration, we specialize in the dark, damp environments where mold thrives most, such as sub-floors and storage areas. We are recognized as a premier and skilled fully home, basement, and crawl space mold removal or mold remediation contractor services contractor Whitefish, MT, employing advanced containment and HEPA filtration to ensure your living air stays pure.Whether you are dealing with a historic downtown property or a new build, we act as a skilled mold inspector services contractor or company in Whitefish, MT to customize our remediation plan to your specific structural needs. From minor spot treatments to major certified and trusted all kinds of mold damage repair and restoration, our team delivers affordable, high-quality results. Trust Whitefish's own experts to restore your basement and crawl space to a bone-dry, healthy state."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Mold Removal, Mold Remediation, Inspection or Mold Inspector Services Contractor Whitefish MT",
  description: `If you are looking for a skilled and top-rated safe and eco-friendly mold removal, mold remediation, inspection or mold inspector services contractor Whitefish MT, your search ends with Allied Restoration. We understand that maintaining a healthy home requires more than just surface cleaning; it demands a sustainable approach that protects both your family and the environment. As a skilled and professional safe and eco-friendly mold removal services, contractor or company in Whitefish, MT, we utilize non-toxic, green cleaning agents that effectively eliminate spores without leaving harsh chemical residues behind. Our team serves as a skilled home inspection or inspector contractor Whitefish, MT, meticulously evaluating every corner of your property to find the root cause of fungal growth.
Beyond just removal, we act as a certified mold prevention and moisture control inspector, or inspection services contractor Whitefish, MT, implementing long-term strategies to keep your air clean and dry. Whether you are dealing with a recent leak or a persistent dampness issue, Allied Restoration provides the expertise needed to restore your living space. We combine local knowledge with industry-leading green technology to remain the most skilled and professional safe and eco-friendly mold removal services provider in the region. Choose a certified mold prevention and moisture control inspector who prioritizes your health and the local Montana ecosystem.`,
  backgroundImage: {
    src: "/images/image-44.webp",
    alt: "Mold inspection and remediation team in Whitefish, MT",
  },
  secondImage: {
    src: "/images/image-45.jpg",
    alt: "Mold remediation equipment in Whitefish, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Mold Remediation Services Contractor Whitefish MT",
    description:
      "When property owners face the threat of fungal growth, they turn to Allied Restoration, the certified or trusted local No1 mold remediation services contractor Whitefish MT. Our reputation is built on delivering immediate, high-quality results for both residential and commercial clients. As an experienced high-qualified local and trusted mold remediation company services contractor Whitefish MT, we understand the unique environmental challenges of the Flathead Valley. We don’t just treat the symptoms; we address the underlying moisture issues to ensure a permanent solution. Our team operates as a skilled & professional mold removal or mold inspector services contractor or company in Whitefish, MT, utilizing advanced detection technology to find hidden hazards.Whether you suspect a leak in the attic or dampness in the basement, our skilled home mold inspection or inspector contractor Whitefish MT provides the comprehensive assessment you need to move forward safely. For more dangerous infestations, we are the certified black mold removal or mold inspector services contractor Whitefish MT, employing strict containment protocols to protect your indoor air quality. By choosing Allied Restoration, you are partnering with an experienced high-qualified local and trusted mold remediation company that prioritizes your safety and satisfaction above all else. Don't let mold compromise your health—trust Whitefish’s top-rated specialists to restore your peace of mind today.",
    image: "/images/image-46.jpg",
    alt: "Mold inspection and testing equipment in Whitefish, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Old or New House Mold Remediation or Mold Removal Inspection Services Contractor",
    description:
      "Allied Restoration is proud to offer our comprehensive service areas for all kinds of old or new house mold remediation or mold removal inspection services contractor needs across the Flathead Valley. We understand that moisture issues can strike any property, which is why we provide rapid, expert response teams to Whitefish, MT, ensuring local homeowners have access to the highest standard of care. Our certified specialists also travel extensively to serve the growing community of Kalispell, MT, delivering professional mold testing and structural drying. For those located along the scenic shores of Bigfork, MT, our team offers specialized moisture control solutions tailored to waterfront humidity levels.We are also the premier choice for residents in Columbia Falls, MT, providing everything from attic mold removal to basement waterproofing. Additionally, we extend our trusted remediation and inspection services to the community of Lakeside, MT, helping property owners maintain healthy, mold-free environments year-round. No matter your location in the region, Allied Restoration remains the most reliable and experienced contractor for old and new homes alike. Whether you are dealing with a historic renovation or a modern build, our local expertise ensures your property remains safe, dry, and structurally sound.",
    image: "/images/image-48.jpg",
    alt: "Mold removal and remediation services in Whitefish, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Home Mold Remediation Services Contractor Whitefish MT?",
    description:
      "Choosing the right experts for your property is essential for long-term safety, and that is why choose Allied Restoration contractor or company for your home mold remediation services contractor Whitefish MT? We have built our reputation on integrity, speed, and unmatched technical expertise. As a skilled and professional trusted mold removal, mold remediation or mold inspection services contractor in Whitefish, MT, we don't just scrub surfaces; we identify the source of moisture to ensure mold never returns. Allied Restoration stands out because we combine local Flathead Valley knowledge with industry-leading certification.Our team is recognized as a skilled and professional trusted mold removal, mold remediation or mold inspection services contractor because we prioritize your family’s health by using safe, effective protocols. We offer a transparent process, from the initial same-day inspection to the final clearance testing, ensuring you are informed at every step. By choosing a local leader, you benefit from rapid response times and a team that understands Montana’s specific climate challenges. When you partner with us, you aren't just hiring a vendor; you are securing a skilled and professional trusted mold removal partner dedicated to restoring your peace of mind and your home’s air quality.",
    image: "/images/image-47.avif",
    alt: "Allied Restoration mold remediation team in Whitefish, MT",
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
