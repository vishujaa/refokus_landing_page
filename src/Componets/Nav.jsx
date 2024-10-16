import React from "react";
import Button from "./Button";

function Nav() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b border-zinc-600 px-4">
      <div className="flex items-center">
        <img
          className="h-8"
          src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.webp"
          alt="Logo"
        />
        <h4 className="mx-4 text-lg font-semibold">Vishall</h4>
        <div className="hidden md:flex gap-6 ml-8">
          {["Home", "Work", "Culture", "", "News"].map((e, index) => (
            <a key={index} className="text-semibold flex items-center gap-1.5" href="#">
              {e.length === 0 ? (
                <span className="w-[2px] h-7 bg-zinc-500"></span>
              ) : null}
              {index === 1 ? (
                <span
                  style={{ boxShadow: "0 0 0.25em #00FF19" }}
                  className="h-1 w-1 bg-green-500 rounded inline-block"
                ></span>
              ) : null}
              {e}
            </a>
          ))}
        </div>
      </div>
      <Button />
      {/* Optional Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        {/* Add a button or icon here for mobile menu */}
        <button className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Nav;
