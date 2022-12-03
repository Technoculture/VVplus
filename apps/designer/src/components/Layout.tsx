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
    <div className="py-[15px]  h-[100vh] md:justify-between  flex flex-col">
      <div className="h-[10vh]">
        <Navbar
          isNavbarOpen={isNavbarOpen}
          isToggled={isToggled}
          handleClickForToggle={handleClickForToggle}
          handleClickOnNewButton={handleClickOnNewButton}
          handleClickOnSaveButton={handleClickOnSaveButton}
        />
      </div>
      {children}
      <div
        className={`
    h-[90vh] md:flex md:flex-col md:justify-around  items-center md:py-0 py-2.5
    ${isWelcomePanelActive === true ? "justify-center items-center" : ""}
      `}
      >
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

        <div
          className={`
${isWelcomePanelActive === true ? "hidden" : ""}
`}
        >
          <LoadingBar />
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
