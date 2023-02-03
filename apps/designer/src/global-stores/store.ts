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
  updateCameraTarget: (newTarget: number[]) => void;
  updateCameraPosition: (newPosition: number[]) => void;
};

const useStore = create<Store>((set) => ({
  cameraTarget: new Vector3(0, 70, 0),
  cameraPosition: new Vector3(230, 25, 0),
  floor: 0,
  changeFloor(val) {
    set(() => ({ floor: val }));
  },
  cameraControls: null,
  updateCameraControls(controls) {
    set(() => ({ cameraControls: controls }));
  },
  updateCameraTarget(newTarget) {
    set(() => ({
      cameraTarget: new Vector3(...newTarget),
    }));
  },
  updateCameraPosition(newPosition) {
    set(() => ({
      cameraPosition: new Vector3(...newPosition),
    }));
  },
}));

export default useStore;

// fix the store to return the value of visibility in order to check what floor is to be toggled off including all features in the floor
// when a floor is turned off, all structures that are present in the floor will be turned off as well
