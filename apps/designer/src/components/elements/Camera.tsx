import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import useStore from "../../global-stores/store";
import gsap from "gsap";

let camera_variable: THREE.Camera;
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  camera_variable = camera;
  camera.up = new Vector3(0, 1, 0);
  const controls = useRef(null);
  const target = useStore((state) => state.cameraTarget);
  const position = useStore((state) => state.cameraPosition);
  function cameraAnimate() {
    gsap.to(controls.current.target, {
      duration: 1,
      repeat: 0,
      x: target.x,
      y: target.y,
      z: target.z,
      ease: "power3.inOut",
    });
    gsap.to(camera.position, {
      duration: 3,
      repeat: 0,
      x: position.x,
      y: position.y,
      z: position.z,
      ease: "power3.inOut",
    });
  }
  useEffect(() => {
    cameraAnimate();
  }, [target]);
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
    />
  );
};

export { camera_variable, CameraControls };
