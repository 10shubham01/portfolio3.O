"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { div } from "framer-motion/client";
import HeroText from "@/components/HeroText";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "FinTech Company",
    period: "Nov 2024 - Present",
    description:
      "Leading a small team, handling code reviews, onboarding, and coordinating with partner banks to deliver high-quality web applications.",
    projects: [
      {
        name: "Whiteboard App",
        link: "#",
        description:
          "Collaborative app with real-time board sharing and mobile support.",
      },
      {
        name: "UI Component Library",
        link: "#",
        description:
          "Built a library using Tailwind, React, and Framer Motion.",
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "Tech Startup",
    period: "Aug 2021 - Oct 2024",
    description:
      "Developed responsive web applications using Next.js, Vue 3, and Tailwind CSS, focusing on performance optimization and code maintainability.",
    projects: [
      {
        name: "Chrome Extension",
        link: "#",
        description:
          "Spotlight-style interface for recently closed tabs and repo search.",
      },
      {
        name: "Banking Integrations",
        link: "#",
        description: "Integrated multiple bank APIs for web and advisor apps.",
      },
    ],
  },
];

export default function ExperiencePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useState(() => setMounted(true));

  return (
    <div>
      <HeroText text="SHUBHAM" className={""}></HeroText>
    </div>
  );
}
