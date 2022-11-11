import React from "react";
import Card from "./Cards/Card";
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
    <div
      // onClick={() => {
      //   isWelcomePanelActive === true ? handleClickForToggle() : "";
      // }}
      className={`
          z-[100] relative font-Roboto flex items-center justify-center w-[80vw] mx-auto sm:w-[250px] ease-in-out duration-500 md:w-[27vw] h-[74%] rounded-[20px]  
        ${
          isToggled === true && isWelcomePanelActive
            ? "bg-[#A6A6A6] translate-x-[47vw] h-[113px] !w-[10px] mt-[30vh]   "
            : "bg-[#DADADA]   "
        }
        ${
          isWelcomePanelActive && window.innerWidth > 766 && isToggled === false
            ? "translate-x-[32vw] !h-[75%]  "
            : ""
        }
        `}
    >
      <h2 className="cursor-pointer" onClick={handleClickOnWelcome}>
        {isWelcomePanelActive === false ? "Welcome" : <SelectionPanel/>}
      </h2>
    </div>
  );
};

export default Welcome;
