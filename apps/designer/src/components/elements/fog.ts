import * as THREE from "three";
import { FogExp2 } from "three";

export function createFog(scene: THREE.Scene) {
  // const fog = new Fog(new Color(0.796, 0.769, 0.769), 5000, 6000);
  const fog = new FogExp2("#CBCBCB", 0.00105);
  scene.fog = fog;
}
