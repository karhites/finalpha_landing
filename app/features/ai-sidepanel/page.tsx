import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { AISidepanelHeroSection } from "@/components/layout/sections/ai-sidepanel-hero";

export const metadata = {
  title: "AI Side Panel - FinAlpha",
  description: "Intelligent AI assistant for quick analysis. Access customized prompts, chat with transcripts, and get instant insights without leaving your workflow.",
  openGraph: {
    type: "website",
    url: "https://finalpha.com/features/ai-sidepanel",
    title: "AI Side Panel - FinAlpha",
    description: "Intelligent AI assistant for quick analysis. Access customized prompts, chat with transcripts, and get instant insights without leaving your workflow.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "FinAlpha AI Side Panel Feature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://finalpha.com/features/ai-sidepanel",
    title: "AI Side Panel - FinAlpha",
    description: "Intelligent AI assistant for quick analysis. Access customized prompts, chat with transcripts, and get instant insights without leaving your workflow.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function AISidepanelPage() {
  return (
    <>
      <AISidepanelHeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <FooterSection />
    </>
  );
}