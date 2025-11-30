"use client";

import {
  Globe,
  Sparkles,
  LayoutDashboard,
  BarChart3,
  Users,
  Target,
  Briefcase,
  Bell
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string; // Optional image or gif URL
}

const features: Feature[] = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Financial Data",
    description: "Accurate fundamental data on global stocks, ETFs and funds."
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI Summaries",
    description: "AI powered research on top of our data sets right in the platform."
  },
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "Dashboards",
    description: "Track your portfolio and watchlists easily with our customizable dashboarding."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data Visualization",
    description: "Easily visualize data to quickly compare and contrast with our state of the art charting infrastructure."
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Notifications",
    description: "Under 1s AI analysis for news. Filter out the news that's tradeable."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Estimates",
    description: "Consensus analyst forward estimates and recommendations on key figures."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Ownership Data",
    description: "View ownership data and transactions for company insiders and prominent investors."
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "13F Data",
    description: "The latest moves from the world's leading investors."
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Avg. prices and Investment thesis",
    description: "Get the investment thesis and avg. price for each positions for your favourite investors."
  }
];

const FeatureCard = ({ icon, title, description, image }: Feature) => {
  return (
    <div className="relative group">
      {/* Blob background with gradient border */}
      <div className="relative h-full p-8 rounded-[2.5rem] bg-background/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
        {/* Image or Icon */}
        {image ? (
          <div className="mb-4 rounded-xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-32 object-cover"
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-primary/10 text-primary">
            {icon}
          </div>
        )}

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
    </div>
  );
};

export const PremiumFeaturesSection = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Packed With
            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            You'll always have the most accurate information you need to make confident and smart trading decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
