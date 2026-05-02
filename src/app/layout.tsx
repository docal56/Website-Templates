import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ElevenLabsWidget } from "@/components/site/elevenlabs-widget";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${site.name} Demo | Heating & Plumbing in ${site.location}`,
    template: `%s | ${site.name} Demo`,
  },
  description:
    "A Mayne-inspired local plumbing and heating website demo with online booking enquiries, local SEO and an ElevenLabs assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ElevenLabsWidget />
      </body>
    </html>
  );
}
