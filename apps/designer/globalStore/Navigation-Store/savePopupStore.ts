import create from "zustand";
import {persist} from 'zustand/middleware'
interface PopupStore {
  isSavePopupOpen: boolean;
  handleClickOnSaveButton: () => void;
  closeSavePopup: () => void;
};
export const savePopupStore = create(persist<PopupStore>((set) => ({
  isSavePopupOpen: false,
  handleClickOnSaveButton: () => {
    set(() => ({
      isSavePopupOpen: true,
    }))
  },
  closeSavePopup: () => {
    set(() => ({
      isSavePopupOpen: false,
    }));
  },
}), {
  name: 'savaPopup-state',
  getStorage:()=>localStorage,

}));


