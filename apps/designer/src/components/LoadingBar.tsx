import React from "react";

const LoadingBar = () => {
  return (
    <div
      className={`  select-none font-Roboto text-[#4A4A4A] gap-[10px]  md:flex hidden bottom-0 items-center justify-center relative left-[50%] translate-x-[-50%] 
     
    
    `}
    >
      <h1>Loading Model...</h1>
      <div className="w-[200px] bg-[#D9D9D9] rounded-full h-2.5 ">
        <div className="bg-[#008092] h-2.5 rounded-[10px] w-[45%]"></div>
      </div>
    </div>
  );
};

export default LoadingBar;
