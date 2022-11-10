import * as BABYLON from "@babylonjs/core";

export async function createSkyBox(scene: BABYLON.Scene) {
  const skyBoxUrl = "https://assets.vvplus.cc/misc/skybox";
  const skyBox = BABYLON.MeshBuilder.CreateBox(
    "skyBox",
    { size: 10000.0 },
    scene
  );
  scene.clearColor = new BABYLON.Color4(0.5, 0.8, 0.5, 0.1);
  scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(skyBoxUrl, scene, [
    "_px.png",
    "_py.png",
    "_pz.png",
    "_nx.png",
    "_ny.png",
    "_nz.png",
  ]);
  skyboxMaterial.reflectionTexture.coordinatesMode =
    BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  skyBox.material = skyboxMaterial;
  skyBox.infiniteDistance = true;
  skyboxMaterial.disableLighting = true;
}
