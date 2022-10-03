import create from "zustand";
type store = {
  isWelcomeComponentOpen: boolean;
  handleClickOnNewDesign: CallableFunction;
  isNavbarExpand: boolean;
  handleClickOnWelcome: CallableFunction;
  isWelcomePanelActive: boolean;
  isToggled: boolean;
  handleClickForToggle: CallableFunction;
  handleClickOnNewButton: CallableFunction;
  isSavePopupOpen: boolean;
  handleClickOnSaveButton: CallableFunction;
  closeSavePopup: CallableFunction;
};
const navigationUseStore = create<store>((set) => ({
  isWelcomeComponentOpen: false,
  handleClickOnNewDesign: () => {
    set(() => ({
      isWelcomeComponentOpen: true,
    }));
  },

  isWelcomePanelActive: false, //for welcome component
  isNavbarExpand: false, //for navbar by default is closed
  handleClickOnWelcome: () => {
    set(() => ({
      isNavbarExpand: true,
      isWelcomePanelActive: true,
    }));
  },

  isToggled: false,
  handleClickForToggle: (val: boolean) => {
    set(() => ({
      isToggled: !val,
    }));
  },
  handleClickOnNewButton: () => {
    set(() => ({
      isWelcomePanelActive: false,
      isNavbarExpand: false,
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
