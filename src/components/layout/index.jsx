import Header from "../header";
import Footer from "../footer";
import React from "react";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
