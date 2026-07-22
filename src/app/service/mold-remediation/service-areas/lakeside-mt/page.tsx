
import ServiceAreaLayout from "@/components/ServiceAreaLayout";
import { notFound } from "next/navigation";
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
  title: 'Fast Mold Removal & Remediation in Lakeside, MT | Call Now For Expert Services',
  description: 'Fast, reliable mold remediation in Lakeside, MT. Certified specialists provide professional mold inspection, safe removal, and full property restoration. Available 24/7!',
  openGraph: {
    title: 'Fast Mold Removal & Remediation in Lakeside, MT | Call Now For Expert Services',
    description: 'Fast, reliable mold remediation in Lakeside, MT. Certified specialists provide professional mold inspection, safe removal, and full property restoration. Available 24/7!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Affordable Garbage & Junk Clean Outs in ',
    description: 'Affordable garbage and junk clean outs in Glendale AZ. Same-day junk removal, demolition contractor services, and residential or commercial trash clean outs.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Home Mold Remediation Services Contractor Lakeside MT",
  areaLabel: "Lakeside, MT",
  description:
    "Stop mold in its tracks with Lakeside’s #1 experts. Allied Restoration provides professional and affordable mold remediation services. As your local and trusted certified mold removal contractor in Lakeside, MT, we offer skilled inspections for residential and commercial properties. Get same-day service today!",
  subheading: "Reclaim your space with Junk Butlers",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local experts provide empathetic, professional guidance, making your home’s mold remediation process stress-free and simple.",
    },
    {
      title: "Quick Response",
      description:
        "Allied Restoration arrives fast, offering same-day inspections to stop mold growth and protect your Lakeside property.",
    },
    {
      title: "24/7 Support",
      description:
        "Emergency mold issues don't wait. Our certified team is available 24/7 for immediate assistance.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "AAre You Looking for a Professional and Trusted Black Mold Removal Services Contractor or Company in Lakeside MT? - Same Day Home Inspection",
  paragraphs: [
    "Experience mold in your property is more than a nuisance; it’s a health priority. If you are searching for a professional and trusted black mold removal services contractor in Lakeside, MT, Allied Restoration is your premier local partner. We specialize in providing a same day home inspection to identify risks before they escalate. As a trusted and premier mold removal contractor in Lakeside, MT, we understand the unique environmental needs of Flathead County homes. Whether you need a skilled or professional all new or old home mold removal services contractor, our team utilizes advanced equipment to ensure every spore is contained.We are proud to be the local and affordable fully home mold remediation services contractor that Lakeside residents rely on for quality and transparency. From certified mold inspection services to comprehensive property restoration, we handle it all. Allied Restoration is an experienced and trusted all kind mold removal and remediation services company equipped to manage both residential and commercial projects. If you are a property seeker, we also serve as a professional local buyer home mold removal services company, ensuring your new investment is safe and mold-free. Don't leave your air quality to chance. Hire a skilled or insured home inspection services contractor who puts your safety first. Contact Allied Restoration today for your certified mold inspection and regain your peace of mind.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our mold removal services in Lakeside, MT.",
  questions: [
    {
      question: " Why should I choose Allied Restoration for mold removal?",
      answer:
        "Allied Restoration is the skilled and professional trusted mold removal contractor in Lakeside, MT. We combine local expertise with advanced technology to provide affordable, eco-friendly remediation, ensuring your property is safe, healthy, and restored to its original condition.",
    },
    {
      question: "How quickly can you perform a mold inspection?",
      answer:
        "We prioritize your health by offering same-day mold inspection services. As a skilled mold inspector services company in Lakeside, we arrive fast to assess moisture levels and identify fungal growth, preventing further damage to your home’s structure.",
    },
    {
      question: " Is your mold remediation process safe for my family?",
      answer:
        "Yes. We are a skilled & professional safe and eco-friendly mold removal company. We use non-toxic, green treatments to eliminate mold spores without leaving harsh chemical residues, protecting both your loved ones and the beautiful Lakeside environment.",
    },
    {
      question: "Do you handle mold in crawl spaces and basements?",
      answer:
        "Absolutely. We are the premier fully home, basement, and crawl space mold remediation contractor in Lakeside. Our team specializes in tight, high-humidity areas, using professional encapsulation and drying techniques to stop mold at its very source.",
    },
    {
      question: "Are your mold remediation services certified and insured?",
      answer:
        "Yes, we are a certified and trusted all-kinds mold damage repair and restoration company. Our technicians are fully insured and highly trained, providing professional-grade inspections and removals that meet the highest industry standards for residential and commercial properties.",
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
    "Allied Restoration - Your Trusted Premier No.1 Mold Inspection or Mold Remediation Services Inspector, Company or Agency Lakeside MT",
  subHeading: "",
  description:
    "As Lakeside’s top-rated experts, Allied Restoration delivers unmatched property protection. We are your trusted premier No1 mold inspection and remediation agency, providing certified results for every client. Our skilled mold remediation services company ensures your home stays safe, healthy, and entirely mold-free.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-49.jpg",
    alt: "Professional mold remediation services in Lakeside, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers complete solutions to protect your property. As the premier and skilled fully home, basement, and crawl space mold remediation contractor, we provide certified mold inspection services and mold damage repair. From detection to restoration, our skilled mold inspector services company in Lakeside, MT, ensures a healthy environment.`,
 service:[
  {
    heading:"Hire Now Most Trusted Mold Remediation Inspection or Mold Removal Contractor in Lakeside, MT",
    
description:"When your property’s structural integrity and your family’s health are on the line, you need the Allied Restoration advantage. As the skilled mold inspector services contractor in Lakeside, MT, we provide comprehensive diagnostics to uncover hidden moisture and fungal growth. Whether you are dealing with a minor patch or a major outbreak, hiring a certified and trusted all kinds mold damage repair and restoration and inspection services company ensures the job is done right the first time.We pride ourselves on being a premier and skilled mold remediation services contractor, utilizing industrial-grade HEPA filtration and antimicrobial treatments. Our team doesn't just scrub surfaces; we address the root cause of the moisture. In Lakeside, the damp climate can lead to rapid fungal spread, making it vital to choose an experienced mold removal contractor who understands local building codes. Trust our skilled mold inspector services company to deliver a detailed report and a clear path to a mold-free home today.",
 },
{
 heading:"Local & Trusted Fully Home, Basement, and Crawl Space Mold Removal Services Contractor in Lakeside, MT",

description:"Basements and crawl spaces are the most vulnerable areas for moisture accumulation, often leading to silent mold growth that affects your entire home’s air quality. Allied Restoration is your local and trusted fully home, basement, and crawl space mold removal services company in Lakeside, MT. We specialize in these tight, high-humidity environments, serving as the premier and skilled fully home, basement, and crawl space mold remediation services contractor for the Flathead Lake area.Our technicians are trained in advanced encapsulation and structural drying. As a certified and trusted all kinds mold damage repair and restoration services company, we ensure that every joist and floorboard is sanitized. We provide skilled mold inspector services specifically tailored for crawl space vapor barriers and basement waterproofing. Don't let dampness compromise your foundation. Work with a premier and skilled fully home mold removal contractor to protect your investment. From attic to basement, we provide the most thorough mold remediation services in Lakeside, MT."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Mold Removal, Mold Remediation, Inspection or Mold Inspector Services Contractor Lakeside MT",
  description: `When it comes to your home, "clean" shouldn't come at the cost of harsh chemicals. If you are searching for a skilled and professional safe and eco-friendly mold removal services contractor in Lakeside, MT, Allied Restoration is the name you can trust. We prioritize the health of your family and the local environment by utilizing green remediation technologies that effectively eliminate fungal growth without leaving toxic residues behind. As a skilled home inspection contractor in Lakeside, MT, we understand that true remediation starts with a deep dive into your property’s health. Our team doesn't just treat the symptoms; we act as a certified mold prevention and moisture control inspector to stop the problem at its source.
By identifying hidden leaks and high-humidity zones, our skilled & professional safe and eco-friendly mold removal company ensures that once the mold is gone, it stays gone. Whether you are dealing with a historic Lakeside home or a modern lakeside retreat, our skilled mold inspector services provide the precision you need. Allied Restoration is committed to being the top-rated safe and eco-friendly mold remediation contractor that balances powerful results with environmental responsibility. Protect your air quality and your investment with our certified mold prevention and inspection services today.`,
  backgroundImage: {
    src: "/images/image-44.webp",
    alt: "Mold inspection and remediation team in Lakeside, MT",
  },
  secondImage: {
    src: "/images/image-45.jpg",
    alt: "Mold remediation equipment in Lakeside, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Mold Remediation Services Contractor Lakeside MT",
    description:
      "When moisture compromises your property, you need more than a quick fix—you need the Allied Restoration standard. As the certified and trusted local No1 mold remediation services contractor in Lakeside, MT, we bring years of localized expertise to every project. We understand that the Montana climate can be tough on structures, which is why we act as an experienced high-qualified local and trusted mold remediation company, ensuring your home remains a safe haven for your family. Our team is comprised of skilled and professional mold removal and mold inspector services contractors who utilize cutting-edge thermal imaging and moisture meters to detect what the naked eye misses.If you suspect hidden growth, our skilled home mold inspection contractor will perform a thorough assessment to pinpoint the exact source of the problem. We don't just guess; we provide data-backed solutions to protect your structural integrity. For more severe cases, we are the certified black mold removal services contractor in Lakeside, MT, equipped with advanced containment protocols and HEPA air scrubbing technology. Our goal is to provide a seamless restoration experience that eliminates health risks and restores your peace of mind. Choose a professional mold inspector services company that values integrity and local community safety. Contact Allied Restoration today to schedule your expert consultation.",
    image: "/images/image-46.jpg",
    alt: "Mold inspection and testing equipment in Lakeside, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Old or New House Mold Remediation or Mold Removal Inspection Services Contractor",
    description:
      "Allied Restoration is proud to be the leading all kind old or new house mold remediation or mold removal inspection services contractor serving the heart of the Flathead Valley. We understand that whether you own a historic property or a modern lakefront build, moisture issues require localized expertise. Our team provides rapid, professional support across Lakeside, MT, ensuring that local homeowners have immediate access to certified experts. Beyond the lakeshore, we extend our specialized services to Kalispell, MT, where we help residential and commercial property owners maintain healthy indoor air quality. As a trusted mold removal inspection services contractor, we also frequently operate in Whitefish, MT, catering to high-end estates and vacation rentals that require discreet and thorough remediation.For those in the vibrant community of Bigfork, MT, our technicians offer tailored moisture control and fungal detection to combat the humidity near the water. Additionally, we serve Columbia Falls, MT, providing comprehensive inspections for families and businesses looking to safeguard their structures. No matter where you are located in these regions, our commitment remains the same: delivering the highest standard of safety and restoration as your go-to old or new house mold remediation contractor.",
    image: "/images/image-47.avif",
    alt: "Mold removal and remediation services in Lakeside, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Home Mold Remediation Services Contractor Lakeside MT?",
    description:
      "Choosing the right partner for property restoration is a decision that impacts your home’s value and your family’s health. Allied Restoration stands out as the premier choice because we combine local expertise with industry-leading technology. When you hire us, you are partnering with a skilled and professional trusted mold removal, mold remediation, or mold inspection services contractor in Lakeside, MT, dedicated to total property recovery. What sets Allied Restoration apart is our commitment to thoroughness. We don't just remove visible growth; we conduct deep-structure assessments to ensure every spore is accounted for.As a top-tier home mold remediation services contractor in Lakeside, MT, we utilize advanced moisture detection tools to find the root cause of the problem—whether it’s a hidden leak or poor ventilation. Our skilled and professional trusted mold remediation process follows strict safety protocols, ensuring that your living space is sanitized and the air quality is restored to optimal levels. We pride ourselves on transparency, providing detailed reports and affordable pricing without compromising on quality. For a mold inspection services contractor that residents trust for honesty and efficiency, look no further. Choose the professional mold removal contractor that treats your home like their own.",
    image: "/images/image-48.jpg",
    alt: "Allied Restoration mold remediation team in Lakeside, MT",
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
