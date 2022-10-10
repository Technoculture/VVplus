import create from "zustand";
type store = {
  isWelcomeComponentOpen: boolean;
  handleClickOnNewDesign: () => void;
};
export const openWelcomeStore = create<store>((set) => ({
  isWelcomeComponentOpen: false,
  handleClickOnNewDesign: () => {
    set(() => ({
      isWelcomeComponentOpen: true,
    }));
  },
}));
