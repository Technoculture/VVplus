import React, { useEffect } from "react";
import cameraControlsStore from "../globalStore/Navigation-Store/cameraControlsStore";
import { cameraAnglesFloors } from "../../public/cameraPropConstants.json";

const FloorToggleTab = () => {
  const floor = cameraControlsStore((state) => state.floor);
  const updateTarget = cameraControlsStore((state) => state.updateCameraTarget);
  const updatePosition = cameraControlsStore(
    (state) => state.updateCameraPosition
  );
  const changeFloor = cameraControlsStore((state) => state.changeFloor);

  const updateFloor = (idx: number): void => {
    changeFloor(idx);
    updatePosition(cameraAnglesFloors[idx].cameraPosition);
    updateTarget(cameraAnglesFloors[idx].cameraTarget);
  };
  function activeFloorTabStyle(idx: number): string {
    return `${
      idx === floor &&
      "bg-white bg-opacity-40  text-black -ml-[1px] h-8 z-[100]text-black bg-bray-200"
    } ${
      idx === 0
        ? "rounded-l-2xl"
        : idx === cameraAnglesFloors.length - 1
        ? "rounded-r-2xl"
        : ""
    }`;
  }
  useEffect(() => {
    updateFloor(floor);
  }, [floor]);
  return (
    <div className="text-white text-sm select-none   relative flex items-center justify-center  mt-2  w-[380px] font-[Roboto]">
      <div className="border-[1px] border-amber-100 items-center flex rounded-[20px] w-[380px]  h-8 z-[100] bg-black bg-opacity-40">
        {cameraAnglesFloors.map((_, idx) => (
          <div
            key={idx}
            onClick={() => updateFloor(idx)}
            className={`w-[25%] flex justify-center items-center ${activeFloorTabStyle(
              idx
            )}`}
          >
            {idx === 0
              ? "Outside"
              : idx === cameraAnglesFloors.length - 1
              ? "Roof"
              : `Floor ${idx - 1}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorToggleTab;
