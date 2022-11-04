import create from "zustand";
type onBoardStore = {
  openEuropaCard: () => void;
  isEuropaCardOpen: boolean;
  openJayantiCard: () => void;
  isJayantiCardOpen: boolean;
  openYamunaCard: () => void;
  isYamunaCardOpen: boolean;
};
export const onBoardUiStore = create<onBoardStore>((set) => ({
  isEuropaCardOpen: false,
  openEuropaCard: () => {
    set(() => ({
      isEuropaCardOpen: true,
      isJayantiCardOpen: false,
      isYamunaCardOpen: false,
    }));
  },
  isJayantiCardOpen: false,
  openJayantiCard: () => {
    set(() => ({
      isEuropaCardOpen: false,
      isJayantiCardOpen: true,
      isYamunaCardOpen: false,
    }));
  },
  isYamunaCardOpen: false,
  openYamunaCard: () => {
    set(() => ({
      isEuropaCardOpen: false,
      isJayantiCardOpen: false,
      isYamunaCardOpen: true,
    }));
  },
}));
