import * as BABYLON from "@babylonjs/core";
import data from "../../../public/house.json";
import { Vector3 } from "@babylonjs/core";

// TODO: add category to house.json for each glb model, create a global state usng jotai/zustand to manipulate the dictionary

// TODO: create a dictionary for meshes
const mesh_dict = []
export async function createModel(scene: BABYLON.Scene) {
  data.floors.map((element) => {
    const mesh_variable = element.floorStructure.map((e) => {
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
      )
      mesh_dict.push({
        role: e.category,
        mesh: mesh_variable
      })
    }
    )
  });
  // console.log(mesh_dict);
}

export { mesh_dict }