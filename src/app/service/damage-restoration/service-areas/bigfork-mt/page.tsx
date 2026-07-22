
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
  title: 'Certified & Trusted Damage Restoration in Bigfork, MT | Allied 24/7 Restoration',
  description: 'Allied 24/7 Restoration provides immediate, reliable water, fire, storm & mold damage restoration in Bigfork, MT. Call now for trusted, certified experts available 24/7!',
  openGraph: {
    title: 'Certified & Trusted Damage Restoration in Bigfork, MT | Allied 24/7 Restoration',
    description: 'Allied 24/7 Restoration provides immediate, reliable water, fire, storm & mold damage restoration in Bigfork, MT. Call now for trusted, certified experts available 24/7!',
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
  title: "Certified & Professional #1 Residential or Commercial Buildings Water or Mold Damage Restoration Services Contractor Bigfork MT",
  areaLabel: "Bigfork, MT",
  description:
    "Trust Allied Restoration, your local #1 certified specialist for professional and affordable water and mold damage restoration in Bigfork, MT. From flooded roofs to moldy walls, our skilled, 24/7 team provides trusted, expert service to restore your home or business.",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our compassionate, professional team provides personalized support to guide you through every step of restoration.",
    },
    {
      title: "Quick Response",
      description:
        "We arrive fast in Bigfork to mitigate water damage, saving your property with immediate, expert action.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our certified specialists are always available to handle your emergency restoration needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional & Award-Winning Mold and Water Damage Cleanup or Restoration Services Contractor or Agency Bigfork MT?",
  paragraphs: [
    "When disaster strikes your property, you need more than just a quick fix; you need the skilled or professional residential or commercial buildings mold or flood water restoration or cleanup repair services contractor Bigfork MT trusts most. At Allied Restoration, we understand that water and mold issues require immediate, expert intervention to prevent long-term structural damage and health risks. As a professional local permanent residential or commercial mold or water damage furniture, walls and roof restoration cleanup services contractor or agency Bigfork MT, we specialize in comprehensive recovery.Whether it’s a burst pipe ruining your hardwood or mold spreading through your attic, our team utilizes advanced technology to dry, sanitize, and rebuild. We are proud to be the trusted and premier commercial buildings flood water or mold damage cleanup contractor Bigfork MT businesses rely on to minimize downtime and protect their investments. Time is of the essence in any emergency. That is why we maintain a certified mobile unit water remediation or restoration specialist services agency or contractor service Bigfork MT that is ready to deploy at a moment's notice. We provide local and affordable emergency water remediation or restoration cleanup services Bigfork MT residents can depend on 24/7. From initial inspection to final repairs, Allied Restoration ensures your environment is safe, dry, and fully restored to its original condition with unmatched professionalism.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "How quickly can you respond to a water emergency?",
      answer:
        "As the premier Allied Restoration team, we provide a 24/7 rapid response throughout Bigfork. Our mobile units arrive promptly to extract water and begin structural drying, preventing secondary damage and ensuring your residential or commercial property is secured immediately.",
    },
    {
      question: " Are your mold remediation services permanent and safe?",
      answer:
        "Yes, we are a skilled and professional trusted water and mold damage restoration or repairing and water remediation services contractor. We use eco-friendly sanitizers and advanced HEPA filtration to eliminate spores permanently, ensuring a healthy environment for your family.",
    },
    {
      question: "Do you assist with insurance claims for water damage?",
      answer:
        "Absolutely. Allied Restoration works directly with your insurance provider to streamline the claims process. We provide detailed documentation and professional inspections, making the restoration of your Bigfork home or office as stress-free and affordable as possible during an emergency.",
    },
    {
      question: "Can you restore moldy furniture and drywall?",
      answer:
        "Our professional local permanent residential or commercial mold or water damage furniture, walls and roof restoration cleanup services specialize in saving assets. We use specialized equipment to clean and restore items, avoiding costly replacements whenever structural integrity is maintained.",
    },
    {
      question: "Why is professional water remediation necessary?",
      answer:
        "Hidden moisture can lead to structural rot and toxic mold growth within 48 hours. Hiring a certified or award winning water damage cleanup services experts contractor Bigfork MT ensures all moisture is removed using industrial-grade dehumidifiers for total safety.",
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
    "Allied Restoration - Your Trusted Premier No.1 Water Remediation, and Mold Restoration Services Expert Contractor, Company, Agency, Bigfork MT",
  subHeading: "",
  description:
    "Experience the gold standard with Allied Restoration, Bigfork's top-rated specialists. Our certified team delivers elite water remediation and mold restoration with 24/7 emergency response. We combine advanced technology with local expertise to protect your property and ensure a safe, healthy environment.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-9.jpg",
    alt: "Professional water and mold damage restoration services in Bigfork, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Allied Restoration provides comprehensive recovery solutions for any property crisis. As the skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor Bigfork MT, we specialize in rapid water extraction, structural drying, and expert mold remediation. From leak detection to full repairs, we ensure total restoration.`,
 service:[
  {
    heading:"Hire Now Most Trusted Local Residential Structural Water Damage Inspection Services Contractor Bigfork MT",
    
description:"When water infiltrates your home’s framework, every second counts. Allied Restoration is the premier and skilled on-time water damage repair or restoration services experts Bigfork MT homeowners rely on to protect their structural integrity. We don’t just dry surfaces; we perform deep inspections to identify hidden moisture trapped in foundations and crawlspaces.As a skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor Bigfork MT, we arrive fully equipped to stop the spread of rot. Our team utilizes industrial-grade dehumidifiers and moisture sensors to ensure your property is bone-dry. Choosing a professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services inspector or contractor or agency Bigfork MT means you get a comprehensive solution that covers everything from initial assessment to final structural reinforcement. We restore your peace of mind by ensuring your home remains safe and sound.",
 },
{
 heading:"Get the Local & Trusted Permanent 24/7 Emergency Home or Offices Mold Damage Restoration or Cleanup Services Contractor Bigfork MT",

description:"Mold doesn’t follow a 9-to-5 schedule, and neither do we. Allied Restoration provides immediate, high-stakes cleanup to prevent toxic spores from compromising your indoor air quality. Whether you are dealing with a localized outbreak or a large-scale infestation, we are the professional certified 24/7 home or offices flood water or mold and termite damage repair or restoration services inspector or contractor or agency Bigfork MT that delivers permanent results.Our specialists function as a skilled permanent mobile unit residential or commercial building water or mold damage restoration services contractor Bigfork MT, utilizing advanced HEPA filtration and antimicrobial treatments to sanitize your environment. We focus on total eradication and moisture control to prevent future growth. As the premier and skilled on-time water damage repair or restoration services experts Bigfork MT, we guarantee a rapid response for both residential and commercial sectors. Trust our local experts to clean, disinfect, and restore your office or home to a healthy, mold-free condition today."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Water Remediation and Mold Restoration and Cleanup Services Contractor or Company Bigfork MT",
  description: `When property damage occurs, you need the immediate intervention of Allied Restoration, the skilled & professional residential or commercial buildings water and mold damage repair or cleanup services specialist company or contractor Bigfork MT. We understand that whether it is a family home or a corporate office, water intrusion and fungal growth require a sophisticated, industrial-grade response to prevent permanent structural loss. As a trusted and top rated emergency water remediation or mold restoration services contractor or company expert Bigfork MT, our team is engineered for speed and precision. We arrive on-site with cutting-edge extraction tools and thermal imaging to find hidden moisture behind walls and under flooring.
Our reputation as a certified or award winning water damage cleanup services experts contractor Bigfork MT is built on our commitment to restoring your property to its pre-loss condition while maintaining the highest safety standards in the industry. No project is too complex for our skilled or licensed home or offices buildings flood water damage cleanup or restoration services contractor or company. From massive commercial floods to sensitive residential mold remediation, Allied Restoration provides a seamless, stress-free experience. We handle the heavy lifting, the deep cleaning, and the technical drying, ensuring your Bigfork property remains a safe, healthy, and durable environment for years to come.`,
  backgroundImage: {
    src: "/images/image-30.jpg",
    alt: "Professional water damage restoration team in Bigfork, MT",
  },
  secondImage: {
    src: "/images/image-31.webp",
    alt: "Water damage restoration equipment in Bigfork, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Water and Mold Damage Repairing or Restoration Experts Bigfork MT",
    description:
      "Finding a reliable partner during a property crisis is essential for your peace of mind. Allied Restoration stands as the premier choice, serving as the certified or trusted local no1 home or offices water and mold damage repairing or restoration experts Bigfork MT. We specialize in reversing the devastating effects of moisture and fungal growth, ensuring that your living or working environment is returned to a pristine, healthy state. Our team is trained to handle the unique climate challenges of Montana, providing localized expertise that national chains simply cannot match. As an experienced high-qualified affordable emergency flood water or mold damage repairing or restoration and cleanup services provider company or agency Bigfork MT, we pride ourselves on our rapid response times.We know that standing water can lead to structural compromise and hazardous mold colonies within just 24 to 48 hours. By utilizing state-of-the-art drying technology and eco-friendly sanitization methods, Allied Restoration mitigates these risks effectively and affordably. Whether you are dealing with a localized leak in a residential basement or a large-scale flood in a commercial office complex, we provide the high-quality craftsmanship required for a full recovery. We don't just patch the problem; we identify the root cause, repair the damage, and implement preventative measures. Trust our expert team to deliver the professional cleanup and restoration services you deserve.",
    image: "/images/image-32.webp",
    alt: "Water damage extraction and drying equipment in Bigfork, MT",
  },
  row2: {
    heading: "Our Service Areas for Water and Mold Damage Remediation or Restoration Services",
    description:
      "Allied Restoration is proud to provide rapid-response emergency support across the entire Flathead Valley, ensuring that local property owners have access to elite restoration expertise whenever disaster strikes. Our primary service hub is located in Bigfork MT, where we serve as the region's top-rated specialists for flood and fungal recovery. However, our mobile units are strategically stationed to ensure we can arrive on-site quickly in Kalispell MT, providing essential water extraction and structural drying for both residential and commercial properties. We also maintain a strong presence in Whitefish MT, helping homeowners protect their investments against the harsh Montana elements and moisture-related issues.For those residing in Columbia Falls MT, our certified technicians offer comprehensive mold remediation and water damage repairs with the same level of professionalism and care. Additionally, we extend our trusted restoration and cleanup services to the community of Lakeside MT, ensuring that every neighbor along the shore has a reliable partner to call for 24/7 emergency remediation. No matter where you are located within these areas, our team is dedicated to restoring your property to its pre-loss condition with efficiency and local pride.",
    image: "/images/image-33.jpg",
    alt: "Mold remediation and water damage repair in Bigfork, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration for Your Buildings Flood Water or Mold Damage Restoration or Water Remediation Services Bigfork MT?",
    description:
      "Choosing the right partner for property recovery is the most critical decision you will make following a disaster. Allied Restoration has earned its reputation as the skilled and professional trusted water and mold damage restoration or repairing and water remediation services contractor in Bigfork MT by consistently delivering excellence under pressure. We don’t just provide a service; we provide a lifeline to property owners facing the overwhelming aftermath of floods, leaks, or fungal infestations. There are several key reasons why Allied Restoration stands above the rest in the Flathead Valley. First, our local expertise allows us to respond with unmatched speed, which is vital for effective water remediation.Second, we employ cutting-edge technology—including moisture mapping and industrial-grade air scrubbers—to ensure that every trace of damage is eliminated. Furthermore, as a skilled and professional trusted water and mold damage restoration or repairing and water remediation services contractor in Bigfork MT, we prioritize transparent communication and affordable pricing. We work closely with insurance providers to streamline your claims process, reducing your stress during a difficult time. When you choose us, you are choosing a team dedicated to restoring your building’s safety, value, and comfort with uncompromising professional standards.",
    image: "/images/image-34.webp",
    alt: "Allied Restoration water damage restoration team in Bigfork, MT",
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
