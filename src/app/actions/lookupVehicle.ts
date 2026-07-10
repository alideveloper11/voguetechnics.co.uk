"use server";

import {
  buildPortalVrmSearchUrl,
  getPortalConfig,
  getPortalHeaders,
  parseJsonResponse,
} from "@/lib/voguePortal";

export interface VehicleResult {
  make: string;
  model: string;
  year: string;
  colour: string;
  fuelType: string;
  engineSize: string;
  description: string;
  vin: string;
  engineNumber: string;
  transmission: string;
  co2: string;
  wheelPlan: string;
  bodyStyle: string;
  numberOfDoors: string;
  driveType: string;
  seatingCapacity: string;
  aspiration: string;
  maxBhp: string;
  engineCode: string;
}

export async function lookupVehicle(vrm: string): Promise<{ ok: true; vehicle: VehicleResult } | { ok: false; error: string }> {
  const normalizedVrm = vrm.replace(/\s/g, "").toUpperCase();

  if (!normalizedVrm) {
    return { ok: false, error: "Vehicle Registration Mark (VRM) is required." };
  }

  if (normalizedVrm.length > 7) {
    return { ok: false, error: "Vehicle Registration Mark (VRM) must be 7 characters or fewer." };
  }

  const { isConfigured } = getPortalConfig();

  if (!isConfigured) {
    return { ok: false, error: "API credentials not configured." };
  }

  try {
    const res = await fetch(buildPortalVrmSearchUrl(normalizedVrm), {
      headers: getPortalHeaders(),
      cache: "no-store",
    });
    const json = await parseJsonResponse(res);

    if (!res.ok) {
      return { ok: false, error: json?.message || "Could not find vehicle. Please check the reg number." };
    }

    const vehicle = json?.data ?? {};
    const vState = json?.vehicleRegistration ?? {};
    const smmt = json?.smmtDetails ?? {};
    const engine = json?.engine ?? {};
    const performance = json?.performance ?? {};

    const make = String(vehicle.make ?? vState.Make ?? "");
    if (!make) return { ok: false, error: "No vehicle found for this reg number." };

    const model = String(vehicle.model ?? vState.Model ?? "");
    const year = String(vehicle.year ?? vState.YearOfManufacture ?? "");
    const colour = String(vehicle.color ?? vState.Colour ?? "");
    const fuelType = String(vehicle.fuel ?? vehicle.fuel_type ?? vState.FuelType ?? "");
    const rawSize = String(vehicle.size ?? vehicle.engine_size ?? vState.EngineCapacity ?? "");

    const parts = [year, make, model, colour, fuelType, rawSize ? `${rawSize}cc` : ""].filter(Boolean);

    return {
      ok: true,
      vehicle: {
        make,
        model,
        year,
        colour,
        fuelType,
        engineSize: rawSize,
        description: parts.join(" "),
        vin: String(vehicle.vin ?? vState.Vin ?? ""),
        engineNumber: String(vehicle.engine_number ?? vState.EngineNumber ?? ""),
        transmission: String(vehicle.transmission ?? vState.TransmissionType ?? vState.Transmission ?? ""),
        co2: String(vehicle.co2 ?? vehicle.co2_emissions ?? vState.Co2Emissions ?? ""),
        wheelPlan: String(vehicle.wheel_plan ?? smmt.DriveType ?? vState.WheelPlan ?? ""),
        bodyStyle: String(vehicle.body_style ?? vehicle.body_type ?? smmt.BodyStyle ?? vState.DoorPlanLiteral ?? ""),
        numberOfDoors: String(vehicle.number_of_doors ?? smmt.NumberOfDoors ?? ""),
        driveType: String(vehicle.wheel_plan ?? smmt.DriveType ?? ""),
        seatingCapacity: String(vehicle.seat_capacity ?? vState.SeatingCapacity ?? ""),
        aspiration: String(vehicle.aspiration ?? engine.Aspiration ?? ""),
        maxBhp: String(vehicle.maximum_bhp ?? engine.MaxBhp ?? performance?.Power?.Bhp ?? ""),
        engineCode: String(vehicle.engine_code ?? smmt.EngineCode ?? ""),
      },
    };
  } catch {
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
