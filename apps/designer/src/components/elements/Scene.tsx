import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Skybox } from "./Skybox";
import { Ground } from "./Ground";
import { LoadModel } from "./Model";
import { CameraControls } from "./Camera";
import { Suspense, useEffect } from "react";
import { cameraInitProps } from "../../../public/cameraPropConstants.json";
import { PoolWater } from "./PoolWater";
import { Loader } from "../Loader";
import navigationUseStore from "../../globalStore/Navigation-Store/navigationStore";

let scene_variable: THREE.Scene;
const Scene = ({ isWelcomePanelActive }: { isWelcomePanelActive: boolean }) => {
  const toggleLoaded = navigationUseStore((state) => state.toggleLoaded);
  const onCanvasCreated = () => {
    toggleLoaded(true);
  };
  useEffect(() => {
    return () => {
      toggleLoaded(false);
    };
  }, []);
  const initPosition = cameraInitProps.initPosition;
  return (
    <div className={`absolute top-0 w-full h-screen z-[1]`}>
      <Canvas
        onCreated={onCanvasCreated}
        camera={{
          position: [initPosition[0], initPosition[1], initPosition[2]],
        }}
      >
        <Suspense fallback={<Loader />}>
          <CameraControls />
          <Skybox />
          <Ground />
          <LoadModel />
          <PoolWater />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Scene;
export { scene_variable };
