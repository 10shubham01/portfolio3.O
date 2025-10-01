"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface HoverFlipTextProps {
  primary: string;
  secondary?: string; // optional, defaults to primary
  className?: string;
}

export default function HoverFlipText({
  primary,
  secondary,
  className = "",
}: HoverFlipTextProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <p
      className={`relative inline-block overflow-hidden h-[1em] leading-none ${className} cursor-pointer `}
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
