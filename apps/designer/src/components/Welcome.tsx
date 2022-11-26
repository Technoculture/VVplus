import React from "react";
import Card from "./Cards/Card";
import FloorSlider from "./FloorSlider";
import SelectionPanel from "./SelectionPanel";

interface WelcomePanelProps {
  isWelcomePanelActive: boolean;
  handleClickOnWelcome: () => void;
  isToggled: boolean;
  handleClickForToggle: () => void;
}
//Todo : Animation when open the welcome component

const Welcome = ({
  isWelcomePanelActive,
  handleClickOnWelcome,
  isToggled,
  handleClickForToggle,
}: WelcomePanelProps) => {
  return window.innerWidth < 768 && isWelcomePanelActive === true ? (
    <div className="z-30 flex gap-2 px-6 mt-[45vh] box-border overflow-x-scroll overflow-y-hidden font-sans snap-mandatory scroll-smooth snap-x md:hidden whitespace-nowrap">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  ) : (
    <>
      <div
        // onClick={() => {
        //   isWelcomePanelActive === true ? handleClickForToggle() : "";
        // }}
        className={`
          z-[100] relative font-Roboto flex items-center flex-col   justify-center   w-[80vw] mx-auto sm:w-[250px] ease-in-out duration-500 md:w-[27vw] h-[74vh] rounded-[20px]  
          ${
            !isWelcomePanelActive
              ? "items-center justify-center bg-gray-200 "
              : " "
          }
        ${
          isToggled === true && isWelcomePanelActive
            ? "xl:translate-x-[62.4vw] lg:translate-x-[60vw] md:translate-x-[68.5vw] !h-fit    "
            : ""
        }
        ${
          isWelcomePanelActive && window.innerWidth > 766 && isToggled === false
            ? "xl:translate-x-[31vw] lg:translate-x-[28vw] md:translate-x-[24vw] !h-fit   "
            : ""
        }
        `}
      >
        <div
          className={`cursor-pointer
      
      `}
          onClick={handleClickOnWelcome}
        >
          {isWelcomePanelActive === false ? (
            "Welcome"
          ) : (
            <div className="flex py-[10px] rounded-[20px] backdrop-blur-[10px] bg-gradient-to-b  from-red-50/[0.98] to-rose-100/[0.48]  flex-col gap-[10px] px-[10px] ">
              <img
                className=" rounded-[10px] border-[1px] border-amber-100  w-[380px]  h-[200px]  "
                src=" https://assets.vvplus.cc/draco/file_thumbnails/railing_sf_steel.png"
                alt=""
              />
              <SelectionPanel />
            </div>
          )}
        </div>
        {isWelcomePanelActive === true ? <FloorSlider /> : ""}
      </div>
    </>
  );
};

export default Welcome;
