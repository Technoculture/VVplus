import Navbar from "./Navbar";
import React from "react";
import { ScriptProps } from "next/script";
// import LoadingBar from "./LoadingBar";
import Welcome from "./Welcome";
// import NewDesign from "./NewDesign";
import TemplateCard from "./TemplateCard";

import navigationUseStore from "../globalStore/Navigation-Store/navigationStore";
import SavePopup from "./SavePopup";
import { openWelcomeStore } from "../globalStore/Navigation-Store/openWelcomeStore";
import { savePopupStore } from "../globalStore/Navigation-Store/savePopupStore";
import SelectionBar from "./SelectionBar";

const Layout: React.FC<ScriptProps> = ({ children }) => {
  // TODO: improve this type later
  const {
    isNavbarOpen,
    isWelcomePanelActive,
    handleClickOnWelcome,
    handleClickOnNewButton,
    handleClickForToggle,
    isToggled,
    isLoaded,
  } = navigationUseStore();

  const { isWelcomeComponentOpen, handleClickOnNewDesign } = openWelcomeStore();
  const { handleClickOnSaveButton, closeSavePopup, isSavePopupOpen } =
    savePopupStore();
  const handleClickOnCancelLoad = () => {
    handleClickOnNewButton();
    handleClickOnNewDesign();
  };
  return (
    <div
      className={`py-[10px]  h-[100vh] md:justify-between  flex flex-col
    ${
      isWelcomePanelActive === false && isWelcomeComponentOpen === true
        ? "gap-2"
        : ""
    }
    `}
    >
      <div className="h-[10vh]">
        <Navbar
          isNavbarOpen={isNavbarOpen}
          isToggled={isToggled}
          isLoaded={isLoaded}
          handleClickForToggle={handleClickForToggle}
          handleClickOnNewButton={handleClickOnNewButton}
          handleClickOnSaveButton={handleClickOnSaveButton}
          handleClickOnCancelLoad={handleClickOnCancelLoad}
        />
      </div>
      {children}
      <div
        className={` 
        h-[90vh] relative md:flex md:flex-col w-screen justify-center items-center
    
    `}
      >
        {isWelcomeComponentOpen === false && (
          <TemplateCard handleClickOnNewDesign={handleClickOnNewDesign} />
        )}
        {isWelcomeComponentOpen === true && (
          <Welcome
            handleClickOnWelcome={handleClickOnWelcome}
            isWelcomePanelActive={isWelcomePanelActive}
            handleClickForToggle={handleClickForToggle}
            isToggled={isToggled}
            isLoaded={isLoaded}
          />
        )}
        <div
          className={`
${isWelcomePanelActive === true ? "hidden" : ""}
`}
        >
          {isWelcomePanelActive === false && <SelectionBar />}
        </div>
      </div>
      {isSavePopupOpen === true && (
        <SavePopup
          closeSavePopup={closeSavePopup}
          isSavePopupOpen={isSavePopupOpen}
        />
      )}
    </div>
  );
};

export default Layout;
