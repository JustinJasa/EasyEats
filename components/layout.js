import React, {useState} from "react";
import CategorySelector from "./categoryselector";
import { useRouter, UseRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  const noNav =  ['/login', '/signup'];

  console.log(noNav.includes(router.pathname))

  return (
    <>
      {noNav.includes(router.pathname) ? null : <CategorySelector />} 
      <main>{children}</main>
    </>
  );
}

export default Layout;
