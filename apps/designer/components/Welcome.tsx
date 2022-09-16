import React from "react";

const Welcome = ({ isActive, welcomeClick, toggleButton }: any) => {
  return window.innerWidth < 766 && isActive === true ? (
    <div className=" scroller z-30 flex  overflow-x-scroll  overflow-y-hidden md:hidden whitespace-nowrap px-6  gap-8 mt-[50vh]">
      <div className="z-20 inline-block h-36  bg-white rounded-lg md:hidden  sm:min-w-[300px] min-w-[250px]"></div>
      <div className="z-20 inline-block h-36  bg-white rounded-lg md-hidden sm:min-w-[300px] min-w-[250px]"></div>
      <div className="z-20 inline-block h-36  bg-white rounded-lg md-hidden sm:min-w-[300px] min-w-[250px]"></div>
      <div className="z-20 inline-block h-36  bg-white rounded-lg md-hidden sm:min-w-[300px] min-w-[250px]"></div>
    </div>
  ) : (
    <div
      className={`
          z-[100] relative flex items-center justify-center w-64  h-[390px] pb-5 mx-auto sm:mt-0 mt-12 duration-500 ease-in-out bg-gray-100 lg:w-96 md:h-[70vh]  sm:w-80 rounded-xl  
        
        ${toggleButton === true ? " mr-[32vw] " : ""}

        
       
        `}
      style={{
        transform:
          isActive && window.innerWidth > 766 ? "translate(30vw, 0)" : "",
        width: toggleButton === true && isActive ? "10px" : "",
        maxHeight: toggleButton === true && isActive ? "113px" : "",
        marginTop: toggleButton === true && isActive ? "20%" : "",
        backgroundColor: toggleButton === true && isActive ? "gray" : "white",
      }}
    >
      <h2
        className="cursor-pointer"
        onClick={() => {
          welcomeClick();
        }}
      >
        {isActive === false ? "Welcome " : ""}
      </h2>
    </div>
  );
};

export default Welcome;
