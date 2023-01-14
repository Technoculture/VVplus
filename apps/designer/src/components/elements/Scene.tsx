import * as THREE from "three";
import "@babylonjs/loaders/glTF";
import {
  Canvas,
  extend,
  LightNode,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { OrbitControls, PerspectiveCamera, Plane } from "@react-three/drei";
import {
  HemisphereLight,
  MeshStandardMaterial as _MeshStandardMaterial,
} from "three";
import { createSkyBox } from "./skybox";

// TODO: Create JSON parsing with zod and handle the elemental breakdown of building model into several parts
let scene_variable: THREE.Scene;
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
      minDistance={500}
      maxDistance={2000}
      minPolarAngle={-Math.PI / 2}
      target={[0, 0, 0]}
    />
  );
};

const Scene = ({ isWelcomePanelActive }: { isWelcomePanelActive: boolean }) => {
  const [groundTexture, setGroundTexture] = useState<THREE.Texture>();
  function SceneInit() {
    const { scene } = useThree();
    createSkyBox(scene);
    return null;
  }
  useEffect(() => {
    setGroundTexture(
      new THREE.TextureLoader().load(
        "https://assets.vvplus.cc/misc/ground_texture.png"
      )
    );
  }, []);

  return (
    <div
      className={`
  absolute top-0 w-full h-screen
  ${isWelcomePanelActive === true ? "z-[1] visible" : "z-[-100] hidden"}`}
    >
      <Canvas>
        <SceneInit />
        <PerspectiveCamera position={[0, 50, 10]} />
        <CameraControls />
        {/* <hemisphereLight position={[-1, 1, -1]} intensity={0.1} /> */}
        {/* <Plane name="ground" args={[1200, 1200, 1, 1]}>
          {/* <meshStandardMaterial map={groundTexture} /> */}
        {/* </Plane> */}
      </Canvas>
    </div>
  );
};
export default Scene;
export { scene_variable };
