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
          z-[100] relative font-Roboto flex items-center flex-col mt-2.5   justify-center   w-[80vw] mx-auto sm:w-[250px] ease-in-out duration-500 md:w-[27vw] md:h-[76vh] h-[85vh] rounded-[20px]  
          ${
            !isWelcomePanelActive
              ? "items-center justify-center bg-gray-200 md:mt-[-5vh] "
              : " "
          }
        ${
          isToggled === true && isWelcomePanelActive
            ? "xl:translate-x-[70vw] md:w-[54vw] lg:w-[42vw] md:translate-x-[73.5vw]  backdrop-blur-[10px] bg-gradient-to-b  from-red-50/[0.98] to-rose-100/[0.48]   lg:translate-x-[70vw] md:translate-x-[75vw] !h-fit    "
            : ""
        }
        ${
          isWelcomePanelActive && window.innerWidth > 766 && isToggled === false
            ? "xl:translate-x-[34vw] lg:translate-x-[28vw] md:translate-x-[24vw] !h-fit   "
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
            <div
              className={`flex py-[10px] items-center justify-center  rounded-[20px] backdrop-blur-[10px] bg-gradient-to-b  from-red-50/[0.98] to-rose-100/[0.48]  flex-col gap-[10px] px-[10px] 
          
            `}
            >
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
