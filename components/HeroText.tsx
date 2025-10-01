"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroTextProps {
  text: string;
  className?: string;
}

export default function HeroText({ text, className = "" }: HeroTextProps) {
  return (
    <div className={`${cn(className)} relative`}>
      {/* Main animated text */}
      <motion.div className="relative font-semibold flex flex-wrap">
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block z-50 cursor-grab select-none"
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{
              y: { duration: 1 + Math.random(), ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1 + index / 20,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
            drag
            dragMomentum={false}
            dragConstraints={{ top: -300, left: -300, right: 300, bottom: 300 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Text outline / shadow layer */}
      <div
        className="absolute text-transparent inset-0 -z-10 flex flex-wrap"
        style={{ WebkitTextStroke: "1px rgba(255, 0, 0, 0.3)" }}
      >
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
}
