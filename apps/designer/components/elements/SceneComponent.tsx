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
import { useQuery } from "react-query";
import axios from "axios";

const fetchBabylon = () => {
  return axios.get("https://vvplus3d.s3.ap-southeast-1.amazonaws.com/gltf/");
};

const myStyle = {
  width: "100%",
  height: "100%",
};

const ReactCanvas = (props: any) => {
  const canvasRef = useRef(null);

  const { data, isLoading, isFetching, error } = useQuery(
    "LoadFile",
    fetchBabylon,
    {
      cacheTime: 50000,
      staleTime: 30000,
    }
  );
  if (isLoading) {
    console.log("file is loading...");
  }
  if (isFetching) {
    console.log("file is fetching");
  }

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
        "https://vvplus3d.s3.ap-southeast-1.amazonaws.com/gltf/",
        "groundfloor.gltf",
        scene,
        (newMeshes) => {
          newMeshes[0].position.y = 1;
          newMeshes[0].scaling = new Vector3(3, 3, 3);
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
