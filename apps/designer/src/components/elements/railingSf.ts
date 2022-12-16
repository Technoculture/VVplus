import * as BABYLON from "@babylonjs/core";
// import data from "../../../public/house.json";
import data from "../../../public/railings_sf.json";
import { Vector3 } from "@babylonjs/core";
import { scene_variable } from "./Scene";
import { mesh_list, mesh_dict } from "./models";

export async function railingSf(index: number) {
  // console.log(scene_variable.meshes);
  console.log(mesh_list);
  // console.log(mesh_dict);

  // scene_variable.meshes[2].setEnabled(true)  //not working
  //can try -> set visibility = 0 or 1 when turned on or off.

  //TODO: use asset container to get names of the mesh to be replaced

  // mesh_dict[10].mesh.visibility = 0 //still not working
  // mesh_list[33].mesh.visibility = 0;
  mesh_list[33].mesh.setEnabled(false);

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
