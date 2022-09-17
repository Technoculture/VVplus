import create from "zustand";

// Yet to be updated with isVisible concept with use of Zod and getFile. There will be several changes made later on.
type Store = {
  floor: number;
  changeFloor: (val: number) => void;
};

const useStore = create<Store>((set) => ({
  floor: 8,
  changeFloor(val) {
    set(() => ({ floor: val }));
  },
}));

export default useStore;

// fix the store to return the value of visibility in order to check what floor is to be toggled off including all features in the floor
// when a floor is turned off, all structures that are present in the floor will be turned off as well
