import React from "react";
import HandleToggle from "./Buttons/HandleToggle";
import NewButton from "./Buttons/NewButton";
import SaveButton from "./Buttons/SaveButton";

const Navbar = ({
  myNavbar,
  toggleButton,
  myToggleButton,
  newButtonClick,
  clickSaveButton,
}: {
  myNavbar: boolean;
  toggleButton: boolean;
  myToggleButton: CallableFunction;
  newButtonClick: CallableFunction;
  clickSaveButton: CallableFunction;
}) => {
  return (
    <div className="flex items-center h-32 ">
      <nav className="container z-20 flex items-center justify-center h-16 gap-6 p-5 m-auto mt-6 font-sans text-lg duration-500 bg-gray-300 w-fit rounded-[20px]">
        <h1 className="text-[21px]">
          VV + <span className="hidden md:inline"> | Designer</span>
        </h1>

        <div
          className={`flex gap-2 md:hidden
          ${myNavbar === true ? "hidden" : ""}`}
        >
          <NewButton newButtonClick={newButtonClick} />
          <SaveButton clickSaveButton={clickSaveButton} />
        </div>

        {myNavbar === true ? (
          <div className="flex gap-2 ">
            <NewButton newButtonClick={newButtonClick} />
            <SaveButton clickSaveButton={clickSaveButton} />
            <HandleToggle
              toggleButton={toggleButton}
              myToggleButton={myToggleButton}
            />
          </div>
        ) : null}
      </nav>
    </div>
  );
};

export default Navbar;
