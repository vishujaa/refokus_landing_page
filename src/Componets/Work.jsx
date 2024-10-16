import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setimages] = useState([
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHdlYnNpdGV8ZW58MHx8fHwxNjc2NzMxOTg0&ixlib=rb-4.0.3&q=80&w=400", // Website design 1
      top: "47%",
      left: "50%",
      isActive: false,
    },
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHdlYnNpdGV8ZW58MHx8fHwxNjc2NzMxOTg0&ixlib=rb-4.0.3&q=80&w=400", // Website design 2
      top: "40%",
      left: "50%",
      isActive: false,  
    },
    {
      img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdlYnNpdGV8ZW58MHx8fHwxNjc2NzMxOTg0&ixlib=rb-4.0.3&q=80&w=400", // Website design 3
      top: "40%",
      left: "55%",
      isActive: false,
    },
    {
      img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHdlYnNpdGV8ZW58MHx8fHwxNjc2NzMxOTg0&ixlib=rb-4.0.3&q=80&w=400", // Website design 4
      top: "44%",
      left: "49%",
      isActive: false,
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHdlYnNpdGV8ZW58MHx8fHwxNjc2NzMxOTg0&ixlib=rb-4.0.3&q=80&w=400", // Website design 5
      top: "44%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  function imagesshwow(arry) {
    setimages((prev) =>
      prev.map((items, index) =>
        arry.indexOf(index) === -1
          ? { ...items, isActive: false }
          : { ...items, isActive: true }
      )
    );
  }

  scrollYProgress.on("change", (data) => {
    switch (Math.floor(data * 100)) {
      case 0:
        imagesshwow([]);
        break;
      case 1:
        imagesshwow([0]);

        break;
      case 3:
        imagesshwow([0, 1]);

        break;
      case 4:
        imagesshwow([0, 1, 2]);

        break;
      case 5:
        imagesshwow([0, 1, 2, 3]);

        break;
      case 6:
        imagesshwow([0, 1, 2, 3, 4]);

        break;
    }   
  });

  return (
<div className="w-full">
  <div className="max-w-screen-xl mx-auto relative">
    <h1 className="text-[25vw] mt-24 sm:mt-[15%] md:mt-24 lg:mt-12 xl:mt-20 2xl:mt-24 leading-none text-center bg-gradient-to-b from-zinc-100 to-green-700 bg-clip-text text-transparent tracking-tight font-medium select-none py-[3vw]">
      <div className="absolute h-full w-full">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                className=" w-40 sm:w-44 md:w-32 lg:w-48 xl:w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                style={{ top: elem.top, left: elem.left , 
                width : "20vw",  maxWidth:"150px"
                }}
                src={elem.img}
              />
            )
        )}
      </div>
      Work
    </h1>
  </div>
</div>

  );
}

export default Work;
