"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { cn } from "@/lib/utils";

type WordItem = string | { text: string; className?: string };

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: WordItem[] | string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);

  const wordsArray: { text: string; className?: string }[] = Array.isArray(
    words
  )
    ? words.map((w) => (typeof w === "string" ? { text: w } : w))
    : words.split(" ").map((w) => ({ text: w }));

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(
              "span",
              filter
                ? { opacity: 1, filter: ["blur(10px)", "blur(0px)"] }
                : { opacity: 1, filter: "none" },
              {
                duration,
                delay: stagger(0.2),
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [animate, duration, filter]);

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <motion.div
            ref={(el) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-expect-error
              scope.current = el;
              containerRef.current = el;
            }}
          >
            {wordsArray.map((word, idx) =>
              word.text === "\n" ? (
                <br key={"br-" + idx} />
              ) : (
                <motion.span
                  key={word.text + idx}
                  className={cn(
                    "opacity-0 dark:text-white text-black",
                    word.className
                  )}
                  style={{ filter: filter ? "blur(10px)" : "none" }}
                >
                  {word.text}{" "}
                </motion.span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
