import React from "react";

const FloorSlider = () => {
  return (
    <div className="text-white lg:text-sm text-[11px] px-[10px] relative   mt-2  w-[100%] font-[Roboto]">
      <div className=" border-2 border-amber-100 items-center flex rounded-[20px]  h-[5.5vh] z-[100] bg-black bg-opacity-40">
        <div className=" bg-white bg-opacity-40  text-black w-[25%] -ml-[1px]  h-[5.5vh] flex items-center justify-center rounded-l-2xl z-[100]text-black bg-bray-200">
          Outdoor
        </div>
        <p className="w-[25%] flex justify-center items-center">Floor 1</p>
        <p className="w-[25%] flex justify-center items-center">Floor 2</p>
        <p className="w-[25%] flex justify-center items-center">Floor 3</p>
      </div>
    </div>
  );
};

export default FloorSlider;
