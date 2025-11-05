import { PricingSection } from "@/components/layout/sections/pricing";
import { FinalCTASection } from "@/components/layout/sections/final-cta";
import { FooterSection } from "@/components/layout/sections/footer";
import { Check } from "lucide-react";

export const metadata = {
  title: "Pricing - Stop Drifts AI-Powered Equity Research",
  description: "Choose the perfect plan for your equity research needs. From individual investors to institutional clients, find flexible pricing that scales with you.",
  openGraph: {
    type: "website",
    url: "https://stopdrifts.com/pricing",
    title: "Pricing - Stop Drifts AI-Powered Equity Research",
    description: "Choose the perfect plan for your equity research needs. From individual investors to institutional clients, find flexible pricing that scales with you.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Stop Drifts Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://stopdrifts.com/pricing",
    title: "Pricing - Stop Drifts AI-Powered Equity Research",
    description: "Choose the perfect plan for your equity research needs. From individual investors to institutional clients, find flexible pricing that scales with you.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      {/* Pricing Plans */}
      <PricingSection />

      {/* Comparison Table */}
      <section className="container w-full py-16 md:py-24 bg-muted/30">
        <div className="mx-auto lg:max-w-screen-xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Compare plans
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See which features are included in each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold bg-primary/5">Professional</th>
                  <th className="text-center p-4 font-semibold">Institutional</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4">Watchlist Companies</td>
                  <td className="text-center p-4">5</td>
                  <td className="text-center p-4 bg-primary/5">Unlimited</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4">AI Queries per Day</td>
                  <td className="text-center p-4">10</td>
                  <td className="text-center p-4 bg-primary/5">Unlimited</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4">SEC Filings Access</td>
                  <td className="text-center p-4"><Check className="inline text-primary" /></td>
                  <td className="text-center p-4 bg-primary/5"><Check className="inline text-primary" /></td>
                  <td className="text-center p-4"><Check className="inline text-primary" /></td>
                </tr>
                <tr>
                  <td className="p-4">Transcript Analysis</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4 bg-primary/5"><Check className="inline text-primary" /></td>
                  <td className="text-center p-4"><Check className="inline text-primary" /></td>
                </tr>
                <tr>
                  <td className="p-4">Analyst Ratings</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4 bg-primary/5"><Check className="inline text-primary" /></td>
                  <td className="text-center p-4"><Check className="inline text-primary" /></td>
                </tr>
                <tr>
                  <td className="p-4">Insider Activity Tracking</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4 bg-primary/5"><Check className="inline text-primary" /></td>
                  <td className="text-center p-4"><Check className="inline text-primary" /></td>
                </tr>
                <tr>
                  <td className="p-4">Team Access</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4 bg-primary/5">-</td>
                  <td className="text-center p-4"><Check className="inline text-primary" /></td>
                </tr>
                <tr>
                  <td className="p-4">API Access</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4 bg-primary/5">-</td>
                  <td className="text-center p-4"><Check className="inline text-primary" /></td>
                </tr>
                <tr>
                  <td className="p-4">Dedicated Account Manager</td>
                  <td className="text-center p-4">-</td>
                  <td className="text-center p-4 bg-primary/5">-</td>
                  <td className="text-center p-4"><Check className="inline text-primary" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FinalCTASection />

      <FooterSection />
    </>
  );
}
