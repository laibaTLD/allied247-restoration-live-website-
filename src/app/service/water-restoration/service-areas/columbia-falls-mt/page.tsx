
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
  title: "Columbia Fall's Trusted Water Damage Restoration Company |  Allied 24/7 Restoration",
  description: 'Fast, reliable water damage restoration in Columbia Falls, MT. Certified specialists provide expert water extraction, drying, and full property restoration. Available 24/7—call now for immediate help!',
  openGraph: {
    title: "Columbia Fall's Trusted Water Damage Restoration Company |  Allied 24/7 Restoration",
    description: 'Fast, reliable water damage restoration in Columbia Falls, MT. Certified specialists provide expert water extraction, drying, and full property restoration. Available 24/7—call now for immediate help!',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water Damage Restoration Services Contractor Columbia Falls MT",
  areaLabel: "Bigfork, MT",
  description:
    "When disaster strikes, trust Allied Restoration, the local #1 certified water damage restoration contractor in Columbia Falls, MT. We provide professional, affordable, and 24/7 emergency services to restore your property. Get your trusted flood inspection today!",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local specialists provide compassionate, expert guidance, ensuring your Columbia Falls property restoration is stress-free.",
    },
    {
      title: "Quick Response",
      description:
        "Disaster won't wait. Our rapid-response team arrives fast to mitigate water damage and prevent mold.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our certified experts are available 24/7 for your emergency flood restoration needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award-Winning Flood Water Cleanup or Restoration Services Contractor or Agency Columbia falls MT?",
  paragraphs: [
    "When water invades your property, time is your greatest enemy. If you are searching for a professional local permanent residential or commercial flood water restoration cleanup services contractor or agency, look no more than Allied Restoration. As a trusted and premier commercial buildings flood water cleanup contractor, we understand that every minute matters in preventing structural decay and hazardous mold growth. Our team operates as a certified mobile unit water remediation or restoration specialist services agency or contractor service, arriving fully equipped to handle any scale of disaster.Whether you’ve experienced a burst pipe in a small home or large-scale flooding in a warehouse, we are the skilled or professional residential or commercial buildings flood water restoration or cleanup repair services contractor Columbia Falls residents rely on for precision and speed. We pride ourselves on being the local and affordable emergency water remediation or restoration cleanup services provider that puts the community first. Our technicians utilize industrial-grade extraction and dehumidification technology to ensure a bone-dry result that lasts. Don't settle for temporary fixes; choose the award-winning expertise that guarantees a safe return to your home or business. From initial inspection to the final coat of repair, Allied Restoration delivers excellence that stands the test of time.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: " Is water damage considered an emergency?",
      answer:
        "Yes. To prevent structural rot and hazardous mold, you must act within 24 to 48 hours. Our professional certified 24/7 home or offices flood water damage restoration services agency arrives fast to mitigate risks and protect your Columbia Falls property.",
    },
    {
      question: "Does insurance cover flood restoration costs?",
      answer:
        "Most policies cover sudden, accidental water damage like burst pipes. Allied Restoration works directly with your provider to streamline claims. We are a skilled & professional residential or commercial buildings water damage repair specialist dedicated to maximizing your coverage benefits.",
    },
    {
      question: "How long does the drying process take?",
      answer:
        "Typically, professional drying takes three to five days. As a premier and skilled on-time water damage repair expert, we use industrial-grade dehumidifiers and moisture meters to ensure your structure is 100% dry before any final repairs or reconstruction begin.",
    },
    {
      question: "Can I handle the cleanup myself?",
      answer:
        "Small spills are manageable, but major flooding requires professional tools. Our skilled permanent mobile unit residential or commercial building water damage restoration services team uses high-velocity extractors to remove deep-seated moisture that household vacuums simply cannot reach or safely handle.",
    },
    {
      question: "What are the signs of hidden water damage?",
      answer:
        "Look for peeling paint, musty odors, or unexplained spikes in your water bill. If you suspect an issue, contact our certified or award-winning water damage cleanup experts for a professional inspection to find and fix leaks before they escalate.",
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
    src: "/images/image-41.webp",
    alt: "Professional water damage restoration services in Columbia Falls, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration offers a full suite of recovery options tailored for Columbia Falls. From advanced structural drying to mold mitigation, our skilled permanent mobile unit residential or commercial building water damage restoration services contractor team handles it all. Trust our premier and skilled on-time water damage repair experts for every project.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor Columbia Falls, MT",
    
description:"When structural integrity is at stake, you need more than a quick fix; you need the premier and skilled on-time water damage repair or restoration services experts at Allied Restoration. Our team serves as the leading professional certified 24/7 home or offices flood water damage repair or restoration services inspector, ensuring that every hidden pocket of moisture is identified before it weakens your foundation.As a skilled permanent mobile unit residential or commercial building water damage restoration services contractor, we bring high-tech thermal imaging and moisture meters directly to your doorstep in Columbia Falls. We don't just look at the surface; our comprehensive inspections evaluate subfloors, wall cavities, and crawlspaces to prevent long-term rot. Trusting a local specialist ensures your home meets Montana’s specific environmental safety standards. Protect your investment by hiring the experts who prioritize structural safety and meticulous documentation for your peace of mind.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Water Damage Restoration or Cleanup Services Contractor Columbia Falls, MT",

description:"Disaster strikes without warning, but Allied Restoration is always ready. We are the professional certified 24/7 home or offices flood water damage repair or restoration services agency dedicated to immediate action. Whether it is a midnight pipe burst or a flash flood, our skilled permanent mobile unit residential or commercial building water damage restoration services contractor team arrives within minutes to begin the extraction process.As the premier and skilled on-time water damage repair or restoration services experts, we utilize industrial-grade dehumidifiers and air movers to stabilize your environment. We provide a permanent solution, not a temporary patch, ensuring that your office or residence is fully remediated and safe for occupancy. Our 24/7 availability makes us the most reliable partner for local businesses and homeowners alike. When you need urgent cleanup, choose the contractor that combines local trust with world-class restoration technology to get your life back to normal fast."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Water Remediation, Restoration and Cleanup Services Contractor or Company Columbia falls MT",
  description: `Finding a reliable partner after a flood is essential for property safety. Allied Restoration stands out as the trusted and top rated emergency water remediation or restoration services contractor or company expert in the region. We understand that water intrusion requires an immediate, sophisticated response, which is why we operate as a skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company dedicated to excellence. Our reputation is built on precision and speed. As a certified or award winning water damage cleanup services experts contractor, we utilize cutting-edge technology to extract standing water and dry structures to the highest industry standards.
Whether you are dealing with a localized leak or a major facility flood, we are the skilled & professional residential or commercial buildings water damage repair or cleanup services specialist company or contractor Columbia Falls, MT property owners rely on for long-term results. From deep structural drying to final sanitization, our team ensures every corner of your building is restored to its pre-loss condition. We don't just clear the water; we rebuild your peace of mind. When quality cannot be compromised, choose the local experts who combine years of experience with a commitment to superior customer service.`,
  backgroundImage: {
    src: "/images/image-36.jpg",
    alt: "Water damage restoration team in Columbia Falls, MT",
  },
  secondImage: {
    src: "/images/image-37.webp",
    alt: "Water damage restoration equipment in Columbia Falls, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Water Damage Repairing or Restoration Experts Columbia Falls MT",
    description:
      "When your property faces a sudden crisis, you need the certified or trusted local no1 home or offices water damage repairing or restoration experts Columbia Falls, MT property owners rely on most. Allied Restoration is the premier choice for rapid recovery, offering unmatched expertise in handling everything from residential pipe bursts to large-scale commercial floods. Our mission is to provide a seamless restoration experience that prioritizes the safety of your structure and the health of its occupants. We take pride in being an experienced high-qualified affordable emergency flood water damage repairing or restoration and cleanup services provider company or agency Columbia Falls, MT.Our team utilizes industrial-strength extraction tools and advanced moisture-mapping technology to ensure that no hidden dampness remains to fuel mold growth or structural decay. We don't just dry your building; we scientifically remediate it to restore its pre-loss condition. Our local technicians understand the specific needs of Montana properties, from frozen pipe mitigation to heavy snowmelt flooding. By choosing Allied Restoration, you are partnering with a company that values transparency, speed, and long-term quality. We work directly with your insurance provider to streamline the claims process, making a stressful situation much easier to manage. For permanent solutions and 24/7 reliability, trust the local leaders in professional water restoration.",
    image: "/images/image-38.jpg",
    alt: "Water extraction and drying equipment in Columbia Falls, MT",
  },
  row2: {
    heading: "Our Services Areas for Water Damage Remediation or Restoration Services",
    description:
      "Allied Restoration is proud to be the Flathead Valley's premier choice for emergency recovery, extending our expert reach far beyond our home base. We provide rapid-response water damage remediation and restoration services to the bustling residential hubs and commercial centers of Kalispell, MT, ensuring that local businesses and homeowners have a reliable partner during floods or pipe bursts. Our specialized teams are also frequently dispatched to Whitefish, MT, where we handle high-end property restoration with the discretion and precision required for luxury mountain estates.In the lakeside communities of Bigfork, MT, and Lakeside, MT, we offer comprehensive moisture mitigation to protect waterfront properties from the unique structural challenges posed by the local climate. Of course, our roots remain deep in Columbia Falls, MT, where we serve as the #1 trusted contractor for 24/7 emergency cleanup. No matter where you are located within the region, our mobile units are equipped with industrial-grade technology to arrive on-site fast, stopping water damage in its tracks and restoring your peace of mind. From the Gateway to Glacier to the shores of Flathead Lake, we are your local experts.",
    image: "/images/image-39.jpg",
    alt: "Water damage repair and restoration in Columbia Falls, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Buildings Flood Damage Restoration or Water Remediation Services Columbia Falls MT?",
    description:
      "Choosing the right partner for property recovery is a decision that impacts the long-term safety of your investment. Allied Restoration has earned its reputation as the most skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Columbia Falls, MT. We don't just provide surface-level cleaning; we deliver a comprehensive scientific approach to moisture extraction and structural drying that protects your building from secondary issues like hazardous mold and wood rot.Our local expertise means we understand the unique environmental challenges faced by Montana property owners, from freezing temperatures to rapid snowmelt. We prioritize transparency, providing detailed assessments and working closely with insurance providers to minimize your out-of-pocket stress. By utilizing industrial-grade dehumidification and high-velocity air movers, our team ensures your home or office is returned to a pre-loss state efficiently. When you choose us, you are choosing a team dedicated to craftsmanship, rapid response, and permanent results. Don't leave your property to chance; trust the skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Columbia Falls, MT that treats your building like their own.",
    image: "/images/image-40.webp",
    alt: "Allied Restoration water damage restoration team in Columbia Falls, MT",
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
