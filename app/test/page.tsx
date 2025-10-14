import BentoGrid from "@/components/BentoGrid";
import React from "react";
const experience = [
  {
    id: 1,
    company: "MountBlue Technologies",
    role: "Software Engineer / Consultant",
    duration: "Aug 2021 – Nov 2022",
    description:
      "Worked as a consultant developer delivering React-based fintech applications for clients. Focused on building modular CMS platforms and advisor dashboards that enhanced workflow efficiency and maintainability.",
    achievements: [
      "Built reusable CMS and Advisor Portal modules using React.js and TypeScript.",
      "Implemented role-based access control and integrated REST APIs for client projects.",
      "Improved performance and accessibility with optimized rendering and lazy loading.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "TailwindCSS",
      "GitHub Actions",
    ],
    link: "https://www.mountblue.io/",
  },
  {
    id: 2,
    company: "Credilio Financial Technologies",
    role: "Software Engineer",
    duration: "Dec 2022 – Oct 2024",
    description:
      "Joined Credilio to modernize and scale fintech web platforms. Worked on the Customer, Admin, and Novio portals using Vue.js and Nuxt.js. Migrated legacy systems, improved performance, and implemented robust validation and accessibility standards.",
    achievements: [
      "Migrated Nuxt 2 applications to Nuxt 3 for better performance and code maintainability.",
      "Developed Customer, Admin, and Novio portals with composable Vue components.",
      "Enhanced accessibility and reduced initial load time through optimized rendering strategies.",
    ],
    techStack: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Zod",
      "TailwindCSS",
      "Vite",
      "Node.js",
    ],
    link: "https://www.credilio.in/",
  },
  {
    id: 3,
    company: "Credilio Financial Technologies",
    role: "Senior Software Engineer / Lead Developer",
    duration: "Oct 2024 – Present",
    description:
      "Promoted to Lead Developer, overseeing frontend architecture, mentoring developers, and managing CI/CD pipelines. Introduced Nuxt 4, AWS automation, and built a video-based credit bureau score report using Remotion for personalized customer insights.",
    achievements: [
      "Led a team of 5+ engineers, enforcing code quality and delivery timelines.",
      "Implemented AWS-based deployments using CloudFront, S3, and GitHub Actions.",
      "Developed an automated video wrap system for customer bureau scores using Remotion.",
    ],
    techStack: [
      "Nuxt 4",
      "TypeScript",
      "AWS",
      "Remotion",
      "Framer Motion",
      "TailwindCSS",
      "GitHub Actions",
    ],
    link: "https://www.credilio.in/",
  },
];

export default function page() {
  return (
    <div className=" w-screen flex justify-center items-center">
      <BentoGrid items={experience}></BentoGrid>
    </div>
  );
}
