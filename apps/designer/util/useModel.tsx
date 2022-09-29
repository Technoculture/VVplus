import { useEffect } from "react";
import data from "../public/data.json";
// import useStore from "../global-stores/store";
import * as BABYLON from "@babylonjs/core";
import { Vector3, Scene } from "@babylonjs/core";

export default function useModel(
  fileName: string,
  scene: Scene,
  isVisible: boolean
) {
  useEffect(() => {
    if (isVisible) {
      BABYLON.SceneLoader.ImportMesh(
        "",
        data[0]?.url|| " ",
        fileName,
        scene,
        (newMeshes) => {
          if(newMeshes[0]){
            newMeshes[0].position.y = 0;
            newMeshes[0].scaling = new Vector3(1, 1, 1);
          }
        }
      );
    }
  }, [isVisible]);
}
// get file name using id from data.json -> getFileName(id)
// write a func in util to get info from json file
// use zod, describe to zod the structure of data
// write a TS enum which represents a floor part in the structure, walls, fixtures -> passed to getFileName(id,...)
//

/*
When page loads -> all of 3d assets to be downloaded and added to the canvas, but the canvas itself is invisible -> canvas becomes visible at some point, switch on and off visibility of models at this point
*/
