import * as BABYLON from "@babylonjs/core";
// import data from "../../../public/house.json";
import data from "../../../public/railings_sf.json";
import { Vector3 } from "@babylonjs/core";
import { scene_variable } from "./Scene";

export async function railingSf(index: number) {
  BABYLON.SceneLoader.ImportMesh(
    "",
    data.root_url || " ",
    data.options[index].file_url,
    scene_variable,
    (newMeshes) => {
      if (newMeshes[0]) {
        newMeshes[0].position.y = 0;
        newMeshes[0].position.x = 0;
        newMeshes[0].position.z = 300;
        newMeshes[0].scaling = new Vector3(40, 40, 40);
      }
    }
  );
}
