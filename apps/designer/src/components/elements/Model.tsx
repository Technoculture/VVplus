import data from "../../../public/house.json";
import { Group, Scene } from "three";
import { useGLTF } from "@react-three/drei";

export function createModel(scene: Scene) {
  data.floors.map((element) => {
    const floor = new Group();
    element.floorStructure.map((e) => {
      const model = useGLTF(data.baseUrl + e.file);
      model.scene.name = element.id + "-" + e.file.split(".")[0];
      model.scene.scale.set(10, 10, 10);
      model.scene.position.set(0, 0, 0);
      floor.add(model.scene);
      useGLTF.preload(data.baseUrl + e.file);
      floor.name = element.id;
    });
    scene.add(floor);
  });
}
