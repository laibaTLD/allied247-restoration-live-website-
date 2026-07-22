
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
  title: 'Reconstruction Services in Columbia Falls, MT | Allied 24/7 Restoration',
  description: 'Expert reconstruction and remodeling services in Columbia Falls, MT. Certified team handles complete home renovations, structural repairs, and property rebuilds. Available 24/7 for emergency service!',
  openGraph: {
    title: 'Reconstruction Services in Columbia Falls, MT | Allied Restoration',
    description: 'Professional reconstruction in Columbia Falls, MT. Certified team for structural repairs, fire and water damage restoration, and full property rebuilds.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Allied Restoration – Reconstruction in Columbia Falls, MT',
    description: 'Certified reconstruction contractor for Columbia Falls, MT. Fast inspections and expert structural restoration for homes and businesses.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Buildings Reconstruction Services Contractor Columbia Falls MT",
  areaLabel: "Columbia Falls, MT",
  description:
    "As Columbia Falls’ #1 certified reconstruction contractor, Allied Restoration delivers professional and affordable residential and commercial services. From fire damage to total rebuilds, our local, trusted inspectors provide skilled, same-day solutions to get your home or office back to perfection.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts at Allied Restoration provide compassionate guidance, ensuring your property reconstruction journey is stress-free.",
    },
    {
      title: "Quick Response",
      description:
        "We guarantee a rapid local arrival in Columbia Falls, delivering professional same-day inspections to secure your property.",
    },
    {
      title: "24/7 Support",
      description:
        "Disaster doesn’t wait, so our trusted team offers 24/7 emergency reconstruction assistance for homes and offices.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Structural Reconstruction Services Contractor or Company in Columbia Falls MT? - Same Day Fire Damage Reconstruction Services",
  paragraphs: [
    "When disaster strikes, you need an experienced and trusted all kind buildings reconstruction and restoration services company that understands the local landscape. Allied Restoration stands out as the professional and trusted structural reconstruction services contractor in Columbia Falls, MT, dedicated to rebuilding your peace of mind. Whether you are dealing with a historic property or a modern build, we act as your skilled or professional all new or old home structural emergency reconstruction services contractor, ensuring every beam and board meets the highest safety standards. As a trusted and premier fire or water damage reconstruction inspector, we provide the comprehensive assessments necessary to jumpstart your recovery process immediately.Time is of the essence following a catastrophe, which is why we provide professional and trusted same day fire damage reconstruction services. Our reputation as a certified fire damage reconstruction services contractor means we have the specialized tools and training to handle complex char and structural integrity issues. For those facing rising waters, we are the local and affordable fully home flood damage reconstruction repair or restoration services contractor you can rely on for efficient, high-quality work. From acting as a professional local buyer home emergency reconstruction services company to serving as your skilled or insured fire damage reconstruction services contractor, we prioritize durability and excellence. Let our Columbia Falls team restore your residential or commercial property with the precision and care it deserves.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our junk removal services in Glendale  City, AZ.",
  questions: [
    {
      question: "Why choose Allied Restoration for my reconstruction needs?",
      answer:
        "MAs the premier skilled and professional reconstruction services contractor in Columbia Falls, MT, Allied Restoration offers unmatched expertise. We provide certified, local, and insured services for residential and commercial properties, ensuring your structural repairs are handled with precision and care.",
    },
    {
      question: "Do you offer same-day emergency reconstruction inspections?",
      answer:
        "Yes. We are a professional and trusted same day property reconstruction services contractor. Our team arrives quickly in Columbia Falls to provide immediate damage assessments, helping to stabilize your home or office and prevent further costly structural deterioration.",
    },
    {
      question: "Are your reconstruction services eco-friendly and safe?",
      answer:
        "Absolutely. We are a skilled and professional safe and eco-friendly home reconstruction services company. We utilize sustainable materials and non-toxic methods to ensure your rebuilt property is healthy for your family while remaining durable and structurally sound.",
    },
    {
      question: "Can you help with fire and smoke damage rebuilds?",
      answer:
        "We are a certified fire damage reconstruction services contractor. Our skilled team manages everything from soot cleanup to full structural restoration, ensuring your property is safe, odor-free, and returned to its original condition following a fire disaster.",
    },
    {
      question: "What areas do you provide reconstruction services in?",
      answer:
        "Allied Restoration serves the entire Flathead Valley. We are the leading local and trusted residential or commercial reconstruction services contractor for Columbia Falls, Kalispell, Whitefish, Bigfork, and Lakeside, providing expert disaster recovery throughout the region.",
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
    "Allied Restoration is the premier choice for professional property recovery. As your local and trusted residential or commercial reconstruction services contractor, we provide skilled inspections and certified repairs. From fire to flood, our expert team ensures your property is restored perfectly.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-7.jpg",
    alt: "Reconstruction and structural restoration services in Columbia Falls, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential cleanouts to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `As the leading certified and trusted all kinds buildings customized reconstruction services contractor, Allied Restoration provides expert solutions for every disaster. From skilled residential or commercial buildings interior or exterior reconstruction services to specialized fire and flood recovery, our Columbia Falls team ensures your property is restored with precision.`,
 service:[
  {
    heading:"Hire Now Most Trusted Water and Flood Damage Reconstruction Services Contractor or Company Columbia Falls MT",
    
description:"When water invades your property, every second counts to prevent mold growth and structural decay. Allied Restoration is the premier choice for those seeking a certified and trusted all kinds buildings customized reconstruction services contractor or company. Our team excels at managing complex recovery projects, providing a seamless transition from initial water extraction to final structural finishing. As a local and affordable fully home flood damage reconstruction repair or restoration services contractor, we utilize industrial-grade technology to dry, sanitize, and rebuild your living spaces.We aren't just a cleanup crew; we are a skilled residential or commercial buildings interior or exterior reconstruction services company that ensures your foundation and framework are stronger than before the damage occurred. Whether you are dealing with a burst pipe or natural flooding, our experienced and trusted all kind buildings reconstruction and restoration services contractor team in Columbia Falls, MT, delivers high-quality, durable results that stand the test of time.",
 },
{
 heading:"Local & Trusted Emergency Buildings Interior or Exterior Reconstruction Services Contractor or Company in Columbia Falls MT",

description:"Emergency situations demand a skilled or professional all new or old home structural emergency reconstruction services contractor who can mobilize instantly. Allied Restoration provides comprehensive solutions for both the shell and the heart of your property. We are recognized as a premier and skilled fire damage repair, restoration or cleanup services contractor capable of handling intense soot removal and structural stabilization. Our technicians serve as a certified fire damage reconstruction services contractor, ensuring that both the interior and exterior of your building meet modern safety codes and aesthetic standards.From roofing and siding to drywall and intricate trim work, we are the skilled residential or commercial buildings interior or exterior reconstruction services contractor you can trust for total property rejuvenation. As a local and certified reconstruction services inspector, we provide the detailed oversight necessary to guarantee that every Same Day service maintains our high-standard of professional excellence."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Safe and Eco-Friendly Home Reconstruction Services Inspector and Contractor Columbia Falls MT",
  description: `If you are searching for a skilled and top rated safe and eco-friendly home reconstruction services inspector and contractor in Columbia Falls, MT, your search ends with Allied Restoration. We understand that modern property owners prioritize health and sustainability, which is why we have established ourselves as the premier skilled and professional safe and eco-friendly home reconstruction services company. Our approach combines traditional craftsmanship with green building practices to ensure your living environment is both structurally sound and environmentally responsible. Whether you are recovering from a disaster or upgrading an existing space, we serve as your skilled home or offices home reconstruction services contractor, utilizing non-toxic materials and energy-efficient methods that protect your family and the local Montana ecosystem.
Navigating property damage requires precision, especially when water is involved. We are a certified flood damage home reconstruction services inspector, offering detailed assessments that identify hidden risks like mold or structural weakening without compromising your home's air quality. As a dedicated inspection contractor, Allied Restoration provides the transparency and expertise needed to manage complex insurance claims while sticking to eco-conscious standards. Our reputation as an experienced and trusted all kind buildings reconstruction and restoration services contractor means we handle everything from sustainable siding to low-VOC interior finishes. Trust our skilled and insured team to deliver a "green" restoration that doesn't just fix your building—it improves it for the future.`,
  backgroundImage: {
    src: "/images/image-8.jpg",
    alt: "Home reconstruction project in Columbia Falls, MT",
  },
  secondImage: {
    src: "/images/image-5.jpg",
    alt: "Allied Restoration reconstruction team at work in Columbia Falls, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Disaster Reconstruction Services Contractor Columbia Falls MT",
    description:
      "When a catastrophe strikes, securing a certified or trusted local no1 disaster reconstruction services contractor in Columbia Falls, MT, is the most critical step toward recovery. Allied Restoration stands as the region’s premier authority, functioning as an experienced high-qualified local and trusted disaster reconstruction services company. Our team is built on a foundation of rapid response and technical excellence, ensuring that whether your property has faced a localized fire or a massive regional flood, you have a skilled and professional disaster reconstruction services inspector on-site to document every detail for insurance and safety compliance.We specialize in high-stakes restoration, serving as a skilled home or offices fire damage disaster reconstruction services contractor capable of reversing the devastating effects of smoke, soot, and structural charring. Beyond fire, we are recognized as a certified fire or flood water and mold damage recovery services contractor, providing a holistic approach to property health. This means we don't just rebuild walls; we eliminate secondary threats like toxic mold and deep-seated moisture. By choosing a local and trusted residential or commercial reconstruction services contractor, you benefit from a team that understands Montana’s unique building codes and climate challenges. From initial inspection to the final coat of paint, Allied Restoration delivers the peace of mind that comes with hiring the very best in the industry.",
    image: "/images/image-50.webp",
    alt: "Allied Restoration performing structural reconstruction in Columbia Falls, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Reconstruction Services Contractor",
    description:
      "Valley, serving as the premier all kind buildings reconstruction services contractor for both homeowners and business owners. Our reach extends throughout the region, ensuring that if you are in Columbia Falls, MT, you have immediate access to our certified and trusted reconstruction services. We understand the local terrain and building requirements, making us the experts for structural repair and disaster recovery. Beyond our home base, we provide rapid response as a skilled reconstruction services contractor in Kalispell, MT, handling everything from commercial fire damage to residential flood restoration with precision.Our commitment to excellence continues into Whitefish, MT, where we offer high-end, customized reconstruction services for luxury estates and local businesses alike. We also serve the scenic community of Bigfork, MT, providing skilled home or offices reconstruction services that preserve the aesthetic value of the area while ensuring structural integrity. Additionally, residents in Lakeside, MT, can rely on our certified disaster recovery inspectors for thorough assessments and reliable rebuilds. No matter where you are located within these service areas, Allied Restoration delivers professional, local, and insured expertise to restore your property to its original condition or better.",
    image: "/images/image-51.jpg",
    alt: "Service areas for reconstruction services in Flathead County, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for your Commercial or Residential Buildings Reconstruction Services Contractor Columbia Falls MT?",
    description:
      "Choosing the right partner for property recovery is a decision that impacts the safety, value, and longevity of your investment. Allied Restoration stands out as the premier choice because we combine local expertise with industrial-grade precision. As a skilled and professional reconstruction services contractor in Columbia Falls, MT, we understand that whether it is a family home or a sprawling commercial complex, the reconstruction process must be seamless and transparent. We don't just patch up damage; we rebuild with an eye for structural integrity and aesthetic perfection, ensuring your property meets or exceeds all current Montana building codes.Our reputation as the #1 local and trusted residential or commercial reconstruction services contractor is built on our efficiency-first philosophy. We prioritize rapid stabilization to prevent secondary damage, saving you time and money. By choosing Allied Restoration, you are partnering with a certified and insured team that handles everything from the initial damage assessment to the final finishing touches. We pride ourselves on clear communication, working closely with insurance providers to streamline your claims. When you need a skilled and professional reconstruction services contractor in Columbia Falls, MT, choose the company that treats your property as if it were their own.",
    image: "/images/image-52.jpg",
    alt: "Allied Restoration reconstruction crew serving Columbia Falls, MT",
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
