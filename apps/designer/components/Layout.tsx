import Navbar from "./Navbar";
import React from "react";
import { ScriptProps } from "next/script";
import HomePage from "./HomePage";
import Welcome from "./Welcome";

const Layout: React.FC<ScriptProps> = ({ children }) => {
  // TODO: improve this type later
  return (
    <>
      <Navbar />
      {children}
      <HomePage />
      {/* <Welcome /> */}
    </>
  );
};

export default Layout;
