import { Metadata } from 'next';
import BusinessOverviewSection from '@/sections/BusinessOverviewSection';
import Navbar from '@/components/Navbar';
import FooterSection from '@/sections/FooterSection';
import { fetchLandingPageForSSG } from '@/lib/database';
import { LandingPageData } from '@/types/template';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Contact Allied Restoration | 24/7 Emergency Restoration Services',
  description: 'Need emergency restoration services? Contact Allied Restoration for 24/7 water damage restoration, fire damage repair, and mold remediation in your area. Quick response, professional service.',
};

// Mock data - in a real app, this would come from your database or CMS
const mockBusinessData = {
  email: 'tim@allied247restoration.com',
  phone: '4067564357',
  address: {
    street: '1091 Rose Crossing',
    city: 'Kalispell',
    state: 'MT',
    zipCode: '59901',
  },
  coordinates: {
    latitude: 48.2165,
    longitude: -114.295,
  },
  hours: {
    schedule: [
      { day: 'Monday', periods: [{ open: '9:00 AM', close: '5:00 PM' }] },
      { day: 'Tuesday', periods: [{ open: '9:00 AM', close: '5:00 PM' }] },
      { day: 'Wednesday', periods: [{ open: '9:00 AM', close: '5:00 PM' }] },
      { day: 'Thursday', periods: [{ open: '9:00 AM', close: '5:00 PM' }] },
      { day: 'Friday', periods: [{ open: '9:00 AM', close: '5:00 PM' }] },
      { day: 'Saturday', periods: [{ open: '10:00 AM', close: '2:00 PM' }] },
      { day: 'Sunday', periods: [] }, // Closed
    ],
  },
};

const contactContent = {
  title: 'Get in Touch',
  description: 'Have questions or need a quote? Fill out the form and we\'ll get back to you as soon as possible.',
  showMap: true,
};

async function getLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    console.error('Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID');
    notFound();
  }

  const landingPageData = await fetchLandingPageForSSG(templateId!, id!);

  if (!landingPageData) {
    console.error(`Landing page not found: templateId=${templateId}, id=${id}`);
    notFound();
  }

  return landingPageData;
}

export default async function ContactPage() {
  const landingPageData = await getLandingPageData();
  return (
    <>
      <Navbar
        businessName={landingPageData.businessName}
        logoImage={landingPageData.images?.find((img) => img.slotName === 'logo-image' || img.slotName === 'logo')?.imageUrl}
        themeData={landingPageData.themeData}
        phoneNumber={landingPageData.businessData?.phone}
        serviceAreas={landingPageData.businessData?.serviceAreas}
      />
      <main className="min-h-screen bg-white pt-28 sm:pt-32 md:pt-36">
        <BusinessOverviewSection
          contact={contactContent}
          businessData={mockBusinessData}
          theme={landingPageData.themeData}
          content={[]} // Empty array since we don't need the content section
        />
      </main>
      <FooterSection
        businessName={landingPageData.businessName}
        businessData={landingPageData.businessData}
        themeData={landingPageData.themeData}
      />
    </>
  );
}
