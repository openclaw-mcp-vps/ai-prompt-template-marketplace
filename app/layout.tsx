import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptMarket — Buy and Sell Tested AI Prompts",
  description: "Marketplace for AI prompt templates with performance metrics, A/B test results, and usage analytics for different use cases."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9532e2dc-b4d1-49f6-96f1-f31390561768"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
