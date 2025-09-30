import Artboard from "@/components/Artboard";
import ScrollAnimatedText from "@/components/ScrollAnimationText";
import React from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { WHAT_CAN_I_DO } from "@/constants";
import { TextGenerateEffect } from "@/components/TextGenratedEffect";

const spacemono = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800"],
  preload: true,
});

const Page = () => {
  return (
    <main className={spacemono.className}>
      <section className="space-y-10">
        <Artboard />
        <div className="sm:p-10 sm:pt-0 pt-0 p-2  sm:!px-20 !px-10  max-w-4xl">
          <ScrollAnimatedText />
        </div>
        <div className="sm:p-10 sm:pt-0 pt-0 p-2  sm:!px-20 !px-10 grid sm:grid-cols-2 gap-4">
          <h1>WHAT I CAN DO</h1>
          <TextGenerateEffect
            words={WHAT_CAN_I_DO}
            className="text-base "
            filter={true}
            duration={0.2}
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
