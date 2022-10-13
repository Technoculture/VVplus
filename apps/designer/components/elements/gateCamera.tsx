import * as BABYLON from "@babylonjs/core";
import { ArcRotateCamera, Vector3 } from "@babylonjs/core";

export function createGateCamera(scene: BABYLON.Scene) {
  const gateCamera = new ArcRotateCamera(
    "camera",
    -Math.PI * 3,
    Math.PI / 2,
    1000,
    new Vector3(250, 70, 30),
    scene
  );
  gateCamera.wheelPrecision = 1;
  gateCamera.panningSensibility = 10;
  gateCamera.lowerRadiusLimit = 500;
  gateCamera.upperRadiusLimit = 2000;
  gateCamera.upperBetaLimit = 100;
  scene.activeCamera = gateCamera;
  const canvas = scene.getEngine().getRenderingCanvas();
  scene.activeCamera.attachControl(canvas, true);
}
