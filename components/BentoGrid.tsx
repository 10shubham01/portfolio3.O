"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import HoverFlipText from "./HoverFlipText";

const BentoGrid = ({
  items,
  className,
}: {
  items: any[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [localItems, setItems] = useState(items);

  const handleClick = (id: number) => {
    const selectedItem = localItems.find((item) => item.id === id);
    if (!selectedItem) return;
    setItems([
      selectedItem,
      ...localItems.filter((i) => i.id !== id).sort((a, b) => a.id - b.id),
    ]);
  };

  return (
    <div
      className={cn(
        "relative  rounded-3xl overflow-hidden border sm:p-4 p-1",
        className
      )}
    >
      <LayoutGroup>
        <div className="grid gap-0 grid-cols-2 sm:grid-cols-3 auto-rows-[minmax(120px,1fr)] transition-all">
          {localItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              transition={{
                layout: { duration: 0.7, type: "spring", bounce: 0.25 },
              }}
              onClick={() => handleClick(item.id)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "relative group cursor-pointer block p-2 sm:p-3",
                idx === 0
                  ? "sm:col-span-2 sm:row-span-2 col-span-2 row-span-2"
                  : ""
              )}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full border rounded-3xl "
                    layoutId="hoverBackground"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1, transition: { duration: 0.2 } }}
                    exit={{ opacity: 1, transition: { duration: 0.2 } }}
                  />
                )}
              </AnimatePresence>

              <Card>
                {/* Index number visible everywhere */}
                <div className="text-zinc-500 text-xs font-mono z-40">
                  {item.duration}
                </div>

                {/* If it's the big grid item (idx === 0) show full details */}
                {idx === 0 ? (
                  <div>
                    <HoverFlipText
                      className="text-zinc-100 font-semibold tracking-wide text-lg"
                      primary={item.company}
                    ></HoverFlipText>
                    <p className="text-zinc-400 text-sm mt-1">{item.role}</p>

                    <CardDescription>{item.description}</CardDescription>

                    {item.achievements?.length > 0 && (
                      <ul className="mt-3 list-disc list-inside text-zinc-400 text-xs space-y-1">
                        {item.achievements.map((point: string, i: number) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}

                    {item.techStack?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {item.techStack.map((tech: string, i: number) => (
                          <CardTitle
                            key={i}
                            className="text-[10px]  px-2 py-1 rounded-full border"
                          >
                            {tech}
                          </CardTitle>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // For smaller grid items
                  <div className="flex flex-col justify-center h-full">
                    <HoverFlipText
                      className="text-zinc-100 font-semibold text-base mb-1"
                      primary={item.company}
                    ></HoverFlipText>
                    <p className="text-zinc-400 text-sm mb-1">{item.role}</p>
                  </div>
                )}
              </Card>
            </motion.div>
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
      "rounded-2xl h-full w-full p-4 overflow-hidden bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 relative z-20 transition-all duration-300",
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
  <h4
    className={cn(
      "text-zinc-100 font-semibold tracking-wide text-lg mb-1",
      className
    )}
  >
    {children}
  </h4>
);

const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <p
    className={cn(
      "mt-3 text-zinc-400 tracking-wide leading-relaxed text-sm",
      className
    )}
  >
    {children}
  </p>
);

export default BentoGrid;
