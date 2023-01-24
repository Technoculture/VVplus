import * as THREE from "three";
import "@babylonjs/loaders/glTF";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Skybox } from "./Skybox";
import { Ground } from "./Ground";
import { createModel } from "./models";
import { CameraControls } from "./Camera";
// import "type.d.ts";
// TODO: Create JSON parsing with zod and handle the elemental breakdown of building model into several parts
let scene_variable: THREE.Scene;
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
      <Canvas camera={{ position: [50, 100, 10] }}>
        <SceneInitialize />
        <CameraControls />
        <Skybox />
        <Ground />
      </Canvas>
    </div>
  );
};
export default Scene;
export { scene_variable };
