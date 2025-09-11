import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { AnalystRatingsHeroSection } from "@/components/layout/sections/analyst-ratings-hero";

export const metadata = {
  title: "Analyst Ratings - FinAlpha",
  description: "Track analyst performance and rating accuracy. Evaluate how well analysts have performed on their past calls and identify the most reliable voices in equity research.",
  openGraph: {
    type: "website",
    url: "https://finalpha.com/features/analyst-ratings",
    title: "Analyst Ratings - FinAlpha",
    description: "Track analyst performance and rating accuracy. Evaluate how well analysts have performed on their past calls and identify the most reliable voices in equity research.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "FinAlpha Analyst Ratings Feature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://finalpha.com/features/analyst-ratings",
    title: "Analyst Ratings - FinAlpha",
    description: "Track analyst performance and rating accuracy. Evaluate how well analysts have performed on their past calls and identify the most reliable voices in equity research.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function AnalystRatingsPage() {
  return (
    <>
      <AnalystRatingsHeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <FooterSection />
    </>
  );
}