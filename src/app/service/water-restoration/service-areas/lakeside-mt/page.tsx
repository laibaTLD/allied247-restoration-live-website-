
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
  title: 'Certified Water Damage Restoration Services Contractor Lakeside MT',
  description: 'Allied 24/7 Restoration delivers immediate water extraction, drying, and complete restoration for homes and businesses in Lakeside, MT. Call now for expert services!',
  openGraph: {
    title: 'Certified Water Damage Restoration Services Contractor Lakeside MT',
    description: 'Allied 24/7 Restoration delivers immediate water extraction, drying, and complete restoration for homes and businesses in Lakeside, MT. Call now for expert services!',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water Damage Restoration Services Contractor Lakeside MT",
  areaLabel: "Bigfork, MT",
  description:
    "Trust Allied Restoration, your local and certified No.1 24/7 water damage restoration services contractor. From floods to leaks, our professional and skilled water restoration services protect your property. Fast, affordable, and trusted—call Lakeside’s top-rated specialists today!",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our local and trusted team provides empathetic, professional support to guide you through water emergencies.",
    },
    {
      title: "Quick Response",
      description:
        "Fast flood water damage restoration starts now. We arrive quickly to mitigate damage and costs.",
    },
    {
      title: "24/7 Support",
      description:
        "As your certified No.1 24/7 water damage restoration contractor, we’re always ready—day or night.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award-Winning Flood Water Cleanup or Restoration Services Contractor or Agency Lakeside MT?",
  paragraphs: [
    "When disaster strikes, you need more than just a cleanup crew; you need a partner who understands the urgency of protecting your investment. Allied Restoration is the premier choice for anyone seeking a skilled or professional residential or commercial buildings flood water restoration or cleanup repair services contractor in Lakeside, MT. Whether a burst pipe has flooded your basement or a storm has damaged your storefront, our team delivers the rapid, high-quality results you deserve. As a professional local permanent residential or commercial flood water restoration cleanup services contractor or agency, we pride ourselves on being deeply rooted in the Lakeside community.We aren't just a faceless franchise; we are your neighbors, providing local and affordable emergency water remediation or restoration cleanup services that prioritize your safety and peace of mind. Our certified mobile unit water remediation or restoration specialist services agency is equipped with industrial-grade extraction and drying technology, ensuring we reach your property within minutes, not hours. For business owners, we stand out as the trusted and premier commercial buildings flood water cleanup contractor, minimizing downtime so you can get back to work. From initial inspection to final repair, our comprehensive approach ensures a moisture-free environment. Don't settle for subpar results when facing water damage. Choose the experts committed to excellence—choose Allied Restoration for guaranteed professional care.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "How quickly can Allied Restoration arrive at my property?",
      answer:
        "As your trusted and top rated emergency water remediation or restoration services contractor, we offer 24/7 rapid response. Our certified mobile unit usually arrives within the hour to start extraction and prevent further structural damage to your Lakeside building.",
    },
    {
      question: " Is your water damage restoration process covered by insurance?",
      answer:
        "Yes! We are a skilled and professional trusted water damage restoration or repairing contractor that works with all major insurance providers. We provide detailed documentation and moisture readings to help streamline your claim and ensure you get the maximum coverage.",
    },
    {
      question: " What makes your water remediation services No.1 in Lakeside?",
      answer:
        "Allied Restoration is the certified or award winning water damage cleanup services experts contractor because we use industrial-grade dehumidifiers and thermal imaging. We ensure a permanent fix, not just a surface cleanup, protecting your home’s long-term value and safety.",
    },
    {
      question: "Can you handle both residential and commercial flood damage?",
      answer:
        "Absolutely. We are a skilled or licensed home or offices buildings flood water damage cleanup company. Whether it’s a small bathroom leak or a large-scale commercial flood, our team has the equipment and expertise to restore any property size..",
    },
    {
      question: "Why is a professional inspection necessary after a flood?",
      answer:
        "Water hides behind walls and under floors. As a professional certified 24/7 home or offices flood water damage restoration services inspector, we detect hidden moisture that causes mold. Our thorough process ensures your property is truly dry and safe.",
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
    "Allied Restoration - Your Trusted Premier No.1 Water Remediation, Repair or Restore Services Expert Contractor, Company, Agency, Lakeside MT",
  subHeading: "",
  description:
    "As Lakeside’s top-rated experts, Allied Restoration delivers the premier and skilled on-time water damage repair or restoration services you deserve. We are the professional certified 24/7 home or offices flood water damage repair agency dedicated to restoring your property quickly.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-41.webp",
    alt: "Professional water damage restoration services in Lakeside, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `From emergency extraction to structural drying, Allied Restoration offers the premier and skilled on-time water damage repair or restoration services you need. As a skilled permanent mobile unit residential or commercial building water damage restoration services contractor, we provide comprehensive cleanup, sanitization, and repairs to restore your property perfectly.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor Lakeside MT",
    
description:"When moisture compromises your home’s integrity, you need a professional certified 24/7 home or offices flood water damage repair or restoration services inspector. At Allied Restoration, we specialize in identifying hidden moisture before it turns into a structural nightmare. As your skilled permanent mobile unit residential or commercial building water damage restoration services contractor in Lakeside, MT, we use advanced thermal imaging and moisture meters to track water travel through studs, joists, and drywall.Structural integrity isn't just about what you see on the surface; it’s about the stability of your foundation. Our premier and skilled on-time water damage repair or restoration services experts arrive immediately to stop the spread of rot and mold. By choosing a local specialist, you ensure a thorough assessment tailored to Montana’s unique climate challenges. From sagging ceilings to warped flooring, we provide the documentation and expertise required to restore your home to its original, safe condition.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Water Damage Restoration or Cleanup Services Contractor Lakeside MT",

description:"Disaster doesn't keep office hours, and neither does Allied Restoration. Whether it’s a midnight pipe burst in your kitchen or a weekend flood in your commercial warehouse, we are the professional certified 24/7 home or offices flood water damage repair or restoration services agency you can rely on. Water spreads quickly, soaking into carpets and wicking up walls; our skilled permanent mobile unit residential or commercial building water damage restoration services contractor team is always on standby to begin the extraction process within minutes of your call.We combine high-powered industrial pumps with rapid-dry dehumidification to ensure a permanent fix, not just a temporary cleanup. As the premier and skilled on-time water damage repair or restoration services experts, we handle everything from initial water removal to final sanitization. We understand that your home or office is your greatest asset, and our mission is to provide efficient, high-quality restoration that prevents long-term property devaluation. For immediate, local, and expert assistance, we are Lakeside’s first choice for emergency recovery."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Water Remediation, Restoration and Cleanup Services Contractor or Company Lakeside MT?",
  description: `When water invades your property, every second counts. Allied Restoration stands as the trusted and top rated emergency water remediation or restoration services contractor or company expert dedicated to saving your home or business. We understand that water damage is more than just a puddle; it’s a threat to your building's structural health and your family's safety. As a skilled & professional residential or commercial buildings water damage repair or cleanup services specialist company or contractor, we provide the rapid intervention needed to stop secondary damage like mold and rot in its tracks. Our team is recognized as the certified or award winning water damage cleanup services experts contractor Lakeside MT, bringing years of field experience to every job site.
We deploy advanced drying technology and industrial-grade dehumidifiers to ensure your space is completely moisture-free. Whether you are dealing with a localized leak or a major flood, we serve as your skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company. We don't just extract water; we restore peace of mind through meticulous sanitization and structural repairs. For Lakeside residents and business owners, Allied Restoration is the gold standard for quality, reliability, and local expertise. Don't wait for the damage to worsen—contact the experts who treat your property like their own.`,
  backgroundImage: {
    src: "/images/image-36.jpg",
    alt: "Water damage restoration team in Lakeside, MT",
  },
  secondImage: {
    src: "/images/image-37.webp",
    alt: "Water damage restoration equipment in Lakeside, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Water Damage Repairing or Restoration Experts Lakeside MT",
    description:
      "When you face the devastating impact of a flood, you need the certified or trusted local no1 home or offices water damage repairing or restoration experts by your side. At Allied Restoration, we specialize in returning your property to its pre-loss condition with speed and precision. As an experienced high-qualified affordable emergency flood water damage repairing or restoration and cleanup services provider company or agency, we understand the unique architectural needs of both residential homes and commercial offices in the Lakeside area. Water intrusion can hide behind walls and under floorboards, leading to long-term structural issues if not addressed by professionals.Our team utilizes cutting-edge moisture detection and rapid-drying technology to ensure every drop is accounted for. We pride ourselves on being the most reliable experienced high-qualified affordable emergency flood water damage repairing or restoration and cleanup services provider company or agency, offering 24/7 support to mitigate damage the moment it happens. From initial assessment to final sanitization, Allied Restoration ensures your environment is safe, dry, and healthy. We work closely with insurance providers to streamline the recovery process, making us the certified or trusted local no1 home or offices water damage repairing or restoration experts that the community counts on. Don't let water damage linger—trust the local pros to protect your investment.",
    image: "/images/image-38.jpg",
    alt: "Water extraction and drying equipment in Lakeside, MT",
  },
  row2: {
    heading: "Our Services Areas for Water Damage Remediation or Restoration Services",
    description:
      "At Allied Restoration, we are proud to be the premier rapid-response team serving the heart of the Flathead Valley. Our mission is to provide comprehensive water damage solutions to our neighbors, ensuring that no matter where you are located, expert help is only a phone call away. We maintain a strong presence in Kalispell MT, where our units are always ready to handle both residential and commercial emergencies. For those in the scenic community of Whitefish MT, we offer specialized restoration services tailored to protect high-end properties from the devastating effects of moisture.Our reach extends to the vibrant area of Bigfork MT, providing 24/7 support for flood recovery and structural drying. We are also the leading choice for residents in Columbia Falls MT, delivering affordable and efficient cleanup when pipes burst or storms strike. Of course, our roots remain deep in Lakeside MT, where we continue to serve as the most trusted local experts for permanent water remediation. By maintaining a localized mobile fleet, we ensure on-time arrival across all these locations, minimizing property damage and restoration costs for every client we serve.",
    image: "/images/image-39.jpg",
    alt: "Water damage repair and restoration in Lakeside, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Buildings Flood Damage Restoration or Water Remediation Services Lakeside MT",
    description:
      "Choosing the right partner after a water disaster is the difference between a quick recovery and long-term property issues. Allied Restoration stands out as the skilled and professional trusted water damage restoration or repairing and water remediation services contractor in Lakeside MT. We combine local expertise with industrial-grade technology to provide a seamless restoration experience for both residential and commercial property owners. Our reputation is built on transparency and technical precision.When you work with Allied Restoration, you aren't just getting a cleanup crew; you are hiring a skilled and professional trusted water damage restoration or repairing and water remediation services contractor that understands the local climate and building codes. We prioritize rapid structural drying to prevent mold growth and use advanced thermal imaging to find hidden pockets of moisture that others miss. Beyond our technical skills, we offer 24/7 emergency availability because we know that water damage doesn't wait for business hours. Our team handles everything from the initial water extraction to final structural repairs, working directly with your insurance company to minimize your stress. For reliable, local, and top-rated results, Lakeside trusts us to protect what matters most.",
    image: "/images/image-42.webp",
    alt: "Allied Restoration water damage restoration team in Lakeside, MT",
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
