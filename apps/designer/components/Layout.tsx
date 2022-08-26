import Navbar from "./Navbar";
import React from "react";
import Footer from "./Footer";
import {  ScriptProps } from "next/script";


const Layout : React.FC<ScriptProps> = ({children} ) => {
  // TODO: improve this type later
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
