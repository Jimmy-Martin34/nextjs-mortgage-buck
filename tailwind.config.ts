import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  // ✅ Scan your Next.js App Router files (and any shared components)
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)"
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)"
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)"
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)"
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)"
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        success: "var(--success)",
        warning: "var(--warning)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)"
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)"
        }
      },
      fontFamily: {
        // maps to --font-sans / --font-mono from next/font in layout.tsx
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"]
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        fadeIn: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        slideIn: { from: { opacity: "0", transform: "translateX(20px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        pulse: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.5" } },
        spin: { to: { transform: "rotate(360deg)" } }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        spin: "spin 1s linear infinite"
      },
      spacing: { 18: "4.5rem", 88: "22rem", 128: "32rem" },
      maxWidth: { "8xl": "88rem", "9xl": "96rem" },
      screens: { "3xl": "1600px" },
      boxShadow: {
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        "3xl": "0 35px 60px -12px rgba(0, 0, 0, 0.3)"
      },
      backdropBlur: { xs: "2px" },
      zIndex: { 60: "60", 70: "70", 80: "80", 90: "90", 100: "100" }
    }
  },
  plugins: [
    animate,
    typography,
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-shadow": { textShadow: "0 2px 4px rgba(0,0,0,0.10)" },
        ".text-shadow-md": { textShadow: "0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)" },
        ".text-shadow-lg": { textShadow: "0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.07)" },
        ".text-shadow-none": { textShadow: "none" }
      });
    })
  ]
};

export default config;
