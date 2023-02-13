import React, { useEffect } from "react";
import cameraControlsStore from "../globalStore/Navigation-Store/cameraControlsStore";
import { cameraAngles } from "../../public/cameraPropConstants.json";

const FloorToggleTab = () => {
  const floor = cameraControlsStore((state) => state.floor);
  const updateTarget = cameraControlsStore((state) => state.updateCameraTarget);
  const updatePosition = cameraControlsStore(
    (state) => state.updateCameraPosition
  );
  const changeFloor = cameraControlsStore((state) => state.changeFloor);

  const updateFloor = (idx: number) => {
    changeFloor(idx);
    updatePosition(cameraAngles[idx].cameraPosition);
    updateTarget(cameraAngles[idx].cameraTarget);
  };
  function activeFloorTab(idx: number) {
    return `${
      idx === floor &&
      "bg-white bg-opacity-40  text-black -ml-[1px] h-8 z-[100]text-black bg-bray-200"
    } ${
      idx === 0
        ? "rounded-l-2xl"
        : idx === cameraAngles.length - 1
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
        {cameraAngles.map((_, idx) => (
          <div
            key={idx}
            onClick={() => updateFloor(idx)}
            className={`w-[25%] flex justify-center items-center ${activeFloorTab(
              idx
            )}`}
          >
            {idx === 0
              ? "Outside"
              : idx === cameraAngles.length - 1
              ? "Roof"
              : `Floor ${idx - 1}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloorToggleTab;
