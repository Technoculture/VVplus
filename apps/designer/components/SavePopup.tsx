import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
const SavePopup = ({
  closeSaveButton,
  openPopup,
}: {
  closeSaveButton: CallableFunction;
  openPopup: boolean;
}) => {
  const variants = {
    initial: { display: "none", opacity: 0 },
    animate: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.2,
      },
    },
  };
  useEffect(() => {
    document.addEventListener("mousedown", () => {
      closeSaveButton();
    });
  });
  return (
    <motion.div
      className={` font-sans fixed top-0 left-0  flex items-center justify-center w-full ease-linear h-screen backdrop-blur-[8px] backdrop-brightness-[0.5] z-[100] bg-gray
    `}
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex duration-700 bg-[#DADADA] rounded-lg w-72 md:w-96 h-96"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <ImCross
          className="static pt-px cursor-pointer md:ml-[360px] mt-2 ml-[260px]"
          onClick={() => {
            closeSaveButton();
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SavePopup;
