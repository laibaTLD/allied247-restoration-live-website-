import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Script from "next/script";
import { fetchLandingPageForSSG } from "@/lib/database";
import { ChatProvider } from "@/components/chat/ChatProvider";
import ChatWidget from "@/components/chat/ChatWidget";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fallbackMetadata: Metadata = {
  title: "Get Now Experienced Damage Restoration Services Contractor in Kalispell, MT | Allied 24/7 Restoration",
  description: "Allied 24/7 Restoration of Kalispell is your trusted partner when it comes to water & fire damage restoration, specialty cleaning, construction, mold mitigation, We offer 24-hour emergency service for restoration in homes and businesses.",
  icons: {
    icon: '/Favicon.svg',
  },
  other: {
    'google-site-verification': 'JTyoB2mSgCwOR5PjuQJqYHmHnUlYad5V3YUDJTkCAEQ',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    return fallbackMetadata;
  }

  const landingPageData = await fetchLandingPageForSSG(templateId, id);

  const resolvedTitle =
    landingPageData?.seoData?.title ||
    landingPageData?.businessName ||
    fallbackMetadata.title;
  const resolvedDescription =
    landingPageData?.seoData?.description || fallbackMetadata.description;

  return {
    ...fallbackMetadata,
    title: resolvedTitle,
    description: resolvedDescription,
    icons: {
      icon: '/Favicon.svg',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${openSans.variable} antialiased`}
      >
        <ChatProvider>
          {children}
          <ChatWidget />
        </ChatProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y1QXJN326X" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Y1QXJN326X');
          `}
        </Script>
      </body>
    </html>
  );
}
