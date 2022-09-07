import Navbar from "./Navbar";
import React from "react";
import { ScriptProps } from "next/script";
import HomePage from "./HomePage";
import LoadingBar from "./elements/LoadingBar";
const Layout: React.FC<ScriptProps> = ({ children }) => {
  // TODO: improve this type later
  return (
    <>
      <Navbar />
      {children}
      <HomePage />
      <LoadingBar />
    </>
  );
};

export default Layout;
