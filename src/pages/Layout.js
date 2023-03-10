import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>This footer is everywhere</footer>
    </>
  );
};

export default Layout;
