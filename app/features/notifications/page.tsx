import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { NotificationsHeroSection } from "@/components/layout/sections/notifications-hero";

export const metadata = {
  title: "Smart Notifications - FinAlpha",
  description: "Never miss important market movements or company updates. Intelligent alerts for price changes, earnings announcements, analyst upgrades, and custom triggers.",
  openGraph: {
    type: "website",
    url: "https://finalpha.com/features/notifications",
    title: "Smart Notifications - FinAlpha",
    description: "Never miss important market movements or company updates. Intelligent alerts for price changes, earnings announcements, analyst upgrades, and custom triggers.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "FinAlpha Smart Notifications Feature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://finalpha.com/features/notifications",
    title: "Smart Notifications - FinAlpha",
    description: "Never miss important market movements or company updates. Intelligent alerts for price changes, earnings announcements, analyst upgrades, and custom triggers.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function NotificationsPage() {
  return (
    <>
      <NotificationsHeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <FooterSection />
    </>
  );
}