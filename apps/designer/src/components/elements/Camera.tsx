import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

let camera_variable: THREE.Camera;
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera_variable = camera;
  camera.up = new Vector3(0, 1, 0);
  const controls = useRef(null);
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      panSpeed={1}
      rotateSpeed={0.6}
      // dampingFactor={0.05}
      minDistance={100}
      maxDistance={300}
      maxPolarAngle={Math.PI / 2}
      target={[0, 25, 0]}
    />
  );
};

export { camera_variable, CameraControls };
