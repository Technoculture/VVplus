import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

// export function CameraControls() {
//   const freeCamera = new ArcRotateCamera(
//     "camera",
//     -Math.PI * 3,
//     Math.PI / 2,
//     1000,
//     new Vector3(-300, 200, 230),
//     scene
//   );
//   freeCamera.wheelPrecision = 1;
//   freeCamera.panningSensibility = 10;
//   freeCamera.lowerRadiusLimit = 500;
//   freeCamera.upperRadiusLimit = 2000;
//   freeCamera.upperBetaLimit = Math.PI / 2;
//   scene.activeCamera = freeCamera;
//   const canvas = scene.getEngine().getRenderingCanvas();
//   scene.activeCamera.attachControl(canvas, true);
// }
let camera_variable: THREE.Camera;
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

export { camera_variable, CameraControls };
