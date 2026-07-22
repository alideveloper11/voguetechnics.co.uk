"use client";

import { useState } from "react";

export default function RegNumberInput() {
  const [reg, setReg] = useState("");

  return (
    <input
      type="text"
      value={reg}
      onChange={(e) => setReg(e.target.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase())}
      placeholder="AB12 CDE"
      className="w-full bg-transparent text-slate-800 font-bold text-lg px-3 py-3 focus:outline-none placeholder:text-slate-600 uppercase tracking-widest"
    />
  );
}
