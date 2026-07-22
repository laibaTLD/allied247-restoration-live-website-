
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
  title: 'Reconstruction Services in Kalispell, MT | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration provides expert reconstruction and remodeling in Kalispell, MT. Certified team handles complete renovations, structural repairs, and property rebuilds. Call now for trusted service!',
  openGraph: {
    title: 'Reconstruction Services in Kalispell, MT | Allied Restoration',
    description: 'Professional reconstruction in Kalispell, MT. Certified team for structural repairs, fire and water damage restoration, and full property rebuilds.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allied Restoration – Reconstruction in Kalispell, MT',
    description: 'Certified reconstruction contractor for Kalispell, MT. Fast inspections and expert structural restoration for homes and businesses.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Buildings Reconstruction Services Contractor Kalispell MT",
  areaLabel: "Kalispell, MT",
  description:
    "From fire damage to full property transformations, Allied Restoration provides professional and affordable residential and commercial reconstruction services in Kalispell, MT. As local, certified contractors, we deliver trusted, same-day inspections and skilled craftsmanship to restore your home or office.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local Kalispell team provides compassionate, personalized service to guide you through every reconstruction step.",
    },
    {
      title: "Quick Response",
      description:
        "We prioritize your property with same-day inspections, ensuring fast action to mitigate damage and costs.",
    },
    {
      title: "24/7 Support",
      description:
        "Allied Restoration is always on call, providing certified emergency reconstruction support whenever you need us.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Reconstruction Services Contractor or Company in Kalispell MT? - Same Day Fire Damage Reconstruction Services",
  paragraphs: [
    "When disaster strikes your property, you need more than just a repair crew; you need the premier fire or water damage reconstruction inspector or contractor in Kalispell, MT. At Allied Restoration, we understand that structural integrity is the foundation of your safety. Whether you are dealing with the aftermath of a blaze or a burst pipe, we serve as your certified fire damage reconstruction services contractor in Kalispell, MT, offering immediate, same-day solutions to stabilize and rebuild. As a skilled or professional all new or old home structural emergency reconstruction services contractor, our team is equipped to handle everything from historical renovations to modern commercial builds.We take pride in being a professional local buyer home emergency reconstruction services company, helping residents navigate the complexities of property recovery with transparency and speed. If you’ve experienced a plumbing failure, our local and affordable fully home flood damage reconstruction repair or restoration services contractor team will mitigate moisture and rebuild efficiently. As an experienced and trusted all kind buildings reconstruction and restoration services contractor or company, Allied Restoration combines technical mastery with local care. From a skilled or insured fire damage reconstruction services contractor to comprehensive site inspections, we ensure your Kalispell property is restored to its prime condition. Trust the local experts who prioritize your recovery.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "What services does Allied Restoration offer in Kalispell, MT?",
      answer:
        "As a skilled and professional reconstruction services contractor, we provide full fire, flood, and water damage restoration. From structural repairs to interior finishes, our local and trusted residential or commercial property reconstruction services cover every aspect of rebuilding your property.",
    },
    {
      question: "Do you offer same-day emergency reconstruction inspections?",
      answer:
        "Yes. We are a professional and trusted same-day property reconstruction services contractor in Kalispell, MT. Our team responds quickly to assess damage, providing a certified disaster reconstruction services inspector to secure your site and begin the recovery process immediately.",
    },
    {
      question: "Is Allied Restoration a certified and insured company?",
      answer:
        "Absolutely. We are a certified fire and flood damage reconstruction services contractor and fully insured. Our team consists of skilled or professional reconstruction services inspectors who adhere to strict safety standards, ensuring your home or office is rebuilt correctly.",
    },
    {
      question: "Can you handle both residential and commercial reconstruction?",
      answer:
        "Yes. We are an experienced and trusted all kind buildings reconstruction and restoration services contractor. Whether you need skilled home or offices reconstruction or large-scale commercial structural repairs, we have the expertise to manage projects of any size.",
    },
    {
      question: "Are your reconstruction methods eco-friendly and safe?",
      answer:
        "We take pride in being a top-rated safe and eco-friendly home reconstruction services contractor. Allied Restoration uses sustainable materials and non-toxic processes, ensuring your restored Kalispell property is healthy for your family, employees, and the local Montana environment.",
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
    "Allied Restoration - Your Trusted Premier No.1 Reconstruction Services Contractor, Inspector, Company or Agency Columbia Falls MT",
  subHeading: "",
  description:
    "Choose Allied Restoration, the local and trusted residential or commercial property reconstruction services contractor in Kalispell. From certified fire damage to flood restoration, our skilled or professional team provides same-day inspections and affordable reconstruction to restore your building.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-7.jpg",
    alt: "Reconstruction and structural restoration services in Kalispell, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `As your premier and skilled fire damage repair, restoration, or cleanup services contractor, Allied Restoration offers comprehensive solutions for every crisis. From certified fire damage reconstruction to local flood damage repair, our skilled residential or commercial buildings interior or exterior reconstruction services ensure your Kalispell property is rebuilt to last.`,
 service:[
  {
    heading:"Hire Now Most Trusted Water and Flood Damage Reconstruction Services Contractor in Kalispell, MT",
    
description:"When water invades your property, every second counts to prevent mold growth and structural compromise. Allied Restoration stands as the premier choice for homeowners and businesses seeking a local and affordable fully home flood damage reconstruction repair or restoration services contractor. We don’t just dry out your carpets; we provide comprehensive structural solutions. As a certified and trusted all kinds buildings customized reconstruction services contractor or company, we assess the unique needs of your property—from subfloor replacement to drywall restoration.Our team is recognized as a premier and skilled fire damage repair, restoration, or cleanup services contractor, but our expertise in hydrologic damage is equally unmatched. We utilize advanced moisture detection and industrial-grade equipment to ensure that your restored home is actually a safe home. Don’t settle for a quick fix; hire the local experts committed to rebuilding your peace of mind.",
 },
{
 heading:"Local & Trusted Emergency Buildings Interior or Exterior Reconstruction Services Contractor in Kalispell, MT",

description:"Maintaining the curb appeal and interior safety of your property requires a skilled residential or commercial buildings interior or exterior reconstruction services contractor or company in Kalispell, MT. At Allied Restoration, we specialize in full-scale recovery following natural disasters or structural failures. Whether you need exterior siding replaced after a storm or a complete interior overhaul after a kitchen fire, we are the skilled or insured fire damage reconstruction services contractor you can rely on.We provide certified and trusted all kinds buildings customized reconstruction services contractor work, ensuring that every beam, tile, and brick meets Montana’s rigorous building codes. From high-end commercial storefronts to cozy residential old-home reconstructions, our craftsmanship speaks for itself. We bridge the gap between emergency cleanup and final finishing, delivering a seamless experience that restores your building's value and aesthetic beauty with local, dependable expertise."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Home Reconstruction Services Inspector and Contractor Kalispell MT",
  description: `If you are searching for a skilled and top-rated safe and eco-friendly home reconstruction services inspector and contractor in Kalispell, MT, look no further than Allied Restoration. We believe that rebuilding shouldn’t just be about restoration, but about creating a healthier, more sustainable environment for your family or employees. As a skilled and professional safe and eco-friendly home reconstruction services contractor or company in Kalispell, MT, we utilize non-toxic materials and sustainable building practices that minimize environmental impact without sacrificing structural integrity. Whether you are recovering from a disaster or upgrading an aging property, our team is the skilled home or offices home reconstruction services contractor you can trust for high-quality, green building solutions.
Our commitment to safety begins with a thorough evaluation of your property’s unique needs. We serve as a certified flood damage home reconstruction services inspector or inspection contractor, identifying hidden moisture and structural vulnerabilities that others might miss. By combining modern eco-friendly techniques with traditional craftsmanship, Allied Restoration ensures your project meets the highest standards of safety and efficiency. From residential houses to large-scale commercial spaces, we provide tailored reconstruction that protects both your investment and the beautiful Montana environment. Let us help you rebuild smarter and safer with the expertise of a premier local agency dedicated to excellence.`,
  backgroundImage: {
    src: "/images/image-8.jpg",
    alt: "Home reconstruction project in Kalispell, MT",
  },
  secondImage: {
    src: "/images/image-5.jpg",
    alt: "Allied Restoration reconstruction team at work in Kalispell, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster Reconstruction Services Contractor Kalispell MT",
    description:
      "When catastrophe strikes, timing and expertise are the only things standing between a total loss and a successful recovery. Allied Restoration is recognized as the experienced high-qualified local and trusted disaster reconstruction services company and contractor in Kalispell, MT. We specialize in navigating the complex aftermath of natural disasters, providing a steady hand and technical mastery to restore your property. As a skilled and professional disaster reconstruction services inspector contractor or company, we begin every project with a meticulous assessment to ensure no structural weakness is overlooked. Whether you are managing a residential crisis or a commercial setback, we are the skilled home or offices fire damage disaster reconstruction services contractor equipped to handle the most challenging rebuilds.Our reputation is built on being a certified fire or flood water and mold damage recovery services contractor in Kalispell, MT. We understand that disaster recovery requires a multi-faceted approach, combining debris removal, sanitization, and structural reinforcement. By choosing a local and trusted disaster reconstruction services contractor, you ensure that your project adheres to Montana’s specific building codes and climate demands. From minor smoke damage to major flood-related structural failures, Allied Restoration provides the high-quality craftsmanship and rapid response necessary to bring your building back to life. Trust our certified team to deliver excellence when you need it most.",
    image: "/images/image-50.webp",
    alt: "Allied Restoration performing structural reconstruction in Kalispell, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Reconstruction Services Contractor",
    description:
      "As the Flathead Valley’s leading restoration specialists, Allied Restoration is proud to offer our full suite of residential and commercial property solutions across the region. We are the premier buildings reconstruction services contractor for homeowners and business owners in Kalispell, MT, providing rapid, local response times when disaster strikes. Our reach extends throughout the valley, ensuring that if you need a certified fire or flood damage reconstruction services contractor, our team can be on-site quickly in Whitefish, MT, to protect your high-end investments. We also specialize in the unique lakeside properties of Bigfork, MT, where water and moisture management are critical to structural longevity.Our expertise as a skilled home or offices reconstruction services contractor is also available to the growing community of Columbia Falls, MT, offering everything from minor repairs to major structural overhauls. Furthermore, we provide dedicated support to the residents of Lakeside, MT, ensuring that no matter where you are located in the county, you have access to a local and trusted disaster reconstruction services company. From the gateway of Glacier to the shores of Flathead Lake, Allied Restoration remains the most reliable and experienced high-qualified reconstruction services contractor in the area. We are committed to rebuilding our local communities, one project at a time, with unmatched local knowledge and professional care.",
    image: "/images/image-51.jpg",
    alt: "Service areas for reconstruction services in Flathead County, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Reconstruction Services Contractor Kalispell MT?",
    description:
      "Choosing the right partner for your property recovery is the most critical decision you will make following a disaster. Allied Restoration stands out as the skilled and professional reconstruction services contractor in Kalispell, MT, because we prioritize a quality-first approach to every structural challenge. We understand that your home or business is your greatest investment; therefore, we combine rigorous safety standards with master-level craftsmanship. Unlike general laborers, we are specialized experts in restoring structural integrity, ensuring that every beam, joist, and finish meets or exceeds local building codes.As a local and trusted residential or commercial property reconstruction services contractor, we offer a seamless transition from the initial inspection to the final walkthrough. Our deep roots in the Flathead Valley mean we understand the specific environmental demands of Montana architecture, from heavy snow loads to moisture mitigation. We provide transparent pricing, rapid same-day response times, and a dedicated project manager to guide you through the complexities of the rebuild. When you choose Allied Restoration, you aren't just hiring a crew; you are partnering with a certified and trusted all kinds buildings customized reconstruction services contractor dedicated to excellence and your total peace of mind.",
    image: "/images/image-52.jpg",
    alt: "Allied Restoration reconstruction crew serving Kalispell, MT",
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
