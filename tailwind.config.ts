import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        softTextColor: "var(--softTextColor)",
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
      typography: {
        DEFAULT: {
          css: {
            //made all text white
            color: "var(--textColor)",
            a: {
              color: "var(--primary)",
              "&:hover": {
                color: "var(--primary-foreground)",
              },
            },
            "h1, h2, h3, h4": {
              color: "var(--textColor)",
            },
            code: {
              color: "var(--textColor)",
              backgroundColor: "#ff0000",
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
            },
            codeBlock: {
              color: "var(--textColor)",
              backgroundColor: "#ff0000",
              padding: "1em",
              borderRadius: "0.5rem",
            },
            pre: {
              color: "var(--textColor)",
              backgroundColor: "#ff0000",
              padding: "1em",
              borderRadius: "0.5rem",
            },
            "pre code": {
              color: "var(--textColor)",
              backgroundColor: "transparent",
              padding: "0",
            },
            "ul > li::before": {
              backgroundColor: "var(--primary)",
            },
            "ol > li::before": {
              backgroundColor: "var(--primary)",
            },
            blockquote: {
              borderLeftColor: "#ff0000",
              color: "var(--textColor)",
            },
            hr: {
              borderColor: "var(--border)",
            },
            "figure figcaption": {
              color: "var(--textColor)",
            },
            "figure img": {
              borderRadius: "0.5rem",
              //make image responsive
              width: "100%",
              height: "auto",
            },
            table: {
              color: "var(--textColor)",
              borderCollapse: "collapse",
              width: "100%",
            },
            "table th": {
              backgroundColor: "var(--input)",
              color: "var(--textColor)",
              fontWeight: "700",
            },
            "table td": {
              borderBottomColor: "var(--border)",
            },
            "table th, table td": {
              padding: "0.75rem",
              textAlign: "left",
            },
            "table tr:nth-child(2n)": {
              backgroundColor: "var(--input)",
            },
            "thead th": {
              backgroundColor: "var(--input)",
              color: "var(--textColor)",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "a code": {
              color: "var(--primary)",
            },
            "a code:hover": {
              color: "var(--primary-foreground)",
            },
            strong: {
              color: "var(--textColor)",
              fontWeight: "700",
            },
            p: {
              lineHeight: "1.2",
            },
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
