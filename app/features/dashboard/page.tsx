import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { DashboardHeroSection } from "@/components/layout/sections/dashboard-hero";

export const metadata = {
  title: "Customizable Dashboard - FinAlpha",
  description: "Efficient, customizable dashboard for comprehensive equity research. Monitor your watchlists, track market movements, and analyze investment opportunities in one unified interface.",
  openGraph: {
    type: "website",
    url: "https://finalpha.com/features/dashboard",
    title: "Customizable Dashboard - FinAlpha",
    description: "Efficient, customizable dashboard for comprehensive equity research. Monitor your watchlists, track market movements, and analyze investment opportunities in one unified interface.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "FinAlpha Dashboard Feature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://finalpha.com/features/dashboard",
    title: "Customizable Dashboard - FinAlpha",
    description: "Efficient, customizable dashboard for comprehensive equity research. Monitor your watchlists, track market movements, and analyze investment opportunities in one unified interface.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function DashboardPage() {
  return (
    <>
      <DashboardHeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <FooterSection />
    </>
  );
}