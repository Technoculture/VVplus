import React from "react";

const Welcome = ({ isActive, welcomeClick, toggleButton }: any) => {
  return (
    <div
      className="z-10 flex items-center justify-center w-64 pb-5 mx-auto duration-500 ease-in-out bg-gray-100 lg:w-96 md:h-1/2 sm:w-96 rounded-xl"
      style={{
        height: "553px",
        marginRight: toggleButton === true ? "32vw" : "",
        transform: isActive ? "translate(30vw, 0)" : "",
        width: toggleButton === true && isActive ? "10px" : "",
        maxHeight: toggleButton === true && isActive ? "113px" : "",
        marginTop: toggleButton === true && isActive ? "20%" : "",
        backgroundColor:
          toggleButton === true && isActive ? "lightGray" : "white",
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
