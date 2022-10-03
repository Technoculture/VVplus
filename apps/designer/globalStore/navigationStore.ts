import create from "zustand";
type store = {
  openWelcome: boolean;
  handleClick: CallableFunction;
  myNavbar: boolean;
  welcomeClick: CallableFunction;
  isActive: boolean;
  toggleButton: boolean;
  myToggleButton: CallableFunction;
  newButtonClick: CallableFunction;
  openPopup: boolean;
  clickSaveButton: CallableFunction;
  closeSaveButton: CallableFunction;
};
const navigationUseStore = create<store>((set) => ({
  openWelcome: false,
  handleClick: () => {
    set(() => ({
      openWelcome: true,
    }));
  },

  isActive: false, //for welcome component
  myNavbar: false, //for navbar by default is closed
  welcomeClick: () => {
    set(() => ({
      myNavbar: true,
      isActive: true,
    }));
  },

  toggleButton: false,
  myToggleButton: (val: boolean) => {
    set(() => ({
      toggleButton: !val,
    }));
  },
  newButtonClick: () => {
    set(() => ({
      isActive: false,
      myNavbar: false,
      toggleButton: false,
    }));
  },

  // for save Button
  openPopup: false,
  clickSaveButton: () => {
    set(() => ({
      openPopup: true,
    }));
  },
  closeSaveButton: () => {
    set(() => ({
      openPopup: false,
    }));
  },
}));
export default navigationUseStore;
