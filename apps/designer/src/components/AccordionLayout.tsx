import React from "react";

import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import animateActiveCamera from "./Animations/animateCamera";
import { scene_variable } from "./elements/Scene";

interface Props {
  title: string;
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
        className="flex w-80 justify-between p-2 mt-2 rounded bg-green-400"
      >
        <div className="flex">
          <div className="text-white font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
            <BsFillArrowDownCircleFill className="w-8 h-8" />
          ) : (
            <BsFillArrowUpCircleFill className="w-8 h-8" />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
