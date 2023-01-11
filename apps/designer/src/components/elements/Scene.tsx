import * as THREE from "three";
import "@babylonjs/loaders/glTF";
import {
  BufferGeometryNode,
  Canvas,
  extend,
  LightNode,
  Node,
  Object3DNode,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// TODO: Create JSON parsing with zod and handle the elemental breakdown of building model into several parts
let scene_variable: THREE.Scene;
extend({ OrbitControls });
declare module "@react-three/fiber" {
  interface ThreeElements {
    orbitControls: Node<OrbitControls, typeof OrbitControls>;
  }
}
const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  // const {
  //   camera,
  //   gl: { domElement },
  // } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef(null);
  useFrame((state) => {
    // controls.current.target.copy([0, 0, 20]);
    return controls.current.update();
  });
  return (
    <orbitControls
      ref={controls}
      // args={[camera, domElement]}
      // panSpeed={10}
      // minDistance={500}
      // maxDistance={2000}
      // maxPolarAngle={Math.PI / 2}
      // target={[0, 0, 0]}
    />
  );
};
const Scene = ({ isWelcomePanelActive }: { isWelcomePanelActive: boolean }) => {
  const [texture, setTexture] = useState<THREE.Texture>();
  useEffect(() => {
    setTexture(
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
        <perspectiveCamera />
        <CameraControls />
      </Canvas>
    </div>
  );
};
export default Scene;
export { scene_variable };
