"use client";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function AnimatedTextarea() {
  const [height, setHeight] = useState("auto");
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);
  console.log(height);


  console.log(height);







  return (
    <div className="flex justify-end flex-col">
      <motion.textarea
        id="message"
        rows={4}
        onInput={(e) => {
          const target = e.currentTarget;
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
          setHeight(`${target.scrollHeight}px`);
        }}
        animate={{
          height,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
        className={`block p-2.5 w-full text-base rounded-lg border border-zinc-200 hide-scrollbar 
        focus-visible:outline-none resize-none dark:bg-zinc-700 dark:border-zinc-600 dark:text-white 
        ${poppins.className}`}
        placeholder="Write your thoughts here..."
      />
      <div
        className="flex h-12 rounded-[3.5px] shadow shadow-[#39ff14] w-[6.85rem] items-end justify-end pr-[6px] pb-[4px] cursor-pointer mt-6 place-self-end hover:scale-101 duration-300 "
        tabIndex={0}
      >
        <div className="flex w-full flex-col justify-center text-[12px] items-end ">
          return
        </div>
      </div>
    </div>
  );
}
