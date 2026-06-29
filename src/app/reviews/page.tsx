import { Metadata } from "next";
import { pageMetadata } from "@/data/pageMetadata";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = pageMetadata.reviews;

export default function ReviewsPage() {
  return <ReviewsClient />;
}
