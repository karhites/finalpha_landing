import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { TranscriptSearchHeroSection } from "@/components/layout/sections/transcript-search-hero";

export const metadata = {
  title: "Transcript Search - FinAlpha",
  description: "Advanced transcript search engine for earnings calls and investor presentations. Find key insights, track management guidance, and analyze sentiment across thousands of transcripts.",
  openGraph: {
    type: "website",
    url: "https://finalpha.com/features/transcript-search",
    title: "Transcript Search - FinAlpha",
    description: "Advanced transcript search engine for earnings calls and investor presentations. Find key insights, track management guidance, and analyze sentiment across thousands of transcripts.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "FinAlpha Transcript Search Feature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://finalpha.com/features/transcript-search",
    title: "Transcript Search - FinAlpha",
    description: "Advanced transcript search engine for earnings calls and investor presentations. Find key insights, track management guidance, and analyze sentiment across thousands of transcripts.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function TranscriptSearchPage() {
  return (
    <>
      <TranscriptSearchHeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <FooterSection />
    </>
  );
}