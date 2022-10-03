import React from "react";
import HandleToggle from "./Buttons/HandleToggle";
import NewButton from "./Buttons/NewButton";
import SaveButton from "./Buttons/SaveButton";

const Navbar = ({
  isNavbarExpand,
  isToggled,
  handleClickForToggle,
  handleClickOnNewButton,
  handleClickOnSaveButton,
}: {
  isNavbarExpand: boolean;
  isToggled: boolean;
  handleClickForToggle: CallableFunction;
  handleClickOnNewButton: CallableFunction;
  handleClickOnSaveButton: CallableFunction;
}) => {
  return (
    <div className="flex items-center h-24 ">
      <nav
        className={`container z-20 flex select-none items-center justify-center h-16  shadow-[0_4px_40px_rgba(74,74,74,0.25)]  m-auto my-[15px]  text-lg duration-500 bg-[#C1C1C1] w-fit rounded-[20px]
      `}
      >
        <div className="text-[21px] flex gap-3 leading-[24px] font-RobotoSerif font-[400] md:px-10 px-8">
          VV+
          <div className="items-center justify-center hidden gap-3 md:flex">
            <div className="h-6 w-[1.6px] bg-black"></div>
            Designer
          </div>
        </div>

        {isNavbarExpand === true && window.innerWidth > 768 ? (
          <div className="flex gap-2 text-[20px] leading-6 ">
            <NewButton handleClickOnNewButton={handleClickOnNewButton} />
            <SaveButton handleClickOnSaveButton={handleClickOnSaveButton} />
            <HandleToggle
              isToggled={isToggled}
              handleClickForToggle={handleClickForToggle}
            />
          </div>
        ) : (
          <div
            className={`flex  gap-2 md:hidden
          ${isNavbarExpand === true ? "" : "hidden"}`}
          >
            <NewButton handleClickOnNewButton={handleClickOnNewButton} />
            <SaveButton handleClickOnSaveButton={handleClickOnSaveButton} />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
