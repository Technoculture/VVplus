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
import data from "../../public/data.json";
import useStore from "../../global-stores/store";
// import getFileName from "../../util/getFile";
// import useModel from "../../util/useModel";

//currently this is the scene which is being deployed on the active website
//The zod error is not fixed so donot include and use getFileName() here in any manner.
//After refactoring and development of the code on a furthr basis, the code will be completelty changed with the use of Custom hooks and Zustand, Zod
//Using data.json currently instead of house.json since it is not usable yet.

const myStyle = {
  width: "100%",
  height: "100%",
};

const config = {
  amount: { x: 50, z: 50 },
  separation: 2,
};

const ReactCanvas = () => {
  const canvasRef = useRef(null);
  const store = useStore();
  // console.log(getFileName());
  // console.log(store.floor);
  const minZ = -((config.amount.z * config.separation) / 2);
  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new Engine(canvas, true);
    const createScene = function () {
      const scene = new Scene(engine);
      const camera = new ArcRotateCamera(
        "camera",
        -Math.PI * 3,
        Math.PI / 2,
        1000,
        new Vector3(-300, 200, 230),
        scene
      );
      camera.attachControl(canvas, true);
      camera.wheelPrecision = 1;
      camera.panningSensibility = 10;
      camera.lowerRadiusLimit = 500;
      camera.upperRadiusLimit = 2000;
      const light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
      light.intensity = 0.7;
      //code to be refactored more later
      data[0]?.floors.map((element) => {
        return BABYLON.SceneLoader.ImportMesh(
          "",
          data[0]?.url || " ",
          element.file,
          scene,
          (newMeshes) => {
            if (newMeshes[0]) {
              newMeshes[0].position.y = 0;
              newMeshes[0].scaling = new Vector3(1, 1, 1);
            }
          }
        );
      });
      return scene;
    };
    const scene = createScene();
    engine.runRenderLoop(function () {
      scene.render();
    });
    window.addEventListener("resize", function () {
      engine.resize();
    });
  }, [minZ, store.floor]);

  return <canvas style={myStyle} ref={canvasRef}></canvas>;
};
export default ReactCanvas;

/* data[0].floors.map((element)=>{
        return(
          BABYLON.SceneLoader.ImportMesh(
            "",
            data[0].url,
            element.file,
            scene,
            (newMeshes)=>{
              // newMeshes[0].position.x=0
              newMeshes[0].position.y=0
              // newMeshes[0].position.z=0
              newMeshes[0].scaling = new Vector3(1,1,1)
            }
          )
        )
      }) */

/*
      for (let i = 0; i <= store.floor; i++) {
        BABYLON.SceneLoader.ImportMesh(
          "",
          data[0].url,
          buildingData[i].file,
          scene,
          (newMeshes) => {
            newMeshes[0].position.y = 0;
            newMeshes[0].scaling = new Vector3(1, 1, 1);
            // newMeshes[0].alphaIndex = 0
          }
        );
      }
      */
