"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bell, Zap, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const NotificationsHeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Feature</Badge>
            </span>
            <span> Smart Notifications </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Never Miss
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Market Opportunities
              </span>
              Again
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Intelligent alerts for price changes, earnings announcements, analyst upgrades, and custom triggers. Stay ahead of market movements with notifications that matter to your portfolio.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Setup Alerts
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            <div className="flex flex-col items-center space-y-2">
              <Bell className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Real-time Alerts</h3>
              <p className="text-sm text-muted-foreground text-center">Instant notifications for critical market events and price movements</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Smart Triggers</h3>
              <p className="text-sm text-muted-foreground text-center">AI-powered alerts based on patterns and unusual activity</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Settings className="h-8 w-8 text-primary" />
              <h3 className="font-semibold">Custom Rules</h3>
              <p className="text-sm text-muted-foreground text-center">Personalized notification rules tailored to your investment strategy</p>
            </div>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
            src={
              theme === "light"
                ? "/hero-image-light.jpeg"
                : "/hero-image-dark.jpeg"
            }
            alt="FinAlpha Smart Notifications Interface"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};