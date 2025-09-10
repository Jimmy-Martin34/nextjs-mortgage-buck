"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// ⬇️ use relative paths to your components inside app/components/...
import Upload from "./components/Upload";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

export default function Landing() {
  const router = useRouter();
  const [showAdminLogin] = useState(false); // kept for future use

  const features: Feature[] = [
    {
      icon: "fas fa-percentage",
      title: "Rate Analysis",
      description:
        "Compare your quoted rate against market rates for your credit profile and loan details.",
    },
    {
      icon: "fas fa-coins",
      title: "Points Optimization",
      description:
        "Calculate if buying points makes sense based on your time horizon and breakeven analysis.",
    },
    {
      icon: "fas fa-receipt",
      title: "Fee Review",
      description:
        "Identify excessive origination, title, and settlement fees with regional benchmarks.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "MI Optimization",
      description:
        "Compare monthly vs single-premium MI options and identify removal opportunities.",
    },
    {
      icon: "fas fa-comments",
      title: "Negotiation Scripts",
      description:
        "Get copy-paste scripts to negotiate better terms with your lender.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Impact Calculator",
      description:
        "See exact monthly and 5-year savings for each optimization opportunity.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <i className="fas fa-calculator text-sm text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">
                Mortgage Analyzer
              </span>
            </div>

            <nav className="hidden items-center space-x-6 md:flex">
              <a
                href="#features"
                className="text-muted-fore

