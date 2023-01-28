import React from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import useStore from "../global-stores/store";
import AnimateActiveCamera from "./Animations/animateCamera";

interface target {
  x: number;
  y: number;
  z: number;
}
interface Props {
  title: string;
  glbTitle?: string;
  design: string;
  children: JSX.Element;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  r: number;
  a: number;
  b: number;
  p: target;
  t: target;
}

const AccordionLayout = ({
  title,
  glbTitle,
  design,
  children,
  index,
  activeIndex,
  setActiveIndex,
  r,
  a,
  b,
  p,
  t,
}: Props) => {
  const updateTarget = useStore((state) => state.changeTarget);
  function animation(r: number, a: number, b: number, p: target, t: target) {
    AnimateActiveCamera({
      radius: r,
      alpha: a,
      beta: b,
      position: p,
      glbTitle,
    });
    updateTarget(t);
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
              animation(r, a, b, p, t);
            } else {
              handleSetIndex(0);
              animation(
                1000,
                -Math.PI * 3,
                Math.PI / 2,
                { x: 175, y: 40, z: -80 },
                { x: 0, y: 25, z: 0 }
              );
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
