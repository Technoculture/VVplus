import React from "react";

const Navbar = ({
  myNavbar,
  toggleButton,
  myToggleButton,
  newButtonClick,
  clickSaveButton,
}: any) => {
  return (
    <div className="flex items-center h-32 ">
      <nav className="container flex items-center justify-center h-16 gap-12 p-3 m-auto mt-6 text-lg bg-gray-300 w-fit rounded-xl">
        <h1>VV + | Designer</h1>

        {myNavbar === true ? (
          <div className="flex gap-2">
            <button
              className="flex justify-center w-20 h-12 p-2 text-center bg-white rounded-xl"
              onClick={newButtonClick}
            >
              New
            </button>
            <button
              className="flex justify-center w-20 h-12 p-2 text-center bg-white rounded-xl"
              onClick={clickSaveButton}
            >
              Save
            </button>
            <button
              className="flex justify-center w-14 h-12 p-2 text-xl text-center bg-gray-400 rounded-xl"
              onClick={() => {
                myToggleButton(toggleButton);
              }}
            >
              {toggleButton === false ? "-" : "+"}
            </button>
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
