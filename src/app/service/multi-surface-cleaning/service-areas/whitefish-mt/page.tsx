
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
  title: 'Multi-Surface Cleaning Services in Whitefish, MT | Allied 24/7 Restoration',
  description: 'Professional multi-surface cleaning services in Whitefish, MT. Certified specialists provide comprehensive cleaning for residential and commercial properties. Available 24/7—call now for expert service!',
  openGraph: {
    title: 'Multi-Surface Cleaning Services in Whitefish, MT | Allied 24/7 Restoration',
    description: 'Professional multi-surface cleaning services in Whitefish, MT. Certified specialists provide comprehensive cleaning for residential and commercial properties. Available 24/7—call now for expert service!',
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
  title: "Certified & Professional #1 Buildings Multi Surface Cleaning Services Contractor Whitefish MT",
  areaLabel: "Whitefish, MT",
  description:
    "Experience professional and affordable residential or commercial cleaning with Allied Restoration. From tiles and grout to window glass, our certified contractors provide same-day, expert service. Local, trusted, and skilled—we keep Whitefish properties pristine. Get your free estimate today!",
  subheading: "Reclaim your space with Allied Restoration",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our skilled Whitefish team provides professional, personable service to restore your home or commercial property.",
    },
    {
      title: "Quick Response",
      description:
        "Need same-day multi-surface cleaning? Allied Restoration arrives fast to handle your urgent local cleaning needs.",
    },
    {
      title: "24/7 Support",
      description:
        "Count on our trusted contractors for professional property cleaning and expert inspections, available any time daily.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Trusted Window Glass, Tiles, and Slabs Cleaning Services Contractor or Company in Whitefish MT?",
  paragraphs: [
    "Finding a skilled or professional all new or old home emergency multi surface cleaning services contractor in Whitefish, MT is essential for maintaining your property’s value and aesthetic. At Allied Restoration, we pride ourselves on being the trusted and premier window glass cleaning contractor in Whitefish, MT, offering specialized care for every corner of your building. Whether you require a professional emergency window glass, tiles, and kitchen or washroom slabs cleaning services company in Whitefish, MT, or a certified multi surface cleaning services contractor Whitefish, MT for routine maintenance, our team delivers excellence. We function as a local and affordable fully home floor or driveways cleaning restoration services contractor Whitefish, MT, ensuring that exterior surfaces look as pristine as your interiors.As an experienced and trusted all kind buildings multi surface cleaning services contractor or company in Whitefish, MT, we understand the unique environmental challenges of the region. Our skilled or insured multi surface cleaning services contractor or agency Whitefish, MT utilizes advanced techniques to treat delicate tiles and heavy-duty slabs alike. From emergency spills to restorative deep cleans, Allied Restoration remains the top choice for homeowners and businesses seeking reliability. We combine technical expertise with local commitment to provide unparalleled results for every client. Trust our experts to restore your surfaces to their original glory with efficiency and professional care.",
  ],
};



const FAQ_SECTION = {
  title: "FAQs",
  description:
    "Get detailed answers about our services in Bigfork, MT.",
  questions: [
    {
      question: "What surfaces does Allied Restoration clean?",
      answer:
        "As a certified multi surface cleaning services contractor Whitefish MT, we handle tiles, grout, kitchen slabs, concrete, and windows. Our team is skilled in both residential and commercial interior or exterior cleaning, ensuring every surface on your property looks brand new.",
    },
    {
      question: "Do you offer emergency cleaning services?",
      answer:
        "Yes! We are a certified emergency multi surface cleaning services contractor Whitefish MT. Whether you have an urgent spill or need a same-day deep clean for your home or office, our local team responds quickly to restore your property’s appearance.",
    },
    {
      question: " Are your cleaning products safe for my family?",
      answer:
        "Absolutely. We are the local No1 eco-friendly surface cleaning services contractor Whitefish MT. Allied Restoration uses green, sustainable solutions that are powerful enough to remove grime but safe for children, pets, and the beautiful Montana environment we all share.",
    },
    {
      question: "Do you provide move-in/move-out cleaning?",
      answer:
        "Yes, we are an experienced local and trusted move-in move-out surface cleaning services company Whitefish MT. We provide deep restorative cleaning for floors, walls, and ceilings to ensure your new home is perfectly sanitized before you even unload the truck.",
    },
    {
      question: "Which areas in the Flathead Valley do you serve?",
      answer:
        "We are the premier multi surface cleaning services contractor for Whitefish MT, Kalispell MT, Bigfork MT, Columbia Falls MT, and Lakeside MT. We travel across the region to provide top-rated cleaning for all kinds of residential and commercial buildings.",
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
    "Allied Restoration - Your Trusted Premier No.1 Multi Surface Cleaning Services Contractor, Company or Agency Whitefish MT",
  subHeading: "",
  description:
    "Experience excellence with Allied Restoration, the top-rated choice for property care. As your certified local experts, we provide professional interior and exterior solutions, including specialized tile, grout, and window cleaning. Trust our skilled team for affordable, high-quality results today!",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/images/image-1.jpg",
    alt: "Professional multi-surface cleaning services in Whitefish, MT",
  },
  overlayText:
    "Junk Butlers delivers reliable hauling solutions designed specifically for Sun City residents and businesses. From residential clea to commercial demolition debris, our professional crew ensures safe, efficient, and eco-friendly disposal every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `As the premier certified and trusted all kinds buildings multi surface cleaning services contractor or company Whitefish, MT, Allied Restoration offers comprehensive care. From skilled residential or commercial buildings interior or exterior surface cleaning to expert carpet and rug restoration, we deliver professional, local solutions tailored to your property.`,
 service:[
  {
    heading:"Hire Now Most Trusted Basement Deep Multi-Surface Cleaning Services Contractor in Whitefish, MT",
    
description:"When moisture and grime settle into your lower levels, you need Allied Restoration, the most certified and trusted all kinds buildings multi surface cleaning services contractor or company Whitefish, MT has to offer. Basements require specialized care to prevent long-term damage, and our team excels as a premier and skilled carpet and rug cleaning services contractor Whitefish, MT, ensuring that even your below-grade textiles are fresh and allergen-free.We serve as a skilled residential or commercial buildings interior or exterior surface cleaning services contractor, agency or company in Whitefish, MT, tackling everything from concrete floors to finished basement walls. Our deep-cleaning protocols remove deep-seated dirt and odors, restoring your basement to a safe, livable environment. By choosing a local and trusted expert, you ensure that your property’s foundation remains pristine and professionally maintained. Whether it is a post-flood cleanup or a seasonal deep scrub, we provide the industrial-grade equipment and expertise needed for a total transformation.",
 },
{
 heading:"Local & Trusted Emergency Interior or Exterior Surface Cleaning Services Contractor or Company in Whitefish, MT",

description:"In the event of an unexpected mess or property emergency, Allied Restoration stands ready as your skilled residential or commercial buildings interior or exterior surface cleaning services contractor, agency or company in Whitefish, MT. We understand that time is of the essence, which is why we are recognized as the certified and trusted all kinds buildings multi surface cleaning services contractor or company Whitefish, MT residents rely on for rapid response.From removing exterior pollutants that mar your curb appeal to detailed interior sanitization, our technicians handle it all. We also operate as a premier and skilled carpet and rug cleaning services contractor Whitefish, MT, reviving high-traffic areas in offices and homes alike. Our commitment to excellence ensures that every slab, tile, and window is treated with professional-grade care. Don't let property maintenance fall behind; hire the local experts who prioritize your schedule and your budget. We bring the tools and the talent to ensure your building looks brand new, inside and out, regardless of the emergency."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Multi Surface Cleaning Services Contractor Whitefish MT",
  description: `If you are searching for a skilled and top-rated multi surface cleaning services contractor Whitefish MT, look no further than the experts at Allied Restoration. We have built a reputation as the most skilled & professional multi surface cleaning services, contractor or company in Whitefish MT, providing meticulous care for every inch of your property. Our team understands that different materials require specialized approaches, which is why we employ advanced techniques for both delicate and heavy-duty surfaces. For those managing industrial or residential spaces, we serve as a skilled home or offices home concrete surface cleaning services contractor Whitefish MT. We effectively remove deep-seated oil stains, grime, and environmental buildup from driveways, walkways, and garage floors.
Beyond just the floors, we are also a certified home or offices buildings wall and ceiling cleaning services contractor Whitefish MT, helping you eliminate dust, soot, and allergens that accumulate in hard-to-reach areas. At Allied Restoration, we balance power with precision. Whether you are dealing with a post-construction cleanup or routine maintenance, our local team ensures your environment is pristine and healthy. Our commitment to being the premier skilled & professional multi surface cleaning services, contractor or company in Whitefish MT means we never cut corners. Choose a team that is insured, certified, and dedicated to restoring the beauty of your Whitefish property today.`,
  backgroundImage: {
    src: "/images/image-2.jpg",
    alt: "Multi-surface cleaning team in Whitefish, MT",
  },
  secondImage: {
    src: "/images/image-3.jpg",
    alt: "Multi-surface cleaning equipment in Whitefish, MT",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Eco-friendly Surface Cleaning Services Contractor Whitefish MT",
    description:
      "When it comes to maintaining a healthy environment, choosing a certified or trusted local no1 eco-friendly surface cleaning services contractor Whitefish MT is the best investment you can make for your property. Allied Restoration is proud to lead the industry by combining powerful cleaning technology with green, sustainable practices. We are recognized as the experienced high-qualified local and trusted move-in move-out surface cleaning services company, contractor Whitefish MT, ensuring that transitioning between homes is seamless, sanitized, and stress-free. For business owners, we provide a skilled & professional commercial floor and surface cleaning services contractor or company in Whitefish MT that understands the high-traffic demands of retail and office spaces.Our eco-friendly solutions effectively lift grime without leaving behind harsh chemical residues. Furthermore, as a skilled home or offices multi surface cleaning services contractor Whitefish MT, we tailor our methods to suit diverse materials, from hardwood and tile to natural stone. Emergencies don't wait, and neither do we. As a certified emergency multi surface cleaning services contractor Whitefish MT, our team is ready to respond to urgent spills or environmental hazards with speed and precision. Allied Restoration is dedicated to preserving the natural beauty of Whitefish while keeping your interiors spotless. Trust our local experts to provide a deep, restorative clean that protects both your family and the planet.",
    image: "/images/image-4.jpg",
    alt: "Eco-friendly multi-surface cleaning services in Whitefish, MT",
  },
  row2: {
    heading: "Our Services Areas for All Kind Buildings Multi Surface Cleaning Services Contractor",
    description:
      "As the region’s premier multi surface cleaning services contractor, Allied Restoration is proud to provide extensive coverage across the Flathead Valley. We specialize in maintaining all kind buildings, offering elite restoration and cleaning solutions that cater to both residential and commercial property owners. Our primary service hub is in Whitefish MT, where we have established a reputation for excellence and reliability. However, our mobile teams are also highly active in Kalispell MT, delivering professional-grade cleaning for high-traffic business centers and suburban homes alike.For those located near the water, we are the experts in Bigfork MT and Lakeside MT, providing specialized care that protects properties from the unique environmental wear found in lakeside communities. Additionally, we serve the growing community of Columbia Falls MT, ensuring that every homeowner and local business has access to certified, top-tier surface restoration. Whether you are managing a downtown office or a mountain retreat, our reach ensures that a local, trusted expert is always nearby. By choosing Allied Restoration, you are partnering with a team that knows the local landscape and is dedicated to keeping the entire Flathead region pristine, one surface at a time.",
    image: "/images/image-6.jpg",
    alt: "Same day multi-surface cleaning services in Whitefish, MT",
  },
  row3: {
    heading:
      "Why Choose Allied Restoration Contractor or Company for Your Commercial or Residential Buildings Multi Surface Cleaning Services Contractor Whitefish MT?",
    description:
      "Choosing the right partner for property maintenance is vital, which is why property owners consistently choose Allied Restoration. As a skilled and professional multi surface cleaning services contractor in Whitefish, MT, we bring a level of precision and dedication that stands out in the industry. Our reputation is built on a foundation of trust, quality, and local expertise, ensuring that every project—regardless of size—is executed to the highest standard. Choosing Allied Restoration means you are opting for a multi surface cleaning services contractor Whitefish, MT that understands the specific needs of Montana properties.We use state-of-the-art equipment and eco-friendly solutions to protect your investment while delivering a deep, restorative clean. Whether you manage a high-traffic commercial facility or a private residential estate, our team provides the reliability you deserve. We offer transparent pricing, flexible scheduling, and a satisfaction guarantee that has made us the top-rated skilled and professional multi surface cleaning services contractor in Whitefish, MT. From our rapid emergency response to our meticulous attention to detail on tiles, grout, and glass, we provide a seamless experience that restores the beauty and value of your building.",
    image: "/images/image-9.jpg",
    alt: "Allied Restoration multi-surface cleaning team in Whitefish, MT",
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
