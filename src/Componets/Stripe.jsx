import React from "react";

function Stripe({ data}) {
  return (
    <div className="max-w-72 px-4   border-zinc-100 flex items-center justify-between gap-5 ">
      <img className="color-white " src={data.url} />
      <span className="font-semibold  text-[1vw]   text-zinc-400"> {data.Number} </span>{" "}
    </div>
  );
}

export default Stripe;
