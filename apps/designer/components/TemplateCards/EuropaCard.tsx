import React from "react";
import house from "../../assets/house.jpg";
import Image from "next/image";
import { onBoardUiStore } from "../../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";
interface NewDesignProps {
  handleClickOnNewDesign: () => void;
}
const EuropaCard = ({ handleClickOnNewDesign }: NewDesignProps) => {
  const {
    openEuropaCard,
    isEuropaCardOpen,

    isJayantiCardOpen,

    isYamunaCardOpen,
  } = onBoardUiStore();
  return (
    <div
      className={`h-[364px] touch-pan-y   w-[220px] md:static fixed border-[1px] items-center py-[10px] md:shadow-md shadow-xl md:mt-0 flex flex-col bg-white border-amber-300  rounded-[15px]
    ${isEuropaCardOpen === true ? "z-20 md:animate-none animate-vFlip  " : ""}
    ${isYamunaCardOpen === true ? "md:h-[364px] mt-[160px] h-[340px] " : ""}
    ${
      isJayantiCardOpen === true ? " md:h-[364px] mt-[95px] z-10 h-[340px]" : ""
    }
   
    `}
    >
      <div
        className="w-[190px] relative object-fill overflow-hidden h-[300px] border-[1px] border-amber-300 rounded-[12px]"
        onClick={handleClickOnNewDesign}
      >
        <Image
          src={house}
          className="object-cover object-[top_0px_left_-100px]  w-full"
          alt=""
          layout="fill"
        />
      </div>
      <div
        onClick={openEuropaCard}
        className={`flex select-none items-center justify-between mt-4 cursor-pointer w-44
       

        `}
      >
        <h2 className="font-Bodoni select-none text-xl font-light leading-[18px] ">
          Europa
        </h2>
        <p className="font-Roboto select-none text-[15px] font-light leading-[18px]">
          5 bhk
        </p>
        <p className="font-Roboto select-none text-[15px] font-thin leading-[18px]">
          1.2 Cr
        </p>
      </div>
    </div>
  );
};

export default EuropaCard;
