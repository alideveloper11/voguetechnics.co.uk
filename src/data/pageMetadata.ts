import type { Metadata } from "next";

const buildMetadata = (
  title: string,
  description: string,
  canonical: string,
): Metadata => ({
  title: {
    absolute: title,
  },
  description,
  alternates: {
    canonical,
  },
});

export const HOME_TITLE = "Reconditioned & Used Engines UK | Vogue Technics";
export const HOME_DESCRIPTION =
  "Vogue Technics offers expert engine rebuilds, repairs, and replacements across the UK. 20+ years' experience, warranty-backed work. Get a quote.";

export const pageMetadata = {
  aboutUs: buildMetadata(
    "About Us | Vogue Technics Engine Specialists",
    "Discover Vogue Technics' 20+ years reconditioning and fitting engines across the UK. Learn what makes us a trusted, warranty-backed specialist.",
    "/about-us",
  ),
  contactUs: buildMetadata(
    "Contact Vogue Technics | Engine Quotes UK",
    "Got an engine fault or need a replacement? Talk to our specialists for a fast price on supply & fit. Nationwide collection & delivery. Call or message us today.",
    "/contact-us",
  ),
  engines: buildMetadata(
    "Engines for Sale | Reconditioned & Used | Vogue Technics",
    "Browse our full range of reconditioned and used engines for all makes and models. Expert fitting, warranty, and UK-wide delivery. Get a quote.",
    "/engines",
  ),
  servicesMain: buildMetadata(
    "Engine Repair & Replacement Services UK",
    "From rebuilds and head gaskets to timing chains, turbos and diagnostics — independent specialists charging less than the main dealer. Book your job today.",
    "/services",
  ),
  gallery: buildMetadata(
    "Our Work | Engine Rebuilds & Repairs Gallery",
    "See real reconditioning, rebuild and fitting jobs we've completed across BMW, Audi, Jaguar and Land Rover. Quality you can judge before you commit.",
    "/gallery",
  ),
  reviews: buildMetadata(
    "Customer Reviews | Vogue Technics Engines",
    "Read what UK drivers say about our reconditioned engines, repairs and supply & fit service — honest feedback from real customers. See the reviews.",
    "/reviews",
  ),
  ancillaries: buildMetadata(
    "Engine Ancillaries & Parts UK | Supply & Fit",
    "Turbos, alternators, pumps, EGR valves, DPFs and more for BMW, Audi, Jaguar and Land Rover — genuine and reconditioned, supplied or fitted. Find your part.",
    "/ancillaries",
  ),
  bmwEngines: buildMetadata(
    "Reconditioned & Used BMW Engines | Fitted UK",
    "Low-mileage and fully rebuilt BMW engines for 1–7 Series, X1–X5 and more — N47, N57, B47 and beyond. Save up to 40% vs dealer. Enter your reg for a price.",
    "/bmw-engines",
  ),
  audiEngines: buildMetadata(
    "Reconditioned & Used Audi Engines | Fitted UK",
    "Rebuilt and low-mileage Audi engines for A1–A8, Q2–Q7, TT and R8. TFSI and TDI units tested, warrantied and fitted nationwide. Get your Audi engine price.",
    "/audi-engines",
  ),
  jaguarEngines: buildMetadata(
    "Jaguar Engines | Reconditioned & Used | Vogue Technics",
    "Shop quality reconditioned and used Jaguar engines with expert fitting, warranty, and UK-wide delivery. Get your free, no-obligation quote.",
    "/jaguar-engines",
  ),
  landRoverEngines: buildMetadata(
    "Land Rover Engines | Reconditioned & Used UK",
    "Specialist Land Rover engines for Defender, Discovery and Freelander — TDV6, Ingenium and V8 units rebuilt to factory spec. Fitted UK-wide. Call for a price.",
    "/land-rover-engines",
  ),
  rangeRoverEngines: buildMetadata(
    "Range Rover Engines | Reconditioned & Used | Vogue Technics",
    "Shop quality reconditioned and used Range Rover engines for all models. Expert fitting, warranty, and UK-wide delivery. Get your free quote.",
    "/range-rover-engines",
  ),
  rangeRoverSport: buildMetadata(
    "Range Rover Sport Engines | Vogue Technics",
    "Buy quality reconditioned and used Range Rover Sport engines with expert fitting, warranty, and UK-wide delivery. Get your free quote today.",
    "/range-rover-sport-engines",
  ),
  rangeRoverSportSvr: buildMetadata(
    "Range Rover Sport SVR Engine | 5.0 V8 Rebuilt",
    "Specialist 5.0 supercharged V8 SVR engines, fully rebuilt to factory tolerances. Supply only or fitted by our team with warranty. Call for an SVR engine quote.",
    "/range-rover-sport-svr-engines",
  ),
  rangeRoverEvoque: buildMetadata(
    "Range Rover Evoque Engines | Recon & Used UK",
    "Ingenium and SD4 Evoque engines, low-mileage or rebuilt and pressure-tested before fitting. Nationwide supply & fit with warranty. Enter your reg for a price.",
    "/range-rover-evoque-engines",
  ),
  rangeRoverVelar: buildMetadata(
    "Range Rover Velar Engines | Reconditioned & Used | Vogue Technics",
    "Shop dependable reconditioned and used Range Rover Velar engines with expert fitting, warranty, and UK-wide delivery. Request a free quote.",
    "/range-rover-velar-engines",
  ),
  rangeRoverVogueMk4: buildMetadata(
    "Range Rover Vogue New Engines | Vogue Technics",
    "Explore new and reconditioned Range Rover Vogue engines, expertly fitted with warranty backing. Get UK-wide delivery and a free quote today.",
    "/range-rover-vogue-new-mk-4-engines",
  ),
  rangeRoverVogueMk3: buildMetadata(
    "Range Rover Vogue MK3 Engines | Recon & Used",
    "Keep your MK3 Vogue on the road with a rebuilt or low-mileage TDV8 / V8 engine, tested and fitted UK-wide. Big savings on the dealer. Call for a price.",
    "/range-rover-vogue-old-mk-3-engines",
  ),
  rangeRover2: buildMetadata(
    "Range Rover 2.0 Engines | Recon & Used UK",
    "Ingenium 2.0 petrol and diesel Range Rover engines — fully tested low-mileage units and OEM-spec rebuilds. Fitted nationwide with warranty. Enter your reg.",
    "/range-rover-2",
  ),
  rangeRover3: buildMetadata(
    "Range Rover 3.0 Engines | Recon & Used UK",
    "3.0 TDV6 and SDV6 Range Rover engines rebuilt or supplied low-mileage, up to 40% cheaper than the dealer. UK-wide supply & fit. Request a 3.0 engine quote.",
    "/range-rover-3",
  ),
  rangeRover44: buildMetadata(
    "Range Rover 4.4 SDV8 Engines | Recon & Used UK",
    "Powerful 4.4 SDV8 diesel Range Rover engines, remanufactured to factory spec and fitted by specialists. Warranty and collection included. Call for a price.",
    "/range-rover-4.4",
  ),
  rangeRover5: buildMetadata(
    "Range Rover 5.0 V8 Engines | Supercharged Recon",
    "5.0 supercharged V8 Range Rover engines for Sport, Vogue and SVR — GEN1 and GEN2 units rebuilt and fitted UK-wide. Warranty included. Request a quote.",
    "/range-rover-5",
  ),
  landRoverDefender: buildMetadata(
    "Land Rover Defender Engines | Recon & Used UK",
    "TD5, Puma 2.2/2.4 and Ingenium Defender engines rebuilt or supplied low-mileage, tested and fitted nationwide. Built to last off-road. Enter your reg for a price.",
    "/land-rover-defender-engines",
  ),
  discovery3: buildMetadata(
    "Discovery 3 Engines | 2.7 TDV6 Recon & Used UK",
    "2.7 TDV6 and 4.4 V8 Discovery 3 engines rebuilt to OEM spec or supplied low-mileage. Fitted UK-wide with warranty and recovery. Get a Discovery 3 engine quote.",
    "/land-rover-discovery-3-engines",
  ),
  discovery4: buildMetadata(
    "Discovery 4 Engines | 3.0 TDV6 Recon & Used",
    "3.0 TDV6 and SDV6 Discovery 4 engines, fully rebuilt or low-mileage and pressure-tested before fitting. Nationwide supply & fit. Call for a price today.",
    "/land-rover-discovery-4-engines",
  ),
  discovery5: buildMetadata(
    "Land Rover Discovery 5 Engines | Vogue Technics",
    "Find reliable reconditioned and used Land Rover Discovery 5 engines, expertly fitted with warranty and UK-wide delivery. Request your quote today.",
    "/land-rover-discovery-5-engines",
  ),
  discoverySport: buildMetadata(
    "Discovery Sport Engines | Recon & Used UK",
    "Ingenium and SD4 Discovery Sport engines — tested low-mileage units or full OEM rebuilds, fitted nationwide with warranty. Enter your reg for an instant price.",
    "/land-rover-discovery-sport-engines",
  ),
  freelander2: buildMetadata(
    "Freelander 2 Engines | 2.2 TD4 Recon & Used",
    "2.2 TD4 and 3.2 i6 Freelander 2 engines rebuilt to spec or supplied low-mileage, tested and fitted UK-wide. Reliable and affordable. Call for a price.",
    "/land-rover-freelander-2-engines",
  ),
  landRover2: buildMetadata(
    "Land Rover 2.0 Engines | Recon & Used UK",
    "Ingenium 2.0 petrol and diesel Land Rover engines, low-mileage or rebuilt to OEM tolerances. Supplied and fitted nationwide with warranty. Get your price.",
    "/land-rover-2",
  ),
  landRover3: buildMetadata(
    "Land Rover 3.0 TDV6 Engines | Recon & Used UK",
    "3.0 TDV6 and SDV6 Land Rover engines rebuilt or supplied low-mileage, up to 40% below dealer prices. UK-wide supply & fit with warranty. Request a quote.",
    "/land-rover-3",
  ),
  landRover44: buildMetadata(
    "Land Rover 4.4 V8 Engines | Recon & Used UK",
    "4.4 SDV8 and petrol V8 Land Rover engines remanufactured to factory spec and fitted by specialists. Warranty and collection included. Call for a price today.",
    "/land-rover-4.4",
  ),
  landRover5: buildMetadata(
    "Land Rover 5.0 V8 Engines | Supercharged Recon",
    "5.0 supercharged V8 Land Rover engines fully rebuilt to factory tolerances, supplied or fitted UK-wide with warranty. Restore the power. Request a quote.",
    "/land-rover-5",
  ),
  jaguarFPace: buildMetadata(
    "Jaguar F-Pace Engines | Recon & Used UK",
    "Ingenium diesel and supercharged petrol F-Pace engines, low-mileage or rebuilt and tested before fitting. Nationwide supply & fit. Enter your reg for a price.",
    "/jaguar-f-pace-engines",
  ),
  jaguarEPace: buildMetadata(
    "Jaguar E-Pace Engines | Recon & Used UK",
    "Ingenium 2.0 petrol and diesel E-Pace engines remanufactured to OEM spec or supplied low-mileage, fitted UK-wide with warranty. Get your E-Pace engine quote.",
    "/jaguar-e-pace-engines",
  ),
  jaguarXe: buildMetadata(
    "Jaguar XE Engines | Reconditioned & Used UK",
    "2.0d, 2.0 petrol and V6 XE engines tested, rebuilt and fitted by specialists nationwide. Save against dealer prices, warranty included. Request a quote.",
    "/jaguar-xe-engines",
  ),
  jaguarXf: buildMetadata(
    "Jaguar XF Engines | 2.0d & 3.0d Recon & Used",
    "Low-mileage and fully rebuilt XF engines — 2.0d, 3.0d and V6 petrol — pressure-tested before fitting and warrantied. UK-wide supply & fit. Call for a price.",
    "/jaguar-xf-engines",
  ),
  jaguarXfSportbrake: buildMetadata(
    "Jaguar XF Sportbrake Engines | Recon & Used",
    "Diesel and petrol XF Sportbrake engines rebuilt to factory spec or supplied low-mileage, fitted nationwide with warranty. Get your Sportbrake engine quote.",
    "/jaguar-xf-sportbrake-engines",
  ),
  jaguarXj: buildMetadata(
    "Jaguar XJ Engines | Reconditioned & Used UK",
    "3.0d and V6/V8 petrol XJ engines, tested low-mileage units or OEM rebuilds, supplied and fitted across the UK with warranty. Request your XJ engine price.",
    "/jaguar-xj-engines",
  ),
  jaguarFTypeCoupe: buildMetadata(
    "Jaguar F-Type Engines | V6 & 5.0 V8 Recon UK",
    "Supercharged V6 and 5.0 V8 F-Type engines fully rebuilt to factory tolerances, supply only or fitted with warranty. Restore the performance. Call for a quote.",
    "/jaguar-f-type-coupe-engines",
  ),
  jaguarXk: buildMetadata(
    "Jaguar XK Engines | V8 Reconditioned & Used UK",
    "4.2 and 5.0 V8 XK engines rebuilt to OEM spec or supplied low-mileage, tested and fitted nationwide with warranty. Keep your XK running. Request a price.",
    "/jaguar-xk-engines",
  ),
  jaguarXk8: buildMetadata(
    "Jaguar XK8 Engines | 4.0 & 4.2 V8 Recon UK",
    "Classic XK8 4.0 and 4.2 V8 engines remanufactured to factory standard for collectors and daily drivers alike. Fitted UK-wide with warranty. Call for a quote.",
    "/jaguar-xk8-engines",
  ),
  jaguarXkr: buildMetadata(
    "Jaguar XKR Engines | Supercharged V8 Recon",
    "Supercharged V8 XKR engines rebuilt to factory tolerances, supply only or fitted by specialists with warranty. Big savings on the dealer. Request a quote.",
    "/jaguar-xkr-engines",
  ),
  jaguarXkrS: buildMetadata(
    "Jaguar XKR-S Engines | 5.0 V8 Reconditioned",
    "High-output 5.0 supercharged V8 XKR-S engines fully rebuilt to factory spec, supplied or fitted UK-wide with warranty. Restore the power. Call for a price.",
    "/jaguar-xkr-s-engines",
  ),
  bmw1Series: buildMetadata(
    "BMW 1 Series Engines | Recon & Used UK",
    "116d, 118d, 120d and petrol 1 Series engines — N47, B47 and more — tested low-mileage or rebuilt and fitted nationwide. Enter your reg for a price.",
    "/bmw-1-series-engines",
  ),
  bmw2Series: buildMetadata(
    "BMW 2 Series Engines | Recon & Used UK",
    "218d, 220d and petrol 2 Series engines rebuilt to OEM spec or supplied low-mileage, fitted UK-wide with warranty. Save against the dealer. Request a quote.",
    "/bmw-2-series-engines",
  ),
  bmw3Series: buildMetadata(
    "BMW 3 Series Engines | 320d Recon & Used UK",
    "318d, 320d, 330d and petrol 3 Series engines — N47, B47, N57 — pressure-tested or fully rebuilt and fitted nationwide. Enter your reg for an instant price.",
    "/bmw-3-series-engines",
  ),
  bmw4Series: buildMetadata(
    "BMW 4 Series Engines | 420d Recon & Used UK",
    "418d, 420d, 435d and petrol 4 Series engines, low-mileage or rebuilt to factory spec, fitted UK-wide with warranty. Cheaper than the dealer. Request a quote.",
    "/bmw-4-series-engines",
  ),
  bmw5Series: buildMetadata(
    "BMW 5 Series Engines | 520d Recon & Used UK",
    "520d, 525d, 530d, 535d and petrol 5 Series engines — N47, B47, N57 — tested or fully rebuilt and fitted nationwide. Enter your reg for a price today.",
    "/bmw-5-series-engines",
  ),
  bmw6Series: buildMetadata(
    "BMW 6 Series Engines | 640d Recon & Used UK",
    "640d and petrol 6 Series engines rebuilt to OEM spec or supplied low-mileage, fitted UK-wide with warranty. Big savings on dealer prices. Call for a quote.",
    "/bmw-6-series-engines",
  ),
  bmw7Series: buildMetadata(
    "BMW 7 Series Engines | 730d Recon & Used UK",
    "730d, 740d, 750d and petrol 7 Series engines, tested low-mileage or fully rebuilt and fitted by specialists nationwide. Avoid dealer costs. Request a price.",
    "/bmw-7-series-engines",
  ),
  bmwX1: buildMetadata(
    "BMW X1 Engines | sDrive & xDrive Recon UK",
    "sDrive and xDrive X1 engines — 18d, 20d, 25d and petrol — pressure-tested or rebuilt to factory spec and fitted UK-wide. Enter your reg for an instant price.",
    "/bmw-x1-engines",
  ),
  bmwX2: buildMetadata(
    "BMW X2 Engines | Reconditioned & Used UK",
    "Diesel and petrol X2 engines, low-mileage units or OEM rebuilds, tested and fitted nationwide with warranty. Save against the dealer. Request a quote today.",
    "/bmw-x2-engines",
  ),
  bmwX3: buildMetadata(
    "BMW X3 Engines | xDrive Recon & Used UK",
    "xDrive X3 engines — 20d, 28d, 30d, 35d — tested low-mileage or rebuilt to factory spec and fitted UK-wide with warranty. Enter your reg for a price.",
    "/bmw-x3-engines",
  ),
  bmwX5: buildMetadata(
    "BMW X5 Engines | xDrive Recon & Used UK",
    "xDrive X5 engines — 30d, 35d, 40d, M50d — pressure-tested or fully rebuilt and fitted nationwide with warranty. Big savings on the dealer. Request a quote.",
    "/bmw-x5-engines",
  ),
  serviceEngineRebuild: buildMetadata(
    "Engine Rebuild Specialists UK | Recon Engines",
    "Full strip-down rebuilds and remanufactured engines for BMW, Audi, Jaguar and Land Rover, built to factory tolerances with warranty. Book your rebuild today.",
    "/services/engine-rebuild",
  ),
  serviceEngineRepair: buildMetadata(
    "Engine Repair & Servicing UK | Vogue Technics",
    "Diagnostics, repairs and full overhauls by specialist engine mechanics for BMW, Audi, Jaguar, Land Rover and Range Rover. Get back on the road — book today.",
    "/services/engine-repair",
  ),
  serviceEngineReplacement: buildMetadata(
    "Engine Replacement UK | Supply & Fit Service",
    "Reconditioned and low-mileage replacement engines supplied and fitted in one job, with collection, delivery and warranty. Less than the dealer. Get a price.",
    "/services/engine-replacement",
  ),
  serviceEngineSwap: buildMetadata(
    "Engine Swap Specialists UK | Supply & Fit",
    "Professional engine swaps with sourcing, fitting, diagnostics and warranty for cars, SUVs and 4x4s. Multi-brand specialists nationwide. Request a quote today.",
    "/services/engine-swap",
  ),
  serviceEngineHealthCheck: buildMetadata(
    "Engine Health Check & Diagnostics UK",
    "Spot faults early with a full engine health check and diagnostic scan for BMW, Audi, Jaguar and Land Rover. Avoid costly failures — book your check today.",
    "/services/engine-health-check",
  ),
  serviceHeadGasketReplacement: buildMetadata(
    "Head Gasket Replacement Service | Vogue Technics",
    "Spot the signs of a blown head gasket early and get it fixed properly. Expert replacement with OEM-grade parts and warranty. Request a quote.",
    "/services/head-gasket-replacement",
  ),
  serviceTimingBeltReplacement: buildMetadata(
    "Timing Belt Replacement UK | Supply & Fit",
    "Don't risk a snapped belt — book timing belt replacement for BMW, Audi, Jaguar and Land Rover with collection and warranty. Get your free quote today.",
    "/services/timing-belt-replacement",
  ),
  serviceTimingChainReplacement: buildMetadata(
    "Timing Chain Replacement UK | Get a Quote",
    "Rattling on start-up? Fix worn timing chains and tensioners for BMW, Audi, Jaguar and Land Rover before they fail. Supply & fit nationwide. Request a quote.",
    "/services/timing-chain-replacement",
  ),
  serviceTurboReplacement: buildMetadata(
    "Turbo Replacement Service | Vogue Technics",
    "Fix a failing turbo fast with our expert turbo replacement service. Quality parts, warranty-backed workmanship, and UK-wide fitting. Get a quote.",
    "/services/turbo-replacement",
  ),
} as const;
