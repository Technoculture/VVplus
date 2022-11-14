import Navbar from "./Navbar";
import React from "react";
import { ScriptProps } from "next/script";
import LoadingBar from "./LoadingBar";
import Welcome from "./Welcome";
import NewDesign from "./NewDesign";
import navigationUseStore from "../globalStore/Navigation-Store/navigationStore";
import SavePopup from "./SavePopup";
import { openWelcomeStore } from "../globalStore/Navigation-Store/openWelcomeStore";
import { savePopupStore } from "../globalStore/Navigation-Store/savePopupStore";
const Layout: React.FC<ScriptProps> = ({ children }) => {
  // TODO: improve this type later
  const {
    isNavbarOpen,
    isWelcomePanelActive,
    handleClickOnWelcome,
    handleClickOnNewButton,
    handleClickForToggle,
    isToggled,
  } = navigationUseStore();

  const { isWelcomeComponentOpen, handleClickOnNewDesign } = openWelcomeStore();
  const { handleClickOnSaveButton, closeSavePopup, isSavePopupOpen } =
    savePopupStore();

  return (
    <>
      <Navbar
        isNavbarOpen={isNavbarOpen}
        isToggled={isToggled}
        handleClickForToggle={handleClickForToggle}
        handleClickOnNewButton={handleClickOnNewButton}
        handleClickOnSaveButton={handleClickOnSaveButton}
      />
      {children}
      {isWelcomeComponentOpen === false && (
        <NewDesign handleClickOnNewDesign={handleClickOnNewDesign} />
      )}
      {isWelcomeComponentOpen === true && (
        <Welcome
          handleClickOnWelcome={handleClickOnWelcome}
          isWelcomePanelActive={isWelcomePanelActive}
          handleClickForToggle={handleClickForToggle}
          isToggled={isToggled}
        />
      )}
      {isSavePopupOpen === true && (
        <SavePopup
          closeSavePopup={closeSavePopup}
          isSavePopupOpen={isSavePopupOpen}
        />
      )}
      {isWelcomePanelActive === false && <LoadingBar />}
    </>
  );
};

export default Layout;
