import Navbar from "./Navbar";
import React from "react";
import { ScriptProps } from "next/script";
import LoadingBar from "./elements/LoadingBar";
import Welcome from "./Welcome";
import NewDesign from "./NewDesign";
import useStore from "../globalStore/store";
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
    <div
      className="h-full"
      style={{
        height: toggleButton === true ? "100vh" : "",
      }}
    >
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
          toggleButton={toggleButton}
        />
      )}
      {openPopup === true && <SavePopup closeSaveButton={closeSaveButton} />}
      {isActive === false && <LoadingBar />}
    </div>
  );
};

export default Layout;
