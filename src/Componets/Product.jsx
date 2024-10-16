  import React from "react";
  import Button from "./Button";

  function Product({data,mover, index}) {
    return (
      <div className="w-full  h-[23rem ]   px-5 py-8 lg:py-20  text-white">
        <div onMouseEnter={()=>{mover(index)}} className="  max-w-screen-xl  mx-auto flex items-center justify-between ">  
          {" "}
          <h1  style={{fontSize:"3vw"}} className="font-bold mb-24  capitalize   flex-wrap"> {data.title}</h1>
          <div className="details w-[50%] lg:w-[20%]">
            {" "}
            <p className="mb-[40%]  lg:justify-center  font-medium text-justify"> {data.description}</p>
            <div className="flex   flex-wrap   items-center gap-2 ">
            {data.live && <Button/>}
            {data.case  && <Button title="Case Study"/>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Product;
