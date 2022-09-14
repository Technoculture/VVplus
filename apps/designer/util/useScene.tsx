import React, { useEffect, useState } from "react";
import {
  Engine,
  Vector3,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
} from "@babylonjs/core";
// import useModel from "./useModel";
// import useStore from "../global-stores/store";
// import data from "../public/data.json";

export default function useScene(canvasRef: React.MutableRefObject<null>) {
  const [sceneModel, setScene] = useState<Scene>();
  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    const camera = new ArcRotateCamera(
      "camera",
      -Math.PI / 3,
      Math.PI / 2.5,
      1000,
      new Vector3(0, 100, 100),
      scene
    );
    camera.attachControl(canvas, true);
    camera.wheelPrecision = 1;
    camera.panningSensibility = 10;
    camera.lowerRadiusLimit = 500;
    camera.upperRadiusLimit = 2000;
    const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
    light.intensity = 0.7;
    engine.runRenderLoop(function () {
      scene.render();
    });
    window.addEventListener("resize", function () {
      engine.resize();
    });
    setScene(scene);
  }, [canvasRef]);

  return sceneModel as Scene;
}

// fix camera angles