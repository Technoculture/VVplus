import React from "react";
import ToggleableMenuButton from "./Buttons/ToggleableMenuButton";
import MenuButton from "./Buttons/MenuButton";
import { AiOutlineCamera } from "react-icons/ai";
import { GiGate } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";
// import FreeCamButton from "./Buttons/FreeCamButton";
// import BECamButton from "./Buttons/BECamButton";
// import GateCamButton from "./Buttons/GateCamButton";
import { scene_variable } from "./elements/Scene";
import animateActiveCamera from "./Animations/animateCamera";
import data from "../public/cameraAngles.json";
import CamButton from "./Buttons/CamButton";

interface NavbarProps {
  isNavbarOpen: boolean;
  isToggled: boolean;
  handleClickForToggle: () => void;
  handleClickOnNewButton: () => void;
  handleClickOnSaveButton: () => void;
}

interface Animation {
  r: number;
  a: number;
  b: number;
  t: {
    x: number;
    y: number;
    z: number;
  };
}

//Todo : Animation of navbar  when isNavbarOpen === true & false.
//asset manager to implement the percentage loader and other easy to manage assets
const Navbar = ({
  isNavbarOpen,
  isToggled,
  handleClickForToggle,
  handleClickOnNewButton,
  handleClickOnSaveButton,
}: NavbarProps) => {
  function animation({ r, a, b, t }: Animation) {
    animateActiveCamera(scene_variable, {
      radius: r,
      alpha: a,
      beta: b,
      target: {
        x: t.x,
        y: t.y,
        z: t.z,
      },
    });
  }
  //use eval("Math.PI") to find the value of pi in the js function after fetching from JSON
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
            {/* <FreeCamButton />
            <BECamButton />
            <GateCamButton /> */}
            {data.map((item) => {
              const rf = item.front.target_value.radius;
              const af = item.front.target_value.alpha;
              const bf = item.front.target_value.beta;
              const tf = item.front.target_value.target;
              const rt = item.top.target_value.radius;
              const at = item.top.target_value.alpha;
              const bt = item.top.target_value.beta;
              const tt = item.top.target_value.target;
              return (
                <>
                  <CamButton
                    text={item.front.key}
                    r={rf}
                    a={af}
                    b={bf}
                    t={tf}
                  />
                  <CamButton text={item.top.key} r={rt} a={at} b={bt} t={tt} />
                </>
              );
            })}
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
