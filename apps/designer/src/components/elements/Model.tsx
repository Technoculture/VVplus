import data from "../../../public/house.json";
import { Scene } from "three";
import { useGLTF } from "@react-three/drei";

export function createModel(scene: Scene) {
  data.floors.map((element) => {
    element.floorStructure.map((e) => {
      const model = useGLTF(data.baseUrl + e.file);
      model.scene.name = element.floorName + "-" + e.file.split(".")[0];
      model.scene.scale.set(10, 10, 10);
      model.scene.position.set(0, 0, 0);
      scene.add(model.scene);
      useGLTF.preload(data.baseUrl + e.file);
    });
  });
}
