import React from "react";

const SelectionBar = () => {
  return (
    <div className=" select-none font-Roboto text-black gap-[10px]  absolute md:flex hidden items-center justify-center bottom-10 left-[50%] translate-x-[-50%] ">
      <div className="w-fit gap-10  font-Roboto relative h-[1px] flex justify-between items-center bg-white">
        <div className="flex w-[120px] flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 text-base font-normal bg-pink-50 border-[1px] border-[#FFCC49] rounded-full ">
            1
          </div>
          <p className="text-xs italic">Choose a Base model</p>
        </div>
        <div className="flex w-[120px] flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 text-base font-thin rounded-full bg-pink-50 ">
            2
          </div>
          <p className="text-xs italic">Design your House</p>
        </div>
        <div className="flex w-[120px] flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 text-base font-thin rounded-full bg-pink-50">
            3
          </div>
          <p className="text-xs italic">Save and Share</p>
        </div>
        <div className="flex w-[120px] flex-col items-center">
          <div className="flex items-center justify-center w-8 h-8 text-base font-thin rounded-full bg-pink-50 ">
            4
          </div>
          <p className="text-xs italic">Book</p>
        </div>
      </div>
    </div>
  );
};

export default SelectionBar;
