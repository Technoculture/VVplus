import React from "react";

const FloorSlider = () => {
  return (
    <div className="text-white lg:text-sm text-[11px] relative lg:left-[70.5%] md:left-[72.5%] border-2 border-amber-100 items-center flex rounded-2xl z-[100]  mt-2 bg-black bg-opacity-40 h-[5vh] w-[23vw] lg:w-[27vw] font-[Roboto]">
      <div className=" bg-white bg-opacity-40  text-black w-[25%] -ml-[1px] h-[5vh] flex items-center justify-center rounded-l-2xl z-[100]text-black bg-bray-200">
        Outdoor
      </div>
      <p className="w-[25%] flex justify-center items-center">Floor 1</p>
      <p className="w-[25%] flex justify-center items-center">Floor 2</p>
      <p className="w-[25%] flex justify-center items-center">Floor 3</p>
    </div>
  );
};

export default FloorSlider;
