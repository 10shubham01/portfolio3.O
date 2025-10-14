"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface HoverFlipTextProps {
  primary: string;
  secondary?: string; // optional, defaults to primary
  className?: string;
  delay?: number; // for staggered animation
}

export default function HoverFlipText({
  primary,
  secondary,
  className = "",
  delay = 0,
}: HoverFlipTextProps) {
  const [hovered, setHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHovered(true);
        setTimeout(() => setHovered(false), 600); // revert after flip
      }, delay); // staggered delay
      setHasAnimated(true);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimated, delay]);

  return (
    <p
      ref={ref}
      className={`relative inline-block overflow-hidden h-[1em] leading-none ${className} cursor-pointer`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Primary */}
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="block"
      >
        {primary}
      </motion.span>

      {/* Secondary */}
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="block absolute left-0 top-0"
      >
        {secondary || primary}
      </motion.span>
    </p>
  );
}
