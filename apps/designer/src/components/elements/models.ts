import * as BABYLON from "@babylonjs/core";
import data from "../../../public/house.json";
import { Vector3 } from "@babylonjs/core";

// TODO: create a global state usng jotai/zustand to manipulate the dictionary

interface Mesh_List{
  role: string,
  mesh: BABYLON.AbstractMesh
}

const mesh_dict: Mesh_List[] = [];
export async function createModel(scene: BABYLON.Scene) {
  data.floors.map((element) => {
    element.floorStructure.forEach((e) => {
      //TODO: use ImportMeshAsync here instead
      let mesh_variable: BABYLON.AbstractMesh
      BABYLON.SceneLoader.ImportMesh(
        "",
        data?.baseUrl || " ",
        e.file,
        scene,
        (newMeshes) => {
          if (newMeshes[0]) {
            mesh_variable =  newMeshes[0]
            newMeshes[0].position.x = 0;
            newMeshes[0].position.y = 0;
            newMeshes[0].position.z = 300;
            console.log(newMeshes[0]);
            newMeshes[0].scaling = new Vector3(40, 40, 40);
          }
        }
      );
      mesh_dict.push({
        role: e.category,
        mesh: mesh_variable,
      });
    })
  });
  // console.log(mesh_dict)
}

export { mesh_dict };
