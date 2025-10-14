"use client";
import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

const itemsData = [
  { id: 1, title: "Item 1", description: "Description for item 1" },
  { id: 2, title: "Item 2", description: "Description for item 2" },
  { id: 3, title: "Item 3", description: "Description for item 3" },
  { id: 4, title: "Item 4", description: "Description for item 4" },
  { id: 5, title: "Item 5", description: "Description for item 5" },
];

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleClick = (id: number) => {
    const selectedItem = items.find((item) => item.id === id);
    if (!selectedItem) return;
    setItems([
      selectedItem,
      ...items.filter((item) => item.id !== id).sort((a, b) => a.id - b.id),
    ]);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50 p-4 sm:p-6">
      <div className="rounded-md w-full max-w-6xl p-2 relative overflow-hidden">
        {/* Decorative Borders */}
        <div className="absolute top-0 left-1/2 w-1/2 h-px bg-gradient-to-r from-transparent to-gray-200"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-gray-200 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-gray-200 to-gray-200"></div>

        <LayoutGroup>
          <div
            className="
              grid gap-2
              grid-cols-1
              sm:grid-cols-4
              auto-rows-[minmax(120px,1fr)]
              transition-all
            "
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                transition={{
                  layout: { duration: 0.9, type: "spring", bounce: 0.25 },
                }}
                onClick={() => handleClick(item.id)}
                className={`
                  border bg-white rounded-xl flex flex-col justify-center items-center
                  cursor-pointer overflow-hidden transition-colors
                  hover:bg-black hover:text-white
                  ${
                    index === 0
                      ? "lg:col-span-2 lg:row-span-2 sm:col-span-2 sm:row-span-1 hover:bg-white hover:!text-black"
                      : "aspect-square"
                  }
                `}
              >
                <motion.h2
                  layout="position"
                  className={`font-semibold ${
                    index === 0 ? "text-2xl mb-2" : "text-lg"
                  }`}
                >
                  {item.title}
                </motion.h2>

                {index === 0 && (
                  <motion.p
                    layout="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 text-center max-w-sm text-sm sm:text-base"
                  >
                    {item.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </div>
  );
};

export default Page;
