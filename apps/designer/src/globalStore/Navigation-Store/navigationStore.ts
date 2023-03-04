import { Cache } from "three";
import create from "zustand";
type navigationStore = {
  isNavbarOpen: boolean;
  isWelcomePanelActive: boolean;
  isToggled: boolean;
  isLoaded: boolean;
  toggleLoaded: (isLoaded: boolean) => void;
  handleClickOnWelcome: () => void;
  handleClickOnNewButton: () => void;
  handleClickForToggle: () => void;
};
const navigationUseStore = create<navigationStore>((set) => ({
  isWelcomePanelActive: false, //for welcome component
  isNavbarOpen: false, //for navbar by default is closed
  handleClickOnWelcome: () => {
    set(() => ({
      isNavbarOpen: true,
      isWelcomePanelActive: true,
    }));
  },
  isToggled: false,
  handleClickOnNewButton: () => {
    Cache.clear();
    set(() => ({
      isWelcomePanelActive: false,
      isNavbarOpen: false,
      isToggled: false,
      isLoaded: false,
    }));
  },
  handleClickForToggle: () => {
    set((state) => ({
      isToggled: !state.isToggled,
    }));
  },
  isLoaded: false,
  toggleLoaded: (isLoaded) => {
    set(() => ({
      isLoaded: isLoaded,
    }));
  },
}));
export default navigationUseStore;
