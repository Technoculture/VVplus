import React, { useRef, useEffect } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import * as BABYLON from "@babylonjs/core";

const myStyle = {
  width: "100%",
  height: "100%",
};

const ReactCanvas = (props: any) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new Engine(canvas, true);
    const createScene = function () {
      const scene = new Scene(engine);
      //   MeshBuilder.CreateBox("box", {});
      const camera = new ArcRotateCamera(
        "camera",
        -Math.PI / 2,
        Math.PI / 2.5,
        15,
        new Vector3(0, 0, 0)
      );
      camera.attachControl(canvas, true);
      const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
      light.intensity = 0.7;
      BABYLON.SceneLoader.ImportMesh(
        "",
        "../../assets/",
        "02_EUROPA_ground_floor.gltf",
        scene,
        (newMeshes) => {
          newMeshes[0].position.y = 1;
          newMeshes[0].scaling = new Vector3(80, 80, 80);
        }
      );
      return scene;
    };
    const scene = createScene();
    engine.runRenderLoop(function () {
      scene.render();
    });
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }, []);

  return <canvas style={myStyle} ref={canvasRef} {...props}></canvas>;
};
export default ReactCanvas;
