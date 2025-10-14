import Artboard from "@/components/Artboard";
import ScrollAnimatedText from "@/components/ScrollAnimationText";
import React from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { experience, WHAT_CAN_I_DO } from "@/constants";
import { TextGenerateEffect } from "@/components/TextGenratedEffect";
import HoverFlipText from "@/components/HoverFlipText";
import BentoGrid from "@/components/BentoGrid";

const spacemono = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800"],
  preload: true,
});

const Page = () => {
  return (
    <main className={`${spacemono.className}`}>
      <section id="home" className="space-y-10">
        <Artboard />
      </section>

      <section
        id="about"
        className="sm:p-10 sm:pt-0 pt-0 p-2  sm:!px-20 !px-10 h-screen flex flex-col justify-center "
      >
        <div className="max-w-4xl">
          <ScrollAnimatedText />
        </div>
        <div className=" grid sm:grid-cols-2 gap-4 py-20">
          <h1 className="text-foreground">WHAT I CAN DO</h1>
          <TextGenerateEffect
            words={WHAT_CAN_I_DO}
            className="text-base text-foreground"
            filter={true}
            duration={0.2}
          />
        </div>
      </section>
      <section
        id="work"
        className="sm:p-10 sm:pt-0 pt-0 p-2  sm:!px-20 !px-10 py-20 h-screen flex-col flex justify-center items-center"
      >
        <BentoGrid items={experience}></BentoGrid>
      </section>
      <section
        id="contact"
        className="sm:p-10 sm:pt-0 pt-0 p-2  sm:!px-20 !px-10 py-20 h-screen  place-content-center"
      >
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-4">
              GET IN TOUCH
            </h1>
            <p className="text-muted-foreground mb-6">
              Let&apos;s work together to bring your ideas to life. I&apos;m
              always excited to take on new challenges and create something
              amazing.
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                EMAIL
              </h3>
              <div className="text-foreground font-medium">
                <HoverFlipText primary="SHUBHAMEDU.01@GMAIL.COM" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                SOCIALS
              </h3>
              <div className="flex gap-2">
                {["LINKEDIN", "INSTAGRAM", "MEDIUM"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-foreground py-2 text-sm font-medium"
                  >
                    <HoverFlipText primary={social} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
