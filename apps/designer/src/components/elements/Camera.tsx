import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import cameraControlsStore from "../../globalStore/Navigation-Store/cameraControlsStore";
import gsap from "gsap";
import { cameraInitProps } from "../../../public/cameraPropConstants.json";

const CameraControls = () => {
  //Initialize camera controls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef(null);
  const target = cameraControlsStore((state) => state.cameraTarget);
  const position = cameraControlsStore((state) => state.cameraPosition);
  // const cameraInitValues = cameraPropConstants.cameraInitProps;
  // camera up vector set to y axis to determine up direction
  camera.up = new Vector3(...cameraInitProps.upVector);

  // animation function for camera movement based on target and position
  function cameraAnimate(): void {
    const timeline = gsap.timeline();

    // animate camera to new position
    timeline.to(camera.position, {
      duration: 2,
      repeat: 0,
      x: position.x,
      y: position.y,
      z: position.z,
      ease: "power3.inOut",
    });

    // animate camera target to new target
    timeline.to(
      controls.current.target,
      {
        duration: 2,
        repeat: 0,
        x: target.x,
        y: target.y,
        z: target.z,
        ease: "power3.inOut",
      },
      "<"
    );
  }
  // on change of target or position, animate camera
  useEffect(() => {
    cameraAnimate();
  }, [target]);

  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      // movement speed of camera controls
      panSpeed={cameraInitProps.panSpeed}
      // rotation speed of camera controls
      rotateSpeed={cameraInitProps.rotateSpeed}
      // dampingFactor={0.05}
      // minimum distance of camera can zoom in from target
      minDistance={cameraInitProps.minDistance}
      // maximum distance  camera can zoom out from target
      maxDistance={cameraInitProps.maxDistance}
      // maximum angle of camera from target
      maxPolarAngle={Math.PI / 2}
    />
  );
};

export { CameraControls };
