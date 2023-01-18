import { camera_variable, scene_variable } from "../elements/Scene";
import { gsap } from "gsap";

const SPEED_RATIO = 3;
const LOOP_MODE = 0;
const FROM_FRAME = 0;
const TO_FRAME = 80;

interface animateCamera {
  radius: number;
  alpha: number;
  beta: number;
  target: {
    x: number;
    y: number;
    z: number;
  };
  glbTitle: string;
}

//try to implement intercollisions and better animations and ease in and ease out

function animateActiveCamera({
  radius,
  alpha,
  beta,
  target,
  glbTitle,
}: animateCamera) {
  // const { camera, scene } = useThree();
  // camera_variable.(new Vector3(target.x, target.y, target.z));
  // scene_variable.setRotationFromEuler();
  const camera = camera_variable;
  if (camera === null) {
    return;
  }
  const position = scene_variable.getObjectByName(glbTitle ?? "plot-pool")
    .children[0].position;
  // console.log({ posi_model: position });
  camera.lookAt(position);
  gsap.to(camera.position, {
    duration: SPEED_RATIO,
    repeat: LOOP_MODE,
    x: target.x,
    y: target.y,
    z: target.z,
    ease: "power3.inOut",
  });
}

export default animateActiveCamera;
