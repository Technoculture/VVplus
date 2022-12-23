import * as BABYLON from "@babylonjs/core";
// import data from "../../../public/house.json";
import data from "../../../public/railings_sf.json";
import { Vector3, ArcRotateCamera } from "@babylonjs/core";
import { scene_variable } from "./Scene";
import { mesh_list, choice_list } from "./models";

export async function selector(index: number, category: string) {
  choice_list.map((e)=>{
    if(e.role === category && e.index === index){
      e.mesh.setEnabled(true);
    }else if(e.role === category && e.index !== index){
      e.mesh.setEnabled(false);
    }
  })
}

export function floorSelector(floorId: string) {
  // set camera to bird's eye view if floor != outdoor, else set camera to frontal view
  if (floorId === "outdoor") {
    //if outdoor is selected
    const freeCamera = new ArcRotateCamera(
      "camera",
      -Math.PI * 3,
      Math.PI / 2,
      1000,
      new Vector3(-300, 200, 230),
      scene_variable
    );
    freeCamera.wheelPrecision = 1;
    freeCamera.panningSensibility = 10;
    freeCamera.lowerRadiusLimit = 500;
    freeCamera.upperRadiusLimit = 2000;
    freeCamera.upperBetaLimit = Math.PI / 2;
    scene_variable.activeCamera = freeCamera;
    const canvas = scene_variable.getEngine().getRenderingCanvas();
    scene_variable.activeCamera.attachControl(canvas, true);

    mesh_list.map((e) => {
      e.mesh.setEnabled(true);
    });
  } else if (floorId === "roof") {
    //if roof is selected
    const freeCamera = new ArcRotateCamera(
      "camera",
      0,
      0,
      1000,
      new Vector3(150, 300, 330),
      scene_variable
    );
    freeCamera.wheelPrecision = 1;
    freeCamera.panningSensibility = 10;
    freeCamera.lowerRadiusLimit = 500;
    freeCamera.upperRadiusLimit = 2000;
    freeCamera.upperBetaLimit = Math.PI / 2;
    scene_variable.activeCamera = freeCamera;
    const canvas = scene_variable.getEngine().getRenderingCanvas();
    scene_variable.activeCamera.attachControl(canvas, true);

    mesh_list.map((e) => {
      e.mesh.setEnabled(true);
    });
  } else if (floorId === "first-floor") {
    //if first floor is selected
    mesh_list.map((e) => {
      if (
        e.floorName === "second-floor" ||
        e.floorName === "roof" ||
        e.floorName === "mumty"
      ) {
        e.mesh.setEnabled(false);
      }
    });

    const freeCamera = new ArcRotateCamera(
      "camera",
      0,
      0,
      1000,
      new Vector3(200, 100, 330),
      scene_variable
    );
    freeCamera.wheelPrecision = 1;
    freeCamera.panningSensibility = 10;
    freeCamera.lowerRadiusLimit = 500;
    freeCamera.upperRadiusLimit = 2000;
    freeCamera.upperBetaLimit = Math.PI / 2;
    scene_variable.activeCamera = freeCamera;
    const canvas = scene_variable.getEngine().getRenderingCanvas();
    scene_variable.activeCamera.attachControl(canvas, true);
  } else if (floorId === "second-floor") {
    // if second floor is selected
    mesh_list.map((e) => {
      if (e.floorName === "roof" || e.floorName === "mumty") {
        e.mesh.setEnabled(false);
      }
    });

    const freeCamera = new ArcRotateCamera(
      "camera",
      0,
      0,
      1000,
      new Vector3(200, 100, 330),
      scene_variable
    );
    freeCamera.wheelPrecision = 1;
    freeCamera.panningSensibility = 10;
    freeCamera.lowerRadiusLimit = 500;
    freeCamera.upperRadiusLimit = 2000;
    freeCamera.upperBetaLimit = Math.PI / 2;
    scene_variable.activeCamera = freeCamera;
    const canvas = scene_variable.getEngine().getRenderingCanvas();
    scene_variable.activeCamera.attachControl(canvas, true);
  }
}
