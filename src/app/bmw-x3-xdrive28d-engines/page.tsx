import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  alternates: { canonical: "/bmw-x3-engines" },
};

export default function BmwX3Xdrive28dEnginesRedirect() {
  redirect("/bmw-x3-engines");
}

