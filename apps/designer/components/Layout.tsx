import Navbar from "./Navbar";
import React from "react";

import { ScriptProps } from "next/script";
import LoadingBar from "./LoadingBar";
import Welcome from "./Welcome";
import NewDesign from "./NewDesign";
import navigationUseStore from "../globalStore/navigationStore";
import SavePopup from "./SavePopup";

const Layout: React.FC<ScriptProps> = ({ children }) => {
  // TODO: improve this type later
  const {
    isNavbarExpand,
    isWelcomePanelActive,
    handleClickOnWelcome,
    isWelcomeComponentOpen,
    handleClickOnNewDesign,
    isToggled,
    handleClickForToggle,
    handleClickOnNewButton,
    handleClickOnSaveButton,
    closeSavePopup,
    isSavePopupOpen,
  } = navigationUseStore();

  return (
    <>
      <Navbar
        isNavbarExpand={isNavbarExpand}
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
