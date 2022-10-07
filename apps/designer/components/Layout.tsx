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
    myNavbar,
    isActive,
    welcomeClick,
    openWelcome,
    handleClick,
    toggleButton,
    myToggleButton,
    newButtonClick,
    clickSaveButton,
    closeSaveButton,
    openPopup,
    toggleFreeCamera,
    toggleCameraButton,
  } = navigationUseStore();

  return (
    <>
      <Navbar
        myNavbar={myNavbar}
        toggleButton={toggleButton}
        myToggleButton={myToggleButton}
        newButtonClick={newButtonClick}
        clickSaveButton={clickSaveButton}
        toggleFreeCamera={toggleFreeCamera}
        toggleCameraButton={toggleCameraButton}
      />
      {children}
      {openWelcome === false && <NewDesign handleClick={handleClick} />}
      {openWelcome === true && (
        <Welcome
          welcomeClick={welcomeClick}
          isActive={isActive}
          myToggleButton={myToggleButton}
          toggleButton={toggleButton}
        />
      )}
      {openPopup === true && (
        <SavePopup closeSaveButton={closeSaveButton} openPopup={openPopup} />
      )}
      {isActive === false && <LoadingBar />}
    </>
  );
};

export default Layout;
