import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/data/pageMetadata";
import {
  GoogleTagManagerBody,
  GoogleTagManagerHead,
} from "@/components/analytics/GoogleTagManager";

export const metadata: Metadata = {
  title: {
    default: HOME_TITLE,
    template: "%s | Vogue Technics",
  },
  description: HOME_DESCRIPTION,
  metadataBase: new URL("https://www.voguetechnics.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
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
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning={true}
    >
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
