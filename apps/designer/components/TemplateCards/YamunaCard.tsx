import React from "react";
import { onBoardUiStore } from "../../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";
const YamunaCard = () => {
  const {
    openYamunaCard,
    isYamunaCardOpen,
    isJayantiCardOpen,
    isEuropaCardOpen,
  } = onBoardUiStore();
  return (
    <div
      className={` h-[364px]  md:static fixed md:shadow-md bg-white  w-[220px] md:mt-0 border-[1px]  items-center py-[10px]  flex flex-col border-zinc-300 shadow-xl rounded-[15px]
      ${
        isEuropaCardOpen === true
          ? " md:h-[364px] z-10 mt-[95px] h-[340px] "
          : ""
      }
      ${
        isYamunaCardOpen === true
          ? " md:h-[364px] z-20 mt-0 md:animate-none animate-fade-card "
          : ""
      }
      ${isJayantiCardOpen === true ? "md:h-[364px] mt-[160px] h-[340px] " : ""}
      `}
    >
      <div
        className={`w-[190px] h-[300px] border-[1px] bg-zinc-300 border-zinc-300 rounded-[12px]
     
      `}
      ></div>
      <div
        className="flex justify-between mt-4 cursor-pointer select-none w-44"
        onClick={openYamunaCard}
      >
        <h2 className="font-Bodoni select-none text-xl font-light leading-[18px] ">
          Yamuna
        </h2>
        <p className="font-Roboto select-none text-[15px] font-light leading-[18px]">
          3 bhk
        </p>
        <p className="font-Roboto select-none text-[15px] font-thin leading-[18px]">
          25 L
        </p>
      </div>
    </div>
  );
};

export default YamunaCard;
