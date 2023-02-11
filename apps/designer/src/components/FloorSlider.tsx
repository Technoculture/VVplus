import React, { useEffect } from "react";
import useStore from "../global-stores/store";
import floorLevel from "../../public/cameraAngles.json";

const FloorSlider = () => {
  const floor = useStore((state) => state.floor);
  const updateTarget = useStore((state) => state.updateCameraTarget);
  const updatePosition = useStore((state) => state.updateCameraPosition);
  const changeFloor = useStore((state) => state.changeFloor);

  const updateFloor = (idx: number) => {
    changeFloor(idx);
    updatePosition(floorLevel[idx].p);
    updateTarget(floorLevel[idx].t);
  };
  useEffect(() => {
    updateFloor(floor);
  }, [floor]);
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
