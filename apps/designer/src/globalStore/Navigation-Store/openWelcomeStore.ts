import create from "zustand";
type openWelcomeStore = {
  isWelcomeComponentOpen: boolean;
  handleClickOnNewDesign: () => void;
};
export const openWelcomeStore = create<openWelcomeStore>((set) => ({
  isWelcomeComponentOpen: false,
  handleClickOnNewDesign: () => {
    set((state) => ({
      isWelcomeComponentOpen: !state.isWelcomeComponentOpen,
    }));
  },
}));
