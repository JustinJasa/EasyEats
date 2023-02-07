import React from "react";
import CategorySelector from "./categoryselector";
import Sidebar from "./sidebar";

function Layout({children}) {
  return (
    <>
      <CategorySelector />
      <main>{children}</main>
    </>
  );
}

export default Layout;
