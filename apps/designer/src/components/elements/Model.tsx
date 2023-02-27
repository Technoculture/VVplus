import data from "../../../public/house.json";
import { Vector3 } from "three";
import { useGLTF } from "@react-three/drei";
import cameraControlsStore from "../../globalStore/Navigation-Store/cameraControlsStore";

export function LoadModel() {
  const visibleFloorIdx = cameraControlsStore((state) => state.floor);
  const floorUrlArray: string[] = [];
  const floorTracker: number[] = [];
  const modelProps = {
    position: new Vector3(0, 0, 0),
    scale: new Vector3(10, 10, 10),
  };
  data.floors.map((element) => {
    floorTracker.push(element.floorStructure.length);
    element.floorStructure.map((e) => {
      floorUrlArray.push(data.baseUrl + e.file);
    });
  });
  const models = useGLTF(floorUrlArray);
  let currIdx = 0;
  const floorGroupArray = data.floors.map((_, idx) => {
    const floorModels: typeof models = models.slice(
      currIdx,
      currIdx + floorTracker[idx]
    );
    currIdx += floorTracker[idx];
    return floorModels;
  });

  // returns floor visibility status
  function floorVisiblilityToggle(idx: number) {
    if (visibleFloorIdx === 0) return true;
    else if (visibleFloorIdx >= idx + 1) return true;
    else if (visibleFloorIdx === data.floors.length - 2) return true;
    return false;
  }
  return (
    <>
      {floorGroupArray.map((floor, idx) => {
        // props for each floor group
        const groupProps = {
          position: modelProps.position,
          scale: modelProps.scale,
          visible: floorVisiblilityToggle(idx),
        };
        return (
          <group key={idx} {...groupProps}>
            {floor.map((model, index) => {
              const primitiveProps = {
                object: model.scene,
                castShadow: true,
                receiveShadow: true,
              };
              return <primitive key={index} {...primitiveProps} />;
            })}
          </group>
        );
      })}
    </>
  );
}
