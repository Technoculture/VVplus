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
          z-[100] relative font-Roboto flex items-center   justify-center py-[10px] px-[10px]    w-[80vw] mx-auto sm:w-[250px] ease-in-out duration-500 lg:w-[28.6vw] md:w-[26vw] h-[74vh] rounded-[20px]  
          ${
            !isWelcomePanelActive
              ? "items-center justify-center bg-gray-200 "
              : "bg-gradient-to-b  from-red-50/[0.98] to-rose-100/[0.48]  backdrop-blur-[10px]"
          }
        ${
          isToggled === true && isWelcomePanelActive
            ? "lg:translate-x-[63.6vw] md:translate-x-[62vw] !h-fit    "
            : ""
        }
        ${
          isWelcomePanelActive && window.innerWidth > 766 && isToggled === false
            ? "translate-x-[34vw] !h-fit   "
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
            <div className="flex flex-col gap-[10px] items-center ">
              <img
                className=" rounded-[10px] border-2 border-amber-100  w-[100%]  h-[26vh] lg:h-[28vh]  "
                src=" https://assets.vvplus.cc/draco/file_thumbnails/railing_sf_steel.png"
                alt=""
              />
              <SelectionPanel />
            </div>
          )}
        </div>
      </div>
      {isWelcomePanelActive === true && isToggled === false ? (
        <FloorSlider />
      ) : (
        ""
      )}
    </>
  );
};

export default Welcome;
