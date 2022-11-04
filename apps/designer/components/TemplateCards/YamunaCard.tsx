import React from "react";
import { onBoardUiStore } from "../../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";
const YamunaCard = () => {
  const { openYamunaCard, isYamunaCardOpen } = onBoardUiStore();
  return (
    <div
      className={` h-[364px] md:static fixed z-1 bg-white  w-[220px] md:mt-0 mt-[95px] border-[1px]  items-center py-[10px]  flex flex-col border-zinc-300 shadow-[0px_4px_40px_rgba(0_0_0_0.15)] rounded-[15px]
      ${isYamunaCardOpen === true ? "z-100 mt-0" : "z-0"}
      `}
    >
      <div className="w-[190px] h-[300px] border-[1px] bg-zinc-300 border-zinc-300 rounded-[12px]"></div>
      <div
        className="flex justify-between mt-4 cursor-pointer w-44"
        onClick={openYamunaCard}
      >
        <h2 className="font-Bodoni text-xl font-light leading-[18px] ">
          Yamuna
        </h2>
        <p className="font-Roboto text-[15px] font-light leading-[18px]">
          3 bhk
        </p>
        <p className="font-Roboto text-[15px] font-thin leading-[18px]">25 L</p>
      </div>
    </div>
  );
};

export default YamunaCard;
