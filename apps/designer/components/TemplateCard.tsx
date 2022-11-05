import React from "react";
import CardNavigationButton from "./Buttons/CardNavigationButton";
import EuropaCard from "./TemplateCards/EuropaCard";
import JayantiCard from "./TemplateCards/JayantiCard";
import YamunaCard from "./TemplateCards/YamunaCard";
import { onBoardUiStore } from "../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";
interface NewDesignProps {
  handleClickOnNewDesign: () => void;
}

const TemplateCard = ({ handleClickOnNewDesign }: NewDesignProps) => {
  const { isEuropaCardOpen, isJayantiCardOpen, isYamunaCardOpen } =
    onBoardUiStore();
  return (
    <main className="flex flex-col relative  left-[50%] translate-x-[-50%]   my-8 gap-4  justify-center items-center ">
      <h1 className="text-[25px] select-none font-medium font-Roboto text-[#000000] leading-[29px] ">
        Choose your Base model
      </h1>
      <p className="text-[14px] select-none font-light leading-[16px]  text-center">
        Your dream home is a special place.
        <br /> Dream your dream house with just a few clicks!
      </p>
      <div>
        <div
          className={`h-96  md:w-[700px]  md:border-[1px] gap-[10px] relative flex md:flex-row flex-col  overflow-hidden justify-center text-center items-center  md:border-zinc-300 from-[180deg_rgba(255_255_255_0.7)_0%] to-[rgba(255_245_245_0.35)_100%] rounded-[20px] shadow-xl
      
      `}
        >
          <EuropaCard handleClickOnNewDesign={handleClickOnNewDesign} />
          <YamunaCard />
          <JayantiCard />
        </div>
      </div>
      {isEuropaCardOpen === false && <CardNavigationButton />}
      <div
        className={`text-[15px]  md:mt-0  font-light leading-[18px]
      ${isEuropaCardOpen === true ? "mt-[12vh]" : ""}
      `}
      >
        <span className="italic font-Roboto text-sky-500">Learn more</span>{" "}
        <span className="font-Roboto">about this model</span>
      </div>
    </main>
  );
};

export default TemplateCard;
