"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Search, Target, Bell } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

interface FeatureTeaserProps {
  badge?: string;
  title: string;
  highlightText: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  linkText: string;
  imageAlt: string;
  reverse?: boolean;
}

const FeatureTeaser = ({
  badge,
  title,
  highlightText,
  description,
  icon,
  href,
  linkText,
  imageAlt,
  reverse = false
}: FeatureTeaserProps) => {
  const { theme } = useTheme();

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`space-y-6 ${reverse ? 'lg:order-2' : ''}`}>
        {badge && (
          <Badge variant="outline" className="text-sm py-2">
            <span className="text-primary">{badge}</span>
          </Badge>
        )}

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-bold">
              {title}
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                {highlightText}
              </span>
            </h3>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
            <Button asChild variant="link" className="p-0 h-auto font-semibold group">
              <Link href={href}>
                {linkText}
                <ArrowRight className="size-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-3xl"></div>
        <Image
          width={600}
          height={400}
          className="relative w-full rounded-lg border border-secondary"
          src={theme === "light" ? "/hero-image-light.jpeg" : "/hero-image-dark.jpeg"}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export const FeatureTeasersSection = () => {
  return (
    <section className="container w-full py-20 md:py-32">
      <div className="mx-auto lg:max-w-screen-xl space-y-24 md:space-y-32">
        <FeatureTeaser
          title="Your AI analyst, "
          highlightText="always at hand"
          description="Intelligent AI side panel for instant analysis. Access customized prompts, chat with earnings transcripts, and get real-time insights without interrupting your research workflow."
          icon={<Bot className="h-10 w-10 text-primary" />}
          href="/features#ai-sidepanel"
          linkText="Learn about AI Side Panel"
          imageAlt="AI Side Panel Interface"
        />

        <FeatureTeaser
          title="Find "
          highlightText="every insight that matters"
          description="Advanced transcript search engine powered by semantic AI. Search across thousands of earnings calls and investor presentations to uncover key insights, track management guidance, and analyze sentiment."
          icon={<Search className="h-10 w-10 text-primary" />}
          href="/features#transcript-search"
          linkText="Learn about Transcript Search"
          imageAlt="Transcript Search Interface"
          reverse
        />

        <FeatureTeaser
          badge="Accuracy Tracking"
          title="Judge "
          highlightText="analyst accuracy objectively"
          description="Track analyst performance and rating accuracy over time. Evaluate how well analysts have performed on their past calls and identify the most reliable voices in equity research."
          icon={<Target className="h-10 w-10 text-primary" />}
          href="/features#analyst-ratings"
          linkText="Learn about Analyst Ratings"
          imageAlt="Analyst Ratings Interface"
        />

        <FeatureTeaser
          title="Never miss "
          highlightText="opportunities again"
          description="Intelligent alerts for price changes, earnings announcements, analyst upgrades, and custom triggers. Stay ahead of market movements with notifications that matter to your portfolio."
          icon={<Bell className="h-10 w-10 text-primary" />}
          href="/features#notifications"
          linkText="Learn about Smart Notifications"
          imageAlt="Smart Notifications Interface"
          reverse
        />
      </div>
    </section>
  );
};
