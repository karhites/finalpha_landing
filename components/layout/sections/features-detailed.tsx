"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, MessageSquare, Zap, Search, FileText, Filter, Target, TrendingUp, Users, Bell, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

interface FeatureDetailProps {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  ctaText: string;
  ctaHref: string;
}

const FeatureDetail = ({
  id,
  badge,
  title,
  subtitle,
  description,
  capabilities,
  ctaText,
  ctaHref
}: FeatureDetailProps) => {
  const { theme } = useTheme();

  return (
    <section id={id} className="scroll-mt-20 py-16 md:py-24">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {badge && (
            <Badge variant="outline" className="text-sm py-2">
              <span className="text-primary">{badge}</span>
            </Badge>
          )}
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* Screenshot/Demo */}
        <div className="relative max-w-5xl mx-auto my-12">
          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-3xl"></div>
          <Image
            width={1200}
            height={700}
            className="relative w-full rounded-lg border border-secondary"
            src={theme === "light" ? "/hero-image-light.jpeg" : "/hero-image-dark.jpeg"}
            alt={`${title} Interface`}
          />
        </div>

        {/* Key Capabilities */}
        <div className="max-w-5xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold">Key capabilities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-2">{capability.icon}</div>
                  <CardTitle className="text-lg">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Button asChild size="lg" className="group">
            <Link href={ctaHref}>
              {ctaText}
              <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto mt-16 md:mt-24 border-t border-secondary"></div>
    </section>
  );
};

export const FeaturesDetailedSection = () => {
  const aiSidepanelData: FeatureDetailProps = {
    id: "ai-sidepanel",
    title: "AI Side Panel",
    subtitle: "Your AI analyst, always at hand",
    description: "The AI Side Panel is your intelligent research companion that stays accessible throughout your workflow. Ask questions, analyze documents, and get instant insights without switching contexts. Powered by advanced language models, it understands financial terminology and delivers accurate, actionable analysis.",
    capabilities: [
      {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "Custom Prompts",
        description: "Pre-built and customizable AI prompts for common research tasks like earnings analysis, competitive positioning, and financial health checks."
      },
      {
        icon: <MessageSquare className="h-8 w-8 text-primary" />,
        title: "Transcript Chat",
        description: "Interactive conversations with earnings call transcripts. Ask about specific topics, management tone, guidance changes, or competitive dynamics."
      },
      {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Instant Insights",
        description: "Quick analysis and summaries without leaving your workspace. Get the key takeaways from lengthy documents in seconds."
      }
    ],
    ctaText: "Try AI Side Panel",
    ctaHref: "/#pricing"
  };

  const transcriptSearchData: FeatureDetailProps = {
    id: "transcript-search",
    badge: "Semantic Search",
    title: "Transcript Search",
    subtitle: "Search every word that matters",
    description: "Advanced semantic search across thousands of earnings calls and investor presentations. Our AI-powered search understands context and meaning, not just keywords. Find relevant insights even when companies use different terminology. Track management guidance, analyze sentiment shifts, and uncover competitive intelligence.",
    capabilities: [
      {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Semantic Search",
        description: "AI-powered search that understands context, synonyms, and financial concepts. Find what you mean, not just what you say."
      },
      {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Full Transcript Index",
        description: "Comprehensive database of earnings calls, investor presentations, and corporate communications going back years."
      },
      {
        icon: <Filter className="h-8 w-8 text-primary" />,
        title: "Advanced Filters",
        description: "Filter by company, date, sector, sentiment indicators, and speaker type (CEO, CFO, analyst) for precise results."
      }
    ],
    ctaText: "Try Transcript Search",
    ctaHref: "/#pricing"
  };

  const analystRatingsData: FeatureDetailProps = {
    id: "analyst-ratings",
    title: "Analyst Ratings",
    subtitle: "Judge analyst track records objectively",
    description: "Not all analyst opinions are created equal. Our Analyst Ratings system tracks historical performance, price target accuracy, and recommendation effectiveness for thousands of Wall Street analysts. See who consistently delivers alpha and whose recommendations underperform. Make more informed decisions about which research to trust.",
    capabilities: [
      {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Accuracy Tracking",
        description: "Historical accuracy scores for price targets and recommendations. See hit rates, average error margins, and timing effectiveness."
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Performance Metrics",
        description: "Comprehensive performance analytics across timeframes, including excess returns generated by following recommendations."
      },
      {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Analyst Rankings",
        description: "Identify top-performing analysts by sector, stock coverage, and firm. Filter by track record length and coverage universe."
      }
    ],
    ctaText: "Explore Analyst Ratings",
    ctaHref: "/#pricing"
  };

  const notificationsData: FeatureDetailProps = {
    id: "notifications",
    title: "Smart Notifications",
    subtitle: "Never miss opportunities again",
    description: "Stay informed without being overwhelmed. Smart Notifications use AI to filter out noise and alert you only when something truly important happens. Set custom rules based on price movements, insider transactions, analyst activity, earnings announcements, or any combination of triggers. Get notified via email, push notification, or in-app alerts.",
    capabilities: [
      {
        icon: <Bell className="h-8 w-8 text-primary" />,
        title: "Real-time Alerts",
        description: "Instant notifications for critical market events and price movements. Get alerted the moment conditions are met."
      },
      {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Smart Triggers",
        description: "AI-powered alerts based on patterns, unusual activity, and significant events. Reduces false positives while catching important signals."
      },
      {
        icon: <Settings className="h-8 w-8 text-primary" />,
        title: "Custom Rules",
        description: "Personalized notification rules tailored to your investment strategy, risk tolerance, and portfolio composition."
      }
    ],
    ctaText: "Set Up Alerts",
    ctaHref: "/#pricing"
  };

  return (
    <div className="container w-full">
      <div className="mx-auto lg:max-w-screen-xl">
        <FeatureDetail {...aiSidepanelData} />
        <FeatureDetail {...transcriptSearchData} />
        <FeatureDetail {...analystRatingsData} />
        <FeatureDetail {...notificationsData} />
      </div>
    </div>
  );
};
