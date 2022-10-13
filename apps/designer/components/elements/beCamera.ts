import * as BABYLON from "@babylonjs/core";
import { ArcRotateCamera, Vector3 } from "@babylonjs/core";

export function createBECamera(scene: BABYLON.Scene) {
  const birdsEyeCamera = new ArcRotateCamera(
    "camera",
    0,
    0,
    1000,
    new Vector3(0, 700, 430),
    scene
  );
  birdsEyeCamera.wheelPrecision = 1;
  birdsEyeCamera.panningSensibility = 10;
  birdsEyeCamera.lowerRadiusLimit = 100;
  birdsEyeCamera.upperRadiusLimit = 2000;
  birdsEyeCamera.upperBetaLimit = 0;
  scene.activeCamera = birdsEyeCamera;
  const canvas = scene.getEngine().getRenderingCanvas();
  scene.activeCamera.attachControl(canvas, true);
}
