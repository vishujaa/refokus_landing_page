import React from "react";

function Footer() {
  return (
    <div className="w-full   bg-zinc-800 text-zinc-300 mb-[30vh] lg:mb-0">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row py-10 gap-10 lg:gap-32">
        <div className="flex-1  px-20 lg:px-0">
          <h1 className="text-[5rem] lg:text-[9rem] font-medium leading-none">refokus.</h1>
          <h2 className="text-sm w-fit px-2 py-1 rounded-xl capitalize">That's the work of Vishal!!</h2>
        </div>

        {/* Combined Follow Us and Resources Section */}
        <div className="flex-1 flex  px-20 lg:px-0 lg:flex-row gap-10 lg:gap-32">
          <div className="flex-1 flex flex-col">
            <h4 className="mb-5 text-lg font-semibold">Follow Us</h4>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((elem, index) => (
              <a key={index} className="block mt-3 text-zinc-400 hover:text-white capitalize">{elem}</a>
            ))}
          </div>

          <div className="flex-1 flex flex-col">
            <h4 className="mb-5 text-lg font-semibold">Resources</h4>
            {["Blog", "Support", "Contact"].map((elem, index) => (
              <a key={index} className="block mt-3 text-zinc-400 hover:text-white capitalize">{elem}</a>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="flex-1">
          <p className="text-zinc-400 justify-center lg:justify-center px-5 lg:px-0 text-justify mb-4">
            We are committed to delivering the best solutions tailored to your needs. Our team is here to help you navigate through your projects with confidence and expertise.
          </p>
          <img 
            className="mt-4 w-full max-w-[80%] mx-auto" 
            src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" 
            alt="Premium Partner Badge"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
