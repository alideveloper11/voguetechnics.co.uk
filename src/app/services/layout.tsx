import type { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";

export const metadata: Metadata = pageMetadata.servicesMain;

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
