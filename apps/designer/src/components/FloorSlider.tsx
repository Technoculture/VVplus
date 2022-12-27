import React, { useState } from "react";
import { floorSelector, selector } from "./elements/selector";

const elements = [
  {
    id: "outdoor",
    value: "Outdoor",
    style:
      "w-[25%] flex items-center justify-center cursor-pointer rounded-l-[20px]  bg-white bg-opacity-40 text-black -ml-[1px] h-8 z-[100] bg-bray-200",
  },
  {
    id: "first-floor",
    value: "Floor 1",
    style:
      "w-[25%] flex items-center justify-center cursor-pointer   bg-white bg-opacity-40 text-black -ml-[1px] h-8 z-[100] bg-bray-200",
  },
  {
    id: "second-floor",
    value: "Floor 2",
    style:
      "w-[25%] flex items-center justify-center cursor-pointer   bg-white bg-opacity-40 text-black -ml-[1px] h-8 z-[100] bg-bray-200",
  },
  {
    id: "roof",
    value: "Roof",
    style:
      "w-[25%] flex items-center justify-center cursor-pointer rounded-r-[20px]  bg-white bg-opacity-40 text-black  h-8 z-[100] bg-bray-200",
  },
];

const FloorSlider = () => {
  const [activeId, setActiveId] = useState(null);
  const handleClick = (id) => {
    const activeElement = elements.find((item) => item.id === id);
    activeElement && setActiveId(id);
    floorSelector(id);
  };
  return (
    <div className="text-white text-sm select-none relative flex items-center justify-center  mt-2  w-[380px] font-[Roboto]">
      <div className=" border-[1px] border-amber-100 items-center flex rounded-[20px] w-[380px]  h-8 z-[100] bg-black bg-opacity-40">
        {elements.map(({ id, value, style }) => (
          <div
            key={id}
            className={`${
              id === activeId
                ? style
                : "w-[25%] flex justify-center items-center cursor-pointer"
            }`}
            onClick={() => {
              handleClick(id);
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorSlider;
