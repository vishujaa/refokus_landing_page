import React from 'react';
import Stripe from './Stripe';

function Stripes() {
  const data = [
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg", Number: 1 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg", Number: 2 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg", Number: 48 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg", Number: 11 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg", Number: 2 },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg", Number: 11 }
  ];

  return (
    <>
      <div className='flex items-center justify-between bg-zinc-700 mt-12 sm:mt-20 lg:mt-1'>
        {data.map((elem, index) => (
          <Stripe key={index} data={elem} />
        ))}
      </div>
    </>
  );
}

export default Stripes;
