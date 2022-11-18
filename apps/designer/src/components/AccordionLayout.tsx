import React from "react";

import { AiOutlineDown } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
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
        className={`flex justify-between items-center px-5 py-1  mt-1 bg-gray-400 border-amber-100 border-[1px] rounded-2xl w-[26vw]
        
        `}
      >
        <div className="flex gap-3">
          <div className="text-lg ">{title}</div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="text-sm font-bold font-Roboto">{design}</div>
          {activeIndex === index ? (
            <AiOutlineDown width={"10px"} height={"10px"} />
          ) : (
            <MdKeyboardArrowRight width={"10px"} height={"10px"} />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <div className="p-4 shadow-3xl rounded-2xl shadow-cyan-500/50">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
