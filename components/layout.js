import React from "react";
import Sidebar from "./sidebar";

function Layout({children}) {
  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
