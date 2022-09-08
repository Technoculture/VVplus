import Navbar from "./Navbar";
import React from "react";
import { ScriptProps } from "next/script";
import LoadingBar from "./elements/LoadingBar";
import { useState } from "react";
import Welcome from "./Welcome";
import NewDesign from "./NewDesign";
const Layout: React.FC<ScriptProps> = ({ children }) => {
  // TODO: improve this type later
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(true);
  };
  return (
    <>
      <Navbar />
      {children}
      {state === false && <NewDesign handleClick={handleClick} />}
      {state === true && <Welcome />}
      <LoadingBar />
    </>
  );
};

export default Layout;
