import { gsap } from "gsap";
import { camera_variable } from "../elements/Camera";

const SPEED_RATIO = 3;
const LOOP_MODE = 0;
const FROM_FRAME = 0;
const TO_FRAME = 80;

interface animateCamera {
  position: {
    x: number;
    y: number;
    z: number;
  };
}

//try to implement intercollisions and better animations and ease in and ease out

function AnimateActiveCamera({ position }: animateCamera) {
  const camera = camera_variable;
  if (camera === null) {
    return;
  }
  gsap.to(camera.position, {
    duration: SPEED_RATIO,
    repeat: LOOP_MODE,
    x: position.x,
    y: position.y,
    z: position.z,
    ease: "power3.inOut",
  });
}

export default AnimateActiveCamera;
