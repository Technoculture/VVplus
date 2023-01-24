import * as THREE from "three";
import "@babylonjs/loaders/glTF";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import { Skybox } from "./Skybox";
import { Ground } from "./Ground";
import { createModel } from "./models";
// import "type.d.ts";
// TODO: Create JSON parsing with zod and handle the elemental breakdown of building model into several parts
let scene_variable: THREE.Scene;
let camera_variable: THREE.Camera;
// extend({ HemisphereLight, MeshStandardMaterial: _MeshStandardMaterial });
// declare global {
//   namespace JSX {
//     interface IntrinsiceElements {
//       hemisphereLightt: LightNode<HemisphereLight, typeof HemisphereLight>;
//     }
//     // meshStandardMaterial: MaterialNode<
//     //   MeshStandardMaterial,
//     //   [MeshStandardMaterialParameters]
//     // >;
//   }
// }
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera_variable = camera;
  camera.up = new Vector3(0, 1, 0);
  const controls = useRef(null);
  useFrame((state) => {
    // controls.current.target.copy([0, 0, 20]);
    return controls.current.update();
  });
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      panSpeed={10}
      minDistance={100}
      maxDistance={300}
      maxPolarAngle={(11 * Math.PI) / 20}
      target={[0, 50, 0]}
    />
  );
};

const Scene = ({ isWelcomePanelActive }: { isWelcomePanelActive: boolean }) => {
  function SceneInitialize() {
    const { scene } = useThree();
    createModel(scene);
    scene_variable = scene;
    return null;
  }

  return (
    <div
      className={`
  absolute top-0 w-full h-screen
  ${isWelcomePanelActive === true ? "z-[1] visible" : "z-[-100] hidden"}`}
    >
      <Canvas>
        <SceneInitialize />
        <PerspectiveCamera position={[0, 100, 10]} />
        <CameraControls />
        <Skybox />
        <Ground />
      </Canvas>
    </div>
  );
};
export default Scene;
export { scene_variable, camera_variable };
