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
    if (!selectedItem) return items;
    setItems([
      selectedItem,
      ...items.filter((item) => item.id !== id).sort((a, b) => a.id - b.id),
    ]);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-50 p-6">
      <LayoutGroup>
        <div className="grid grid-cols-4 grid-rows-2 gap-1 w-full max-w-6xl">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              transition={{
                layout: { duration: 0.9, type: "spring", bounce: 0.25 },
              }}
              onClick={() => handleClick(item.id)}
              className={`border bg-white rounded-xl  flex flex-col justify-center items-center cursor-pointer overflow-hidden transition-colors hover:bg-black hover:text-white 
                ${
                  index === 0
                    ? "col-span-2 row-span-2 hover:bg-white hover:!text-black"
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
                  className="text-gray-500 text-center max-w-sm"
                >
                  {item.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
};

export default Page;
