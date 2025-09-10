import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter",
    popular: 0,
    price: 0,
    description:
      "Perfect for individual investors getting started with professional-grade research tools.",
    buttonText: "Start Free Trial",
    benefitList: [
      "5 watchlist companies",
      "Basic financial metrics",
      "SEC filings access",
      "Community support",
      "AI chat (10 queries/day)",
    ],
  },
  {
    title: "Professional",
    popular: 1,
    price: 49,
    description:
      "Comprehensive research suite for serious investors and small funds.",
    buttonText: "Get Started",
    benefitList: [
      "Unlimited watchlists",
      "Advanced analytics dashboard",
      "Transcript analysis & chat",
      "Analyst ratings & consensus",
      "Insider activity tracking",
      "Priority support",
      "Unlimited AI queries",
    ],
  },
  {
    title: "Institutional",
    popular: 0,
    price: 199,
    description:
      "Enterprise-grade platform for investment firms and institutional clients.",
    buttonText: "Contact Sales",
    benefitList: [
      "Multi-user team access",
      "Bloomberg-grade data feeds",
      "Custom research templates",
      "API access & integrations",
      "Dedicated account manager",
      "White-label options",
      "Advanced portfolio analytics",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing Plans
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose Your Research Advantage
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From individual investors to institutional clients, find the perfect plan 
        for your equity research needs. All plans include our core AI-powered analysis tools.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
