import React from "react";
import "./Layout.scss";
import Header from "@/components/layout/header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={"outlet"}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
