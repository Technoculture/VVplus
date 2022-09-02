import React, { useRef, useEffect } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  Color4,
} from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import * as BABYLON from "@babylonjs/core";
import data from "../../public/data.json"

const myStyle = {
  width: "100%",
  height: "100%",
};

const config = {
  amount: { x: 50, z: 50 },
  separation: 2,
  frameRate: 60,
  animation: {
    length: 360,
    speed: 8,
  },
};

const ReactCanvas = (props: any) => {
  const canvasRef = useRef(null);
  const minZ = -((config.amount.z * config.separation) / 2);
  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new Engine(canvas, true);
    const createScene = function () {
      const scene = new Scene(engine);
      // scene.clearColor=new Color4(211, 235, 231, 1.0)
      //   MeshBuilder.CreateBox("box", {});
      const camera = new ArcRotateCamera(
        "camera",
        -Math.PI / 2,
        Math.PI / 2.5,
        minZ,
        // new Vector3(0, 100, -400)
        new Vector3(1, 200, -600)
      );
      camera.attachControl(canvas, true);
      // camera.wheelPrecision=1
      // camera.panningSensibility=10
      camera.lowerRadiusLimit = 100;
      camera.upperRadiusLimit = 50;
      const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
      light.intensity = 0.7;
      //code to be refactored more later
      data[0].floors.map((element)=>{
        return(
          BABYLON.SceneLoader.ImportMesh(
            "",
            data[0].url,
            element.file,
            scene,
            (newMeshes)=>{
              newMeshes[0].position.x=0
              newMeshes[0].position.y=0
              newMeshes[0].position.z=0
              newMeshes[0].scaling = new Vector3(1,1,1)
            }
          )
        )
      })
      return scene;
    };
    const scene = createScene();
    engine.runRenderLoop(function () {
      scene.render();
    });
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }, [minZ]);

  return <canvas style={myStyle} ref={canvasRef} {...props}></canvas>;
};
export default ReactCanvas;
