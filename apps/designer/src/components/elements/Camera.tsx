import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import useStore from "../../global-stores/store";

let camera_variable: THREE.Camera;
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera_variable = camera;
  camera.up = new Vector3(0, 1, 0);
  const controls = useRef(null);
  const getTarget = useStore((state) => state.target);

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
      target={getTarget}
    />
  );
};

export { camera_variable, CameraControls };
