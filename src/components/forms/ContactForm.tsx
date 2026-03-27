"use client";

import { Send, RotateCw } from "lucide-react";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postCode: "",
    regNumber: "",
    issue: "",
  });

  // Math Captcha State
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, sum: 0 });
  const [userCaptchaAnswer, setUserCaptchaAnswer] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1: n1, num2: n2, sum: n1 + n2 });
    setUserCaptchaAnswer("");
    setCaptchaError(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCaptchaAnswer(e.target.value);
    setCaptchaError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parseInt(userCaptchaAnswer) !== captcha.sum) {
      setCaptchaError(true);
      return;
    }

    setStatus("loading");

    try {
      console.log("Submitting form:", { ...formData });
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", postCode: "", regNumber: "", issue: "" });
      generateCaptcha();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

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
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Name*</label>
            <input 
              name="name"
              type="text" 
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
              placeholder="John Doe" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Email Address*</label>
            <input 
              name="email"
              type="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
              placeholder="john@example.com" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Phone Number*</label>
            <input 
              name="phone"
              type="tel" 
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
              placeholder="07900 000000" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Post Code*</label>
            <input 
              name="postCode"
              type="text" 
              required
              value={formData.postCode}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all uppercase" 
              placeholder="RM20 4EL" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Registration Number (Optional)</label>
          <input 
            name="regNumber"
            type="text" 
            value={formData.regNumber}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all uppercase placeholder-normal" 
            placeholder="AB12 CDE" 
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Issue With Vehicle*</label>
          <textarea 
            name="issue"
            rows={4} 
            required
            value={formData.issue}
            onChange={handleChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" 
            placeholder="Please describe the issue with your vehicle..."></textarea>
        </div>

        {/* Custom Math Captcha Section */}
        <div className="relative overflow-hidden bg-slate-100 rounded-xl p-6 border border-slate-200">
          {/* Watermark Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex flex-wrap gap-4 p-2 text-[10px] font-bold uppercase rotate-[-10deg]">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i}>CAPTCHA</span>
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
            <div className="text-[#0D2447]/70 font-medium text-lg">
              What is {captcha.num1} + {captcha.num2}?
            </div>
            
            <div className="flex items-center gap-3">
              <input 
                type="text" 
                value={userCaptchaAnswer}
                onChange={handleCaptchaChange}
                placeholder="Robot Captcha Here"
                className={`w-48 bg-white border ${captchaError ? 'border-red-500 shadow-[0_0_5px_rgba(239,68,68,0.3)]' : 'border-slate-200'} rounded-lg px-4 py-2.5 text-center focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-slate-400`}
              />
              <button 
                type="button"
                onClick={generateCaptcha}
                className="p-2.5 bg-white border border-slate-200 rounded-lg text-emerald-600 hover:bg-slate-50 transition-colors shadow-sm"
                title="Refresh Captcha"
              >
                <RotateCw className="w-5 h-5" />
              </button>
            </div>
            {captchaError && (
              <p className="text-red-500 text-xs font-semibold">Incorrect answer, please try again.</p>
            )}
          </div>
        </div>

        <button 
          type="submit" 
          disabled={status === "loading"}
          className="w-full bg-slate-900 hover:bg-primary text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-[0_10px_20px_rgba(25,135,84,0.3)] transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
          <Send className="w-5 h-5" />
        </button>
        {status === "error" && (
          <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}
