import React, { useEffect, useState } from "react";
import { Engine, Vector3, Scene, HemisphericLight } from "@babylonjs/core";
// import useModel from "./useModel";
// import useStore from "../global-stores/store";
// import data from "../public/data.json";

// Engine to be attatched to the canvas needs to have the following - Scene -> Camera/Camera Animations, Light, Skybox, Fog, Ground, Meshes
// we need custom hooks for all of the above

export default function useScene(canvasRef: React.MutableRefObject<null>) {
  const [sceneModel, setScene] = useState<Scene>();
  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);
    const light = new HemisphericLight("light", new Vector3(-1, 1, -1), scene);
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
