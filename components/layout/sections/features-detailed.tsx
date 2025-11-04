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
  howItWorks: string[];
  capabilities: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  useCases: string[];
  ctaText: string;
  ctaHref: string;
}

const FeatureDetail = ({
  id,
  badge,
  title,
  subtitle,
  description,
  howItWorks,
  capabilities,
  useCases,
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

        {/* How It Works */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold">How it works</h3>
          <div className="space-y-3">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
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

        {/* Use Cases */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold">Use cases</h3>
          <ul className="space-y-3">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-primary mt-1">→</span>
                <span className="text-muted-foreground">{useCase}</span>
              </li>
            ))}
          </ul>
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
    howItWorks: [
      "Open the side panel from anywhere in the platform with a keyboard shortcut or click",
      "Type natural language questions about companies, transcripts, or market data",
      "Get AI-generated insights with cited sources and relevant data points",
      "Save and organize your conversation history for future reference",
      "Customize prompts to match your research workflow and investment style"
    ],
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
    useCases: [
      "Quickly summarize a 10-K filing to understand business model changes",
      "Ask 'What did management say about margins this quarter?' across multiple earnings calls",
      "Compare competitive positioning mentioned in recent transcripts",
      "Generate investment thesis summaries based on fundamental data",
      "Extract key risks and opportunities from SEC filings"
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
    howItWorks: [
      "Enter natural language queries like 'margin pressure concerns' or 'supply chain issues'",
      "AI semantic search matches meaning, not just exact words, across the entire transcript database",
      "Filter results by company, date range, sector, or sentiment indicators",
      "Review search results with highlighted passages and contextual snippets",
      "Click through to full transcripts with your search terms highlighted in context"
    ],
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
    useCases: [
      "Find all mentions of 'pricing power' across your sector's earnings calls in the last quarter",
      "Track how frequently competitors mention AI or specific technologies over time",
      "Identify which companies are discussing supply chain normalization",
      "Search for management tone shifts on specific topics like capex or hiring",
      "Discover emerging themes and trends before they become consensus"
    ],
    ctaText: "Try Transcript Search",
    ctaHref: "/#pricing"
  };

  const analystRatingsData: FeatureDetailProps = {
    id: "analyst-ratings",
    title: "Analyst Ratings",
    subtitle: "Judge analyst track records objectively",
    description: "Not all analyst opinions are created equal. Our Analyst Ratings system tracks historical performance, price target accuracy, and recommendation effectiveness for thousands of Wall Street analysts. See who consistently delivers alpha and whose recommendations underperform. Make more informed decisions about which research to trust.",
    howItWorks: [
      "We track every analyst rating, price target, and recommendation published across major stocks",
      "Performance is measured against actual stock performance over multiple time horizons (30d, 90d, 1yr)",
      "Accuracy scores are calculated based on price target achievement and recommendation timing",
      "Rankings are segmented by sector, stock coverage, and firm affiliation",
      "Historical accuracy data is updated continuously as new market data becomes available"
    ],
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
    useCases: [
      "Identify which analysts have the best track record covering your portfolio companies",
      "Weight analyst recommendations based on historical accuracy before making decisions",
      "Discover which analysts consistently identified value opportunities in your sector",
      "Track analyst sentiment shifts from historically accurate voices as an early indicator",
      "Avoid analysts with poor track records on specific stocks or sectors"
    ],
    ctaText: "Explore Analyst Ratings",
    ctaHref: "/#pricing"
  };

  const notificationsData: FeatureDetailProps = {
    id: "notifications",
    title: "Smart Notifications",
    subtitle: "Never miss opportunities again",
    description: "Stay informed without being overwhelmed. Smart Notifications use AI to filter out noise and alert you only when something truly important happens. Set custom rules based on price movements, insider transactions, analyst activity, earnings announcements, or any combination of triggers. Get notified via email, push notification, or in-app alerts.",
    howItWorks: [
      "Create notification rules using natural language or pre-built templates",
      "Set triggers based on price changes, volume spikes, analyst actions, insider transactions, or custom data points",
      "AI evaluates significance and filters out false positives based on your preferences",
      "Receive instant alerts via your preferred channel when conditions are met",
      "Review notification history and adjust sensitivity settings over time"
    ],
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
    useCases: [
      "Get alerted when insider buying exceeds $1M for companies in your watchlist",
      "Notify me when a highly-rated analyst upgrades or downgrades my holdings",
      "Alert on earnings announcements 24 hours before they happen",
      "Track unusual volume spikes combined with positive sentiment in transcripts",
      "Get notified when competitors mention your portfolio companies in earnings calls"
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
