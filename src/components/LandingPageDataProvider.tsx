import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeData {
  primaryColor?: string;
  secondaryColor?: string;
}

interface ServicesData {
  services?: unknown[];
}

interface ServicesDetailsData {
  servicesDetails?: unknown[];
}

interface ContentData {
  services?: ServicesData;
  servicesDetails?: ServicesDetailsData;
}

interface ImageData {
  slotName?: string;
  imageUrl?: string;
}

interface LandingPageData {
  themeData?: ThemeData;
  content?: ContentData;
  images?: ImageData[];
}

interface LandingPageDataContextType {
  landing?: LandingPageData;
}

const LandingPageDataContext = createContext<LandingPageDataContextType>({});

interface LandingPageDataProviderProps {
  children: ReactNode;
  data?: LandingPageData;
}

export default function LandingPageDataProvider({ 
  children, 
  data = {} 
}: LandingPageDataProviderProps) {
  const contextValue: LandingPageDataContextType = {
    landing: data
  };

  return (
    <LandingPageDataContext.Provider value={contextValue}>
      {children}
    </LandingPageDataContext.Provider>
  );
}

export function useLandingPageData(): LandingPageData | undefined {
  const context = useContext(LandingPageDataContext);
  return context.landing;
}
