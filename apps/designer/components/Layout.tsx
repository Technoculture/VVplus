import Navbar from "./Navbar";
import Footer from "./Footer";
import { NextComponentType } from "next";

const Layout = (children: NextComponentType) => {
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
