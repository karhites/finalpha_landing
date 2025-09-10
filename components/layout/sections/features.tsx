import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "BarChart3",
    title: "Customizable Dashboard",
    description:
      "Beautiful, intuitive dashboards that surface the most important financial metrics. Customize layouts and visualizations to match your research workflow.",
  },
  {
    icon: "Brain",
    title: "AI-Powered Insights",
    description:
      "Native AI that works with institutional-grade data to provide hallucination-free analysis. Extract key insights from complex financial documents instantly.",
  },
  {
    icon: "Users",
    title: "Insider Activity Tracking",
    description:
      "Monitor insider transactions, executive changes, and corporate actions. Get alerts when key personnel make significant moves.",
  },
  {
    icon: "Zap",
    title: "Real-Time Data",
    description:
      "Access live market data, breaking news, and real-time updates on fundamental changes. Never miss critical information that could impact your positions.",
  },
  {
    icon: "MessageCircle",
    title: "Custom Prompt Engine",
    description:
      "Create and save custom prompts for analyzing transcripts, filings, and reports. Build your own research templates for consistent analysis.",
  },
  {
    icon: "Shield",
    title: "Institution-Grade Reliability",
    description:
      "Built on the same data infrastructure used by hedge funds and investment banks. Ensure accuracy and reliability in your investment decisions.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Platform Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Everything You Need for Smart Investing
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From fundamental analysis to sentiment tracking, our comprehensive platform 
        provides all the tools you need to make informed investment decisions with confidence.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
