import React from "react";

const Welcome = ({ isActive, welcomeClick, toggleButton }: any) => {
  return window.innerWidth < 766 && isActive === true ? (
    <div className="z-20 flex  px-2 overflow-hidden gap-5 mt-[50vh]">
      <div className="z-20 flex h-32 overflow-hidden bg-white rounded-lg w-60"></div>
      <div className="z-20 flex h-32 overflow-hidden bg-white rounded-lg w-60"></div>
      <div className="z-20 flex h-32 overflow-hidden bg-white rounded-lg w-60"></div>
    </div>
  ) : (
    <div
      className={`
        z-20 flex items-center justify-center w-64  h-96 pb-5 mx-auto duration-500 ease-in-out bg-gray-100 lg:w-96 md:h-[70vh]  sm:w-80 rounded-xl  
        
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
