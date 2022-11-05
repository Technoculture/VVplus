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
      className={`h-[364px]   w-[220px] md:static fixed border-[1px] items-center py-[10px] md:mt-0 flex flex-col bg-white border-amber-300 shadow-[ 0px_4px_40px_rgba(0_0_0_0.15)] rounded-[15px]
    ${isEuropaCardOpen === true ? "z-20 " : " "}
    ${isYamunaCardOpen === true ? "z-10 mt-[95px]" : ""}
    ${isJayantiCardOpen === true ? "mt-[95px] z-10" : ""}
   
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
        className={`flex items-center justify-between mt-4 cursor-pointer w-44
       

        `}
      >
        <h2 className="font-Bodoni text-xl font-light leading-[18px] ">
          Europa
        </h2>
        <p className="font-Roboto text-[15px] font-light leading-[18px]">
          5 bhk
        </p>
        <p className="font-Roboto text-[15px] font-thin leading-[18px]">
          1.2 Cr
        </p>
      </div>
    </div>
  );
};

export default EuropaCard;
