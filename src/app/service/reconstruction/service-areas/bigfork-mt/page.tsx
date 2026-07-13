
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
  title: 'Professional Home Reconstruction Services Contractor Bigfork MT',
  description: 'Allied 24/7 Restoration delivers expert home reconstruction and remodeling in Bigfork, MT. Our certified team handles complete renovations from foundation to finish. Call now for trusted, high-quality service!',
  openGraph: {
    title: 'Reconstruction Services in Bigfork, MT | Allied Restoration',
    description: 'Professional reconstruction in Bigfork, MT. Certified team for structural repairs, fire and water damage restoration, and full property rebuilds.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allied Restoration – Reconstruction in Bigfork, MT',
    description: 'Certified reconstruction contractor for Bigfork, MT. Fast inspections and expert structural restoration for homes and businesses.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Buildings Reconstruction Services Contractor Bigfork MT",
  areaLabel: "Bigfork, MT",
  description:
    "Allied Restoration provides professional, affordable residential and commercial reconstruction services in Bigfork, MT. From fire damage to full structural rebuilds, our certified inspectors and contractors deliver skilled, same-day property restoration you can trust. Local, certified, and ready to help.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts at Allied Restoration provide compassionate, personalized guidance through every step of reconstruction.",
    },
    {
      title: "Quick Response",
      description:
        "We arrive fast in Bigfork to secure your property and begin professional repairs immediately after.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our certified team is available to handle your emergency property reconstruction needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Reconstruction Services Contractor or Company in Bigfork MT? - Same Day Fire Damage Reconstruction Services",
  paragraphs: [
    "When disaster strikes, you need more than just a repair crew—you need a partner who understands the urgency of protecting your investment. At Allied Restoration, we are the premier choice for anyone seeking a professional and trusted structural reconstruction services contractor or company in Bigfork, MT. We specialize in same-day fire damage reconstruction services to ensure your property is secured and the recovery process begins immediately. As a trusted and premier fire or water damage reconstruction inspector or contractor in Bigfork, MT, our team handles everything from minor structural fixes to fully home flood damage reconstruction repair or restoration services.Whether you own a historic property or a modern build, we are a skilled or professional all-new or old home structural emergency reconstruction services contractor dedicated to excellence. We take pride in being a certified fire damage reconstruction services contractor in Bigfork, MT, employing skilled or insured fire damage reconstruction services contractors who prioritize safety and precision. Beyond fire recovery, we are recognized as an experienced and trusted all-kind buildings reconstruction and restoration services contractor or company, serving both residential and commercial clients. If you are a professional local buyer home emergency reconstruction services company seeking reliability, look no further. Choose the local and affordable experts committed to restoring Bigfork’s homes and businesses with integrity.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "How quickly can you start my reconstruction project?",
      answer:
        "MAs Bigfork’s premier same-day fire damage reconstruction services contractor, Allied Restoration responds immediately. We prioritize emergency stabilization to secure your property, followed by a detailed inspection to begin the structural restoration process without unnecessary delays.",
    },
    {
      question: "Do you handle insurance claims for water damage?",
      answer:
        "Yes. As a trusted and premier fire or water damage reconstruction contractor, we work directly with your insurance provider. We provide all necessary documentation and certified inspections to ensure your claim is processed accurately and efficiently.",
    },
    {
      question: "Are your reconstruction materials safe and eco-friendly?",
      answer:
        "Absolutely. We are a skilled and professional safe and eco-friendly home reconstruction services company. We utilize sustainable building practices and non-toxic materials to ensure your Bigfork home or office is healthy, energy-efficient, and structurally resilient.",
    },
    {
      question: "What areas do you provide reconstruction services in?",
      answer:
        "Allied Restoration is a local and trusted disaster reconstruction services company serving the entire Flathead Valley. Our expert teams are available for residential and commercial projects in Bigfork, Kalispell, Whitefish, Columbia Falls, and Lakeside, MT.",
    },
    {
      question: "Can you rebuild both interior and exterior structures?",
      answer:
        "Yes. We are a skilled residential or commercial buildings interior or exterior reconstruction services contractor. From structural framing and roofing to fine interior finishing, our certified team manages every aspect of your property’s complete restoration and repair.",
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
    "Allied Restoration - Your Trusted Premier No.1 Reconstruction Services Contractor, Inspector, Company or Agency Bigfork MT",
  subHeading: "",
  description:
    "As Bigfork’s premier reconstruction agency, Allied Restoration delivers top-tier structural repairs and inspections. Whether you need a skilled contractor for fire recovery or a trusted company for residential rebuilds, our certified team provides unmatched professional service to restore your property.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-7.jpg",
    alt: "Reconstruction and structural restoration services in Bigfork, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers comprehensive property solutions as your certified and trusted all kinds buildings customized reconstruction services contractor. From skilled residential or commercial buildings interior or exterior reconstruction to specialized fire damage repair, restoration, or cleanup, our Bigfork team ensures every project meets the highest professional standards for safety and quality.`,
 service:[
  {
    heading:"Hire Now Most Trusted Water and Flood Damage Reconstruction Services Contractor in Bigfork, MT",
    
description:"When water invades your property, every second counts to prevent mold growth and structural compromise. Allied Restoration stands as the most reliable choice for a local and affordable fully home flood damage reconstruction repair or restoration services contractor. We understand that flooding is more than just a mess—it’s a threat to your safety. As a certified and trusted all kinds buildings customized reconstruction services contractor or company, we utilize advanced drying technology and precision structural repair to return your property to its pre-loss condition.Whether you are dealing with a burst pipe or natural flooding, our team serves as your trusted and premier fire or water damage reconstruction inspector or contractor in Bigfork, MT. We don't just patch walls; we ensure the underlying framework is sound. From deep-water extraction to complete flooring and drywall replacement, our skilled or professional all new or old home structural emergency reconstruction services guarantee a seamless transition from disaster to a beautiful, dry home.",
 },
{
 heading:"Local & Trusted Emergency Buildings Interior or Exterior Reconstruction Services Contractor or Company in Bigfork, MT",

description:"Structural integrity and curb appeal go hand-in-hand. Allied Restoration is the leading skilled residential or commercial buildings interior or exterior reconstruction services contractor or company in Bigfork, MT. Our expertise extends beyond simple repairs to comprehensive structural renewal. Whether your facade has been damaged by Montana’s harsh weather or your interior requires a complete layout overhaul, we are the certified and trusted all kinds buildings customized reconstruction services contractor you can lean on.For those facing the aftermath of a blaze, we act as your premier and skilled fire damage repair, restoration or cleanup services contractor. We manage the complexities of soot removal and structural reinforcing with ease. As an experienced and trusted all kind buildings reconstruction and restoration services contractor or company, we handle everything from roofing and siding to intricate interior finishes. Trust our skilled or insured fire damage reconstruction services contractor team to provide durable, high-quality craftsmanship that stands the test of time, ensuring your Bigfork property remains a safe and stunning landmark."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Home Reconstruction Services Inspector and Contractor Bigfork MT",
  description: `Finding a skilled and top-rated safe and eco-friendly home reconstruction services inspector and contractor in Bigfork, MT, is essential for homeowners who value both structural integrity and environmental responsibility. At Allied Restoration, we bridge the gap between high-performance construction and sustainable practices, ensuring your rebuild is as healthy for your family as it is for the planet. As a skilled and professional safe and eco-friendly home reconstruction services contractor or company in Bigfork, MT, we prioritize the use of non-toxic, low-VOC materials and energy-efficient building techniques.
Whether we are acting as your skilled home or offices home reconstruction services contractor for a minor update or a major structural overhaul, our focus remains on durability and resource efficiency. Disasters like flooding require specialized oversight, which is why we provide a certified flood damage home reconstruction services inspector or inspection contractor in Bigfork, MT. We don't just repair the visible damage; we ensure your property is restored using sustainable methods that prevent future mold growth and improve indoor air quality. From reclaimed materials to high-efficiency insulation, Allied Restoration is the trusted local partner for modern, eco-conscious property recovery.`,
  backgroundImage: {
    src: "/images/image-8.jpg",
    alt: "Home reconstruction project in Bigfork, MT",
  },
  secondImage: {
    src: "/images/image-5.jpg",
    alt: "Allied Restoration reconstruction team at work in Bigfork, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster Reconstruction Services Contractor Bigfork MT",
    description:
      "When catastrophe hits, choosing a certified or trusted local no. 1 disaster reconstruction services contractor in Bigfork, MT, is the most critical decision a property owner can make. Allied Restoration has built a reputation as an experienced high-qualified local and trusted disaster reconstruction services company and contractor, providing rapid-response solutions when your home or business is at its most vulnerable. Our team serves as a skilled and professional disaster reconstruction services inspector contractor or company in Bigfork, MT, conducting thorough assessments to identify hidden structural weaknesses before the rebuilding process begins.Whether you are dealing with the aftermath of a blaze or a burst pipe, we are the skilled home or offices fire damage disaster reconstruction services contractor equipped to handle complex smoke and soot restoration alongside structural reinforcing. As a certified fire or flood water and mold damage recovery services contractor, we understand that true recovery requires a multi-faceted approach. We don't just clear debris; we sanitize, deodorize, and rebuild using industry-leading standards. From the initial inspection to the final coat of paint, our local expertise ensures your project stays on track and meets all Montana building codes. Trust Bigfork’s premier restoration experts to turn your disaster into a distant memory with craftsmanship that lasts a lifetime.",
    image: "/images/image-50.webp",
    alt: "Allied Restoration performing structural reconstruction in Bigfork, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Reconstruction Services Contractor",
    description:
      "Allied Restoration is proud to be the region’s premier choice for comprehensive property recovery, extending our expert reach far beyond a single zip code. As a versatile all kind buildings reconstruction services contractor, we maintain a dedicated mobile fleet ready to serve the entire Flathead Valley. Our primary service hubs include the bustling center of Kalispell, MT, and the luxury estates of Whitefish, MT, where we provide high-end structural restoration and emergency repairs. We are deeply rooted as a top-rated contractor in Bigfork, MT, ensuring local homeowners and lakeside businesses receive immediate, professional attention following fire or water damage.Our reach also encompasses the growing community of Columbia Falls, MT, and the scenic properties in Lakeside, MT, where we offer everything from certified inspections to full-scale interior and exterior rebuilds. By positioning our skilled teams strategically across these locations, we ensure that whether you are dealing with a commercial structural failure in town or a residential flood near the water, the valley’s most trusted reconstruction experts are never more than a phone call away. We bring the same commitment to quality, safety, and efficiency to every project, regardless of the distance.",
    image: "/images/image-51.jpg",
    alt: "Service areas for reconstruction services in Flathead County, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Reconstruction Services Contractor Bigfork MT?",
    description:
      "Choosing the right partner for property recovery is a decision that impacts the safety, value, and longevity of your investment. Allied Restoration stands out as the premier skilled and professional reconstruction services contractor in Bigfork, MT, by combining technical mastery with a commitment to the local community. We understand that whether it is a family home or a commercial storefront, your property is a vital asset. Our reputation as a top-tier commercial or residential buildings reconstruction services contractor is built on a foundation of transparency, rapid response times, and uncompromising craftsmanship.When you choose us, you aren't just hiring a crew; you are partnering with a skilled and professional reconstruction services contractor that manages the entire lifecycle of your project. From navigating complex insurance claims to executing intricate structural repairs, our team ensures a stress-free experience. We utilize the latest construction technology and high-grade materials to ensure every rebuild is more resilient than the original structure. As a locally owned company, we take personal pride in restoring the architectural beauty of Bigfork. For those who demand excellence, Allied Restoration delivers the peace of mind that comes from knowing your property is in the hands of the valley's most trusted experts.",
    image: "/images/image-52.jpg",
    alt: "Allied Restoration reconstruction crew serving Bigfork, MT",
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
