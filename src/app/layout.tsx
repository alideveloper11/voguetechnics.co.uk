import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import {
  GoogleTagManagerBody,
  GoogleTagManagerHead,
} from "@/components/analytics/GoogleTagManager";

export const metadata: Metadata = {
  title: {
    default: "Superior Range Rover Engines - Reconditioned & Used | Vogue Technics",
    template: "%s | Vogue Technics",
  },
  description: "Experience the Vogue Technics difference with top-quality reconditioned and used Range Rover engines. Our expert service, extensive stock, and great deals will get your vehicle back on the road in no time.",
  metadataBase: new URL("https://www.voguetechnics.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Superior Range Rover Engines - Reconditioned & Used | Vogue Technics",
    description: "Experience the Vogue Technics difference with top-quality reconditioned and used Range Rover engines.",
    url: "https://www.voguetechnics.co.uk",
    siteName: "Vogue Technics",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-primary selection:text-white" suppressHydrationWarning={true}>
        <Header />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
        <GoogleTagManagerBody />
      </body>
    </html>
  );
}
