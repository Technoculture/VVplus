import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";
import { ScriptProps } from "next/script";
import HomePage from "./elements/HomePage";

const Layout: React.FC<ScriptProps> = ({ children }) => {
  // TODO: improve this type later
  return (
    <>
      <Navbar />
      {children}
      <HomePage />
    </>
  );
};

export default Layout;
