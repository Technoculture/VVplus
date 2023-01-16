import * as THREE from "three";

export function createGround(scene: THREE.Scene) {
  const groundUrl = "https://assets.vvplus.cc/misc/ground_texture.png";
  const groundGeometry = new THREE.PlaneGeometry(1200, 1200);
  const groundMaterial = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load(groundUrl),
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotateX(-Math.PI / 2);
  scene.add(ground);
  return null;
  // <Mesh>
  //   <directionalLight intensity={0.5} />
  //   <SphereGeometry />
  //   <meshBasicMaterial />
  // </Mesh>
}
