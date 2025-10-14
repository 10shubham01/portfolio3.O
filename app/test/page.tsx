import BentoGrid from "@/components/BentoGrid";
import React from "react";
export const projects = [
  {
    id: 1,
    title: "Credilio Financial Technologies — Senior Software Engineer",
    description:
      "Led a team of engineers and mentored developers through code reviews, knowledge sharing, and onboarding. Managed and optimized GitHub CI/CD pipelines for AWS deployment, ensuring efficient and reliable releases.",
    link: "https://www.credilio.in/",
  },
  {
    id: 2,
    title: "Customer Portal — Credilio",
    description:
      "Integrated multiple bank APIs to streamline credit card and personal loan journeys. Rebuilt the portal using composable architecture, improving maintainability by 20%. Enhanced page load performance using virtual scrolling, debouncing, and rendering optimizations.",
    link: "https://www.credilio.in/",
  },
  {
    id: 3,
    title: "Advisor Portal — Credilio",
    description:
      "Developed reusable and accessible components with built-in validation. Implemented lead, customer, and earnings reports with secure file downloads. Built persistent JWT-based authentication and authorization adhering to security best practices.",
    link: "https://www.credilio.in/",
  },
  {
    id: 4,
    title: "Plug and Play Platform — Credilio",
    description:
      "Delivered dynamic theme support for partner integrations. Facilitated communication between Android/iOS apps and WebView in a single-page app, leading a team of 3–4 developers. Guided partner developers for seamless web-to-native integration.",
    link: "https://www.credilio.in/",
  },
  {
    id: 5,
    title: "MountBlue Technologies — Software Engineer/Trainee",
    description:
      "Built dynamic full-stack applications using Vue.js, React.js, and Node.js. Migrated Nuxt 2 projects to Nuxt 3 for better performance and maintainability. Delivered high-quality code with strong debugging and QA focus using Express.js and PostgreSQL/MySQL.",
    link: "https://www.mountblue.io/",
  },
];

export default function page() {
  return (
    <div className=" w-screen flex justify-center items-center">
      <BentoGrid className="max-w-6xl" items={projects}></BentoGrid>
    </div>
  );
}
