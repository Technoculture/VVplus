import React from "react";
import Accordion from "./Accordion";
import Card from "./Cards/Card";
import FloorToggleTab from "./FloorToggleTab";
import {
  motion,
  AnimatePresence,
  useTransform,
  useScroll,
  MotionValue,
} from "framer-motion";

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
  const panelAnimation = {
    key: "box",
    initial: { opacity: 0.7 },
    exit: { transition: { duration: 1 } },
    transition: { duration: 0.3, ease: "easeOut" },
  };
  return window.innerWidth < 768 && isWelcomePanelActive === true ? (
    <div className="z-30 flex gap-2 px-6 mt-[45vh] box-border overflow-x-scroll overflow-y-hidden font-sans snap-mandatory scroll-smooth snap-x md:hidden whitespace-nowrap">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  ) : (
    <>
      <AnimatePresence>
        {isWelcomePanelActive === true && isToggled === true && (
          <motion.div
            {...panelAnimation}
            animate={{
              x: "62.5vw",
              opacity: 1,
            }}
            className={`
            z-[100] absolute font-Roboto flex items-center flex-col   justify-center   w-[80vw]  sm:w-[250px] ease-in-out duration-500 md:w-[27vw] h-[76vh]  rounded-[20px]               
        `}
          >
            <div
              className={`flex py-[10px] select-none items-center justify-center  rounded-[20px] backdrop-blur-[10px] bg-gradient-to-b  from-red-50/[0.98] to-rose-100/[0.48]  flex-col gap-[10px] px-[10px]
            `}
            >
              <img
                className=" rounded-[10px] border-[1px] border-amber-100  w-[380px]  h-[200px]  "
                src=" https://assets.vvplus.cc/draco/file_thumbnails/railing_sf_steel.png"
                alt=""
              />
              <Accordion />
            </div>
            <FloorToggleTab />
          </motion.div>
        )}
        {isWelcomePanelActive === true && isToggled === false && (
          <motion.div
            {...panelAnimation}
            animate={{
              x: "34vw",
              opacity: 1,
            }}
            className={`
            z-[100]  font-Roboto absolute flex items-center flex-col justify-center   w-[80vw]  sm:w-[250px] ease-in-out duration-500 md:w-[27vw] h-[76vh]  rounded-[20px]               
        `}
          >
            <div
              className={`flex py-[10px] select-none items-center justify-center  rounded-[20px] backdrop-blur-[10px] bg-gradient-to-b  from-red-50/[0.98] to-rose-100/[0.48]  flex-col gap-[10px] px-[10px]
            `}
            >
              <img
                className=" rounded-[10px] border-[1px] border-amber-100  w-[380px]  h-[200px]  "
                src=" https://assets.vvplus.cc/draco/file_thumbnails/railing_sf_steel.png"
                alt=""
              />
              <Accordion />
            </div>
            <FloorToggleTab />
          </motion.div>
        )}
        {isWelcomePanelActive === false && (
          <motion.div
            className={`
            z-[100] absolute font-Roboto top-0 left-0 right-0 bottom-0 flex items-center flex-col mx-auto  justify-center   w-[80vw]  sm:w-[250px] ease-in-out duration-500 md:w-[27vw] h-[76vh]  rounded-[20px] 
          ${
            !isWelcomePanelActive
              ? "items-center justify-center bg-gray-200"
              : ""
          }       
        `}
          >
            <div className="cursor-pointer" onClick={handleClickOnWelcome}>
              welcome
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Welcome;
