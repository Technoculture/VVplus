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
      <nav className="container z-20 flex items-center justify-center h-16 gap-6 p-4 m-auto mt-6 text-lg duration-500 bg-gray-300 w-fit rounded-xl">
        <h1>
          VV + <span className="hidden md:inline"> | Designer</span>
        </h1>
        <div
          className={`flex gap-2 md:hidden
          ${myNavbar === true ? "hidden" : ""}`}
        >
          <button
            className={`flex justify-center w-20 h-12 p-2 text-center bg-white md:hidden rounded-xl
            ${myNavbar === true ? "hidden" : ""}`}
            onClick={newButtonClick}
          >
            New
          </button>
          <button
            className={`flex justify-center w-20 h-12 p-2 text-center bg-white md:hidden rounded-xl
            ${myNavbar === true ? "hidden" : ""}
            `}
            onClick={clickSaveButton}
          >
            Save
          </button>
        </div>

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
              className={`justify-center hidden h-12 p-2 text-xl text-center bg-white w-14 md:flex rounded-xl
              ${toggleButton === true ? "bg-gray-400" : "bg-white"}`}
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
