import React from "react";
import ToggleableMenuButton from "./Buttons/ToggleableMenuButton";
import MenuButton from "./Buttons/MenuButton";
import FreeCamButton from "./Buttons/FreeCamButton";
import BECamButton from "./Buttons/BECamButton";
import GateCamButton from "./Buttons/GateCamButton";

interface NavbarProps {
  isNavbarOpen: boolean;
  isToggled: boolean;
  handleClickForToggle: () => void;
  handleClickOnNewButton: () => void;
  handleClickOnSaveButton: () => void;
}

//Todo : Animation of navbar  when isNavbarOpen === true & false.
const Navbar = ({
  isNavbarOpen,
  isToggled,
  handleClickForToggle,
  handleClickOnNewButton,
  handleClickOnSaveButton,
}: NavbarProps) => {
  return (
    <div className="flex items-center h-24 ">
      <nav
        className={`container z-20 flex select-none items-center justify-center  transition-all ease-in-out h-16  shadow-[0_4px_40px_rgba(74,74,74,0.25)]  m-auto my-[15px]  text-lg duration-500 bg-[#C1C1C1] w-fit rounded-[20px]
      `}
      >
        <div className="text-[21px] flex gap-3 leading-[24px] font-RobotoSerif font-[400] md:px-10 px-8">
          VV+
          <div className="items-center justify-center hidden gap-3 md:flex">
            <div className="h-6 w-[1.6px] bg-black"></div>
            Designer
          </div>
        </div>

        {isNavbarOpen === true && window.innerWidth > 768 ? (
          <div className="flex duration-500 transition-all ease-in-out gap-2 text-[20px] leading-6 ">
            <MenuButton text={"New"} onClick={handleClickOnNewButton} />
            <MenuButton text={"Save"} onClick={handleClickOnSaveButton} />
            <ToggleableMenuButton
              isToggled={isToggled}
              onClick={handleClickForToggle}
            />
            <FreeCamButton />
            <BECamButton />
            <GateCamButton />
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
    </div>
  );
};

export default Navbar;
