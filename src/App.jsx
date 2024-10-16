import React from "react";
import Nav from "./Componets/Nav";
import Work from "./Componets/Work";
import Stripes from "./Componets/Stripes";
import Products from "./Componets/Products";
import Maeques from "./Componets/Maeques";
import Card from "./Componets/Card";
import Footer from "./Componets/Footer";
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className='w-full bg-zinc-900 text-white font-["satoshi_variable"] overflow-hidden'>
        <Nav />
        <Work />
        <Stripes />
        <Products />
        <Maeques/>
        <Card/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
