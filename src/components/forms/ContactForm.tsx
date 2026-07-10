"use client";

import { Send, RotateCw } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitContact } from "@/app/actions/submitContact";
import {
  formatUKPhone,
  stripPhoneDigits,
  validateUKPhoneDigits,
} from "@/lib/ukPhone";

type FormData = {
  name: string;
  email: string;
  phone: string;
  postCode: string;
  regNumber: string;
  issue: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
type TouchedFields = Partial<Record<keyof FormData, boolean>>;

type ContactFormProps = {
  variant?: "default" | "sidebar";
};

function validateField(name: keyof FormData, value: string): string {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      if (!/^[a-zA-Z\s'\-]+$/.test(value.trim())) return "Name can only contain letters.";
      return "";
    case "email":
      if (!value.trim()) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return "Please enter a valid email address.";
      return "";
    case "phone":
      return validateUKPhoneDigits(value);
    case "postCode":
      if (!value.trim()) return "Post code is required.";
      if (!/^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(value.trim())) return "Please enter a valid UK post code (e.g. RM20 4EL).";
      return "";
    case "regNumber":
      if (!value.trim()) return "Registration number is required.";
      if (!/^[A-Z0-9\s]{1,8}$/i.test(value.trim())) return "Registration must be alphanumeric only.";
      if (value.replace(/\s/g, "").length > 7) return "Registration must be 7 characters or fewer.";
      return "";
    case "issue":
      if (!value.trim()) return "Please describe the issue with your vehicle.";
      if (value.trim().length < 10) return "Please provide a bit more detail (at least 10 characters).";
      return "";
    default:
      return "";
  }
}

function validateAll(data: FormData): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(data) as (keyof FormData)[]).forEach((key) => {
    const msg = validateField(key, data[key]);
    if (msg) errors[key] = msg;
  });
  return errors;
}

const inputBase =
  "w-full bg-slate-50 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent transition-all";
const inputValid = "border-slate-200 focus:ring-primary";
const inputError = "border-red-400 focus:ring-red-400 bg-red-50";

export default function ContactForm({ variant = "default" }: ContactFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    postCode: "",
    regNumber: "",
    issue: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});

  const [captcha, setCaptcha] = useState(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, sum: num1 + num2 };
  });
  const [userCaptchaAnswer, setUserCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const isSidebar = variant === "sidebar";
  const [submitError, setSubmitError] = useState("");

  function generateCaptcha() {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1: n1, num2: n2, sum: n1 + n2 });
    setUserCaptchaAnswer("");
    setCaptchaError(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const key = name as keyof FormData;

    let processed = value;

    if (key === "regNumber") {
      processed = value.replace(/[^a-zA-Z0-9\s]/g, "").toUpperCase();
    } else if (key === "postCode") {
      processed = value.replace(/[^A-Za-z0-9\s]/g, "").toUpperCase();
    }

    setFormData((prev) => ({ ...prev, [key]: processed }));

    if (touched[key]) {
      setErrors((prev) => ({ ...prev, [key]: validateField(key, processed) }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = stripPhoneDigits(e.target.value);
    setFormData((prev) => ({ ...prev, phone: raw }));
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validateField("phone", raw) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = e.target.name as keyof FormData;
    setTouched((prev) => ({ ...prev, [key]: true }));
    setErrors((prev) => ({ ...prev, [key]: validateField(key, formData[key]) }));
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setUserCaptchaAnswer(value);
    setCaptchaError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const allTouched: TouchedFields = Object.fromEntries(
      Object.keys(formData).map((k) => [k, true])
    );
    setTouched(allTouched);

    const validationErrors = validateAll(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    if (parseInt(userCaptchaAnswer) !== captcha.sum) {
      setCaptchaError(true);
      return;
    }

    setSubmitError("");
    setStatus("loading");

    try {
      const { ok, message } = await submitContact({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        reg: formData.regNumber,
        postcode: formData.postCode,
        message: formData.issue,
        browser: navigator.userAgent,
      });
      if (ok) {
        router.push("/quote-success");
      } else {
        console.error("Submission error:", message);
        setSubmitError(message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const fieldClass = (key: keyof FormData) =>
    `${inputBase} ${touched[key] && errors[key] ? inputError : inputValid}`;

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg text-center space-y-4">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
        <p className="text-slate-600">Thank you for your enquiry. Our team will get back to you shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-primary font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col w-full  rounded-3xl max-w-xl mx-auto lg:max-w-none lg:mx-0 box-border ${
        isSidebar ? "max-w-full" : "lg:w-full"
      }`}
    >
      <div className={`bg-white rounded-3xl border border-slate-200  w-full ${
        isSidebar ? "px-5 py-6" : "p-8 md:p-12"
      }`}>
        <h3 className={`font-bold text-slate-900 ${isSidebar ? "text-xl mb-6" : "text-2xl mb-8"}`}>
          Send a Message
        </h3>

        <form
          onSubmit={handleSubmit}
          noValidate
          className={`flex flex-col box-border ${isSidebar ? "gap-4" : "space-y-6"}`}
        >
          {/* Registration Number Field */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">
              Registration Number*
            </label>
            <input
              name="regNumber"
              type="text"
              value={formData.regNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${fieldClass("regNumber")} uppercase tracking-widest ${isSidebar ? "py-2 px-3" : ""}`}
              placeholder="AB12 CDE"
              maxLength={8}
            />
            {!isSidebar && <p className="text-slate-400 text-xs">Alphanumeric only — auto-converted to uppercase.</p>}
          </div>

          {/* Name & Email Stack/Grid */}
          <div className={`grid grid-cols-1 gap-6 ${isSidebar ? "sm:grid-cols-1 gap-4" : "md:grid-cols-2"}`}>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Name*</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${fieldClass("name")} ${isSidebar ? "py-2 px-3" : ""}`}
                placeholder="John Doe"
              />
              {touched.name && errors.name && (
                <p className="text-red-500 text-xs font-medium">{errors.name}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Email Address*</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${fieldClass("email")} ${isSidebar ? "py-2 px-3" : ""}`}
                placeholder="john@example.com"
              />
              {touched.email && errors.email && (
                <p className="text-red-500 text-xs font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone Number & Post Code Stack/Grid */}
          <div className={`grid grid-cols-1 gap-6 ${isSidebar ? "sm:grid-cols-1 gap-4" : "md:grid-cols-2"}`}>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Phone Number*</label>
              <div className={`flex items-stretch border rounded-xl overflow-hidden transition-all ${touched.phone && errors.phone ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"} focus-within:ring-2 ${touched.phone && errors.phone ? "focus-within:ring-red-400" : "focus-within:ring-primary"}`}>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  value={formatUKPhone(formData.phone)}
                  onChange={handlePhoneChange}
                  onBlur={handleBlur}
                  className={`flex-1 bg-transparent px-4 focus:outline-none text-slate-900 ${isSidebar ? "py-2" : "py-3"}`}
                  placeholder="07123 456789"
                />
              </div>
              {touched.phone && errors.phone && (
                <p className="text-red-500 text-xs font-medium">{errors.phone}</p>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700">Post Code*</label>
              <input
                name="postCode"
                type="text"
                value={formData.postCode}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${fieldClass("postCode")} uppercase ${isSidebar ? "py-2 px-3" : ""}`}
                placeholder="RM20 4EL"
              />
              {touched.postCode && errors.postCode && (
                <p className="text-red-500 text-xs font-medium">{errors.postCode}</p>
              )}
            </div>
          </div>

          {/* Issue Area Field */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-700">Issue With Vehicle*</label>
            <textarea
              name="issue"
              rows={isSidebar ? 3 : 4}
              value={formData.issue}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${touched.issue && errors.issue ? `${inputBase} ${inputError}` : `${inputBase} ${inputValid}`} resize-none ${isSidebar ? "py-2 px-3" : ""}`}
              placeholder="Please describe the issue with your vehicle..."
            />
            {touched.issue && errors.issue && (
              <p className="text-red-500 text-xs font-medium">{errors.issue}</p>
            )}
          </div>

          {/* Math Captcha Validation Card */}
          <div className="relative overflow-hidden bg-slate-100 rounded-xl py-3 px-4 border border-slate-200">
            <div className="relative z-10 flex flex-col gap-1.5">
              <div className="flex items-center gap-3 w-full">
                <span className="text-[#0D2447]/70 font-medium text-sm whitespace-nowrap shrink-0">
                  What is {captcha.num1} + {captcha.num2}?
                </span>
                <input
                  type="text"
                  value={userCaptchaAnswer}
                  onChange={handleCaptchaChange}
                  placeholder="Your answer"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`flex-1 min-w-0 bg-white border ${captchaError ? "border-red-500 shadow-[0_0_5px_rgba(239,68,68,0.3)]" : "border-slate-200"} rounded-lg px-3 py-1.5 text-center text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400`}
                />
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="shrink-0 p-1.5 bg-white border border-slate-200 rounded-lg text-emerald-600 hover:bg-slate-50 transition-colors shadow-sm"
                  title="Refresh Captcha"
                >
                  <RotateCw className="w-4 h-4" />
                </button>
              </div>
              {captchaError && (
                <p className="text-red-500 text-xs font-semibold">Incorrect answer, please try again.</p>
              )}
            </div>
          </div>

          {/* Form Actions Action Submission Button */}
          <div className="flex flex-col gap-2 w-full pt-1">
            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full bg-slate-900 hover:bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-[0_10px_20px_rgba(25,135,84,0.3)] transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                isSidebar ? "py-3 text-base" : "py-4 text-lg"
              }`}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <Send className="w-5 h-5" />
            </button>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">{submitError || "Something went wrong. Please try again."}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}