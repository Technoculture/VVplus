import create , { StateCreator}from "zustand";
import { persist, devtools } from 'zustand/middleware';
interface NavigationStore {
  isNavbarOpen: boolean;
  handleClickOnWelcome: () => void;
  isWelcomePanelActive: boolean;
  isToggled: boolean;
  handleClickOnNewButton: () => void;
  handleClickForToggle: () => void;
};
  const navigationUseStore = create(persist<NavigationStore>((set) => ({
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
}),{
  name: 'navigation-state',
  getStorage: ()=> localStorage,

}
))
export default navigationUseStore;
