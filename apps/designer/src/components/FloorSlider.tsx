import React, { useState } from "react";
import { floorSelector } from "./elements/selector";

const elements = [
  { id: "outdoor", value: "Outdoor" },
  { id: "first-floor", value: "Floor 1" },
  { id: "second-floor", value: "Floor 2" },
  { id: "roof", value: "Roof" }
]

const FloorSlider = () => {
  const selectedStyle =
    "bg-white bg-opacity-40 text-black -ml-[1px] h-8 rounded-l-2xl z-[100] bg-bray-200";
  let floorId = "outdoor"
  const handleClick = (event) => {
    floorId = event.currentTarget.id;
    floorSelector(floorId);
  };

  const setSelectedClass = (id) => (floorId === id? "w-[25%] flex items-center justify-center cursor-pointer bg-white bg-opacity-40 text-black -ml-[1px] h-8 rounded-l-2xl z-[100] bg-bray-200" : "w-[25%] flex justify-center items-center cursor-pointer")
  return (
    <div className="text-white text-sm select-none relative flex items-center justify-center  mt-2  w-[380px] font-[Roboto]">
      <div className=" border-[1px] border-amber-100 items-center flex rounded-[20px] w-[380px]  h-8 z-[100] bg-black bg-opacity-40">
        {
          elements.map((e)=>(
            <div id={e.id} className={`${setSelectedClass(e.id)}`} onClick={handleClick}>{e.value}</div>
          ))
        }
      </div>
    </div>
  );
};

export default FloorSlider;

/*
<div
          id="outdoor"
          className="w-[25%] flex items-center justify-center cursor-pointer bg-white bg-opacity-40 text-black -ml-[1px] h-8 rounded-l-2xl z-[100] bg-bray-200"
          onClick={handleClick}
        >
          Outdoor
        </div>
        <div
          id="first-floor"
          className="w-[25%] flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          Floor 1
        </div>
        <div
          id="second-floor"
          className="w-[25%] flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          Floor 2
        </div>
        <div
          id="roof"
          className="w-[25%] flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          Roof
        </div>
*/
