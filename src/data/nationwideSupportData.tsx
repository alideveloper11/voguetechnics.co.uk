import React from "react";

export interface NationwideSupportEntry {
  headingMain: string;
  headingHighlight: string;
  paragraph1: React.ReactNode;
  paragraph2: React.ReactNode;
  buttonText: string;
}

export const nationwideSupportData: Record<string, NationwideSupportEntry> = {
  default: {
    headingMain: "Nationwide Support &",
    headingHighlight: "OEM Parts Excellence",
    paragraph1: (
      <>
        Our commitment to engineering excellence extends across the entire South East, serving
        luxury vehicle owners in <strong>London, Essex, Kent</strong>, and beyond with our secure
        nationwide collection and delivery service. We use only{" "}
        <strong className="text-emerald-600">genuine Land Rover OEM parts</strong> and uprated
        heavy-duty components where known design weaknesses exist.
      </>
    ),
    paragraph2: (
      <>
        Our engine rebuild process involves a complete technical strip-down, high-pressure chemical
        cleaning, and precision honing of cylinder bores to ensure maximum longevity and resale
        value. Every job is backed by a comprehensive warranty — from the classic{" "}
        <strong>Range Rover L322 to the modern Discovery 5 and Defender L663</strong>.
      </>
    ),
    buttonText: "Get Quote",
  },

  "head-gasket-replacement": {
    headingMain: "Nationwide Head Gasket Repair &",
    headingHighlight: "OEM Gasket Guarantee",
    paragraph1: (
      <>
        Our head gasket repair service covers the full South East, with secure collection and
        delivery across <strong>London, Essex, Kent</strong> and beyond. We use only{" "}
        <strong className="text-emerald-600">genuine multi-layer steel gaskets</strong> and OEM
        torque-to-yield fasteners — never budget alternatives — ensuring a lasting seal on every
        cylinder head we work on.
      </>
    ),
    paragraph2: (
      <>
        Every repair begins with a complete strip-down, pressure test, and precision cylinder head
        skim where required. All work meets manufacturer specification and is backed by a
        comprehensive <strong>six-month warranty</strong> — covering Range Rover, Land Rover,
        Jaguar, Audi and BMW engine variants across our West Thurrock facility.
      </>
    ),
    buttonText: "Get a Head Gasket Quote",
  },

  "timing-chain-replacement": {
    headingMain: "Nationwide Timing Chain Service &",
    headingHighlight: "Premium Kit Coverage",
    paragraph1: (
      <>
        We deliver specialist timing chain replacements across the South East, with secure
        collection from <strong>London, Essex, Kent</strong> and surrounding areas. Every service
        uses reinforced OEM-spec chain kits — chains, tensioners and guide rails — from trusted
        suppliers including{" "}
        <strong className="text-emerald-600">Iwis, FAI and Febi Bilstein</strong>.
      </>
    ),
    paragraph2: (
      <>
        Our replacement process covers the full timing system with an oil system inspection and
        sump check carried out as standard. All work is precision-timed using manufacturer-specific
        locking tools and backed by a <strong>six-month warranty</strong> across BMW N47, N57,
        Audi TFSI and TDCI engine platforms.
      </>
    ),
    buttonText: "Get a Timing Chain Quote",
  },

  "turbo-replacement": {
    headingMain: "Nationwide Turbo Replacement &",
    headingHighlight: "OEM Unit Supply",
    paragraph1: (
      <>
        Our turbocharger replacement service extends across the South East, with nationwide
        collection and delivery from <strong>London, Essex, Kent</strong> and surrounding regions.
        We source and fit precision-balanced OEM or remanufactured units from world-leading brands
        including{" "}
        <strong className="text-emerald-600">Garrett, BorgWarner and Mitsubishi</strong>, verified
        on VSR balancing rigs before installation.
      </>
    ),
    paragraph2: (
      <>
        Every turbo replacement includes a full engine oil system flush and new oil feed and return
        pipes as standard, eliminating the root cause of most failures. Boost calibration is
        completed using advanced diagnostic software, and every installation carries a{" "}
        <strong>six-month warranty</strong> covering all turbocharged petrol and diesel
        applications.
      </>
    ),
    buttonText: "Get a Turbo Quote",
  },

  "engine-rebuild": {
    headingMain: "Nationwide Engine Rebuilds &",
    headingHighlight: "Zero-Hour Specification",
    paragraph1: (
      <>
        Our engine rebuild service covers vehicle owners across the South East, with secure
        nationwide collection and delivery from <strong>London, Essex, Kent</strong> and beyond. We
        rebuild using only{" "}
        <strong className="text-emerald-600">genuine OEM or OEM-equivalent components</strong> —
        new pistons, rings, bearings, oil pumps and timing systems — built to zero-hour factory
        specification on every unit.
      </>
    ),
    paragraph2: (
      <>
        Every rebuild involves ultrasonic cleaning, professional cylinder boring, crank polishing
        and precision head skimming through our specialist machine partners. Rebuilt units are
        bench-tested for oil pressure and compression before re-installation, with all work backed
        by a <strong>six-month warranty</strong> across Range Rover, Land Rover, Jaguar, Audi and
        BMW platforms.
      </>
    ),
    buttonText: "Get a Rebuild Quote",
  },

  "engine-repair": {
    headingMain: "Nationwide Engine Repairs &",
    headingHighlight: "Advanced Diagnostic Coverage",
    paragraph1: (
      <>
        We provide targeted engine repair services across the South East, with vehicle collection
        and delivery available throughout <strong>London, Essex, Kent</strong> and beyond. Our
        workshop uses{" "}
        <strong className="text-emerald-600">main-dealer-grade diagnostic equipment</strong> to
        identify the precise fault before any work begins — ensuring accurate repairs with no
        unnecessary parts or guesswork.
      </>
    ),
    paragraph2: (
      <>
        From cooling system overhauls and injector replacement to sensor faults and EGR repairs,
        our technicians follow strict OEM procedures on every job. Most common repairs are completed
        within a single working day, and all work is backed by a{" "}
        <strong>six-month warranty</strong> across Range Rover, Land Rover, Jaguar, Audi and BMW
        models.
      </>
    ),
    buttonText: "Get a Repair Quote",
  },

  "engine-replacement": {
    headingMain: "Nationwide Engine Replacement &",
    headingHighlight: "Low-Mileage Unit Supply",
    paragraph1: (
      <>
        Our engine replacement service covers the full South East, with secure nationwide
        collection and delivery from <strong>London, Essex, Kent</strong> and surrounding counties.
        Every replacement unit — whether low-mileage used or fully reconditioned — undergoes a{" "}
        <strong className="text-emerald-600">60-point pre-installation inspection</strong>,
        including compression testing and oil pressure verification, before entering our workshop.
      </>
    ),
    paragraph2: (
      <>
        The supply and fit process includes new oil, filters and coolant as standard, along with
        full ECU coding to integrate the replacement engine with your vehicle&apos;s existing
        electronics. All engine number paperwork for DVLA registration is provided, and every
        installation is backed by a <strong>six-month written warranty</strong>.
      </>
    ),
    buttonText: "Get a Replacement Quote",
  },

  "engine-swap": {
    headingMain: "Nationwide Engine Swap Service &",
    headingHighlight: "ECU Integration Expertise",
    paragraph1: (
      <>
        Our engine swap service is available to vehicle owners across the South East, with
        nationwide collection and delivery covering <strong>London, Essex, Kent</strong> and
        beyond. We manage the full logistics of complex swaps — from sourcing the correct unit to
        handling wiring loom mapping and{" "}
        <strong className="text-emerald-600">dual-CANbus system integration</strong> — on all
        premium European platforms.
      </>
    ),
    paragraph2: (
      <>
        Using dealer-level ECU adaptation software, we marry every replacement or upgraded engine
        to your vehicle&apos;s existing security, transmission and traction systems without
        residual warning lights. All swaps include a multi-stage calibration road test and are
        backed by a <strong>six-month warranty</strong> covering Range Rover, Audi, BMW and Jaguar
        applications.
      </>
    ),
    buttonText: "Get a Swap Quote",
  },

  "timing-belt-replacement": {
    headingMain: "Nationwide Cambelt Replacement &",
    headingHighlight: "Full Kit Supply",
    paragraph1: (
      <>
        Our timing belt replacement service covers the entire South East, with secure collection
        and delivery from <strong>London, Essex, Kent</strong> and surrounding areas. We use only{" "}
        <strong className="text-emerald-600">premium full kits from Gates, Continental and Dayco</strong>{" "}
        — belt, idler pulleys and hydraulic tensioner — never partial replacements that compromise
        long-term reliability.
      </>
    ),
    paragraph2: (
      <>
        Every cambelt service includes a water pump replacement as standard, eliminating the risk
        of a seized pump destroying a brand-new belt. The date and mileage of every change is
        recorded in your service history, and all work is backed by a{" "}
        <strong>six-month warranty</strong> across Land Rover, BMW, Jaguar and Audi applications.
      </>
    ),
    buttonText: "Get a Cambelt Quote",
  },

  "engine-health-check": {
    headingMain: "Nationwide Engine Diagnostics &",
    headingHighlight: "50-Point Health Check",
    paragraph1: (
      <>
        Our engine health check service is available across the South East, with vehicle collection
        offered throughout <strong>London, Essex, Kent</strong> and beyond for owners unable to
        drive in. We use{" "}
        <strong className="text-emerald-600">main-dealer-grade diagnostic tools</strong> to read
        live data streams, scan all fault codes and pressure-test the cooling system — well beyond
        a standard OBD code read.
      </>
    ),
    paragraph2: (
      <>
        Our 50-point protocol includes a full compression test, borescope cylinder inspection and
        fluid quality analysis to detect early signs of wear before they escalate. Every check
        concludes with a <strong>digital report and stoplight assessment</strong> delivered to your
        phone, covering all inspected items with photographic evidence and recommended next steps.
      </>
    ),
    buttonText: "Book a Health Check",
  },

  "range-rover-2": {
    headingMain: "Nationwide Range Rover 2.0 Support &",
    headingHighlight: "OEM Parts Excellence",
    paragraph1: (
      <>
        Our Range Rover 2.0 engine service includes UK-wide collection and delivery, with regular
        support across <strong>London, Essex, Kent</strong> and surrounding areas. We confirm the
        exact 2.0 engine code before quoting, covering Ingenium diesel and petrol platforms with
        repair, rebuild and replacement options.
      </>
    ),
    paragraph2: (
      <>
        Every 2.0 job is matched to the correct parts route, from timing chains and turbo parts to
        cooling and fuel-system components. We use <strong>OEM or quality-matched parts</strong>{" "}
        and back major engine work with written warranty terms.
      </>
    ),
    buttonText: "Get a 2.0 Engine Quote",
  },

  "range-rover-3": {
    headingMain: "Nationwide Range Rover 3.0 Support &",
    headingHighlight: "OEM Parts Excellence",
    paragraph1: (
      <>
        Our Range Rover 3.0 engine service supports TDV6, SDV6, petrol and related JLR platforms
        across the UK, with collection available from <strong>London, Essex, Kent</strong> and
        beyond. We identify the exact engine code and failure pattern before recommending rebuild,
        repair or replacement.
      </>
    ),
    paragraph2: (
      <>
        We source the correct <strong>OEM or quality-matched components</strong> for timing, turbo,
        cooling, fuel and bottom-end work, then complete the repair with diagnostic checks, road
        testing and written warranty cover.
      </>
    ),
    buttonText: "Get a 3.0 Engine Quote",
  },

  "range-rover-4.4": {
    headingMain: "Nationwide Range Rover 4.4 Support &",
    headingHighlight: "OEM Parts Excellence",
    paragraph1: (
      <>
        Our Range Rover 4.4 engine service covers TDV8 and V8 applications nationwide, including
        secure collection from <strong>London, Essex, Kent</strong> and surrounding areas. We check
        timing, oil pressure, turbo condition and cooling system health before any major repair is
        agreed.
      </>
    ),
    paragraph2: (
      <>
        For 4.4 rebuilds and replacements, we use <strong>OEM or quality-matched parts</strong>{" "}
        selected for the exact V8 platform, with clear written quotes, final road testing and
        warranty terms on major engine work.
      </>
    ),
    buttonText: "Get a 4.4 Engine Quote",
  },

  "range-rover-5": {
    headingMain: "Nationwide Range Rover 5.0 Support &",
    headingHighlight: "OEM Parts Excellence",
    paragraph1: (
      <>
        Our Range Rover 5.0 engine service supports supercharged and naturally aspirated V8 models,
        with UK-wide collection and regular coverage across <strong>London, Essex, Kent</strong>.
        We inspect timing chains, cooling, oiling and supercharger-related faults before quoting.
      </>
    ),
    paragraph2: (
      <>
        Each 5.0 V8 repair or replacement is built around the correct engine code and parts
        specification, using <strong>OEM or quality-matched components</strong> with diagnostic
        verification, road testing and written warranty.
      </>
    ),
    buttonText: "Get a 5.0 Engine Quote",
  },

  "land-rover-2": {
    headingMain: "Nationwide Land Rover 2.0 Support &",
    headingHighlight: "OEM Parts Excellence",
    paragraph1: (
      <>
        Our Land Rover 2.0 engine service covers Ingenium diesel and petrol applications across the
        UK, with collection and delivery available from <strong>London, Essex, Kent</strong> and
        beyond. We confirm the exact engine code before advising on repair, rebuild or replacement.
      </>
    ),
    paragraph2: (
      <>
        From timing chain and turbo repairs to cooling, fuel and emissions-related work, we use{" "}
        <strong>OEM or quality-matched parts</strong> selected for the 2.0 Land Rover platform and
        back major work with written warranty.
      </>
    ),
    buttonText: "Get a 2.0 Engine Quote",
  },

  "land-rover-3": {
    headingMain: "Nationwide Land Rover 3.0 Support &",
    headingHighlight: "OEM Parts Excellence",
    paragraph1: (
      <>
        Our Land Rover 3.0 engine service supports TDV6, SDV6 and newer 3.0 platforms nationwide,
        with secure collection from <strong>London, Essex, Kent</strong> and surrounding areas. We
        assess timing, crankshaft, turbo, injector and cooling concerns before recommending a route.
      </>
    ),
    paragraph2: (
      <>
        Every 3.0 rebuild, repair or replacement is quoted against the exact engine code, using{" "}
        <strong>OEM or quality-matched components</strong> and completed with diagnostic checks,
        road testing and written warranty terms.
      </>
    ),
    buttonText: "Get a 3.0 Engine Quote",
  },

  "land-rover-4.4": {
    headingMain: "Nationwide Land Rover 4.4 Support &",
    headingHighlight: "OEM Parts Excellence",
    paragraph1: (
      <>
        Our Land Rover 4.4 engine service covers V8 petrol and diesel applications with UK-wide
        logistics, including collection from <strong>London, Essex, Kent</strong> and nearby areas.
        We inspect timing, oil pressure, turbo systems, cooling and internal wear before quoting.
      </>
    ),
    paragraph2: (
      <>
        We match each 4.4 engine job to the correct parts specification, using{" "}
        <strong>OEM or quality-matched parts</strong> for rebuilds, repairs and replacements, then
        verify the completed work with road testing and warranty documentation.
      </>
    ),
    buttonText: "Get a 4.4 Engine Quote",
  },

  "land-rover-5": {
    headingMain: "Nationwide Land Rover 5.0 Support &",
    headingHighlight: "OEM Parts Excellence",
    paragraph1: (
      <>
        Our Land Rover 5.0 engine service supports AJ133 and related V8 platforms nationwide, with
        collection available from <strong>London, Essex, Kent</strong> and surrounding areas. We
        check timing chains, oiling, cooling, fuel systems and internal wear before quoting.
      </>
    ),
    paragraph2: (
      <>
        For 5.0 V8 repairs, rebuilds and replacement engines, we use{" "}
        <strong>OEM or quality-matched parts</strong> selected for the exact platform, followed by
        diagnostic verification, road testing and written warranty terms.
      </>
    ),
    buttonText: "Get a 5.0 Engine Quote",
  },
};
