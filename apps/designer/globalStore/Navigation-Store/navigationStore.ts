import create from "zustand";
type store = {
  
  isNavbarOpen: boolean;
  handleClickOnWelcome: () => void;
  isWelcomePanelActive: boolean;
  isToggled: boolean;
  handleClickForToggle: () => void;
  handleClickOnNewButton: () => void;
  isSavePopupOpen: boolean;
  handleClickOnSaveButton: () => void;
  closeSavePopup: () => void;
};
const navigationUseStore = create<store>((set) => ({

  isWelcomePanelActive: false, //for welcome component
  isNavbarOpen: false, //for navbar by default is closed
  handleClickOnWelcome: () => {
    set(() => ({
      isNavbarOpen: true,
      isWelcomePanelActive: true,
    }));
  },

  isToggled: false,
  handleClickForToggle: () => {
    set((state) => ({
      isToggled: !state.isToggled,
    }));
  },
  handleClickOnNewButton: () => {
    set(() => ({
      isWelcomePanelActive: false,
      isNavbarOpen: false,
      isToggled: false,
    }));
  },

  // for save Button
  isSavePopupOpen: false,
  handleClickOnSaveButton: () => {
    set(() => ({
      isSavePopupOpen: true,
    }));
  },
  closeSavePopup: () => {
    set(() => ({
      isSavePopupOpen: false,
    }));
  },
}));
export default navigationUseStore;
