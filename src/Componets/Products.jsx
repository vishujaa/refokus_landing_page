import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const websites = [
    {
      title: "Tech Innovators",
      description:
        "A leading platform for cutting-edge technology news and innovations.",
      live: true,
      case: false,
    },
    {
      title: "Creative Minds",
      description:
        "Showcasing creative portfolios from top artists and designers worldwide.",
      live: true,
      case: false,
    },
    {
      title: "Eco Solutions",
      description:
        "A website focused on sustainable and eco-friendly solutions for businesses.",
      live: true,
      case: true,
    },
    {
      title: "We made ads",
      description:
       "Find exclusive deals on cutting-edge technology to elevate your home office experience",
      live: true,
      case: false,
    },
    {
      title: "Travel Explorer",
      description:
        "A travel blog sharing the best destinations, tips, and guides for adventurers.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  // Function to update position
  const mover = (val) => {
    setPos(val);
  };

  return (
    <>
      <div className="mt-32 relative">
        {websites.map((elem, index) => (
          <Product data={elem} mover={mover} index={index} key={index} />
        ))}

        {/* Container for motion elements */}
        <div className="absolute w-full flex-wrap h-full top-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ y: pos * 23 + "rem", x: "-50%" }} // Initialize y position with rem
            animate={{ y: `${pos * 23}rem` }} // Move based on pos state
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
            className="window hidden lg:block bg-white sm:gap-4 lg:w-[32rem] 2xl:h-[23rem] absolute left-[50%] overflow-hidden"
          >
            <motion.div
              animate={{ y: `${-pos * 23}rem` }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video
                className="w-full h-full object-cover bg-red-500"
                autoPlay
                loop
                muted
                playsInline
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-43.webm"
              />
            </motion.div>
            <motion.div
              animate={{ y: `${-pos * 23}rem` }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
              className="w-full h-full bg-green-500"
            >
              <video
                className="w-full h-full object-cover bg-red-50"
                autoPlay
                loop
                muted
                playsInline
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm"
              />
            </motion.div>
            <motion.div
              animate={{ y: `${-pos * 23}rem` }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
              className="w-full h-full bg-yellow-500"
            >
              <video
                className="w-full h-full object-cover bg-red-50"
                autoPlay
                loop
                muted
                playsInline
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/singularity-43.webm"
              />
            </motion.div>
            <motion.div
              animate={{ y: `${-pos * 23}rem` }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
              className="w-full h-full bg-purple-700"
            >
              <video
                className="w-full h-full object-cover bg-red-50"
                autoPlay
                loop
                muted
                playsInline
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-43.webm"
              />
            </motion.div>
            <motion.div
              animate={{ y: `${-pos * 23}rem` }}
              transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.5 }}
              className="w-full h-full bg-red-700"
            >
              <video
                className="w-full h-full object-cover bg-red-50"
                autoPlay
                loop
                muted
                playsInline
                src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Products;
