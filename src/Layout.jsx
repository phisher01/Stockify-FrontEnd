// Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div style={{}}>{children}</div>
    <Footer />
  </>
);

export default Layout;
