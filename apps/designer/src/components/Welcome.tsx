// import React, { useState } from "react";
// import Accordion from "./Accordion";
// import Card from "./Cards/Card";
// import FloorToggleTab from "./FloorToggleTab";
// import { motion, useAnimation, Variant } from "framer-motion";

// interface WelcomePanelProps {
//   isWelcomePanelActive: boolean;
//   handleClickOnWelcome: () => void;
//   isToggled: boolean;
//   handleClickForToggle: () => void;
// }
// //Todo : Animation when open the welcome component

// const Welcome = ({
//   isWelcomePanelActive,
//   handleClickOnWelcome,
//   isToggled,
//   handleClickForToggle,
// }: WelcomePanelProps) => {
//   return window.innerWidth < 768 && isWelcomePanelActive === true ? (
//     <div className="z-30 flex gap-2 px-6 mt-[45vh] box-border overflow-x-scroll overflow-y-hidden font-sans snap-mandatory scroll-smooth snap-x md:hidden whitespace-nowrap">
//       <Card />
//       <Card />
//       <Card />
//       <Card />
//     </div>
//   ) : (
//     <>
//       <motion.div
//         animate={{
//           x:
//             isWelcomePanelActive === true
//               ? 500
//               : isToggled === true && isWelcomePanelActive
//               ? 800
//               : 0,
//           transition: {
//             duration: 500,
//             ease: "easeInOut", // easing function
//           },
//         }}
//         className={`
//           z-[100] relative font-Roboto flex items-center flex-col   justify-center   w-[80vw] mx-auto sm:w-[250px] ease-in-out duration-500 md:w-[27vw] h-[76vh]  rounded-[20px]
//           ${
//             !isWelcomePanelActive
//               ? "items-center justify-center bg-gray-200"
//               : ""
//           }

//         `}
//       >
//         <div
//           className={`
//       ${isWelcomePanelActive === false ? "cursor-pointer" : ""}
//       `}
//           onClick={handleClickOnWelcome}
//         >
//           {isWelcomePanelActive === false ? (
//             "Welcome"
//           ) : (
//             <div
//               className={`flex py-[10px] select-none items-center justify-center  rounded-[20px] backdrop-blur-[10px] bg-gradient-to-b  from-red-50/[0.98] to-rose-100/[0.48]  flex-col gap-[10px] px-[10px]
//             `}
//             >
//               <img
//                 className=" rounded-[10px] border-[1px] border-amber-100  w-[380px]  h-[200px]  "
//                 src=" https://assets.vvplus.cc/draco/file_thumbnails/railing_sf_steel.png"
//                 alt=""
//               />
//               <Accordion />
//             </div>
//           )}
//         </div>
//         {isWelcomePanelActive === true ? <FloorToggleTab /> : ""}
//       </motion.div>
//     </>
//   );
// };

// export default Welcome;
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
  const { scrollXProgress } = useScroll();

  const x = useTransform(scrollXProgress, [0, 1], [0, -500]);
  const animateVariants = {
    whenWelcomePanelActive: { x: 500 },
    whenToggleButtonisNegative: { x: 800 },
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
      {/* <AnimatePresence initial={false}> */}

      <motion.div
        animate={{
          x:
            isWelcomePanelActive === true && isToggled
              ? "62.5vw"
              : !isToggled && isWelcomePanelActive
              ? "33vw"
              : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`
          z-[100] absolute translate-y-[-50%] top-2 left-0 right-0 font-Roboto flex items-center flex-col m-auto  justify-center   w-[80vw]  sm:w-[250px] ease-in-out duration-500 md:w-[27vw] h-[76vh]  rounded-[20px]  
          ${
            !isWelcomePanelActive
              ? "items-center justify-center bg-gray-200"
              : ""
          }       
        `}
      >
        <div
          className={`
      ${isWelcomePanelActive === false ? "cursor-pointer" : ""}
      `}
          onClick={handleClickOnWelcome}
        >
          {isWelcomePanelActive === false ? (
            "Welcome"
          ) : (
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
          )}
        </div>
        {isWelcomePanelActive === true ? <FloorToggleTab /> : ""}
      </motion.div>
      {/* </AnimatePresence> */}
    </>
  );
};

export default Welcome;
