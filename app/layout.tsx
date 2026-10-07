import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "Arventa Networks",
  description: "Arventa Networks",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
