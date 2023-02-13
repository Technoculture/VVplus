import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { Skybox } from "./Skybox";
import { Ground } from "./Ground";
import { CreateModel } from "./Model";
import { CameraControls } from "./Camera";
import { Suspense } from "react";
import { cameraInitProps } from "../../../public/cameraPropConstants.json";

let scene_variable: THREE.Scene;
const Scene = ({ isWelcomePanelActive }: { isWelcomePanelActive: boolean }) => {
  function SceneInitialize() {
    const { scene } = useThree();
    scene_variable = scene;
    return null;
  }
  const initPosition = cameraInitProps.initPosition;
  return (
    <div
      className={`
  absolute top-0 w-full h-screen
  ${isWelcomePanelActive === true ? "z-[1] visible" : "z-[-100] hidden"}`}
    >
      <Canvas
        camera={{
          position: [initPosition[0], initPosition[1], initPosition[2]],
        }}
      >
        <Suspense>
          <CameraControls />
          <Skybox />
          <Ground />
          <SceneInitialize />
          <CreateModel />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Scene;
export { scene_variable };
