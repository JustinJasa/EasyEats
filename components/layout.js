import React, { useState } from "react";
import CategorySelector from "./categoryselector";
import { useRouter, UseRouter } from "next/router";
import { motion } from "framer-motion";

function Layout({ children }) {
  const router = useRouter();
  const noNav = ["/login", "/signup", "/"];

  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2 }}
      transition={{
        duration: 0.5
      }}
    >
      {noNav.includes(router.pathname) ? null : <CategorySelector />}
      <main>{children}</main>
    </motion.div>
  );
}

export default Layout;
