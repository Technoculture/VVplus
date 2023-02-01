import { useRef, Ref } from "react";
import { Vector3 } from "three";
import create from "zustand";
import { OrbitControls } from "three-stdlib";

// Yet to be updated with isVisible concept with use of Zod and getFile. There will be several changes made later on.
type Store = {
  cameraTarget: Vector3;
  cameraPosition: Vector3;
  floor: number;
  cameraControls: OrbitControls | null;
  updateCameraControls: (controls: OrbitControls) => void;
  changeFloor: (val: number) => void;
  updateCameraTarget: (newTarget: { x: number; y: number; z: number }) => void;
  updateCameraPosition: (newPosition: {
    x: number;
    y: number;
    z: number;
  }) => void;
};

const useStore = create<Store>((set) => ({
  cameraTarget: new Vector3(0, 25, 0),
  cameraPosition: new Vector3(175, 40, -80),
  floor: 8,
  changeFloor(val) {
    set(() => ({ floor: val }));
  },
  cameraControls: null,
  updateCameraControls(controls) {
    set(() => ({ cameraControls: controls }));
  },
  updateCameraTarget(newTarget) {
    set(() => ({
      cameraTarget: new Vector3(newTarget.x, newTarget.y, newTarget.z),
    }));
  },
  updateCameraPosition(newPosition) {
    set(() => ({
      cameraPosition: new Vector3(newPosition.x, newPosition.y, newPosition.z),
    }));
  },
}));

export default useStore;

// fix the store to return the value of visibility in order to check what floor is to be toggled off including all features in the floor
// when a floor is turned off, all structures that are present in the floor will be turned off as well
