import create from "zustand";
import { persist } from "zustand/middleware";
type store = {
  isWelcomeComponentOpen: boolean;
  handleClickOnNewDesign: () => void;
};
export const openWelcomeStore = create(persist<store>((set) => ({
  isWelcomeComponentOpen: false,
  handleClickOnNewDesign: () => {
    set(() => ({
      isWelcomeComponentOpen: true,
    }));
  },
}),{
  name: 'openWelcome- state',
  getStorage: ()=>localStorage,
}));
