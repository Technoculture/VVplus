import * as BABYLON from "@babylonjs/core";
import data from "../../public/house.json";
import { Vector3 } from "@babylonjs/core";

export async function createModel(scene: BABYLON.Scene) {
  data.floors.map((element) => {
    element.floorStructure.map((e) => {
      BABYLON.SceneLoader.ImportMesh(
        "",
        data?.baseUrl || " ",
        e.file,
        scene,
        (newMeshes) => {
          if (newMeshes[0]) {
            newMeshes[0].position.y = 0;
            newMeshes[0].position.x = 0;
            newMeshes[0].position.z = 300;
            newMeshes[0].scaling = new Vector3(40, 40, 40);
          }
        }
      );
    });
  });
}
