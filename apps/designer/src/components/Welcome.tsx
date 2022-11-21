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
          z-[100] relative font-Roboto flex   py-2   w-[80vw] mx-auto sm:w-[250px] ease-in-out duration-500 lg:w-[27vw] md:w-[28vw] h-[74vh] rounded-[20px]  
          ${!isWelcomePanelActive ? "items-center justify-center" : ""}
        ${
          isToggled === true && isWelcomePanelActive
            ? "bg-[#A6A6A6] translate-x-[47vw] !h-[113px] !w-[10px] mt-[30vh]   "
            : "bg-white bg-[linear-gradient(169.51deg_rgba(255_245_245_0.85)_0.45%_rgba(255_234_234_0.11)_98.73%)] bg-opacity-40 backdrop-blur-[10px]"
        }
        ${
          isWelcomePanelActive && window.innerWidth > 766 && isToggled === false
            ? "translate-x-[32vw] !h-fit   "
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
          ) : isToggled ? (
            ""
          ) : (
            <div className="flex flex-col items-center ">
              <img
                className=" rounded-2xl border-2 border-white  w-[94%]  h-[26vh] lg:h-[28vh]  "
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
