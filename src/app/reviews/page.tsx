import { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Customer Reviews   Vogue Technics | Engine Specialists  ",
  description:
    "Read verified customer reviews for Vogue Technics, Range Rover and Land Rover engine specialists . Rated 4.9 out of 5 across Google and Trustpilot. See why hundreds of customers across  trust us with their engines.",
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
