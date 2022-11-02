import create from "zustand";

type popupStore = {
  isSavePopupOpen: boolean;
  handleClickOnSaveButton: () => void;
  closeSavePopup: () => void;
};
export const savePopupStore = create<popupStore>((set) => ({
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
}));
