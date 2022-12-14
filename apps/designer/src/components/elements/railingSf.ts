import * as BABYLON from "@babylonjs/core";
// import data from "../../../public/house.json";
import data from "../../../public/railings_sf.json";
import { Vector3 } from "@babylonjs/core";
import { scene_variable } from "./Scene";
import { mesh_dict } from "./models";

export async function railingSf(index: number) {
  // to get mesh names
  //PROBLEM: Unable to set names for meshes, how to do that
  // scene_variable.importedMeshesFiles
  // console.log(scene_variable.meshes);
  // console.log(mesh_dict);
  // scene_variable.meshes[2].setEnabled(true)  //not working 
  //can try -> set visibility = 0 or 1 when turned on or off.

  //TODO: use asset container to get names of the mesh to be replaced
  const assetContainer = new BABYLON.AssetContainer(scene_variable)
  console.log(assetContainer);

  // mesh_dict["railings"].setEnabled(false)
  // BABYLON>Meshes
  // error ^ - cannot set property of undefined (the meshes are being stored as undefined here)
  
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