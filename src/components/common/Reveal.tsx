"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "x" | "scale";
  distance?: number;
  delay?: number;
  duration?: number;
};

export default function Reveal({
  children,
  className = "",
  variant = "up",
  distance,
  delay = 0,
  duration = 0.5,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animClass =
    variant === "x" ? "animate-fade-in-x" : variant === "scale" ? "animate-fade-scale" : "animate-fade-up";

  const style: Record<string, string> = {
    "--fade-delay": `${delay}s`,
    "--fade-duration": `${duration}s`,
  };
  if (distance !== undefined) {
    if (variant === "x") style["--fade-x"] = `${distance}px`;
    else if (variant === "scale") style["--fade-scale"] = `${distance}`;
    else style["--fade-y"] = `${distance}px`;
  }

  return (
    <div
      ref={ref}
      className={`${inView ? animClass : "opacity-0"} ${className}`}
      style={style as React.CSSProperties}
      {...rest}
    >
      {children}
    </div>
  );
}
