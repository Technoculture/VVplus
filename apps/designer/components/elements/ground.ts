import * as BABYLON from "@babylonjs/core";

export async function createGround() {
  const groundUrl = "https://assets.vvplus.cc/misc/ground_texture.png"
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 12000,
    height: 12000,
  });
  ground.position.y = -10;
  const groundMat = new BABYLON.StandardMaterial("groundMat");
  groundMat.diffuseTexture = new BABYLON.Texture(
    groundUrl
  );
  groundMat.diffuseTexture.hasAlpha = true;
  ground.material = groundMat;
}
