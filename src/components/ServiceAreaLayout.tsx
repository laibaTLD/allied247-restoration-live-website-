import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";
import { LandingPageData } from "@/types/template";
import { ReactNode } from "react";

interface ServiceAreaLayoutProps {
  landingPageData: LandingPageData;
  children: ReactNode;
}

export default function ServiceAreaLayout({
  landingPageData,
  children,
}: ServiceAreaLayoutProps) {
  return (
    <Layout
      theme={landingPageData.themeData}
      seoData={landingPageData.seoData}
      landingPageData={landingPageData}
    >
      <div className="animate-fade-in-up">
        <Navbar
          businessName={landingPageData.businessName}
          logoImage={landingPageData.images?.find((img) => img.slotName === 'logo-image' || img.slotName === 'logo')?.imageUrl}
          themeData={landingPageData.themeData}
          phoneNumber={landingPageData.businessData?.phone}
        />
        <main className="bg-white">{children}</main>
        <FooterSection
          businessName={landingPageData.businessName}
          businessDescription={
            landingPageData.content?.about?.description ||
            "Professional services you can trust. We're here to help with all your business needs."
          }
          businessData={landingPageData.businessData}
          themeData={landingPageData.themeData}
        />
      </div>
    </Layout>
  );
}
