import * as THREE from "three";
import "@babylonjs/loaders/glTF";
import {
  Canvas,
  extend,
  LightNode,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import {
  HemisphereLight,
  MeshStandardMaterial as _MeshStandardMaterial,
  Vector3,
} from "three";
import { createSkyBox } from "./skybox";
import { createGround } from "./ground";
import { createFog } from "./fog";
import { createModel } from "./models";

// TODO: Create JSON parsing with zod and handle the elemental breakdown of building model into several parts
let scene_variable: THREE.Scene;
let camera_variable: THREE.Camera;
extend({ HemisphereLight, MeshStandardMaterial: _MeshStandardMaterial });
declare module "@react-three/fiber" {
  interface ThreeElements {
    hemisphereLightt: LightNode<HemisphereLight, typeof HemisphereLight>;
    // meshStandardMaterial: MaterialNode<
    //   MeshStandardMaterial,
    //   [MeshStandardMaterialParameters]
    // >;
  }
}
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
    createSkyBox(scene);
    createGround(scene);
    createFog(scene);
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
        {/* <hemisphereLight position={[-1, 1, -1]} intensity={0.1} /> */}
      </Canvas>
    </div>
  );
};
export default Scene;
export { scene_variable, camera_variable };
