import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Cards({ width, start, para, hover = false }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover ? "#7443ff" : undefined,
        padding: "5px",
      }}
      className={`p-5 rounded-xl bg-zinc-800 ${width} min-h-[30rem] flex flex-col  justify-between`}
    >
      <div>
        <div className="w-full flex justify-between items-center">
          <h3> Start Your Next Big Project</h3>
          <MdOutlineArrowRightAlt />
        </div>
        <h3 className="text-2xl font-medium mt-10">
        Elevate Your Vision with Our Solutions
        </h3>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-5xl font-semibold leading-none tracking-tight">
              Start Your Next Big Project
            </h1>{" "}
            <button className="rounded-full py-2 px-5 border-zinc-400 border-[1px] mt-5">
              Contact Us Today
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-400 font-medium mt-5">
          Our experts are committed to transforming your concepts into impactful solutions. Partner with us to embark on your journey to success through innovative strategies designed specifically for you
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
