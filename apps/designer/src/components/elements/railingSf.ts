import * as BABYLON from "@babylonjs/core";
// import data from "../../../public/house.json";
import data from "../../../public/railings_sf.json";
import { Vector3 } from "@babylonjs/core";
import { scene_variable } from "./Scene";

export async function railingSf(index: number) {
  // to get mesh names
  //PROBLEM: Unable to set names for meshes, how to do that
  // scene_variable.importedMeshesFiles
  console.log(scene_variable.meshes);

  //TODO: use asset container to get names of the mesh to be replaced
  const assetContainer = new BABYLON.AssetContainer(scene_variable)
  console.log(assetContainer);
  
  BABYLON.SceneLoader.ImportMesh(
    // data.options[index].file_name,
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