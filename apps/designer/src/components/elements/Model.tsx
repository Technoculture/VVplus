import data from "../../../public/house.json";
import { Vector3 } from "three";
import { useGLTF } from "@react-three/drei";
import cameraControlsStore from "../../global-stores/store";
import { Suspense } from "react";

export function CreateModel() {
  const visibleFloorIdx = cameraControlsStore((state) => state.floor);
  const floorUrlArray: string[] = [];
  const floorTracker: number[] = [];
  data.floors.map((element) => {
    floorTracker.push(element.floorStructure.length);
    element.floorStructure.map((e) => {
      floorUrlArray.push(data.baseUrl + e.file);
    });
  });
  const models = useGLTF(floorUrlArray);
  const floorGroupArray: typeof models[] = [];
  let currIdx = 0;
  for (let i = 0; i < data.floors.length; i++) {
    const floorModels: typeof models = models.slice(
      currIdx,
      currIdx + floorTracker[i]
    );
    // console.log(floorModels, " floorModels");
    floorGroupArray.push(floorModels);
    currIdx += floorTracker[i];
  }
  function floorVisiblilityToggle(idx: number) {
    if (visibleFloorIdx === 0) return true;
    else if (visibleFloorIdx >= idx + 1) return true;
    else if (visibleFloorIdx === data.floors.length - 2) return true;
    return false;
  }
  return (
    <Suspense fallback={null}>
      {floorGroupArray.map((floor, idx) => {
        const groupProps = {
          position: new Vector3(0, 0, 0),
          scale: new Vector3(10, 10, 10),
          visible: floorVisiblilityToggle(idx),
        };
        return (
          <group key={idx} {...groupProps}>
            {floor.map((model, index) => {
              console.log(model, " model");
              const primitiveProps = {
                object: model.scene,
              };
              return <primitive key={index} {...primitiveProps} />;
            })}
          </group>
        );
      })}
    </Suspense>
  );
}
