"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bricolage_Grotesque } from "next/font/google";

const spacemono = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800"],
  preload: true,
});

const lines = [
  "I",
  "SPECIALIZE",
  "IN",
  "CREATING",
  "INNOVATIVE,",
  "USER-CENTERED",
  "PRODUCTS",
  "THAT",
  "STAND",
  "OUT",
  "FROM",
  "THE",
  "CROWD.",
];

// 👇 Child component for a single character
const AnimatedChar = ({
  char,
  scrollYProgress,
  start,
  end,
}: {
  char: string;
  scrollYProgress: import("framer-motion").MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

const ScrollAnimatedText = () => {
  const { scrollYProgress } = useScroll();

  const duration = 0.004;
  let globalIndex = 0;

  return (
    <div
      className={`flex flex-wrap gap-x-2 text-foreground ${spacemono.className}`}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="flex sm:text-4xl text-xl sm:leading-14">
          {line.split("").map((char, charIndex) => {
            const start = globalIndex * duration;
            const end = start + duration;
            globalIndex++;

            return (
              <AnimatedChar
                key={`${lineIndex}-${charIndex}`}
                char={char}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimatedText;
