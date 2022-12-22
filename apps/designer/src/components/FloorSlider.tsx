import React, { useState } from "react";
import { floorSelector } from "./elements/selector";

const elements = [
  { id: "outdoor", value: "Outdoor" },
  { id: "first-floor", value: "Floor 1" },
  { id: "second-floor", value: "Floor 2" },
  { id: "roof", value: "Roof" },
];

const FloorSlider = () => {
  const [selectedId, setSelectedId] = useState("outside")
  const handleClick = (id) => {
    setSelectedId(id);
    floorSelector(id);
  };

  const setSelectedClass = (id) =>
    selectedId === id
      ? "w-[25%] flex items-center justify-center cursor-pointer bg-white bg-opacity-40 text-black -ml-[1px] h-8 z-[100] bg-bray-200"
      : "w-[25%] flex justify-center items-center cursor-pointer";
  return (
    <div className="text-white text-sm select-none relative flex items-center justify-center  mt-2  w-[380px] font-[Roboto]">
      <div className=" border-[1px] border-amber-100 items-center flex rounded-[20px] w-[380px]  h-8 z-[100] bg-black bg-opacity-40">
        {elements.map((e) => (
          <div
            id={e.id}
            className={`${setSelectedClass(e.id)}`}
            onClick={()=>handleClick(e.id)}
          >
            {e.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorSlider;