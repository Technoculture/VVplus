import React from "react";
import { onBoardUiStore } from "../../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";
const JayantiCard = () => {
  const { openJayantiCard, isJayantiCardOpen } = onBoardUiStore();
  return (
    <div
      className={`h-[364px] md:static z-[-1] fixed  md:mt-0 mt-[190px]  w-[220px] border-[1px] items-center py-[10px] bg-white box-shadow:0px 4px 40px rgba(0, 0, 0, 0.15)
  flex flex-col border-zinc-300 shadow-[0px_4px_40px_rgba(0_0_0_0.15)] rounded-[15px]
  ${isJayantiCardOpen === true ? "z-100 mt-0" : ""}
  `}
    >
      <div className="w-[190px] h-[300px] border-[1px] bg-zinc-300 border-zinc-300 rounded-xl"></div>
      <div
        className="flex justify-between mt-4 cursor-pointer w-44"
        onClick={openJayantiCard}
      >
        <h2 className="font-Bodoni text-xl font-light leading-[18px] ">
          Jyanti
        </h2>
        <p className="font-Roboto text-[15px] font-light leading-[18px]">
          4 bhk
        </p>
        <p className="font-Roboto text-[15px] font-thin leading-[18px]">4 L</p>
      </div>
    </div>
  );
};

export default JayantiCard;
