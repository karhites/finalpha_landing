import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { CoreFeaturesSection } from "@/components/layout/sections/core-features";
import { FAQSection } from "@/components/layout/sections/faq";
import { FinalCTASection } from "@/components/layout/sections/final-cta";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "FinAlpha - AI-Powered Equity Research Platform",
  description: "Transform your investment workflow with AI-powered analysis of SEC filings, earnings transcripts, and analyst ratings. Institution-grade financial intelligence.",
  openGraph: {
    type: "website",
    url: "https://finalpha.com",
    title: "FinAlpha - AI-Powered Equity Research Platform",
    description: "Transform your investment workflow with AI-powered analysis of SEC filings, earnings transcripts, and analyst ratings. Institution-grade financial intelligence.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "FinAlpha - AI-Powered Equity Research Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://finalpha.com",
    title: "FinAlpha - AI-Powered Equity Research Platform",
    description: "Transform your investment workflow with AI-powered analysis of SEC filings, earnings transcripts, and analyst ratings. Institution-grade financial intelligence.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <CoreFeaturesSection />
      <BenefitsSection />
      <TestimonialSection />
      <CommunitySection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
    </>
  );
}
