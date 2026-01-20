import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DZ Aman - Your Sanctuary of Peace & Heritage",
  description:
    "Join the waitlist for DZ Aman - A mental health and trauma support app for Algeria. Breaking the silence on mental health with culturally-sensitive support.",
  keywords: [
    "mental health",
    "Algeria",
    "DZ",
    "trauma support",
    "wellness",
    "Algerian health",
    "أمان",
  ],
  authors: [{ name: "DZ Aman" }],
  creator: "DZ Aman",
  openGraph: {
    title: "DZ Aman - Your Sanctuary of Peace & Heritage",
    description:
      "Join the waitlist for DZ Aman - A mental health and trauma support app for Algeria",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_DZ", "fr_FR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DZ Aman - Your Sanctuary of Peace & Heritage",
    description:
      "Join the waitlist for DZ Aman - A mental health and trauma support app for Algeria",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#5A7A7A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
