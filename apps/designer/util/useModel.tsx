import { useEffect } from "react";
import data from "../public/data.json";
// import useStore from "../global-stores/store";
import * as BABYLON from "@babylonjs/core";
import { Vector3, Scene } from "@babylonjs/core";

export default function useModel(fileName: string, scene: Scene) {
  useEffect(() => {
    BABYLON.SceneLoader.ImportMesh(
      "",
      data[0].url,
      fileName,
      scene,
      (newMeshes) => {
        newMeshes[0].position.y = 0;
        newMeshes[0].scaling = new Vector3(1, 1, 1);
      }
    );
  }, [fileName, scene]);
}
