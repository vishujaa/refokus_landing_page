import { motion } from "framer-motion";
import React from "react";

function Marque({ imageurl,direction }) {
  return (
    <div className="flex w-full overflow-hidden  bg-zinc-400   border-y-[1vw] border-zinc-900 items-center lg:gap-40    whitespace-nowrap">
      <motion.div
        initial={{ x: direction=="left"? "0" :"-100%"}}
        animate={{ x: direction=="left"? "-100%" :"0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex border-zinc-900 items-center     gap-20 lg:gap-40 whitespace-nowrap"
      >
        {imageurl.map((url) => (
          <img key={url} src={url}  alt="brand logo" className="h-8 lg:h-14 w-auto" />
        ))}
        {imageurl.map((url) => (
          < img key={url} src={url} alt="brand logo"className="h-8 lg:h-14 w-auto" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "-0" }}
        animate={{ x: "100%" }}
        transition={{ ease: "linear", duration: 15,repeat: Infinity  }}
        className="flex  border-zinc-900 items-center    gap-40 whitespace-nowrap "
      >
        {imageurl.map((url) => (
          <img key={url} src={url} alt="brand logo" className="h-8 lg:h-14 w-auto" />
        ))}
        {imageurl.map((url) => (
          < img key={url} src={url} alt="brand logo" className="h-8 lg:h-14 w-auto" />
        ))}
      </motion.div>
      
    </div>
  );
}

export default Marque;
