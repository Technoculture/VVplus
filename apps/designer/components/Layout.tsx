import Navbar from "./Navbar";
import React from "react";
import { ScriptProps } from "next/script";
import LoadingBar from "./elements/LoadingBar";
import Welcome from "./Welcome";
import NewDesign from "./NewDesign";
import useStore from "../globalStore/navigationStore";
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
  } = useStore();

  return (
    <>
      <Navbar
        myNavbar={myNavbar}
        toggleButton={toggleButton}
        myToggleButton={myToggleButton}
        newButtonClick={newButtonClick}
        clickSaveButton={clickSaveButton}
      />
      {children}
      {openWelcome === false && <NewDesign handleClick={handleClick} />}
      {openWelcome === true && (
        <Welcome
          welcomeClick={welcomeClick}
          isActive={isActive}
          myToggleButton={myToggleButton}
          toggleButton={toggleButton}
          openWelcome={openWelcome}
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
