import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Rivet — Todo tu negocio. Un solo sistema.",
  description:
    "Ventas, facturación electrónica, nómina y reservas conectadas en productos que trabajan juntos y crecen contigo.",
  openGraph: {
    title: "Rivet — Todo tu negocio. Un solo sistema.",
    description:
      "Ventas, facturación electrónica, nómina y reservas conectadas en productos que trabajan juntos y crecen contigo.",
    type: "website",
    locale: "es_CO",
    siteName: "Rivet",
  },
  twitter: {
    card: "summary",
    title: "Rivet — Todo tu negocio. Un solo sistema.",
    description:
      "Ventas, facturación electrónica, nómina y reservas conectadas en productos que trabajan juntos y crecen contigo.",
  },
};

export const viewport: Viewport = {
  themeColor: "#006aff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${interTight.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen bg-white font-sans text-ink">{children}</body>
    </html>
  );
}
