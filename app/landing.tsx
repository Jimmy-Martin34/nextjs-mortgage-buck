"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Upload from "@/components/Upload";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

export default function Landing() {
  const router = useRouter();
  const [showAdminLogin, setShowAdminLogin] = useState(false); // if you plan to use later

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
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                How It Works
              </a>
              <a
                href="#security"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Security
              </a>
              <Button
                onClick={() => router.push("/admin")}
                data-testid="button-admin-login"
              >
                Admin Login
              </Button>
            </nav>

            <button className="text-muted-foreground md:hidden">
              <i className="fas fa-bars text-lg" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Stop Overpaying on Your
            <span className="text-primary"> Mortgage</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            Upload your Loan Estimate or Closing Disclosure and get instant
            analysis showing exactly where you're overpaying and how to fix it.
          </p>

          {/* Trust Indicators */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-success" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-primary" />
              <span>Results in 15 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-file-pdf text-warning" />
              <span>No email required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Upload */}
      <section className="bg-secondary/50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <Upload />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              How We Help You Save
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our analyzer identifies specific areas where you might be
              overpaying and provides actionable solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <Card key={idx} className="transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <i className={`${feature.icon} text-xl text-primary`} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
