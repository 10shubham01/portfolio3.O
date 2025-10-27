"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import HoverFlipText from "./HoverFlipText";
import Alien from "./Alien";

const Blogs = ({
  items,
  className,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("relative ", className)}>
      <HoverFlipText
        primary="BLOGS"
        className="absolute text-foreground sm:text-6xl text-2xl font-bold text-left -top-4  sm:-top-12 bg-background"
      ></HoverFlipText>
      <LayoutGroup>
        <div className="grid gap-0 grid-cols-1 sm:grid-cols-4 auto-rows-[minmax(120px,1fr)] transition-all  overflow-hidden ">
          {items.map((item, idx) => (
            <motion.a
              key={item.id}
              layout
              href={item.link}
              target="_blank"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                layout: { duration: 0.7, type: "spring", bounce: 0 },
                duration: 1,
                delay: idx * 0.2,
                type: "spring",
                bounce: 0.1,
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn("relative group cursor-pointer block p-2 sm:p-3")}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full border rounded-3xl bg-background invert z-50"
                    layoutId="hoverBackground"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1, transition: { duration: 0.2 } }}
                    exit={{ opacity: 1, transition: { duration: 0.2 } }}
                  />
                )}
              </AnimatePresence>

              <Card
                className={cn(
                  "sm:aspect-square",
                  hoveredIndex === idx ? "!bg-background invert border-0" : ""
                )}
              >
                {/* Index number visible everywhere */}
                <Alien
                  text={item.created_at}
                  className={`text-zinc-500 text-xs font-mono z-40 ${
                    item.created_at === "May 7,2025" &&
                    "!text-black bg-[#39ff14]"
                  }`}
                ></Alien>
                <div className="flex flex-col justify-center h-full">
                  <CardTitle className="font-semibold sm:text-base mb-1 text-sm">
                    {item.title}
                  </CardTitle>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
};

// ---- Reusable Card Components ----
const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-4 overflow-hidden bg-background  border border-zinc-800 group-hover:border-zinc-700 relative transition-all duration-300 text-foreground z-100",
      className
    )}
  >
    {children}
  </div>
);

const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <h4 className={cn(" font-semibold tracking-wide text-lg mb-1", className)}>
    {children}
  </h4>
);
export default Blogs;
