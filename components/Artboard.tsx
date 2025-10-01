"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Instrument_Serif } from "next/font/google";
import CardFan from "./CardFan";
import HeroText from "./HeroText";
// const fasthand = Fasthand({
//   subsets: ["latin"],
//   weight: ["400"],
//   preload: true,
// });

const instrument_Serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
  style: ["italic"],
});
const DATA = {
  title: "Frontend Developer",
  name: "Shubham Gupta",
  gallary: ["/one.jpeg", "/three.jpg", "/four.jpg", "/five.jpeg"],
  gallary2: ["/six.webp", "/seven.webp"],
};
const Artboard = () => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="sm:h-[calc(100vh-100px)] h-[calc(100dvh-400px)] sm:p-10 sm:pt-0 p-2 text-foreground">
      <div
        className="size-full relative overflow-hidden border-2 border-border flex justify-center items-center bg-muted !cursor-grab"
        ref={ref}
      >
        <motion.div
          className="
  child
  sm:h-[250vh] h-[450vh]
  sm:min-w-[250vw] min-w-[550vw]
  bg-[image:linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]
  bg-[size:12px_12px]
  relative flex justify-center items-center
  !z-20
"
          style={{}}
          drag
          dragMomentum={false}
          dragConstraints={ref}
        >
          <div className="relative sm:h-[calc(100vh-100px)] h-[calc(100vh-400px)] flex flex-col justify-around py-32 items-center w-screen text-center grand-child">
            <div
              className={`flex flex-col items-center ${instrument_Serif.className}`}
            >
              <h2 className="sm:text-2xl text-xl  sm:mb-32 mb-16 sm:max-w-fit max-w-52 text-center">
                Find everything about me on this canvas
              </h2>

              <HeroText className="sm:text-9xl text-5xl" text={DATA.title} />
              <h1 className="sm:text-2xl text-xl text-left self-start">
                {DATA.name}
              </h1>
              <div className="text-sm flex items-center sm:mt-32 mt-16 gap-2">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.81819 0.93179C7.64245 0.756054 7.35753 0.756054 7.18179 0.93179L5.43179 2.68179C5.25605 2.85753 5.25605 3.14245 5.43179 3.31819C5.60753 3.49392 5.89245 3.49392 6.06819 3.31819L6.99999 2.38638V5.49999C6.99999 5.77613 7.22385 5.99999 7.49999 5.99999C7.77613 5.99999 7.99999 5.77613 7.99999 5.49999V2.38638L8.93179 3.31819C9.10753 3.49392 9.39245 3.49392 9.56819 3.31819C9.74392 3.14245 9.74392 2.85753 9.56819 2.68179L7.81819 0.93179ZM7.99999 9.49999C7.99999 9.22385 7.77613 8.99999 7.49999 8.99999C7.22385 8.99999 6.99999 9.22385 6.99999 9.49999V12.6136L6.06819 11.6818C5.89245 11.5061 5.60753 11.5061 5.43179 11.6818C5.25605 11.8575 5.25605 12.1424 5.43179 12.3182L7.18179 14.0682C7.35753 14.2439 7.64245 14.2439 7.81819 14.0682L9.56819 12.3182C9.74392 12.1424 9.74392 11.8575 9.56819 11.6818C9.39245 11.5061 9.10753 11.5061 8.93179 11.6818L7.99999 12.6136V9.49999ZM8.99999 7.49999C8.99999 7.22385 9.22385 6.99999 9.49999 6.99999H12.6136L11.6818 6.06819C11.5061 5.89245 11.5061 5.60753 11.6818 5.43179C11.8575 5.25605 12.1424 5.25605 12.3182 5.43179L14.0682 7.18179C14.2439 7.35753 14.2439 7.64245 14.0682 7.81819L12.3182 9.56819C12.1424 9.74392 11.8575 9.74392 11.6818 9.56819C11.5061 9.39245 11.5061 9.10753 11.6818 8.93179L12.6136 7.99999H9.49999C9.22385 7.99999 8.99999 7.77613 8.99999 7.49999ZM3.31819 6.06819L2.38638 6.99999H5.49999C5.77613 6.99999 5.99999 7.22385 5.99999 7.49999C5.99999 7.77613 5.77613 7.99999 5.49999 7.99999H2.38638L3.31819 8.93179C3.49392 9.10753 3.49392 9.39245 3.31819 9.56819C3.14245 9.74392 2.85753 9.74392 2.68179 9.56819L0.93179 7.81819C0.756054 7.64245 0.756054 7.35753 0.93179 7.18179L2.68179 5.43179C2.85753 5.25605 3.14245 5.25605 3.31819 5.43179C3.49392 5.60753 3.49392 5.89245 3.31819 6.06819Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                DRAG TO MOVE
              </div>
            </div>
            <CardFan
              gallery={DATA.gallary}
              className="sm:size-72 size-28 absolute sm:right-0 -right-20 flex items-end justify-center bottom-0"
            />
            <CardFan
              gallery={DATA.gallary2}
              className={`sm:size-60 size-28 absolute -left-10 flex items-end justify-center bottom-0 ${instrument_Serif.className}`}
              title="Adventure is out there!"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Artboard;
