import React from "react";

import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import animateActiveCamera from "./Animations/animateCamera";
import { scene_variable } from "./elements/Scene";

interface Props {
  title: string;
  design: string;
  children: JSX.Element;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  r: number;
  a: number;
  b: number;
  t: {
    x: number;
    y: number;
    z: number;
  };
}

interface target {
  x: number;
  y: number;
  z: number;
}

const AccordionLayout = ({
  title,
  design,
  children,
  index,
  activeIndex,
  setActiveIndex,
  r,
  a,
  b,
  t,
}: Props) => {
  function animation(r: number, a: number, b: number, t: target) {
    animateActiveCamera(scene_variable, {
      radius: r,
      alpha: a,
      beta: b,
      target: {
        x: t.x,
        y: t.y,
        z: t.z,
      },
    });
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
        className={`h-fit 
      ${activeIndex === index ? "bg-white rounded-2xl" : ""}
      `}
      >
        <div
          onClick={() => {
            if (index !== activeIndex) {
              handleSetIndex(index);
              animation(r, a, b, t);
            } else {
              handleSetIndex(0);
              animation(1000, -Math.PI * 3, Math.PI / 2, {
                x: -300,
                y: 200,
                z: 230,
              });
            }
          }}
          className={`flex justify-between items-center h-[5vh] lg:px-5 px-2   bg-white bg-opacity-40 border-white border-2xl border-2 rounded-2xl w-[26vw]
        
        
        `}
        >
          <div className="flex gap-3">
            <div className="text-sm font-[Bodoni] lg:text-lg ">{title}</div>
          </div>
          <div className="flex items-center justify-center gap-3 lg:gap-5">
            <div className="text-xs font-bold lg:text-sm font-[Roboto]">
              {design}
            </div>
            {activeIndex === index ? <AiOutlineDown /> : <AiOutlineRight />}
          </div>
        </div>

        {activeIndex === index && (
          <div className="px-2 py-1 rounded-2xl">{children}</div>
        )}
      </div>
    </>
  );
};

export default AccordionLayout;
