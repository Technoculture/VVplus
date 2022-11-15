import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { onBoardUiStore } from "../../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";

const CardNavigationButton = () => {
  const { isJayantiCardOpen, openJayantiCard, openYamunaCard } =
    onBoardUiStore();
  const cardNavigator = () => {
    if (isJayantiCardOpen === false) {
      openJayantiCard;
    } else {
      openYamunaCard;
    }
  };
  return (
    <div
      className={`w-8 h-8 mt-[5vh]  rounded-full flex items-center md:hidden justify-center text-xl cursor-pointer text-white bg-sky-600 `}
      onClick={cardNavigator}
    >
      <AiOutlineArrowRight />
    </div>
  );
};

export default CardNavigationButton;
