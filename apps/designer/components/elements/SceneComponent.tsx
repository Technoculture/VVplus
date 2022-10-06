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
import data from "../../public/house.json";
import useStore from "../../global-stores/store";
// import navigationUseStore from "../../globalStore/navigationStore";
// import getFileName from "../../util/getFile";
// import useModel from "../../util/useModel";

//currently this is the scene which is being deployed on the active website
//The zod error is not fixed so donot include and use getFileName() here in any manner.
//After refactoring and development of the code on a furthr basis, the code will be completelty changed with the use of Custom hooks and Zustand, Zod
//Using data.json currently instead of house.json since it is not usable yet.

const config = {
  amount: { x: 50, z: 50 },
  separation: 2,
};

// interface ReactCanvasProps {
//   className: string;
// }

const ReactCanvas = ({ isActive }: { isActive: boolean }) => {
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
      camera.upperBetaLimit = Math.PI / 2;
      const light = new HemisphericLight(
        "light",
        new Vector3(-1, 1, -1),
        scene
      );
      light.intensity = 0.7;
      const skyBox = BABYLON.MeshBuilder.CreateBox(
        "skyBox",
        { size: 10000.0 },
        scene
      );
      scene.clearColor = new BABYLON.Color4(0.5, 0.8, 0.5, 0.1);
      scene.ambientColor = new BABYLON.Color3(0.3,0.3,0.3);
      const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
      skyboxMaterial.backFaceCulling = false;
      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
        "https://assets.vvplus.cc/misc/skybox",
        scene,
        ["_px.png", "_py.png", "_pz.png", "_nx.png", "_ny.png", "_nz.png"]
      );
      skyboxMaterial.reflectionTexture.coordinatesMode =
        BABYLON.Texture.SKYBOX_MODE;
      // skyboxMaterial.emissiveColor = new BABYLON.Color3(0.77, 0.69, 0.69);
      skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
      skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
      skyBox.material = skyboxMaterial;
      skyBox.infiniteDistance = true;
      skyboxMaterial.disableLighting = true;
      scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
      scene.fogDensity = 0.001;
      scene.fogStart = 5000.0;
      scene.fogEnd = 6000.0;
      scene.fogColor = new BABYLON.Color3(0.796, 0.769, 0.769);
      const ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: 12000,
        height: 12000,
      });
      ground.position.y = -10;
      const groundMat = new BABYLON.StandardMaterial("groundMat");
      groundMat.diffuseTexture = new BABYLON.Texture(
        "https://assets.vvplus.cc/misc/ground_texture.png"
      );
      groundMat.diffuseTexture.hasAlpha = true;
      ground.material = groundMat;
      //code to be refactored more later
      data.floors.map((element) => {
        element.floorStructure.map((e) => {
          BABYLON.SceneLoader.ImportMesh(
            "",
            data?.baseUrl || " ",
            e.file,
            scene,
            (newMeshes) => {
              if (newMeshes[0]) {
                newMeshes[0].position.y = 0;
                newMeshes[0].position.x = 0;
                newMeshes[0].position.z = 300;
                newMeshes[0].scaling = new Vector3(40, 40, 40);
              }
            }
          );
        });
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

  return (
    <canvas
      className={`
      absolute top-0 w-full h-screen
      ${isActive === true ? "z-[1]" : "z-[-100]"}`}
      ref={canvasRef}
    ></canvas>
  );
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

// data[0]?.floors.map((element) => {
//   return BABYLON.SceneLoader.ImportMesh(
//     "",
//     data[0]?.url || " ",
//     element.file,
//     scene,
//     (newMeshes) => {
//       if (newMeshes[0]) {
//         newMeshes[0].position.y = 0;
//         newMeshes[0].scaling = new Vector3(1, 1, 1);
//       }
//     }
//   );
// });
