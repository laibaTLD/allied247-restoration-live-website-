import type { Metadata } from "next";
import Script from "next/script";
import LazyChat from "@/components/chat/LazyChat";
import "./globals.css";

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

export const metadata: Metadata = fallbackMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17907036311"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17907036311');
            gtag('config', 'G-Y1QXJN326X');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
        <LazyChat />
      </body>
    </html>
  );
}
