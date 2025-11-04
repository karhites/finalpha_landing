"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Bot, 
  Search, 
  Target, 
  Bell
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, href, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <Link href={href}>
      <motion.div
        ref={cardRef}
        className="relative p-6 bg-black/40 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden cursor-pointer group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        <div className="absolute inset-[1px] rounded-xl bg-black/40 backdrop-blur-sm" />
        
        {/* Mouse follower light */}
        {isHovered && (
          <div
            className="absolute w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none transition-all duration-300"
            style={{
              left: mousePosition.x - 64,
              top: mousePosition.y - 64,
            }}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {/* Terminal-style header */}
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-primary/20">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
            <div className="flex-1" />
            <div className="text-primary/60 text-xs font-mono">feature.tsx</div>
          </div>
          
          {/* Icon with animation */}
          <motion.div 
            className="mb-4 text-primary"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
          
          {/* Animated accent line */}
          <motion.div
            className="mt-4 h-0.5 bg-gradient-to-r from-primary to-purple-500 origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
};

export const AnimatedFeaturesSection = () => {
  const features = [
    {
      title: "AI Side Panel",
      description: "Intelligent assistant for quick analysis with customized prompts and transcript chat. Get instant insights without leaving your workspace.",
      icon: <Bot className="w-8 h-8" />,
      href: "/features/ai-sidepanel",
    },
    {
      title: "Transcript Search",
      description: "Advanced search engine for earnings calls and investor presentations. Find key insights with semantic search across thousands of transcripts.",
      icon: <Search className="w-8 h-8" />,
      href: "/features/transcript-search",
    },
    {
      title: "Analyst Ratings",
      description: "Track analyst performance and rating accuracy over time. Identify the most reliable voices in equity research with historical data.",
      icon: <Target className="w-8 h-8" />,
      href: "/features/analyst-ratings",
    },
    {
      title: "Smart Notifications",
      description: "Never miss important market movements with intelligent alerts. Customizable triggers for price changes, earnings, and analyst upgrades.",
      icon: <Bell className="w-8 h-8" />,
      href: "/features/notifications",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-mono">
            {"//"} Advanced Features
          </h2>
          <h2 className="text-3xl md:text-5xl text-center font-bold mb-4">
            Powerful tools integrated with your
            <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              control panel
            </span>
          </h2>
          <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground">
            Advanced features that work seamlessly with your customizable dashboard. 
            Everything you need for professional equity research in one platform.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              href={feature.href}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* Additional background decorations */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl opacity-20" />
    </section>
  );
};