"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { LayoutDashboard, Users, Bot, Bell } from "lucide-react";

interface CoreFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageAlt: string;
  reverse?: boolean;
}

const CoreFeature = ({
  icon,
  title,
  description,
  imageAlt,
  reverse = false
}: CoreFeatureProps) => {
  const { theme } = useTheme();

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? '' : ''}`}>
      <div className={`space-y-6 ${reverse ? 'lg:order-2' : ''}`}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 mt-1 p-3 rounded-lg bg-primary/10">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              {title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className={`relative ${reverse ? 'lg:order-1' : ''}`}>
        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-3xl"></div>
        <Image
          width={700}
          height={500}
          className="relative w-full rounded-lg border border-secondary shadow-2xl"
          src={theme === "light" ? "/hero-image-light.jpeg" : "/hero-image-dark.jpeg"}
          alt={imageAlt}
          priority={false}
        />
      </div>
    </div>
  );
};

export const CoreFeaturesSection = () => {
  return (
    <section className="container w-full py-20 md:py-32 bg-muted/30">
      <div className="mx-auto lg:max-w-screen-xl space-y-20 md:space-y-32">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything you need to
            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              make better decisions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Four powerful capabilities that transform how you research and invest
          </p>
        </div>

        {/* Feature 1: Cockpit Dashboard */}
        <CoreFeature
          icon={<LayoutDashboard className="h-10 w-10 text-primary" />}
          title="Cockpit-like dashboard to quickly understand what analysts understand"
          description="Professional-grade control panel with real-time market data, analyst consensus, and key metrics at a glance. Get the full picture instantly."
          imageAlt="StockDrifts Cockpit Dashboard"
        />

        {/* Feature 2: Smart Notifications */}
        <CoreFeature
          icon={<Bell className="h-10 w-10 text-primary" />}
          title="Smart AI alerts under a second"
          description="Get instant AI-powered notifications when your favorite company files an SEC filing or releases news on their website. Add your own custom prompts to get quick reactions to breaking news and market events."
          imageAlt="Smart AI Notifications"
          reverse
        />

        {/* Feature 3: Investor Intelligence */}
        <CoreFeature
          icon={<Users className="h-10 w-10 text-primary" />}
          title="See, copy, learn, get ideas from 20k investors"
          description="View positions, understand investment thesis, and track performance of top investors in your favorite stocks. Learn from the best."
          imageAlt="Investor Intelligence Platform"
        />

        {/* Feature 4: AI Side Panel */}
        <CoreFeature
          icon={<Bot className="h-10 w-10 text-primary" />}
          title="AI side panel with ±0 hallucinations"
          description="We achieve near-zero hallucinations by optimizing the context fed to AI. Get reliable insights without the noise."
          imageAlt="AI Side Panel with Zero Hallucinations"
          reverse
        />
      </div>
    </section>
  );
};
