import React from "react";
import { onBoardUiStore } from "../../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";
const JayantiCard = () => {
  const {
    openJayantiCard,
    isJayantiCardOpen,
    isEuropaCardOpen,
    isYamunaCardOpen,
  } = onBoardUiStore();
  return (
    <div
      className={`h-[364px] md:static md:shadow-md   fixed  md:mt-0 mt-[190px]  w-[220px] border-[1px] items-center py-[10px] bg-white shadow-xl
  flex flex-col border-zinc-300 rounded-[15px]
  ${
    isJayantiCardOpen === true
      ? "mt-0 z-20 md:animate-none animate-fade-card "
      : "  "
  }
  ${isEuropaCardOpen === true ? "md:h-[364px] h-[320px] mt-[160px]" : ""}
  ${isYamunaCardOpen === true ? "md:h-[364px] h-[340px]  mt-[94px]" : ""}
  `}
    >
      <div
        className={`w-[190px] h-[300px] border-[1px] bg-zinc-300   border-zinc-300 rounded-xl
     
      `}
      ></div>
      <div
        className={`flex justify-between mt-4 cursor-pointer  select-none w-44
        ${isJayantiCardOpen === false ? "mt-2" : ""}
        `}
        onClick={openJayantiCard}
      >
        <h2 className="font-Bodoni select-none text-xl font-light leading-[18px] ">
          Jyanti
        </h2>
        <p className="font-Roboto text-[15px] select-none font-light leading-[18px]">
          4 bhk
        </p>
        <p className="font-Roboto text-[15px] select-none font-thin leading-[18px]">
          4 L
        </p>
      </div>
    </div>
  );
};

export default JayantiCard;
