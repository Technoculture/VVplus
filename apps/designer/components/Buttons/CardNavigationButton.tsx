import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { onBoardUiStore } from "../../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";

const CardNavigationButton = () => {
  const {
    isEuropaCardOpen,
    isJayantiCardOpen,
    isYamunaCardOpen,
    openJayantiCard,
    openEuropaCard,
    openYamunaCard,
  } = onBoardUiStore();
  const cardNavigator = () => {
    if (isJayantiCardOpen === false) {
      openJayantiCard;
    } else {
      openYamunaCard;
    }
  };
  return (
    <div
      className={`w-10 h-10 mt-[10vh]  rounded-full flex items-center md:hidden justify-center text-xl cursor-pointer text-white bg-sky-600 `}
      onClick={cardNavigator}
    >
      <AiOutlineArrowRight />
    </div>
  );
};

export default CardNavigationButton;
