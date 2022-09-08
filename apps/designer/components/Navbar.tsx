import React from "react";
import { useState } from "react";

const Navbar = ({ myNavbar }: any) => {
  const [toggleButton, setToggleButton] = useState(false);
  const myToggleButton = () => {
    if (toggleButton === false) {
      setToggleButton(true);
    } else if (toggleButton === true) {
      setToggleButton(false);
    }
  };
  return (
    <div className="flex items-center h-32 ">
      <nav
        className="container flex items-center justify-center h-16 gap-12 p-3 m-auto mt-6 text-lg bg-gray-300 w-fit rounded-xl"
        // style={{
        //   width: "479px",
        // }}
      >
        <h1>VV + | Designer</h1>

        {myNavbar === true ? (
          <div className="flex gap-2">
            <button className="flex justify-center w-20 h-12 p-2 text-center bg-white rounded-xl">
              New
            </button>
            <button className="flex justify-center w-20 h-12 p-2 text-center bg-white rounded-xl">
              Save
            </button>
            <button
              className="flex justify-center w-20 h-12 p-2 text-xl text-center bg-gray-400 rounded-xl"
              onClick={myToggleButton}
            >
              {toggleButton === true ? "+" : "-"}
            </button>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
