import React from "react";
import useStore from "../global-stores/store";
import AnimateActiveCamera from "./Animations/animateCamera";

const FloorSlider = () => {
  const floor = useStore((state) => state.floor);
  const updateTarget = useStore((state) => state.changeTarget);
  const changeFloor = useStore((state) => state.changeFloor);
  const updateFloor = (idx: number) => {
    if (floor === idx) {
      changeFloor(-1);
      AnimateActiveCamera({ position: { x: 175, y: 40, z: -80 } });
      updateTarget({ x: 0, y: 25, z: 0 });
    } else {
      changeFloor(idx);
      AnimateActiveCamera({ position: floorLevel[idx].p });
      updateTarget(floorLevel[idx].t);
    }
  };
  const floorLevel = [
    {
      p: { x: 230, y: 25, z: 0 },
      t: { x: 0, y: 70, z: 0 },
    },
    {
      p: { x: 75, y: 25, z: 0 },
      t: { x: 0, y: 25, z: 0 },
    },
    {
      p: { x: 75, y: 50, z: 0 },
      t: { x: 0, y: 50, z: 0 },
    },
    {
      p: { x: 75, y: 80, z: 0 },
      t: { x: 0, y: 75, z: 0 },
    },
    {
      p: { x: 100, y: 200, z: 0 },
      t: { x: 100, y: 200, z: 0 },
    },
  ];
  return (
    <div className="text-white text-sm select-none   relative flex items-center justify-center  mt-2  w-[380px] font-[Roboto]">
      <div className="border-[1px] border-amber-100 items-center flex rounded-[20px] w-[380px]  h-8 z-[100] bg-black bg-opacity-40">
        {floorLevel.map((e, idx) => (
          <div
            key={idx}
            onClick={() => updateFloor(idx)}
            className={`${
              idx === floor &&
              "bg-white bg-opacity-40  text-black -ml-[1px] h-8 z-[100]text-black bg-bray-200"
            } ${
              idx === 0
                ? "rounded-l-2xl"
                : idx === floorLevel.length - 1
                ? "rounded-r-2xl"
                : ""
            } w-[25%] flex justify-center items-center`}
          >
            {idx === 0
              ? "Outside"
              : idx === floorLevel.length - 1
              ? "Roof"
              : `Floor ${idx - 1}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorSlider;
