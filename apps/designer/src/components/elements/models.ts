import * as BABYLON from "@babylonjs/core";
import data from "../../../public/house.json";
import { Vector3 } from "@babylonjs/core";

// TODO: create a global state usng jotai/zustand to manipulate the dictionary

interface Mesh_List {
  role: string;
  mesh: BABYLON.AbstractMesh;
  floorName: string;
}

interface Selector_Mesh_List {
  role: string;
  mesh: BABYLON.AbstractMesh;
  floorName: string;
  index: number;
}

// creatng models using ImportMesh
/*
const mesh_dict: Mesh_List[] = [];
export async function createModel(scene: BABYLON.Scene) {
  data.floors.map((element) => {
    element.floorStructure.forEach((e) => {
      //TODO: use ImportMeshAsync here instead
      let mesh_variable: BABYLON.AbstractMesh;
      BABYLON.SceneLoader.ImportMesh(
        "",
        data?.baseUrl || " ",
        e.file,
        scene,
        (newMeshes) => {
          if (newMeshes[0]) {
            mesh_variable = newMeshes[0];
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
    });
  });
  console.log(mesh_dict)
}
*/

//Creating Models using ImportMeshAsync
// TODO: try to resolve errors using try catch method

const mesh_list: Mesh_List[] = [];
const choice_list: Selector_Mesh_List[] = [];

export function Model(scene: BABYLON.Scene) {
  data.floors.map((element) => {
    element.floorStructure.map(async (e) => {
      const meshCall = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        data?.baseUrl || " ",
        e.file,
        scene
      );
      const mesh = meshCall.meshes;
      mesh[0].scaling = new Vector3(40, 40, 40);
      mesh[0].position.x = 0;
      mesh[0].position.y = 0;
      mesh[0].position.z = 300;
      mesh_list.push({
        role: e.category,
        mesh: mesh[0],
        floorName: element.floorName,
      });
    });
  });

  // console.log(data.choosableOptions[0]);

  
  data.choosableOptions.map((element) => {
    element.map(async (e) => {
      const meshCall = await BABYLON.SceneLoader.ImportMeshAsync(
        "",
        data?.baseUrl || " ",
        e.file,
        scene
      );
      const mesh = meshCall.meshes;
      mesh[0].scaling = new Vector3(40, 40, 40);
      mesh[0].position.x = 0;
      mesh[0].position.y = 0;
      mesh[0].position.z = 300;
      choice_list.push({
        role: e.category,
        mesh: mesh[0],
        floorName: e.floorName,
        index: e.id,
      });
      if (e.default === false) {
        mesh[0].setEnabled(false);
      }
    });
  });
  
}

export { mesh_list, choice_list };
