"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RotateCw } from "lucide-react";
import { submitQuote } from "@/app/actions/submitQuote";
import type { VehicleResult } from "@/app/actions/lookupVehicle";
import {
  formatUKPhone,
  stripPhoneDigits,
  validateUKPhoneDigits,
} from "@/lib/ukPhone";

function randomMath() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, answer: a + b };
}

const whyChooseUs = [
  "Engine Specialists With Over 20 Years Of Experience.",
  "Competitive Prices With Up To 24 Month Warranty.",
  "Customer Satisfaction, Our Top Priority.",
  "Fully Tested Engines & Genuine OEM Parts.",
  "Nationwide Collection & Delivery Included.",
];

type FormFields = { reg: string; name: string; email: string; phone: string; postcode: string; issue: string };
type FieldErrors = Partial<Record<keyof FormFields, string>>;
type TouchedFields = Partial<Record<keyof FormFields, boolean>>;

function validateField(name: keyof FormFields, value: string): string {
  switch (name) {
    case "reg":
      if (!value.trim()) return "Registration number is required.";
      if (value && !/^[A-Z0-9\s]{1,10}$/.test(value))
        return "Registration must be alphanumeric only.";
      return "";
    case "name":
      if (!value.trim()) return "Full name is required.";
      if (value.trim().length < 2) return "Name is too short.";
      if (!/^[A-Za-z\s'\-]+$/.test(value.trim())) return "Name can only contain letters.";
      return "";
    case "email":
      if (!value.trim()) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) return "Enter a valid email address.";
      return "";
    case "phone":
      return validateUKPhoneDigits(value);
    case "postcode":
      if (!value.trim()) return "Postcode is required.";
      if (!/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(value.trim())) return "Enter a valid UK postcode (e.g. RM20 4EL).";
      return "";
    case "issue":
      if (!value.trim()) return "Please describe the issue with your vehicle.";
      if (value.trim().length < 10) return "Please provide more detail (at least 10 characters).";
      return "";
    default:
      return "";
  }
}

function validateAll(form: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  (Object.keys(form) as (keyof FormFields)[]).forEach((key) => {
    const msg = validateField(key, form[key]);
    if (msg) errors[key] = msg;
  });
  return errors;
}

export interface VehicleInfo {
  description: string;
  data?: VehicleResult;
}

interface GetQuoteFormProps {
  initialReg?: string;
  showNotFound?: boolean;
  vehicleInfo?: VehicleInfo;
}

export default function GetQuoteForm({ initialReg = "", showNotFound = false, vehicleInfo }: GetQuoteFormProps) {
  const router = useRouter();
  const [math, setMath] = useState({ a: 3, b: 5, answer: 8 });
  const [captcha, setCaptcha] = useState("");
  const [vehicleNotFound, setVehicleNotFound] = useState(showNotFound);
  const [form, setForm] = useState<FormFields>({
    reg: initialReg, name: "", email: "", phone: "", postcode: "", issue: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => { setMath(randomMath()); }, []);
  useEffect(() => { setVehicleNotFound(showNotFound); }, [showNotFound]);

  const refreshMath = useCallback(() => {
    setMath(randomMath());
    setCaptcha("");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const key = name as keyof FormFields;
    let filtered = value;

    if (key === "reg")
      filtered = value.replace(/[^A-Za-z0-9\s]/g, "").toUpperCase().slice(0, 10);
    else if (key === "postcode")
      filtered = value.replace(/[^A-Za-z0-9\s]/g, "").toUpperCase();

    setForm((prev) => ({ ...prev, [key]: filtered }));
    if (touched[key]) {
      setFieldErrors((prev) => ({ ...prev, [key]: validateField(key, filtered) }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = stripPhoneDigits(e.target.value);
    setForm((prev) => ({ ...prev, phone: raw }));
    if (touched.phone) {
      setFieldErrors((prev) => ({ ...prev, phone: validateField("phone", raw) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name as keyof FormFields;
    setTouched((prev) => ({ ...prev, [key]: true }));
    setFieldErrors((prev) => ({ ...prev, [key]: validateField(key, form[key]) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched: TouchedFields = Object.fromEntries(Object.keys(form).map((k) => [k, true]));
    setTouched(allTouched);

    const errors = validateAll(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    if (parseInt(captcha, 10) !== math.answer) {
      setSubmitError("Incorrect answer to the verification question. Please try again.");
      refreshMath();
      return;
    }

    setSubmitError("");
    setSubmitting(true);
    const { ok, message } = await submitQuote({
      ...form,
      phone: form.phone,
      browser: navigator.userAgent,
      vehicle: vehicleInfo?.data,
    });
    setSubmitting(false);
    if (ok) {
      router.push("/quote-success");
    } else {
      setSubmitError(message ?? "Something went wrong. Please try again or call us directly.");
    }
  };

  const inputBorder = (field: keyof FormFields) =>
    touched[field] && fieldErrors[field] ? "border-red-400" : "border-slate-200";

  const inputBg = (field: keyof FormFields) =>
    touched[field] && fieldErrors[field] ? "bg-red-50" : "bg-slate-50";

  const FieldError = ({ field }: { field: keyof FormFields }) =>
    touched[field] && fieldErrors[field] ? (
      <p className="mt-1 text-[11px] text-red-500 font-medium">{fieldErrors[field]}</p>
    ) : null;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">

      {/* Form card */}
      <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 border border-slate-100">

        {vehicleInfo && (
          <div className="mb-6 flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4" style={{ borderLeft: "4px solid #198754" }}>
            <div className="mt-0.5 shrink-0">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="9" width="22" height="9" rx="2"/>
                <path d="M5 9V6a1 1 0 0 1 1-1h4l2 4"/>
                <path d="M13 9l2-4h2a1 1 0 0 1 1 1v3"/>
                <circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
              </svg>
            </div>
            <div>
              <p className="mb-0.5 text-[12px] font-black uppercase tracking-wide text-slate-800">Vehicle Identified</p>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-slate-600">{vehicleInfo.description}</p>
              <span className="mt-1.5 inline-block rounded-full border border-slate-300 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-slate-500">DVLA Verified</span>
            </div>
          </div>
        )}

        {vehicleNotFound && (
          <div className="mb-6 flex items-start gap-4 rounded-xl border border-slate-200 bg-amber-50 px-5 py-4" style={{ borderLeft: "4px solid #f59e0b" }}>
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-amber-400">
              <span className="text-[13px] font-black leading-none text-amber-500">!</span>
            </div>
            <div>
              <p className="text-[12px] font-black uppercase tracking-wide text-slate-800">Vehicle Not Found</p>
              <p className="mt-0.5 text-[13px] text-slate-500">Please enter your details manually below. Our team will contact you shortly.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

          {/* Vehicle Registration */}
          <div>
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Vehicle Registration <span className="text-red-500">*</span></p>
            <div className={`flex items-center overflow-hidden rounded-xl border-2 bg-[#FAFAE8] ${touched.reg && fieldErrors.reg ? "border-red-400" : "border-[#e5e5b0]"}`}>
              <div className={`flex items-center justify-center px-3 py-3 text-xl border-r ${touched.reg && fieldErrors.reg ? "border-red-400" : "border-[#e5e5b0]"}`}>
                🇬🇧
              </div>
              <input
                name="reg"
                value={form.reg}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="ENTER REG"
                className="flex-1 bg-transparent px-4 py-3 text-[15px] font-bold uppercase tracking-widest text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <FieldError field="reg" />
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Full Name <span className="text-red-500">*</span></p>
              <div className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 ${inputBg("name")} ${inputBorder("name")}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <input name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Full Name" className="flex-1 bg-transparent text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none" />
              </div>
              <FieldError field="name" />
            </div>
            <div>
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Email Address <span className="text-red-500">*</span></p>
              <div className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 ${inputBg("email")} ${inputBorder("email")}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter Email Address" className="flex-1 bg-transparent text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none" />
              </div>
              <FieldError field="email" />
            </div>
          </div>

          {/* Phone + Postcode */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Phone Number <span className="text-red-500">*</span></p>
              <div className={`flex items-stretch overflow-hidden rounded-xl border ${inputBorder("phone")} ${touched.phone && fieldErrors.phone ? "bg-red-50" : "bg-slate-50"} focus-within:ring-2 ${touched.phone && fieldErrors.phone ? "focus-within:ring-red-400" : "focus-within:ring-primary/30"}`}>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  value={formatUKPhone(form.phone)}
                  onChange={handlePhoneChange}
                  onBlur={handleBlur}
                  placeholder="07123 456789"
                  className="flex-1 bg-transparent px-3 py-2.5 text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              <FieldError field="phone" />
            </div>
            <div>
              <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Post Code <span className="text-red-500">*</span></p>
              <div className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 ${inputBg("postcode")} ${inputBorder("postcode")}`}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <input name="postcode" value={form.postcode} onChange={handleChange} onBlur={handleBlur} placeholder="RM20 4EL" className="flex-1 bg-transparent text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none uppercase" />
              </div>
              <FieldError field="postcode" />
            </div>
          </div>

          {/* Issue */}
          <div>
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Issue With Vehicle <span className="text-red-500">*</span></p>
            <textarea
              name="issue"
              value={form.issue}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={4}
              placeholder="Describe your vehicle's issue in as much detail as possible..."
              className={`w-full rounded-xl border px-3 py-2.5 text-[13.5px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none ${inputBg("issue")} ${inputBorder("issue")}`}
            />
            <FieldError field="issue" />
          </div>

          {/* Math Captcha */}
          <div className="relative overflow-hidden bg-slate-100 rounded-xl py-3 px-4 border border-slate-200">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex flex-wrap gap-4 p-2 text-[10px] font-bold uppercase rotate-[-10deg]">
              {Array.from({ length: 20 }).map((_, i) => (
                <span key={i}>CAPTCHA</span>
              ))}
            </div>
            <div className="relative z-10 flex flex-col gap-1.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1">Human Verification</p>
              <div className="flex items-center gap-3">
                <div className="flex flex-1 items-center gap-2">
                  <span className="text-[14px] font-bold text-slate-700">What is {math.a} + {math.b}?</span>
                  <button type="button" onClick={refreshMath} className="text-slate-400 hover:text-primary transition-colors">
                    <RotateCw className="w-4 h-4" />
                  </button>
                </div>
                <input
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value.replace(/[^0-9]/g, ""))}
                  placeholder="?"
                  className="w-14 rounded-lg border border-slate-200 bg-white px-2 py-2 text-center text-[14px] font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              {submitError && <p className="mt-1.5 text-[12px] text-red-500">{submitError}</p>}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl py-4 text-[13px] font-black uppercase tracking-widest text-white bg-primary hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting…" : "Submit Quote Request"}
          </button>

          <p className="text-center text-[11px] text-slate-400">By submitting, you agree to our contact terms. We never share your data.</p>

        </form>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col gap-4">

        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Why Choose Us</p>
          <ul className="flex flex-col gap-3">
            {whyChooseUs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-primary">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span className="text-[13px] leading-snug text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl p-6 bg-[#0c0c0c]">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Prefer To Call?</p>
          <p className="mb-5 text-[13px] leading-relaxed text-white/70">Speak directly with one of our engine specialists. Mon–Fri 9am–6pm, Sat 9am–2pm.</p>
          <div className="flex flex-col gap-3">
            <a href="tel:01375531355" className="flex items-center gap-3 text-[15px] font-bold text-white hover:text-primary transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              01375 531355
            </a>
            <a href="mailto:info@voguetechnics.co.uk" className="flex items-center gap-3 text-[14px] font-semibold text-white/80 hover:text-primary transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              info@voguetechnics.co.uk
            </a>
            <div className="flex items-center gap-3 text-[13px] text-white/60">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              UNIT 1D Hedley Avenue, RM20 4EL
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
