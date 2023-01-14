import * as THREE from "three";
import { CubeTextureLoader } from "three";

export function createSkyBox(scene: THREE.Scene) {
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const skyBoxUrl = "https://assets.vvplus.cc/misc/skybox";
  const texture = loader.load([
    skyBoxUrl + "_px.png",
    skyBoxUrl + "_nx.png",
    skyBoxUrl + "_py.png",
    skyBoxUrl + "_ny.png",
    skyBoxUrl + "_pz.png",
    skyBoxUrl + "_nz.png",
  ]);
  // const skyBox = new THREE.Mesh();
  // skyBox.geometry = new THREE.BoxGeometry(10000, 10000, 10000);
  // const skyboxMaterial = new THREE.MeshStandardMaterial();
  // skyboxMaterial.map = texture;
  // skyBox.material = skyboxMaterial;
  // scene.add(skyBox);
  scene.background = texture;
  scene.environment = texture;
  return null;
}
