import React from "react";

const Welcome = ({ isActive, welcomeClick, toggleButton }: any) => {
  return (
    <div
      className={`flex  items-center justify-center  mx-auto  bg-gray-100 rounded-xl  w-96 pb-5  ease-in-out duration-500 `}
      style={{
        height: "800px",
        marginRight: toggleButton === true ? "540px" : "",
        transform: isActive ? "translate(500px, 0)" : "",
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
