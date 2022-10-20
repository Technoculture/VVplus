import createAnimation from "./createAnimation";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core";

const SPEED_RATIO = 4;
const LOOP_MODE = false;
const FROM_FRAME = 0;
const TO_FRAME = 100;

interface animateCamera {
  radius: number;
  alpha: number;
  beta: number;
  target: {
    x: number;
    y: number;
    z: number;
  };
}

//try to implement intercollisions and better animations and ease in and ease out

function animateActiveCamera(
  scene: Scene,
  { radius, alpha, beta, target }: animateCamera
) {
  const camera = scene.activeCamera as ArcRotateCamera;
  console.log("animate");
  if (camera === null) {
    return;
  }
  camera.animations = [
    createAnimation({
      property: "radius",
      from: camera.radius,
      to: radius,
    }),
    createAnimation({
      property: "beta",
      from: camera.beta,
      to: beta,
    }),
    createAnimation({
      property: "alpha",
      from: camera.alpha,
      to: alpha,
    }),
    createAnimation({
      property: "target.x",
      from: camera.target.x,
      to: target.x,
    }),
    createAnimation({
      property: "target.y",
      from: camera.target.y,
      to: target.y,
    }),
    createAnimation({
      property: "target.z",
      from: camera.target.z,
      to: target.z,
    }),
  ];
  scene.beginAnimation(camera, FROM_FRAME, TO_FRAME, LOOP_MODE, SPEED_RATIO);
}

export default animateActiveCamera;
