"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { useState } from "react";

const BentoGrid = ({
  items,
  className,
}: {
  items: {
    title: string;
    id: number;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [localitems, setItems] = useState(items);

  const handleClick = (id: number) => {
    const selectedItem = localitems.find((item) => item.id === id);
    if (!selectedItem) return;
    setItems([
      selectedItem,
      ...localitems
        .filter((item) => item.id !== id)
        .sort((a, b) => a.id - b.id),
    ]);
  };

  return (
    <div
      className={cn(
        "relative p-4 rounded-3xl overflow-hidden border",
        className
      )}
    >
      <LayoutGroup>
        <div
          className={cn(
            "grid gap-2 grid-cols-4 auto-rows-[minmax(120px,1fr)] transition-all relative"
          )}
        >
          {localitems.map((item, idx) => (
            <motion.div
              key={item?.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              layout
              transition={{
                layout: { duration: 0.7, type: "spring", bounce: 0.25 },
              }}
              onClick={() => handleClick(item.id)}
              className={`
                    relative group  block p-2
                  cursor-pointer  
                  ${
                    idx === 0
                      ? "sm:col-span-2 sm:row-span-2 col-span-4 row-span-4"
                      : "aspect-square"
                  }
                `}
            >
              <AnimatePresence>
                {hoveredIndex === idx && idx !== 0 && (
                  <motion.span
                    className="absolute inset-0 h-full w-full border block  rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 1 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 1,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle>{item.title}</CardTitle>
                {idx === 0 && (
                  <CardDescription>{item.description}</CardDescription>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export default BentoGrid;
