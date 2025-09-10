import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "FileText",
    title: "SEC Filings Integration",
    description:
      "Direct access to official SEC filings with smart parsing and extraction. Navigate complex financial documents with AI-powered insights.",
  },
  {
    icon: "MessageSquare",
    title: "Transcript Analysis",
    description:
      "Chat with earnings call transcripts using customizable prompts. Extract key insights and sentiment from management discussions.",
  },
  {
    icon: "TrendingUp",
    title: "Analyst Ratings Hub",
    description:
      "Comprehensive analyst coverage with real-time rating changes, price targets, and consensus tracking across all major firms.",
  },
  {
    icon: "BookmarkCheck",
    title: "Smart Watchlists",
    description:
      "Build and monitor custom watchlists with intelligent alerts for fundamental changes, insider activity, and market events.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Core Capabilities</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Institution-Grade Financial Intelligence
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Access comprehensive equity research tools powered by AI and institutional-quality data. 
            Make informed investment decisions with hallucination-free analysis and real-time insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
