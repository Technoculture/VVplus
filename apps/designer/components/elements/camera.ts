import * as BABYLON from "@babylonjs/core";
import { ArcRotateCamera, Vector3 } from "@babylonjs/core";

export function createCamera(scene: BABYLON.Scene) {
  const freeCamera = new ArcRotateCamera(
    "camera",
    -Math.PI * 3,
    Math.PI / 2,
    1000,
    new Vector3(-300, 200, 230),
    scene
  );
  freeCamera.wheelPrecision = 1;
  freeCamera.panningSensibility = 10;
  freeCamera.lowerRadiusLimit = 500;
  freeCamera.upperRadiusLimit = 2000;
  freeCamera.upperBetaLimit = Math.PI / 2;
  scene.activeCamera = freeCamera;
  const canvas = scene.getEngine().getRenderingCanvas();
  scene.activeCamera.attachControl(canvas, true);
}
