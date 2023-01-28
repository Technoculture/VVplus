import { Vector3 } from "three";
import create from "zustand";

// Yet to be updated with isVisible concept with use of Zod and getFile. There will be several changes made later on.
type Store = {
  target: Vector3;
  floor: number;
  changeFloor: (val: number) => void;
  changeTarget: (newTarget: { x: number; y: number; z: number }) => void;
};

const useStore = create<Store>((set) => ({
  target: new Vector3(0, 25, 0),
  floor: 8,
  changeFloor(val) {
    set(() => ({ floor: val }));
  },
  changeTarget: (newTarget) => {
    set(() => ({
      target: new Vector3(newTarget.x, newTarget.y, newTarget.z),
    }));
  },
}));

export default useStore;

// fix the store to return the value of visibility in order to check what floor is to be toggled off including all features in the floor
// when a floor is turned off, all structures that are present in the floor will be turned off as well
