import create from "zustand";
type navigationStore = {
  isNavbarOpen: boolean;
  isWelcomePanelActive: boolean;
  isToggled: boolean;
  isLoaded: boolean;
  toggleLoaded: () => void;
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
    set(() => ({
      isWelcomePanelActive: false,
      isNavbarOpen: false,
      isToggled: false,
    }));
  },
  handleClickForToggle: () => {
    set((state) => ({
      isToggled: !state.isToggled,
    }));
  },
  isLoaded: false,
  toggleLoaded: () => {
    set((state) => ({
      isLoaded: !state.isLoaded,
    }));
  },
}));
export default navigationUseStore;
