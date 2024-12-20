import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "80rem",
        },
      },
      screens: {
        xs: "375px",
      },
      colors: {
        // THEME COLORS
        primaryColor: "var(--color-primary)",
        secondaryColor: "var(--color-secondary)",
        tertiaryColor: "var(--color-tertiary)",
        tertiaryColorRgba: "var(--color-tertiary-rgba)",
        backgroundLightColor: "var(--color-background-light)",
        textDarkColor: "var(--color-text-dark)",
        backgroundLightAltColor: "var(--color-background-light-alt)",
        mutedColor: "var(--color-muted)",
        whiteColor: "var(--color-white-muted)",
        grayLightColor: "var(--color-gray-light)",
        blackColor: "var(--color-black)",
        paragraph: "var(--paragraph)",
        navLinkColor: "var(--color-nav-links)",
        // SHADCN UI
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "pulse-slow": "pulse 20s linear infinite",
      },
      fontFamily: {
        abcNormal: "var(--font-ABCNormal)",
      },
      dropShadow: {
        button: "0 8px 10px rgba(80, 59, 137, 0.5)",
      },
      minHeight: {
        "screen-mobile":
          "calc(100dvh - var(--header-size-mobile) - var(--footer-size))",
        "screen-desktop":
          "calc(100dvh - var(--header-size-desktop) - var(--footer-size))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
