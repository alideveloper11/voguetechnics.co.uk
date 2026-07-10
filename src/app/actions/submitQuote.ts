"use server";

import type { VehicleResult } from "./lookupVehicle";
import {
  buildPortalQuotePayload,
  getPortalConfig,
  parseJsonResponse,
  submitPortalQuote,
} from "@/lib/voguePortal";

export interface QuotePayload {
  reg: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  issue: string;
  browser: string;
  vehicle?: VehicleResult;
}

export async function submitQuote(data: QuotePayload): Promise<{ ok: boolean; message?: string }> {
  const { websiteSlug, isConfigured } = getPortalConfig();

  if (!isConfigured) {
    return { ok: false, message: "Server configuration error: Portal credentials missing" };
  }

  const v = data.vehicle;
  const payload = buildPortalQuotePayload(
    {
      vrm: data.reg,
      name: data.name,
      email: data.email,
      phone: data.phone,
      postcode: data.postcode,
      issue: data.issue,
      make: v?.make,
      model: v?.model,
      year: v?.year,
      engine_code: v?.engineCode,
      maximum_bhp: v?.maxBhp,
      fuel_type: v?.fuelType,
      engine_size: v?.engineSize,
      engine_number: v?.engineNumber,
      vin: v?.vin,
      color: v?.colour,
      number_of_doors: v?.numberOfDoors,
      seat_capacity: v?.seatingCapacity,
      wheel_plan: v?.wheelPlan,
      aspiration: v?.aspiration,
      transmission: v?.transmission,
      co2_emissions: v?.co2,
      body_type: v?.bodyStyle,
    },
    websiteSlug
  );

  try {
    const res = await submitPortalQuote(payload);
    const json = await parseJsonResponse(res);
    const message: string | undefined = json?.message;

    if (res.ok && json?.success !== false) return { ok: true, message };
    return { ok: false, message: message ?? "Failed to submit quote to portal" };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again or call us directly." };
  }
}
