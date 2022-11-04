import create from "zustand";
<<<<<<< HEAD:apps/designer/src/globalStore/Navigation-Store/navigationStore.ts
type navigationStore = {
=======
type navigationStore  = {
>>>>>>> 6946c4360370fc5d3085174bddf92f597dcc339f:apps/designer/src/globalStore/Navigation-Store/Navigation-Store/navigationStore.ts
  isNavbarOpen: boolean;
  handleClickOnWelcome: () => void;
  isWelcomePanelActive: boolean;
  isToggled: boolean;
  handleClickOnNewButton: () => void;
  handleClickForToggle: () => void;
};
<<<<<<< HEAD:apps/designer/src/globalStore/Navigation-Store/navigationStore.ts
const navigationUseStore = create<navigationStore>((set) => ({
=======
  const navigationUseStore = create<navigationStore>((set) => ({
>>>>>>> 6946c4360370fc5d3085174bddf92f597dcc339f:apps/designer/src/globalStore/Navigation-Store/Navigation-Store/navigationStore.ts
  isWelcomePanelActive: false, //for welcome component
  isNavbarOpen: false, //for navbar by default is closed
  handleClickOnWelcome: () => {
    set(() => ({
      isNavbarOpen: true,
      isWelcomePanelActive: true,
    })
  )
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
}))
export default navigationUseStore;
