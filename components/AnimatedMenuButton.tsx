"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedMenuButton = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle menu"
      className="w-8 h-8 relative flex flex-col justify-center items-center cursor-pointer"
    >
      {/* Top/Bottom lines */}
      <motion.span
        className="absolute w-6 h-[2px] bg-foreground rounded"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -5,
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.span
        className="absolute w-6 h-[2px] bg-foreground rounded"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 5,
        }}
        transition={{ duration: 0.4 }}
      />
    </button>
  );
};
export default AnimatedMenuButton;
