import React, {useState} from "react";
import CategorySelector from "./categoryselector";
import { useRouter, UseRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  const path = router.asPath;
  const [pathName, setPathName] = useState(path)

  return (
    <>
      {pathName == '/signup' || pathName == '/login' ? (
        null
      ) : <CategorySelector />}

      <main>{children}</main>
    </>
  );
}

export default Layout;
