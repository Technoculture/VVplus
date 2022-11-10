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
<<<<<<< HEAD:apps/designer/src/globalStore/Navigation-Store/savePopupStore.ts
    }));
=======

    }))

>>>>>>> savePopup:apps/designer/globalStore/Navigation-Store/savePopupStore.ts
  },
  closeSavePopup: () => {
    set(() => ({
      isSavePopupOpen: false,
    }));
  },
}));
