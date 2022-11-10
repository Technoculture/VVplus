import create from "zustand";
<<<<<<< HEAD:apps/designer/src/globalStore/Navigation-Store/navigationStore.ts
type navigationStore = {
=======

type navigationStore  = {

>>>>>>> savePopup:apps/designer/globalStore/Navigation-Store/navigationStore.ts
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

>>>>>>> savePopup:apps/designer/globalStore/Navigation-Store/navigationStore.ts
  isWelcomePanelActive: false, //for welcome component
  isNavbarOpen: false, //for navbar by default is closed
  handleClickOnWelcome: () => {
    set(() => ({
      isNavbarOpen: true,
      isWelcomePanelActive: true,
<<<<<<< HEAD:apps/designer/src/globalStore/Navigation-Store/navigationStore.ts
    }));
=======

    })
  )

>>>>>>> savePopup:apps/designer/globalStore/Navigation-Store/navigationStore.ts
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
<<<<<<< HEAD:apps/designer/src/globalStore/Navigation-Store/navigationStore.ts
}));
=======

}))
>>>>>>> savePopup:apps/designer/globalStore/Navigation-Store/navigationStore.ts
export default navigationUseStore;
