import React, { useRef } from "react";
import "@babylonjs/loaders/glTF";
// import * as BABYLON from "@babylonjs/core";
import useScene from "../../util/useScene";
import data from "../../public/data.json";
// import useStore from "../../global-stores/store";
import useModel from "../../util/useModel";

//Work under progress, the demo component contains the code that will use Zod and React Custom Hooks in order to render the scene. This will be a part of the code later on when the work with Zod is complete
const myStyle = {
  width: "70vw",
  height: "90vh",
};

const Canvas = () => {
  // const store = useStore();
  const canvasRef = useRef(null);
  const sceneModel = useScene(canvasRef);
  const buildingData = data[0].floors;
  //issue here -> repeated renderings of the model; doesnt work with slider for the floors
  useModel(buildingData[0].file, sceneModel, true);
  // useModel(buildingData[1].file, sceneModel, store.floor>=1);
  // useModel(buildingData[2].file, sceneModel, store.floor>=2);
  // useModel(buildingData[3].file, sceneModel, store.floor>=3);
  // useModel(buildingData[4].file, sceneModel, store.floor>=4);
  return <canvas style={myStyle} ref={canvasRef}></canvas>;
};
export default Canvas;

// make a function to cover up the canvas using z-index/ use a useState
