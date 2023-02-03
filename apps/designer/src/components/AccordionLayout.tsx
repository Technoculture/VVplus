import React from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import useStore from "../global-stores/store";
import floorLevel from "../../public/cameraAngles.json";

interface Props {
  title: string;
  design: string;
  children: JSX.Element;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  p: number[];
  t: number[];
}

const AccordionLayout = ({
  title,
  design,
  children,
  index,
  activeIndex,
  setActiveIndex,
  p,
  t,
}: Props) => {
  const updateTarget = useStore((state) => state.updateCameraTarget);
  const updatePosition = useStore((state) => state.updateCameraPosition);
  const getFloor = useStore((state) => state.floor);

  function animation(p: number[], t: number[]) {
    updateTarget(t);
    updatePosition(p);
  }
  const handleSetIndex = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    } else {
      setActiveIndex(0);
    }
  };

  return (
    <>
      <div
        className={`
      ${
        activeIndex === index
          ? "bg-white border-amber-100  transition-all duration-[1000ms] rounded-2xl border-[1px] w-[380px]"
          : ""
      }
      `}
      >
        <div
          onClick={() => {
            if (index !== activeIndex) {
              handleSetIndex(index);
              animation(p, t);
            } else {
              handleSetIndex(0);
              animation(floorLevel[getFloor].p, floorLevel[getFloor].t);
            }
          }}
          className={`flex justify-between items-center h-11 w-[380px] px-5   bg-white bg-opacity-40 border-amber-100  border-[1px] rounded-2xl 
        ${activeIndex === index ? "border-none h-[54px] w-full " : ""}
        
        `}
        >
          <div className="flex ">
            <div className=" font-[Bodoni] text-lg ">{title}</div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div
              className={` font-bold text-sm font-[Roboto]
            ${activeIndex === index ? "font-light" : ""}
            `}
            >
              {design}
            </div>
            {activeIndex === index ? <AiOutlineDown /> : <AiOutlineRight />}
          </div>
        </div>

        {activeIndex === index && (
          <div className={`px-5 scrollbar-hide rounded-2xl`}>{children}</div>
        )}
      </div>
    </>
  );
};

export default AccordionLayout;
