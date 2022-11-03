import ToggleableMenuButton from "./Buttons/ToggleableMenuButton";
import MenuButton from "./Buttons/MenuButton";
interface NavbarProps {
  isNavbarOpen: boolean;
  isToggled: boolean;
  handleClickForToggle: () => void;
  handleClickOnNewButton: () => void;
  handleClickOnSaveButton: () => void;
}
import React from "react";

const Navbar = ({
  isNavbarOpen,
  isToggled,
  handleClickForToggle,
  handleClickOnNewButton,
  handleClickOnSaveButton,
}: NavbarProps) => {
  return (
    <nav
      className={`font-RobotoSerif z-[100] select-none flex justify-center left-[50%] translate-x-[-50%]    p-[10px] text-[21px] font-[400] items-center gap-[10px] my-[20px] h-[65px] w-[222px] rounded-[20px] shadow-[0_4px_40px_rgba(74,74,74,0.05)] bg-gradient-to-r  relative bg-white border-[1px] border-[#F7F7F7] 
      ${isNavbarOpen === true ? "!w-fit p-[10px_0px_10px_10px]" : ""}
      `}
    >
      <div>
        <h1 className="px-4 md:px-6">
          VV + <span className="hidden md:inline-block"> Designer</span>{" "}
        </h1>
      </div>

      {isNavbarOpen === true && window.innerWidth > 768 ? (
        <div className="flex duration-500 transition-all ease-in-out gap-2 text-[20px] leading-6 ">
          <MenuButton text={"New"} onClick={handleClickOnNewButton} />
          <MenuButton text={"Save"} onClick={handleClickOnSaveButton} />
          <ToggleableMenuButton
            isToggled={isToggled}
            onClick={handleClickForToggle}
          />
        </div>
      ) : (
        <div
          className={`flex  gap-2 md:hidden mr-[10px]
                  ${isNavbarOpen === true ? "" : "hidden"}`}
        >
          <MenuButton text={"New"} onClick={handleClickOnNewButton} />
          <MenuButton text={"Save"} onClick={handleClickOnSaveButton} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
