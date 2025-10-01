"use client";

import { Space_Mono } from "next/font/google";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import HoverFlipText from "./HoverFlipText";
import AnimatedMenuButton from "./AnimatedMenuButton";

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
});

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  if (!mounted) return null;

  return (
    <nav
      className={`w-full bg-background/80 backdrop-blur-md z-50 ${spacemono.className} relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold text-foreground cursor-pointer">
              SHUBHAMGUPTA.DEV
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground px-3 py-2 text-sm font-medium"
            >
              <HoverFlipText primary="GET IN TOUCH" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md relative w-8 h-8 flex items-center justify-center cursor-pointer"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {resolvedTheme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    transition={{ duration: 0.4 }}
                  >
                    <SunIcon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MoonIcon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Menu Toggle */}
            <AnimatedMenuButton toggle={toggleMenu} isOpen={isMenuOpen} />
          </div>
        </div>

        {/* Collapsible Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden grid sm:grid-cols-2 absolute z-20 top-16 bg-background w-full left-0 right-0 pb-10 px-6"
            >
              {/* Left Side - Nav Links */}
              <div className=" space-y-4">
                {["home", "work", "contact"].map((section, index) => (
                  <motion.button
                    key={section}
                    variants={itemVariants}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => scrollToSection(section)}
                    className="w-full text-left text-foreground px-3 py-2 text-6xl font-medium flex items-center gap-x-4"
                  >
                    <span className="opacity-50">{`0${index + 1}`}</span>{" "}
                    <HoverFlipText
                      primary={section.toUpperCase()}
                      secondary={section.toUpperCase()}
                    />
                  </motion.button>
                ))}
              </div>

              <div className="self-end space-y-4 ">
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="pt-4"
                >
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 px-3">
                    EMAIL
                  </h3>
                  <a
                    href="mailto:shubhamedu.01@gmail.com"
                    className="text-foreground px-3 py-2 text-sm font-medium"
                  >
                    <HoverFlipText
                      primary="SHUBHAMEDU.01@GMAIL.COM"
                      secondary="DROP A MAIL"
                    />
                  </a>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.2, delay: 0.25 }}
                >
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider px-3">
                    SOCIALS
                  </h3>
                  <div className="flex gap-2">
                    {["LINKEDIN", "INSTAGRAM", "MEDIUM"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-foreground px-3 py-2 text-sm font-medium"
                      >
                        <HoverFlipText primary={social} />
                      </a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
