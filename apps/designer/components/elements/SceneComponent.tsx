import React, { useRef, useEffect } from "react";
import {
  Engine,
  Scene,
  MeshBuilder,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
} from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";

const myStyle = {
  width: "100%",
  height: "100%",
};

const ReactCanvas = (props: any) => {
  var canvasRef = useRef(null);
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
      BABYLON.SceneLoader.Append(
        "../../assets/",
        "02 EUROPA ground floor.gltf",
        scene
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
