import Navbar from "./Navbar";
import React from "react";
import { ScriptProps } from "next/script";
import LoadingBar from "./elements/LoadingBar";
import Welcome from "./Welcome";
import NewDesign from "./NewDesign";
import useStore from "../pages/store";
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
  } = useStore();

  return (
    <>
      <Navbar
        myNavbar={myNavbar}
        toggleButton={toggleButton}
        myToggleButton={myToggleButton}
        newButtonClick={newButtonClick}
      />
      {children}
      {openWelcome === false && <NewDesign handleClick={handleClick} />}
      {openWelcome === true && (
        <Welcome welcomeClick={welcomeClick} isActive={isActive} />
      )}
      <LoadingBar />
    </>
  );
};

export default Layout;
