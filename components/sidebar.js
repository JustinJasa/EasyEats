import React, { useState } from "react";
import Link from "next/link";

function Sidebar({ categories }) {
  
  return (
    <aside className="bg-gray-100 h-full w-48 fixed text-center overflow-scroll">
      <img
        className="w-32 h-32 m-auto"
        src="https://img.icons8.com/ios/512/man-logo.png"
        alt="Logo"
      />
      <h2 className="text-xl mt-12 mb-6 text-bold font-bold">Discover Food</h2>
      <nav className="child-hover:text-blue-500 child:list-none">
        {categories &&
          categories.map((category, index) => {
            return (
              // <Link href={`${category}`}> This will be put in later on
              <li className="pb-2 pt-2" key={index}>
                {category}
              </li>
              // </Link>
            );
          })}
      </nav>
    </aside>
  );
}

export default Sidebar;
