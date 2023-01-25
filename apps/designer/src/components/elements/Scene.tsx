import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Skybox } from "./Skybox";
import { Ground } from "./Ground";
import { createModel } from "./Model";
import { CameraControls } from "./Camera";
import { Suspense } from "react";

let scene_variable: THREE.Scene;
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
        <Suspense>
          <CameraControls />
          <Skybox />
          <Ground />
          <SceneInitialize />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Scene;
export { scene_variable };
