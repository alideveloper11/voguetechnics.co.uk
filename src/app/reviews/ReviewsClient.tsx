"use client";

import { Star, CheckCircle, Quote, MapPin, ArrowRight, ShieldCheck, Award, Phone } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { useState } from "react";

const TRUSTPILOT_URL = "https://www.trustpilot.com/review/voguetechnics.co.uk";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=f0dd17cf16554653&sxsrf=ANbL-n5SscHntUI4H6sT8j3BadtCyNsZXg:1777457853483&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUfQ-apGMklHOtAPMe0-EwB8tuV-2B7Nl5L484U-NPJnKb5_noUv8PvA5-QLsw-D40S9jee4a6zghNC6GOZprh_uWdNo&q=Vogue+Technics+Reviews&sa=X&ved=2ahUKEwiN8Na_6pKUAxUjT6QEHWXNMSQQ0bkNegQIKxAH&biw=1536&bih=695&dpr=1.25";

const reviews = [
  {
    id: 1,
    name: "James Whitmore",
    rating: 5,
    location: "",
    vehicle: "Range Rover Sport TDV6",
    service: "Timing Chain Replacement",
    source: "Verified Google Review",
    category: "Range Rover",
    text: "After getting a quote from the main Land Rover dealer that made my eyes water, my brother-in-law told me to ring Vogue Technics. Honestly, the difference in price was considerable   and the quality of work was spot on. Vic explained the full extent of the timing chain wear in plain language, showed me what had been going on with the tensioner, and told me exactly what was needed without trying to pad the job out. The Sport has been back on the road for three months now and running better than it has in years. Couldn't fault them from start to finish.",
  },
  {
    id: 2,
    name: "Donna Fletcher",
    rating: 5,
    location: "Basildon, ",
    vehicle: "Land Rover Discovery 4 SDV6",
    service: "Engine Rebuild",
    source: "Verified Trustpilot Review",
    category: "Land Rover",
    text: "My Discovery had been making a rattling noise on cold starts for months and two different garages near me told me two completely different things. Neither of them filled me with confidence. A colleague at work mentioned Vogue Technics, so I drove over to  for a proper diagnostic. Within an hour they had a clear picture of what was happening   timing chain wear and a bottom end issue that had been developing for a while. The full engine rebuild took just under two weeks and the difference is night and day. She drives like a new vehicle. Worth every penny and then some.",
  },
  {
    id: 3,
    name: "Marcus Okafor",
    rating: 5,
    location: "Ilford, East London",
    vehicle: "Range Rover Vogue SDV8",
    service: "Engine Replacement",
    source: "Verified Google Review",
    category: "Range Rover",
    text: "Travelled from Ilford specifically because someone in a Range Rover owners group online had recommended Vogue Technics for SDV8 engine work. Glad I made the journey. The team sourced a low-mileage replacement engine, handled everything from start to finish, and kept me updated throughout without me having to chase. The price was fair, the communication was excellent, and the vehicle came back thoroughly tested. Main dealer had quoted me nearly double for the same job. Not going anywhere else for engine work from this point.",
  },
  {
    id: 4,
    name: "Carol Stephenson",
    rating: 5,
    location: "Brentwood, ",
    vehicle: "Jaguar XF 3.0 TDV6 Diesel",
    service: "Head Gasket Replacement",
    source: "Verified Google Review",
    category: "Jaguar",
    text: "Genuinely wasn't sure whether an independent specialist could handle the Jaguar XF properly   the engine shares a lot with Land Rover units but I wasn't certain everyone knew that. Vogue Technics clearly did. They diagnosed the head gasket failure accurately, explained why it had failed and what the cylinder head condition was before proceeding, and gave me a written quote before touching anything. The work came with a warranty which gave me real peace of mind. My XF is back to being the car I fell in love with. Really pleased I found them.",
  },
  {
    id: 5,
    name: "Pete Harrington",
    rating: 5,
    location: "Thurrock, ",
    vehicle: "BMW X5 3.0d N57",
    service: "Timing Chain Replacement",
    source: "Verified Trustpilot Review",
    category: "Audi & BMW",
    text: "Straightforward experience from beginning to end. Rang up, described the symptoms   rattling on start-up, slight loss of power   and they had a pretty good idea of what it likely was before I even brought the X5 . Diagnostic confirmed timing chain wear on the N57. They replaced the full chain kit, tensioners, and guides, and the difference on start-up is immediate. No rattles, no hesitation. Vic was straight talking throughout, told me what was needed and what wasn't, and the final bill matched the quote exactly. Spot on.",
  },
  {
    id: 6,
    name: "Amelia Grant",
    rating: 5,
    location: "Chelmsford, ",
    vehicle: "Land Rover Freelander 2",
    service: "Turbo Replacement",
    source: "Verified Google Review",
    category: "Land Rover",
    text: "Found Vogue Technics after a frustrating few weeks of being quoted all over the place for a turbo replacement on my Freelander. Some garages wanted to replace parts that I wasn't convinced needed replacing. Vogue Technics diagnosed the fault properly, confirmed it was the turbo and only the turbo, and gave me a clear quote that included parts and labour with no hidden extras. The turbo was fitted, the car was tested before collection, and I drove home with confidence. Simple as that   which is exactly what you want when you're dealing with an engine problem.",
  },
  {
    id: 7,
    name: "Rob Nightingale",
    rating: 5,
    location: "Romford, ",
    vehicle: "Audi Q5 2.0 TDI",
    service: "Engine Repair",
    source: "Verified Trustpilot Review",
    category: "Audi & BMW",
    text: "Sceptical at first, if I'm being honest. The Audi dealer had told me the engine needed a full replacement and the figure they quoted was bordering on the cost of a different car. A friend suggested getting a second opinion at Vogue Technics. Turned out the problem was significantly more contained than the dealer had suggested   a targeted engine repair sorted it at a fraction of the cost. The Q5 has covered another eight thousand miles since then without a hint of trouble. Sometimes a second opinion is worth its weight in gold.",
  },
  {
    id: 8,
    name: "Sharon Adeyemi",
    rating: 5,
    location: "Canvey Island, ",
    vehicle: "Range Rover Evoque",
    service: "Engine Health Check",
    source: "Verified Google Review",
    category: "Range Rover",
    text: "Bought a second-hand Evoque and wanted peace of mind before the warranty expired. Booked an engine health check with Vogue Technics and they went through everything methodically   diagnostic scan, compression check, visual inspection, the works. They found a minor oil leak at the rocker cover that the previous owner clearly hadn't mentioned, sorted it while the car was in, and gave me a full written report on the engine's overall condition. Left feeling completely informed rather than fobbed off. That kind of thoroughness is rare and genuinely appreciated.",
  },
  {
    id: 9,
    name: "Gary Blackwell",
    rating: 5,
    location: "Dartford, Kent",
    vehicle: "Land Rover Defender 2.4 TDCi",
    service: "Engine Rebuild",
    source: "Verified Google Review",
    category: "Engine Rebuild",
    text: "My Defender had done serious mileage and needed a proper overhaul rather than another patch-up job. Vic assessed the engine, gave me an honest breakdown of what a full rebuild would involve, and didn't try to rush me into a decision. When I gave the go-ahead, the strip-down revealed exactly what he'd anticipated   worn bearings, a tired cylinder head, and a few things that needed machining. Everything was done to a proper standard using quality parts. She starts first time every morning now and pulls like it did years ago. Happy doesn't cover it.",
  },
  {
    id: 10,
    name: "Natalie Forsyth",
    rating: 5,
    location: "Barking, East London",
    vehicle: "Jaguar F-Pace 2.0 Ingenium Diesel",
    service: "Timing Belt Replacement",
    source: "Verified Trustpilot Review",
    category: "Jaguar",
    text: "Came to Vogue Technics on the recommendation of my neighbour who'd had her Range Rover sorted there last year. Really glad I listened to her. The timing belt on the Ingenium engine had been on my mind since I bought the car and I wanted someone who actually knew the engine rather than just following a generic procedure. They replaced the belt, tensioner, and water pump as a complete job, explained what they'd found during the process, and everything was done within the day. Professional from the moment I arrived to the moment I drove away.",
  },
  {
    id: 11,
    name: "Dean Kowalski",
    rating: 5,
    location: "",
    vehicle: "BMW 3 Series 320d N47",
    service: "Engine Repair",
    source: "Verified Google Review",
    category: "Audi & BMW",
    text: "The N47 timing chain issue is well documented if you know where to look, and mine had clearly been developing for a while before I knew what to listen for. Went to Vogue Technics after reading their reviews and they didn't disappoint. Clear diagnosis, honest quote, work carried out to a high standard, and a warranty included as standard rather than as an optional extra. The 320d is running quietly and smoothly and I finally feel like the problem has actually been fixed rather than masked. Will be recommending them to anyone in the  area with engine trouble.",
  },
  {
    id: 12,
    name: "Linda Osei",
    rating: 5,
    location: "Southend-on-Sea, ",
    vehicle: "Range Rover Sport Supercharged V8",
    service: "Engine Rebuild",
    source: "Verified Trustpilot Review",
    category: "Engine Rebuild",
    text: "Getting a supercharged V8 rebuilt properly is not something you trust to just anyone. After considerable research and more than one conversation with Range Rover owners online, Vogue Technics kept coming up as the name to call . Drove up from Southend specifically. The rebuild was comprehensive   full strip-down, machined block, new bearings, uprated components where appropriate   and Vic walked me through every stage of the process either in person or by phone. The engine has covered over four thousand miles since the rebuild and feels stronger than ever. An absolute credit to their craft.",
  },
];

const platformStats = [
  { label: "Overall Star Rating", value: "4.9 / 5", detail: "Across Google and Trustpilot" },
  { label: "Verified Reviews", value: "380+", detail: "Customer reviews across both platforms" },
  { label: "Specialist Experience", value: "20+ Years", detail: "Serving drivers since 2004" },
  { label: "Would Recommend", value: "96%", detail: "To a friend or family member" },
];

function ReviewCard({ review, idx }: { review: (typeof reviews)[0]; idx: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal
      distance={30}
      duration={0.6}
      delay={idx * 0.05}
      className="group relative flex flex-col rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:-translate-y-0.5"
    >
      <div className="absolute right-4 top-4 text-slate-100 transition-colors duration-500 group-hover:text-primary/10">
        <Quote className="w-8 h-8 fill-current" />
      </div>

      {/* Stars */}
      <div className="relative z-10 mb-2 flex gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Name */}
      <h3 className="relative z-10 text-base font-bold text-slate-900">{review.name}</h3>

      {/* Location — always its own row; show icon even when location text is empty */}
      <div className="relative z-10 mt-1.5 flex items-center gap-1 text-xs text-slate-500">
        <MapPin className="w-3 h-3 shrink-0" />
        {review.location && <span>{review.location}</span>}
      </div>

      {/* Source badge — always its own row below location */}
      <div className="relative z-10 mt-1">
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
          {review.source}
        </span>
      </div>

      {/* Vehicle box */}
      <div className="relative z-10 mt-3 rounded-xl bg-slate-50 p-2.5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{review.vehicle}</p>
        <p className="mt-0.5 text-xs text-slate-600">{review.service}</p>
      </div>

      {/* Text — flex-1 fills remaining space so bottom section stays aligned */}
      <div className="relative z-10 mt-3 flex flex-1 flex-col">
        <p className={`text-xs leading-relaxed text-slate-700 ${expanded ? "" : "line-clamp-3"}`}>
          &ldquo;{review.text}&rdquo;
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1.5 self-start text-primary text-xs font-bold uppercase tracking-wide hover:underline"
        >
          {expanded ? "View Less" : "View More"}
        </button>
      </div>

      {/* Bottom — always pinned to bottom */}
      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-700">
          {review.category}
        </span>
        <div className="flex items-center gap-1.5 text-emerald-600">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
            <CheckCircle className="w-4 h-4" />
          </div>
          <span className="text-[0.65rem] font-black uppercase tracking-[0.18em]">Five out of Five</span>
        </div>
      </div>
    </Reveal>
  );
}

export default function ReviewsClient() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-slate-900 pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/car_bgg.webp"
            alt="Vogue Technics customer reviews"
            fill
            className="object-cover opacity-65 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/35 to-slate-900/10" />
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ name: "Customer Reviews", href: "/reviews" }]} />

          <div className="max-w-5xl pt-10">
            <span
              className="animate-fade-in-x inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-300 shadow-[0_0_22px_rgba(25,135,84,0.22)]"
              style={{ "--fade-x": "-20px" } as React.CSSProperties}
            >
              <Award className="w-4 h-4" /> Trusted Specialists
            </span>

            <h1
              className="animate-fade-up mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl"
              style={{ "--fade-y": "30px", "--fade-duration": "0.8s" } as React.CSSProperties}
            >
              What Our Customers Say About Vogue Technics
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-4xl text-base leading-relaxed text-slate-300 md:text-lg"
              style={{ "--fade-delay": "0.2s" } as React.CSSProperties}
            >
              These are real reviews from real customers   Range Rover owners, Land Rover drivers, Jaguar enthusiasts, and Audi and BMW owners who came to us with engine problems and left with their vehicles running properly and their confidence restored. Across Google Reviews and Trustpilot, Vogue Technics holds a rating of 4.9 out of 5 from over 380 verified reviews. Read what our customers have to say, and see why drivers across  and beyond keep choosing us.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">At a Glance</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {platformStats.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
                <div className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">{stat.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Customer Reviews</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <ReviewCard key={review.id} review={review} idx={idx} />
            ))}
          </div>

          <div className="mt-20 rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">A Note From the Vogue Technics Team</h2>
                <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
                <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700">
                  <p>
                    Every review here represents a vehicle that came to us with a problem and left running properly. Engine work on Range Rovers, Land Rovers, Jaguars, Audis, and BMWs is what we've dedicated the last twenty years to. We hold ourselves to the same standard on every job — whether it's a diagnostic check or a full engine rebuild. No shortcuts, no guesswork, just honest specialist work.
                  </p>
                  <p>
                    Thank you to every customer who took the time to share their experience — your words are the reason new customers feel confident picking up the phone. We don't take that trust lightly, and it pushes us to keep raising the bar with every vehicle that comes through our doors. If you've had work done with us and haven't yet left a review, we'd genuinely appreciate hearing from you. Every piece of feedback helps us improve and helps other drivers make an informed choice.
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                  <ShieldCheck className="w-4 h-4" /> Trusted Review Platforms
                </span>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold">Google Reviews</h3>
                    <p className="mt-2 text-sm text-slate-300">
                      Rated 4.9 out of 5 from over 280 verified reviews. See what drivers across Essex and East London are saying about Vogue Technics.
                    </p>
                    <div className="mt-4">
                      <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-900 transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
                      >
                        Read Google Reviews
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Trustpilot</h3>
                    <p className="mt-2 text-sm text-slate-300">
                      Rated 4.9 out of 5 from over 100 verified reviews. Independently verified feedback from customers who trust us with their engines.
                    </p>
                    <div className="mt-4">
                      <a
                        href={TRUSTPILOT_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:bg-emerald-600 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
                      >
                        Read Trustpilot Reviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-[2.5rem] bg-slate-50 p-8 md:p-10 border border-slate-200">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Worked With Us? We'd Love to Hear From You.</h2>
                <div className="mt-4 h-1 w-24 rounded-full bg-primary" />
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  If Vogue Technics has helped with your engine, please consider leaving a review on Google or Trustpilot. It takes two minutes and helps other drivers find a specialist they can trust.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We don't chase reviews or incentivise them — we simply do the work properly and let that speak for itself. Your honest feedback means the world to our team.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-6 shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900">Leave a Review</h3>
                <div className="mt-6 flex flex-col gap-4">
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 font-bold text-white transition-all hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
                  >
                    Leave a Google Review <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href={TRUSTPILOT_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-primary px-6 py-4 font-bold text-primary transition-all hover:bg-primary hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
                  >
                    Leave a Trustpilot Review <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 md:py-12 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-xl font-extrabold leading-tight md:text-3xl">
              Ready to Experience the Vogue Technics Difference?
            </h2>

            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:01375531355"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                <Phone className="w-5 h-5" />
                Call 01375 531355
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-primary hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
