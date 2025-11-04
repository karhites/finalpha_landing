import { FeaturesDetailedSection } from "@/components/layout/sections/features-detailed";
import { FinalCTASection } from "@/components/layout/sections/final-cta";
import { FooterSection } from "@/components/layout/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Search, Target, Bell } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Features - FinAlpha AI-Powered Equity Research",
  description: "Explore FinAlpha's powerful features: AI Side Panel, Transcript Search, Analyst Ratings, and Smart Notifications. Everything you need to research smarter.",
  openGraph: {
    type: "website",
    url: "https://finalpha.com/features",
    title: "Features - FinAlpha AI-Powered Equity Research",
    description: "Explore FinAlpha's powerful features: AI Side Panel, Transcript Search, Analyst Ratings, and Smart Notifications. Everything you need to research smarter.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "FinAlpha Features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://finalpha.com/features",
    title: "Features - FinAlpha AI-Powered Equity Research",
    description: "Explore FinAlpha's powerful features: AI Side Panel, Transcript Search, Analyst Ratings, and Smart Notifications. Everything you need to research smarter.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function FeaturesPage() {
  return (
    <>
      {/* Features Hero */}
      <section className="container w-full">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
          <div className="text-center space-y-8 max-w-4xl">
            <Badge variant="outline" className="text-sm py-2">
              <span className="text-primary">Platform Capabilities</span>
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold">
              Everything you need to
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                research smarter
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful AI-driven tools for equity research, designed to give you an institutional edge.
              From intelligent search to performance tracking, FinAlpha has you covered.
            </p>

            {/* Quick Nav to Features */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Button asChild variant="outline" size="sm">
                <Link href="#ai-sidepanel" className="flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  AI Side Panel
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="#transcript-search" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Transcript Search
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="#analyst-ratings" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Analyst Ratings
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="#notifications" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Smart Notifications
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <FeaturesDetailedSection />

      {/* Platform Features Overview */}
      <section className="container w-full py-16 md:py-24 bg-muted/30">
        <div className="mx-auto lg:max-w-screen-xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Built on a foundation of
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                institutional-grade data
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every feature is powered by comprehensive data integration, real-time updates, and AI that understands financial markets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Dashboard & Interface</h3>
              <p className="text-muted-foreground">
                Fully customizable workspace with drag-and-drop widgets, saved layouts, and dark/light themes.
                Your research, your way.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Data Integration</h3>
              <p className="text-muted-foreground">
                SEC filings, earnings transcripts, real-time prices, insider transactions, and institutional holdings—all in one place.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Analysis Tools</h3>
              <p className="text-muted-foreground">
                Fundamental analysis suite, sentiment analysis engine, portfolio analytics, and custom screening tools.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Reliability & Security</h3>
              <p className="text-muted-foreground">
                99.9% uptime SLA, enterprise-grade security, SOC 2 compliance, and encrypted data storage.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">API Access</h3>
              <p className="text-muted-foreground">
                RESTful API for custom integrations, webhook support, and programmatic access to all platform features.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Shared watchlists, collaborative annotations, team dashboards, and research sharing capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />

      <FooterSection />
    </>
  );
}
