import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Fundamental Analysis Suite",
    description:
      "Comprehensive financial metrics, ratios, and trend analysis with historical comparisons and peer benchmarking.",
    pro: 0,
  },
  {
    title: "Sentiment Analysis Engine",
    description:
      "AI-powered sentiment tracking from news, social media, and analyst reports to gauge market mood and momentum.",
    pro: 0,
  },
  {
    title: "Advanced Portfolio Analytics",
    description: "Portfolio optimization, risk assessment, and performance attribution analysis with sector allocation insights.",
    pro: 1,
  },
  {
    title: "Institutional Data Access",
    description: "Direct access to Bloomberg-grade data feeds, alternative datasets, and proprietary research from top-tier firms.",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Research Tools
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Professional-Grade Analysis
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From fundamental analysis to advanced portfolio analytics, access the same 
        research tools used by institutional investors and hedge funds.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
