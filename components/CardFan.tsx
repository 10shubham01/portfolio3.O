import { useDisplay } from "@/hooks/display";
import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";
import Image from "next/image";

interface CardFanProps {
  gallery: string[];
  angleStep?: number;
  offset?: number;
  className?: string;
  title?: string;
}

export default function CardFan({
  gallery,
  angleStep = 20,
  offset = 120,
  className = "sm:size-72 size-28 absolute right-0 flex items-end justify-center bottom-0",
  title,
}: CardFanProps) {
  const display = useDisplay();
  const localOffset = display.smAndUp ? offset : offset / 2;
  const center = (gallery.length - 1) / 2;

  return (
    <div className={className}>
      {gallery.map((src, index) => {
        const baseRotate = (index - center) * angleStep;
        const baseX = (index - center) * localOffset;

        return (
          <motion.div
            key={index}
            drag
            initial={{
              rotate: baseRotate,
              x: baseX,
              y: 0,
            }}
            animate={{
              rotate: baseRotate,
              x: baseX,
              y: 0,
            }}
            whileHover={{
              rotate: 0,
              scale: 1.15,
              zIndex: 999,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-0 shadow-2xl "
            dragMomentum={false}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={200}
              height={200}
              className="object-cover rounded-2xl shadow-lg select-none pointer-events-none"
            />
          </motion.div>
        );
      })}
      {title && (
        <h1 className="sm:text-2xl text-xl absolute sm:-bottom-10 -bottom-20 rotate-6">
          {title}
        </h1>
      )}
    </div>
  );
}
