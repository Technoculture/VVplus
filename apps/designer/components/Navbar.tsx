import React, { useState } from "react";

const Navbar = () => {
  const [myNavbar, setMyNavBar] = useState(false);
  const changeNavbar = () => {
    setMyNavBar(true);
  };

  return (
    <div className="flex items-center h-32 ">
      <nav
        className="container flex  items-center w-48  justify-center  h-16 text-lg m-auto mt-6 bg-gray-300 rounded-xl  gap-12 p-2.5"
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
            <button className="flex justify-center w-20 h-12 p-2 text-xl text-center bg-gray-400 rounded-xl">
              -
            </button>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default Navbar;
