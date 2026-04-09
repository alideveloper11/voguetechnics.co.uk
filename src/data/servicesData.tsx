import { Settings, Zap, Wrench, RefreshCw, Layers, ShieldCheck, Activity, Gauge } from "lucide-react";
import React from "react";

export interface Service {
  title: string;
  slug: string;
  icon: React.ReactNode;
  shortDescription: string;
  longDescription: string;
  features: string[];
  detailedParagraphs: string[];
  preFaqParagraphs: string[];
  faqs: { question: string, answer: string }[];
}

export const services: Service[] = [
  {
    title: "Head Gasket Replacement",
    slug: "head-gasket-replacement",
    icon: <ShieldCheck className="w-6 h-6" />,
    shortDescription: "Expert repair of engine head gaskets to prevent overheating and power loss.",
    longDescription: "Our specialized head gasket replacement service ensures your engine's integrity. We use high-grade gaskets and precision tools to seal your engine, preventing leaks and maintaining optimal compression.",
    features: ["Pressure testing", "Precision surfacing", "Premium gaskets", "Full engine diagnostic"],
    detailedParagraphs: [
      "The head gasket is one of the most critical components in any internal combustion engine, acting as the primary seal between the cylinder head and the engine block. Its primary function is to seal the cylinders to ensure maximum compression is achieved while preventing coolant and oil from leaking into the cylinders. When a head gasket fails, it often leads to a 'blown head gasket,' which can cause catastrophic engine damage if not addressed immediately.",
      "At Vogue Technics, our approach to head gasket replacement is comprehensive and surgical. We don't just replace the gasket; we perform a deep-dive investigation into why the failure occurred in the first place. Common root causes include cooling system failures, blocked radiators, or faulty water pumps. By identifying and resolving these issues, we ensure that your new gasket provides a lasting seal and doesn't suffer the same fate as the original.",
      "Our replacement process involves the precision removal of the cylinder head, followed by a rigorous cleaning and inspection phase. We utilize state-of-the-art pressure testing to identify any hairline cracks in the head. Furthermore, we check for 'warping'—a common result of engine overheating. If any distortion is detected beyond the manufacturer's tight tolerances, we involve professional multi-axis machining to skim the head back to a perfectly flat surface.",
      "We exclusively use high-performance, multi-layer steel (MLS) gaskets or OEM-equivalent components from trusted manufacturers. These modern gaskets offer superior resilience to heat and pressure compared to standard composite alternatives. Along with the gasket, we replace the cylinder head bolts with new 'torque-to-yield' fasteners, ensuring that the clamping force is applied perfectly and consistently across the entire sealing surface.",
      "Post-installation, our technicians perform a series of rigorous tests, including a gas-leak test and prolonged idling monitoring, to ensure the cooling system is bleeding correctly and that the engine is maintaining stable operating temperatures. This level of detail is why we are the preferred choice for prestigious brands like Range Rover and Audi, where engine tolerances are extremely fine and leave no room for error.",
      "Choosing Vogue Technics for your head gasket repair means choosing peace of mind. We provide a fully transparent service with detailed photographic evidence of the internal condition of your engine. Our goal is to restore your vehicle’s performance and reliability, effectively extending the lifespan of your engine and saving you from the high costs of a full engine replacement down the line."
    ],
    preFaqParagraphs: [
      "When it comes to head gasket repairs, transparency is at the core of our business model. We understand that discovering a blown head gasket can be a stressful and potentially expensive experience for any vehicle owner. That's why we provide a detailed, itemized quote upfront, with no hidden costs. We also document the entire repair process with photographs, showing you exactly where the failure occurred and the steps we took to rectify it.",
      "Reliability is not just a buzzword at Vogue Technics; it's a measurable standard. By choosing a specialist facility like ours over a general garage, you are ensuring that your engine is handled by technicians who have performed hundreds of head gasket replacements on your specific vehicle model. This deep familiarity allows us to work more efficiently and accurately, reducing the risk of re-failure and ensuring your car returns to the road in peak condition.",
      "We believe in the quality of our workmanship, which is why we back every head gasket replacement with a comprehensive 6-month warranty. This covers both the parts we install and the precision labor provided by our master technicians. Our warranty is a testament to our confidence in the high-grade Multi-Layer Steel (MLS) gaskets and OEM fasteners we use, providing you with long-term protection and peace of mind.",
      "Finally, our commitment to your convenience sets us apart. We offer a vehicle recovery service across Grays, Essex, and surrounding areas if your car is unsafe to drive due to overheating. From the moment your vehicle enters our West Thurrock workshop to the final road test, our focus is on providing a premium, stress-free experience that gets you back behind the wheel with total confidence in your engine's integrity."
    ],
    faqs: [
      {
        question: "How do I know if my head gasket has blown?",
        answer: "Common signs include white smoke from the exhaust, milky-colored engine oil (resembling a milkshake), external coolant leaks, and frequent engine overheating. If you notice any of these, stop driving and contact us immediately."
      },
      {
        question: "Is it worth fixing a blown head gasket?",
        answer: "In most cases, yes. A professional head gasket replacement is significantly cheaper than a full engine replacement or buying a new car. Our master technicians will provide an honest assessment of your engine's overall health before proceeding."
      },
      {
        question: "How long does the replacement take?",
        answer: "Typically, a head gasket replacement takes between 3 to 5 working days. This allows time for meticulous cleaning, precision machining if required, and comprehensive testing once the engine is reassembled."
      },
      {
        question: "Do you offer a warranty on head gasket repairs?",
        answer: "Yes, we provide a 6-month written warranty on all our head gasket services, covering both parts and labor, provided the cooling system is maintained according to our recommendations."
      }
    ]
  },
  {
    title: "Timing Chain Replacement",
    slug: "timing-chain-replacement",
    icon: <Activity className="w-6 h-6" />,
    shortDescription: "Durable timing chain solutions to keep your engine's internal components in perfect sync.",
    longDescription: "A worn timing chain can lead to catastrophic engine failure. Our replacement service uses genuine or high-quality OEM chains and tensioners to ensure perfect synchronization of your engine's valves and pistons.",
    features: ["OEM spec chains", "New tensioners", "Guide rail inspection", "Precision timing setup"],
    detailedParagraphs: [
      "The timing chain is the 'heartbeat' of your engine, responsible for coordinating the precise opening and closing of valves with the movement of the pistons. Unlike timing belts, chains are designed to last significantly longer, but they are not immune to failure. Over time, chains can 'stretch' or the hydraulic tensioners keeping them tight can fail, leading to skipped timing and, in many cases, catastrophic internal engine damage.",
      "At Vogue Technics, we specialize in high-precision timing chain services for modern engines known for chain issues, such as the BMW N47/N57 and the Audi/VW TFSI range. Our technicians utilize specialized locking tools and synchronization software to ensure that your engine's timing is set to factory perfection. A few millimeters of error can lead to poor fuel economy, loss of power, or engine knocks, which is why we leave nothing to chance.",
      "Our replacement service goes far beyond simply swapping the chain. We perform a complete replacement of the timing kit, which includes the chain itself, the hydraulic tensioners, and the guide rails. Plastic guide rails are a common failure point; they can become brittle and shatter over time, ending up in the oil sump and clogging the oil pickup. We inspect and clean the oil system as a standard part of our timing service.",
      "We prioritize the use of reinforced timing chain kits from OEM manufacturers like FAI, Iwis, or Febi Bilstein. These kits are often redesigned to address the weaknesses of original factory components, providing a more robust and reliable solution. By upgrading your timing system with these high-spec parts, we ensure that your engine is better protected against the high-load stresses of modern driving.",
      "Many modern engines are 'interference' designs, meaning that if the timing chain snaps or jumps, the valves and pistons will collide. This usually results in bent valves and damaged cylinder heads. Our timing chain service is a proactive measure that can save you thousands of pounds in potential engine rebuild costs. We recommend regular inspections, especially for vehicles with high mileage or those that have missed regular oil changes.",
      "Choosing us for your timing chain replacement ensures that your vehicle is handled by experts who understand the intricate mechanics of your specific engine. We provide a comprehensive diagnostic report and verify the engine's performance across the entire rev range post-installation, ensuring that your vehicle regained its original smoothness and responsiveness."
    ],
    preFaqParagraphs: [
      "At Vogue Technics, we understand that a timing chain failure can happen without warning, often leaving vehicle owners with a massive repair bill. Our mission is to provide a transparent and cost-effective alternative to main dealer prices. We offer a fixed-fee diagnostic to assess the health of your timing system, and if a replacement is needed, we provide a clear, all-inclusive quote that covers all the necessary components for a long-lasting repair.",
      "Choosing our specialist workshop means you're benefiting from thousands of hours of experience specifically in high-precision timing systems. We don't use 'universal' tools; we invest in manufacturer-specific locking kits for brands like BMW, Audi, and Jaguar. This ensures that your engine's variable valve timing (VVT) and camshaft synchronization are returned to factory specifications, maximizing both efficiency and engine responsiveness.",
      "We stand firmly behind our work with a 6-month warranty on all our timing chain replacements. This reflects our commitment to using only the highest quality reinforced chains and redesigned tensioners that address original factory weaknesses. When your vehicle leaves our Thurrock facility, you can drive with the absolute peace of mind that your engine's timing is secure and warranted against failure.",
      "Maintaining your engine's value and performance is our top priority. A professionally replaced timing chain by Vogue Technics is recorded in your vehicle's service history, proving to any future buyer that the engine has been maintained to the highest standards. We also provide guidance on the best oil change intervals to follow, as clean oil is the most important factor in extending the life of your new timing chain.",
    ],
    faqs: [
      {
        question: "What are the symptoms of a worn timing chain?",
        answer: "Common signs include a rattling sound from the engine (especially during cold starts), a 'Check Engine' light with timing-related fault codes, and engine misfires or poor performance."
      },
      {
        question: "How often should a timing chain be replaced?",
        answer: "While chains have no set interval like belts, they should be inspected every 60,000 to 80,000 miles. If you notice any rattling noises, it should be changed immediately to avoid engine failure."
      },
      {
        question: "Is it a big job to change the chain?",
        answer: "Yes, timing chain replacement is a complex mechanical task that often requires special tools and can involve removing significant parts of the engine. Our experts typically complete this in 2 to 4 working days."
      },
       {
        question: "Does a timing chain failure mean I need a new engine?",
        answer: "Not necessarily. If the chain jumps while the car is idling, the damage might be limited to a few valves. However, at high speeds, damage is often severe. We offer a full diagnostic to determine the best path forward."
      }
    ]
  },
  {
    title: "Turbo Replacement",
    slug: "turbo-replacement",
    icon: <Zap className="w-6 h-6" />,
    shortDescription: "High-performance turbocharger replacements to restore power and efficiency.",
    longDescription: "Restore your vehicle's acceleration and fuel efficiency with our turbo replacement service. We supply and fit high-performance turbos for all major makes and models.",
    features: ["Core balancing", "Oil feed cleaning", "Wastegate testing", "Performance calibration"],
    detailedParagraphs: [
      "Turbochargers are incredible pieces of engineering that use exhaust gases to force more air into the engine, significantly increasing power and efficiency. However, they operate at extremely high speeds and temperatures, making them sensitive to oil contamination and mechanical wear. A failing turbo can lead to a massive drop in performance, excessive smoke, and even severe engine damage if the turbo's internal components disintegrate.",
      "At Vogue Technics, we provide a sophisticated turbocharger replacement service that goes beyond just 'swapping the part.' We understand that a turbo usually fails due to an external factor, such as a blocked oil feed pipe, a faulty intercooler, or high back pressure from a clogged DPF. Our technicians perform a thorough root-cause analysis to ensure that your new turbocharger isn't immediately damaged by the same issue that killed the old one.",
      "Our process involves a complete flush of the engine's oil system and the installation of new oil feed and return pipes as a standard requirement. We also inspect the air intake and intercooler for any debris or oil accumulation. Ensuring a clean environment is critical for the longevity of a high-revving turbocharger, which can spin at over 200,000 RPM.",
      "We supply and fit high-quality reconditioned or new turbochargers from world-leading brands like Garrett, BorgWarner, and Mitsubishi. Every reconditioned unit we use has been precision-balanced on a VSR (Vibration Sorting Rig) to ensure it operates smoothly without vibration. This level of precision is essential for maintaining the refinement and quiet operation expected in premium vehicles from brands like BMW and Jaguar.",
      "Beyond the mechanical installation, we utilize advanced diagnostic tools to calibrate the turbo's electronic actuator and ensure it is communicating perfectly with the engine's ECU. This ensures that boost pressure is delivered consistently across the rev range, restoring the original 'punchy' acceleration and fuel economy that your vehicle had when new.",
      "Choosing Vogue Technics for your turbocharger replacement means receiving a turn-key solution. We handle the technical diagnosis, the high-precision fitting, and a comprehensive road test to verify boost levels and engine safety parameters. Our expertise ensures that your vehicle's performance is not just restored, but optimized for years of reliable driving."
    ],
    preFaqParagraphs: [
      "Turbocharger failures are often complex, and we take great pride in our transparent diagnostic process. We don't just tell you the turbo is broken; we show you why. Whether it's carbon buildup, oil starvation, or foreign object damage, we provide clear explanations and photographic evidence. This commitment to honesty ensures you only pay for the repairs you truly need, saving you from unnecessary and expensive 'guesswork' repairs.",
      "Reliability is the cornerstone of our turbo replacement service. By choosing a specialist facility like Vogue Technics, you are ensuring that your vehicle is handled by experts who understand the delicate balance of boost pressure and engine health. We use specialized calibration tools to ensure that your new turbo interacts perfectly with your vehicle's computer system, providing smooth, factory-standard power delivery every time you accelerate.",
      "We believe in the quality of every turbocharger we fit, which is why our service comes with a full 6-month warranty. This covers the turbocharger unit itself and the meticulous installation carried out by our master technicians. Using only the highest quality parts and following strict manufacturer flushing protocols allows us to offer this level of protection, giving you total peace of mind for the road ahead.",
      "Convenience is key when your vehicle is off the road. Based in West Thurrock, we are perfectly positioned to serve car owners across Essex and London. We offer a rapid turnaround on most turbo replacements, with access to a massive inventory of parts that allows us to get you back on the road often within 24 to 48 hours. Our goal is to provide a premium, efficient service that minimizes your stress and maximizes your car's performance.",
    ],
    faqs: [
      {
        question: "What are the signs of a faulty turbocharger?",
        answer: "Look for a significant loss of power (limp mode), a high-pitched 'whining' or 'siren' noise from the engine, blue/black smoke from the exhaust, and an illuminated 'check engine' light."
      },
      {
        question: "Why do turbos fail?",
        answer: "Most turbo failures are caused by oil contamination, oil starvation (blocked pipes), or foreign object damage. Our technicians always identify the cause of failure before fitting a replacement."
      },
      {
        question: "Can I drive with a failing turbo?",
        answer: "It is highly discouraged. A failing turbo can leak oil into the intake system, potentially causing 'engine runaway' or sending metal shards into the engine, leading to total engine failure."
      },
      {
        question: "How long is the warranty on a new turbo?",
        answer: "We provide a 6-month warranty on our turbo chargers and fitting services, provided that the oil and filter service is carried out at our workshop during the installation."
      }
    ]
  },
  {
    title: "Engine Rebuild",
    slug: "engine-rebuild",
    icon: <Settings className="w-6 h-6" />,
    shortDescription: "Precision engine rebuilding back to factory specifications with new internal parts.",
    longDescription: "Our engine rebuild service involves stripping down your unit and replacing all worn internal components. We restore your engine to like-new condition with improved durability.",
    features: ["Full strip down", "New pistons & rings", "Bearing replacement", "Block machining"],
    detailedParagraphs: [
      "An engine rebuild is a comprehensive restoration process that involves taking a high-mileage or damaged engine and making it 'like new' again. This goes far beyond a standard repair; it is a total mechanical overhaul that addresses every wear point within the heart of your vehicle. A professionally rebuilt engine can often be more reliable than the original due to the use of modern, improved components.",
      "At Vogue Technics, our engine rebuilding process is a labor of love and precision. Every unit is completely disassembled, and every single component is meticulously cleaned using ultrasonic or high-pressure chemical baths. This allows us to inspect each part for hairline cracks, wear patterns, or distortion with total accuracy, ensuring a solid foundation for the new build.",
      "The machining phase is where our expertise truly shines. We utilize professional machine shops for cylinder boring, honing, and crank polishing. If a block or cylinder head is warped, we perform precision skimming to restore perfectly flat sealing surfaces. These tight tolerances are essential for modern high-performance engines to maintain their efficiency and power throughout their second life.",
      "During reassembly, we replace all internal wear parts with premium OEM-spec alternatives. This includes new pistons and rings, high-performance main and big-end bearings, a brand-new oil pump, and a complete timing system. We also use high-grade sealants and gaskets to ensure the engine remains perfectly dry and leak-free for years to come.",
      "A core part of our philosophy is addressing 'known flaws.' Many factory engines have inherent weaknesses, such as soft valve seats or undersized oil passages. During a Vogue Technics rebuild, we integrate improved parts that resolve these design issues, often resulting in an engine that is fundamentally superior to the one that originally came from the manufacturer.",
      "Every rebuilt engine undergoes a rigorous testing phase on our dedicated test bench before it is fitted back into the vehicle. This includes oil pressure checks, compression testing across all cylinders, and a controlled 'break-in' period to ensure all internal components are seating correctly. This meticulous approach is why we confidently back our rebuilds with comprehensive warranties and have become the UK's leading choice for engine restoration."
    ],
    preFaqParagraphs: [
      "Vogue Technics stands for absolute transparency in every engine rebuild project. We understand that a total rebuild is a significant investment in your vehicle, which is why we provide a detailed, step-by-step report of the entire process. From the initial measurement of cylinder wear to the final torque settings of the head bolts, we document everything, ensuring you have a complete digital service record of your engine's second birth.",
      "Our reliability is backed by over 20 years of specialist mechanical experience. Unlike general garages, we focus specifically on the complex internal architectures of high-end brands like Land Rover, BMW, and Audi. This deep specialization means we know exactly what to look for—from micro-fractures in the block to early signs of crankshaft fatigue—ensuring that your rebuilt engine is physically and mechanically prepared for another 100,000 miles of operation.",
      "Every engine we rebuild is covered by a comprehensive 6-month warranty. This is our promise of quality, covering every single new internal component we fit and the expert labor involved in the reconstruction. Choosing a Vogue Technics rebuild is choosing a 'zero-hour' engine that has been built with higher precision and better materials than the original factory unit, providing you with unmatched long-term protection.",
      "Convenience and professional support are part of the package. We handle the entire project from end-to-end, including vehicle collection, engine extraction, machining, reassembly, and a multi-stage road test. We also provide a comprehensive 'Initial Care' guide to help you correctly 'run-in' your new engine, ensuring that all components seat perfectly for maximum performance and longevity.",
    ],
    faqs: [
      {
        question: "What is the difference between an engine repair and a rebuild?",
        answer: "A repair fixes a specific failed part (like a water pump), while a rebuild involves stripping the entire engine and replacing all internal wear components to return it to zero-hour specification."
      },
      {
        question: "How long does a rebuilt engine last?",
        answer: "When properly maintained with high-quality oil and filters, a rebuilt engine by Vogue Technics can last just as long—or longer—than a brand-new factory engine, adding years of life to your vehicle."
      },
      {
        question: "Is rebuilding cheaper than buying a new engine?",
        answer: "Yes, significantly. A professional rebuild typically costs 40-60% less than a brand-new crate engine from a main dealer, while offering comparable performance and reliability."
      },
      {
        question: "Do I need to 'run-in' a rebuilt engine?",
        answer: "Yes. For the first 500-1,000 miles, we recommend varying your engine speed and avoiding heavy loads or high RPMs. We provide a full 'Initial Care' guide with every rebuild."
      }
    ]
  },
  {
    title: "Engine Repair",
    slug: "engine-repair",
    icon: <Wrench className="w-6 h-6" />,
    shortDescription: "Comprehensive diagnosis and precision repair of all major engine components.",
    longDescription: "From minor leaks to major mechanical issues, our engine repair service covers it all. Our specialist technicians use state-of-the-art diagnostics to identify and fix problems efficiently.",
    features: ["Advanced diagnostics", "Mechanical repairs", "Electrical troubleshooting", "Part replacement"],
    detailedParagraphs: [
      "Modern automotive engines are masterpieces of engineering, but they are also incredibly complex systems that require specialized care when they malfunction. Whether it's a mysterious ticking sound, a persistent oil leak, or an unexpected loss of power, ignoring small symptoms can lead to expensive failures. At Vogue Technics, our engine repair service is designed to catch and resolve issues accurately and cost-effectively.",
      "The first and most critical step in engine repair is professional diagnosis. Too many garages simply 'swap parts' until a problem disappears, which is expensive and often temporary. We utilize main-dealer level diagnostic equipment that can see deep into your vehicle’s engine management system, identifying the exact sensor, actuator, or mechanical component that is failing.",
      "Our technicians are trained in a wide range of engine types, from high-revving petrol units to heavy-duty common-rail diesels. We handle everything from cooling system overhauls and fuel system repairs to specialized tasks like injector removal and electronic sensor replacement. Every repair we perform follows strict manufacturer guidelines to ensure your vehicle stays safe and performant.",
      "We understand that vehicle downtime is a major inconvenience. That’s why we maintain a high-efficiency workshop with rapid access to a massive inventory of OEM and high-quality alternative parts. Most common engine repairs, such as water pump replacements or sensor fixes, can be completed in our West Thurrock facility within a single working day, getting you back on the road quickly.",
      "Transparency is a hallmark of our service. Before we turn a single bolt on your engine, we provide a detailed quote and a clear explanation of what is needed. We also prioritize 'preventative repairs'—if we notice a belt is fraying while fixing an alternator, we'll let you know, potentially saving you from a future breakdown and additional labor costs.",
      "By choosing Vogue Technics for your engine repairs, you are benefiting from the expertise of specialists who live and breathe engines. We don't just fix the symptom; we understand the mechanical context of the repair. This level of insight ensures that every car leaving our workshop is running perfectly, with its reliability and value fully restored."
    ],
    preFaqParagraphs: [
      "Our approach to engine repairs is built on a foundation of absolute honesty. We know that engine problems can feel overwhelming, which is why we break down every diagnosis into simple, easy-to-understand terms. We provide clear, itemized quotes before any work begins, ensuring you have total control over your repair costs without any unexpected surprises on the final invoice.",
      "The reliability of our repairs comes from our status as true engine specialists. We don't just 'do' engines; we live and breathe them every day. This expertise means we catch things other garages miss, from failing sensors to micro-leaks in the cooling system. By choosing Vogue Technics, you're ensuring your car is handled by professionals who follow strict OEM procedures and use the latest technical bulletins for your specific make and model.",
      "We provide a comprehensive 6-month warranty on both parts and labor for all internal engine repairs. This commitment to quality means that if anything isn't quite right with the work we've performed, we'll fix it—no questions asked. This level of protection is why thousands of car owners in Grays and across Essex trust us with their vehicles every year, knowing their investment is safely covered.",
      "Efficiency and convenience define our daily operations. Our West Thurrock workshop is equipped with the same high-level diagnostic tools found at major dealerships, allowing us to perform complex repairs faster and more accurately. We also offer professional vehicle collection services, meaning you don't even have to leave your home to get your engine fixed by the UK's leading specialists.",
    ],
    faqs: [
      {
        question: "How much does a typical engine repair cost?",
        answer: "Engine repair costs vary widely depending on the issue. We offer a fixed-price diagnostic starting from £60 and will provide a full, transparent breakdown of parts and labor before starting any work."
      },
      {
        question: "My car is in 'Limp Mode', can you fix it?",
        answer: "Yes, Limp Mode is the engine's way of protecting itself. We can quickly diagnose the underlying fault—often a sensor or turbo issue—and reset the system once the repair is complete."
      },
      {
        question: "Do you use genuine parts for repairs?",
        answer: "We offer both genuine OEM parts and high-quality aftermarket alternatives that meet or exceed factory specifications. The choice is yours, based on your budget and preference."
      },
      {
        question: "Can you provide a vehicle recovery service?",
        answer: "Yes, if your car is unsafe to drive due to an engine fault, we can arrange collection from your home or workplace directly to our workshop."
      }
    ]
  },
  {
    title: "Engine Replacement",
    slug: "engine-replacement",
    icon: <RefreshCw className="w-6 h-6" />,
    shortDescription: "Complete engine replacement services with high-quality used or reconditioned units.",
    longDescription: "When an engine is beyond repair, our replacement service offers a cost-effective solution. We provide low-mileage used or fully reconditioned internal combustion engines to get you back on the road.",
    features: ["Full unit swap", "System integration", "Fluids & filter refresh", "Extensive testing"],
    detailedParagraphs: [
      "Sometimes, an engine failure is so severe or common that repairing it simply isn't the best financial or mechanical decision. This is where professional engine replacement comes in. Whether your original unit has suffered a catastrophic failure or has reached extremely high mileage, a replacement engine can give your vehicle a brand-new lease on life for a fraction of the cost of a new car.",
      "At Vogue Technics, we offer a complete engine replacement service that handles the entire logistics chain. We source either fully reconditioned engines or 'low-mileage' used units that have been thoroughly checked and verified by our technicians. Every engine we supply undergoes a 60-point inspection, including compression testing and oil pressure monitoring, before it even enters our workshop.",
      "The process of 'Supply and Fit' is one of our most popular services. We take your vehicle from its idle state to being fully road-worthy again with zero stress for the owner. Our master technicians handle the meticulous process of mapping out the wiring looms, fuel lines, and cooling systems from the old engine to the new one, ensuring a factory-perfect fit.",
      "A critical part of an engine swap is 'system synchronization.' Modern engines are digitally linked to the gearbox and security systems. Our facility is equipped with advanced coding tools that marry your replacement engine to your car's existing electronics, ensuring that the immobilizer, traction control, and transmission modules all communicate perfectly without any dashboard warning lights.",
      "When we fit a replacement engine, we treat it as a fresh start. This means as standard, we install new oil, a high-spec oil filter, fresh coolant, and sometimes even new belts or spark plugs. This 'service on installation' ensures that the replacement engine has the best possible start in its new vehicle, providing you with high reliability from day one.",
      "Choosing an engine replacement from Vogue Technics is an environmentally friendly and economically sound choice. By recycling a high-quality engine instead of letting a vehicle go to scrap, you are saving thousands of pounds and maintaining the value of your asset. We provide all the necessary paperwork, including engine numbers for V5 registration updates, and back the entire service with our comprehensive warranty."
    ],
    preFaqParagraphs: [
      "We believe in total transparency when it comes to engine replacements. Sourcing a major unit for your car is a big decision, which is why we provide full details on the origin, mileage, and testing results of every replacement engine we offer. We encourage transparency and honesty, providing you with a clear cost-to-benefit analysis so you can make the best choice for your vehicle and your budget.",
      "Reliability is hardwired into our replacement process. Every used unit we source is physically inspected and pressure-tested before it's even cataloged for sale. For our fully reconditioned replacements, we follow a zero-hour rebuild protocol, replacing all internal wear parts with brand-new OEM components. This surgical attention to detail is why our replacement engines often outperform the original units they are replacing.",
      "Every engine we supply and fit comes with a rock-solid 6-month warranty. This is more than just a piece of paper; it's our promise that your vehicle has been handled by the UK's top engine specialists. Whether you choice a low-mileage used unit or a premium reconditioned engine, you can drive away from our West Thurrock workshop with total confidence that you are fully protected.",
      "Your convenience is our mission. We manage the entire engine replacement cycle—from collecting your vehicle and sourcing the new unit to the final ECU coding and multi-mile road test. We also take care of the technical administrative tasks, such as providing you with the correct engine numbers for your V5 registration update, ensuring a seamless, stress-free transition back to a high-performance vehicle.",
    ],
    faqs: [
      {
        question: "How do you source your replacement engines?",
        answer: "We source our engines from our own specialized reconditioning workshop or from trusted, verified low-mileage donor vehicles. Every unit is physically tested by our techs before sale."
      },
      {
        question: "Will a replacement engine affect my insurance?",
        answer: "Generally, as long as it is an exact like-for-like replacement, it shouldn't affect your premiums, but you must notify your insurance company and the DVLA of the new engine number."
      },
      {
        question: "What is the turnaround time for a full replacement?",
        answer: "Depending on engine availability, a complete engine replacement typically takes 5 to 7 working days, including extensive road testing."
      },
      {
        question: "Do you offer financing for engine replacements?",
        answer: "We can discuss various flexible payment options and works with third-party providers to help make the cost of major repairs more manageable for our customers."
      }
    ]
  },
  {
    title: "Engine Swap",
    slug: "engine-swap",
    icon: <RefreshCw className="w-6 h-6" />,
    shortDescription: "Efficient engine swapping for performance upgrades or exact model matches.",
    longDescription: "Our engine swap service is perfect for those looking for an exact model replacement or a specialized upgrade. We handle the entire process from extraction to final configuration.",
    features: ["Precision removal", "Harness integration", "Cooling system check", "Performance tuning"],
    detailedParagraphs: [
      "Engine swapping is the art of replacing your current power unit with another, either to restore performance or to upgrade the vehicle's capabilities. While it sounds simple, an engine swap is one of the most mechanically intensive tasks a workshop can perform, requiring deep knowledge of electronics, fluid dynamics, and chassis mounting. At Vogue Technics, we see an engine swap as a precision integration project.",
      "Our team has swapped hundreds of engines, primarily focusing on high-spec units for Range Rover, Audi, and BMW vehicles. The most successful swaps start with meticulous planning. We ensure that the new unit matches the technical requirements of your vehicle, including the intake systems, fuel mapping, and transmission bell-housing patterns. This preparation ensures the swap is clean, professional, and reliable.",
      "The 'extraction' phase is handled with extreme care to avoid damaging ancillary components. We map out the entire engine bay as we work, labeling every connection to ensure a perfect re-alignment later. This is particularly important for modern vehicles with dual-CANbus systems and complex hybrid or turbo cooling loops, where one incorrectly routed hose can lead to future failure.",
      "Integration is where our coding expertise comes into play. We are one of the few specialist facilities in the UK that can perform deep-level ECU 'marrying' and software adaptations for engine swaps. This means we can often make a more modern or slightly different variant of an engine work perfectly within your current chassis, complete with full factory instrumentation and safety features.",
      "During the swap, we take the opportunity to inspect and often refresh the components that are difficult to reach when the engine is in—such as the clutch, flywheel, or rear main seals. This proactive approach adds immense value to the service, as it prevents you from paying for the same labor twice just a few months down the line.",
      "The final stage of any Vogue Technics engine swap is a comprehensive 'burn-in' and calibration cycle. We monitor fuel trims, boost pressures, and temperatures in real-time as the engine completes its first few hours of operation in its new home. Our goal is to hand you back a key to a car that feels as if that engine belongs there from the factory."
    ],
    preFaqParagraphs: [
      "Honesty and clarity are essential during complex engine swaps. We provide a comprehensive project plan for every swap, detailing exactly what components will be transferred over and what new parts will be integrated. This transparency ensures that you understand the mechanical scope of the project and that there are no hidden surprises when the job is completed. We build trust by delivering exactly what we promise—a factory-standard engine integration.",
      "Reliability is guaranteed by our deep-level technical specialization. We don't just 'fit' the engine; we tune and calibrate it to ensure it operates within perfect safety parameters for your specific chassis. By utilizing the latest dealer-level coding software, we ensure that every system from the traction control to the air conditioning works perfectly with the new unit, providing a seamless and highly reliable driving experience.",
      "We provide a full 6-month warranty on our engine swap services, covering both the unit provided (if sourced from us) and the expert labor involved in the installation. This warranty is a reflection of our confidence in our technicians' ability to perform complex wiring, cooling, and mechanical integrations at a standard that meets or exceeds the original manufacturer's specifications.",
      "For a truly convenient experience, choose the UK's leading engine specialists. We offer a full logistics solution, including nationwide vehicle recovery directly to our Essex workshop. From the moment we take your keys to the final multi-point test drive, we handle every technical and administrative detail, allowing you to focus on the joy of getting your upgraded or restored vehicle back on the road.",
    ],
    faqs: [
      {
        question: "Can you swap a different model of engine into my car?",
        answer: "We specialize in like-for-like swaps or 'evolutionARY' swaps (e.g., fitting a newer version of the same engine). We will consult on the technical feasibility for your specific model."
      },
      {
        question: "Do I need to change my gearbox during a swap?",
        answer: "If it's a like-for-like swap, your existing gearbox is usually perfectly fine. If it's an upgrade, we can advise if the torque converter or clutch needs modification."
      },
      {
        question: "How do you handle the car's electronics during a swap?",
        answer: "We use professional ECU cloning and adaptation software to ensure your car's security system (immobilizer) and dashboard recognize the 'new' engine."
      },
      {
        question: "What paperwork is provided after an engine swap?",
        answer: "We provide an invoice with the new engine number and a certificate of installation, which you'll need for your insurance and to update your V5 logbook."
      }
    ]
  },
  {
    title: "Timing Belt Replacement",
    slug: "timing-belt-replacement",
    icon: <Layers className="w-6 h-6" />,
    shortDescription: "Essential timing belt servicing to prevent valve-to-piston interference.",
    longDescription: "Prevent engine damage with our timely timing belt replacement service. We use high-quality belts and water pumps to ensure your engine runs smoothly for thousands of miles.",
    features: ["High-durability belts", "Water pump replacement", "Tensioner check", "Interval reset"],
    detailedParagraphs: [
      "The timing belt, often called the cambelt, is a critical component that keeps your engine's crankshaft and camshaft in perfect synchronization. Unlike timing chains, belts are made of rubber compounds and are designed to be replaced at specific intervals. A snapped timing belt is often a 'game-over' scenario for an engine, as it leads to the pistons and valves smashing into each other.",
      "At Vogue Technics, we approach timing belt replacement as a critical preventative mission. We follow manufacturer service intervals and bulletins religiously, often recommending earlier changes for vehicles that are driven in harsh conditions or primarily in stop-start city traffic. We use professional tensioning tools to ensure the belt is set with the exact load required for quiet, reliable operation.",
      "Our replacement service is a 'Whole System' approach. We never just change the belt alone. A standard Vogue Technics timing belt kit includes the belt itself, the idler pulleys, and the critical hydraulic or mechanical tensioner. Often, it is a failed pulley bearing—not the belt itself—that causes a snap, so fresh pulleys are essential for true safety.",
      "In the vast majority of engines, the timing belt also drives the water pump. It is our strict policy to replace the water pump at the same time as the belt. Since the labor is almost identical to reach the pump, it is far more cost-effective to replace it as a precaution. A seized water pump can shred a brand-new timing belt in seconds, making this step non-negotiable for a professional rebuild.",
      "We exclusively use premium 'Full Kits' from top-tier manufacturers like Gates, Continental (ContiTech), or Dayco. these belts are reinforced with carbon or glass fibers to provide maximum resistance to stretching and heat. By using these high-spec parts, we ensure that your car can comfortably and safely make it to its next scheduled interval without any loss of performance.",
      "Choosing us for your cambelt change means getting a service that is recorded, warranted, and technically verified. We mark the engine bay with the date and mileage of the change and update your service record. It’s a simple service that provides immense peace of mind, knowing that your engine's most vulnerable component is brand new and professionally fitted."
    ],
    preFaqParagraphs: [
      "We pride ourselves on an honest and transparent cambelt service. Many garages will quote a low price, but then charge extra for the water pump or the critical tensioning pulleys. At Vogue Technics, we give you a fully all-inclusive quote from the start. We will never cut corners on parts, and we will always show you the old belt so you can see the wear for yourself, ensuring you have total confidence in the work performed.",
      "Reliability is our hallmark. We understand that your cambelt is the only thing standing between your engine and a total top-end rebuild. That's why we don't just 'fit a belt'; we perform a complete audit of the timing system, ensuring that the new components are torqued and timed to literal micrometer precision. This specialized level of care is why we are the preferred choice for premium car owners across Grays and West Thurrock.",
      "Every timing belt kit we install comes with a 6-month warranty for both parts and labor. We use only the highest-specification reinforced belts from global brands like Gates and Continental, ensuring that your engine is protected for every single mile you drive. Our warranty is our commitment to you that the quality of our workmanship and the durability of the parts we use are both world-class.",
      "Convenience and efficiency are what we do best. Most timing belt and water pump replacements are completed as a same-day service in our Essex workshop. We offer comfortable waiting facilities and clear, rapid updates so you won't be without your car a minute longer than necessary. It's a premium, expert service designed to provide you with absolute peace of mind at an affordable price point.",
    ],
    faqs: [
      {
        question: "How often should a timing belt be changed?",
        answer: "Intervals vary between 60,000 and 100,000 miles, or every 5 to 7 years, whichever comes first. If you're unsure, our team can check the specific requirement for your vehicle."
      },
      {
        question: "Why should the water pump be changed with the belt?",
        answer: "The water pump is usually hidden behind the timing belt. If it fails later, you have to pay the same labor charge all over again to replace it. It's safer and cheaper to do both at once."
      },
      {
        question: "Can I see if my timing belt is worn?",
        answer: "Usually, no. Belts can look perfectly fine on the outside while the internal structure has weakened. That's why following the time and mileage intervals is so critical."
      },
      {
        question: "Is it a same-day service?",
        answer: "Yes, in most cases. If booked in advance, a timing belt and water pump replacement can be completed in our workshop within a few hours."
      }
    ]
  },
  {
    title: "Engine Health Check",
    slug: "engine-health-check",
    icon: <Gauge className="w-6 h-6" />,
    shortDescription: "Comprehensive diagnostic inspection to ensure your engine is performing optimally.",
    longDescription: "Our engine health check identifies potential issues before they become expensive failures. We check compression, diagnostics, and overall mechanical performance.",
    features: ["Compression test", "ECU scanning", "Fluid analysis", "Cooling system check"],
    detailedParagraphs: [
      "An engine health check is the automotive equivalent of a full medical physical. For modern high-performance vehicles, regular 'check-ups' are essential to maintaining performance and preventing small wear-and-tear items from becoming catastrophic engine failures. At Vogue Technics, we have developed a 50-point diagnostic protocol that leaves no stone unturned in your engine bay.",
      "Our health check begins with a deep-level electronic scan. We don't just 'clear codes'; we analyze live data streams as the engine runs. This allows us to see how your fuel injectors are performing, check for turbo boost leaks, and verify that all sensors are reporting accurate data. This data often reveals problems that haven't even triggered a warning light on your dashboard yet.",
      "Next, we move to mechanical verification. This includes a full compression test to ensure each cylinder is contributing its fair share of power. High compression is a sign of healthy piston rings and valves. We also use borescope cameras to look directly into the cylinders, checking for sign of scoring or carbon buildup that could lead to poor efficiency or engine knocks.",
      "Fluid analysis is another critical part of our health check. We don't just check levels; we inspect the quality of your oil and coolant. Metal filings in the oil can indicate bearing wear, while 'combustion gases' in the coolant (detected by a chemical test) can be an early warning sign of a head gasket failure. Catching these signs early can save you thousands of pounds in rebuild costs.",
      "We also perform a detailed inspection of the engine's external ancillaries, such as the drive belts, pulleys, and cooling hoses. We look for 'weeping' water pumps, brittle hoses, or oil leaks that could drip onto hot exhaust components. A small £20 hose replacement today can prevent a total engine meltdown on the motorway tomorrow.",
      "At the end of the health check, you receive a comprehensive digital report with photos and a 'Stoplight' system (Red/Amber/Green) for all items inspected. Our goal is to empower you with knowledge about your vehicle's condition, providing you with a clear roadmap for maintenance and total peace of mind for your next long journey."
    ],
    preFaqParagraphs: [
      "We believe that knowledge is the best tool an owner can have, which is why transparency is the core of our health checks. We provide a full digital breakdown of every test we perform, from live sensor data to borescope images of your engine's internals. We don't just tell you things are good; we prove it with technical data, ensuring that your trust in us is backed by objective mechanical facts.",
      "Reliability starts with preventative care. By catching a micro-leak in a cooling hose or a slight drop in fuel pressure early, we prevent small problems from growing into expensive workshop bills. Choosing Vogue Technics for your health check is like having a specialist master technician audit your car's most critical components, providing you with a level of insight and accuracy that a standard MOT or basic service can never match.",
      "While a health check is a diagnostic service, we still back our findings and our technical inspection with a full 6-month validity guarantee. This means that if we pass an item as 'Green' (Good) and it fails within six months (due to an oversight during the check), we will provide you with a credit towards the repair. This level of accountability is why we are the UK's leaders in specialist engine diagnostics.",
      "Convenience is built into our West Thurrock facility. Most engine health checks are completed while you wait, with a results report delivered to your phone or inbox within minutes of the car leaving the lift. Whether you're planning a long road trip, buying a used car, or just want to maintain your vehicle's peak efficiency, our health check is the premium, rapid, and truly expert solution you need.",
    ],
    faqs: [
      {
        question: "How long does a full engine health check take?",
        answer: "Our comprehensive 50-point health check typically takes 60 to 90 minutes. You are welcome to wait in our comfortable reception area while our master technicians audit your engine."
      },
      {
        question: "Will this report help me if I am selling my car?",
        answer: "Absolutely. A Vogue Technics health check certificate is a powerful tool for sellers, proving to potential buyers that the engine has been professionally inspected and verified by specialists."
      },
      {
        question: "How often should I have an engine health check?",
        answer: "We recommend a professional health check once a year or before any major road trip. It's also highly recommended for 'high-performance' cars that are driven enthusiastically."
      },
      {
        question: "What happens if you find a problem during the check?",
        answer: "We will prioritize the issue and provide a fixed-price quote for the repair. There is no obligation to have the work done immediately, but we will advise if the car is unsafe to drive."
      }
    ]
  }
];
