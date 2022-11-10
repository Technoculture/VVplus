import * as BABYLON from "@babylonjs/core";

export async function createFog(scene: BABYLON.Scene) {
  scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
  scene.fogDensity = 0.001;
  scene.fogStart = 5000.0;
  scene.fogEnd = 6000.0;
  scene.fogColor = new BABYLON.Color3(0.796, 0.769, 0.769);
}
