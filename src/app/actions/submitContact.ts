"use server";
import {
  buildPortalQuotePayload,
  getPortalConfig,
  parseJsonResponse,
  submitPortalQuote,
} from "@/lib/voguePortal";

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  reg: string;
  postcode: string;
  message: string;
  browser: string;
}

export async function submitContact(data: ContactPayload): Promise<{ ok: boolean; message?: string }> {
  const { websiteSlug, isConfigured } = getPortalConfig();

  if (!isConfigured) {
    return { ok: false, message: "Server configuration error: Portal credentials missing" };
  }

  const payload = buildPortalQuotePayload(
    {
      vrm: data.reg,
      name: data.name,
      email: data.email,
      phone: data.phone,
      postcode: data.postcode,
      issue: data.message,
    },
    websiteSlug
  );

  try {
    const res = await submitPortalQuote(payload);
    const json = await parseJsonResponse(res);
    const message: string | undefined = json?.message;

    if (res.ok && json?.success !== false) return { ok: true, message };
    return { ok: false, message: message ?? "Failed to submit contact inquiry to portal" };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again or call us directly." };
  }
}
