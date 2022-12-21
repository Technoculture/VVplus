import React, { useState } from "react";
import { floorSelector } from "./elements/selector";

const FloorSlider = () => {
  const selectedStyle = "bg-white bg-opacity-40 text-black -ml-[1px] h-8 rounded-l-2xl z-[100] bg-bray-200"
  const handleClick = (event) => {
    const floorId = event.currentTarget.id
    console.log(floorId);  
    floorSelector(floorId)  
  }
  return (
    <div className="text-white text-sm select-none   relative flex items-center justify-center  mt-2  w-[380px] font-[Roboto]">
      <div className=" border-[1px] border-amber-100 items-center flex rounded-[20px] w-[380px]  h-8 z-[100] bg-black bg-opacity-40">
        <div id="outdoor" className="w-[25%] flex items-center justify-center cursor-pointer bg-white bg-opacity-40 text-black -ml-[1px] h-8 rounded-l-2xl z-[100] bg-bray-200" onClick={handleClick}>
          Outdoor
        </div>
        <div id="first-floor" className="w-[25%] flex justify-center items-center cursor-pointer" onClick={handleClick}>
          Floor 1
        </div>
        <div id="second-floor" className="w-[25%] flex justify-center items-center cursor-pointer" onClick={handleClick}>
          Floor 2
        </div>
        <div id="roof" className="w-[25%] flex justify-center items-center cursor-pointer" onClick={handleClick}>
          Roof
        </div>
      </div>
    </div>
  );
};

export default FloorSlider;
