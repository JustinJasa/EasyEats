import React, { useState } from "react";
import Link from "next/link";


function Sidebar({ categories }) {
  return (
    <>
  
      <aside className="h-full w-48  fixed overflow-scroll">
        <img
          className="w-32 h-32 m-auto"
          src="https://img.icons8.com/ios/512/man-logo.png"
          alt="Logo"
        />
        <div className="pl-8">
          <h2 className="text-xl mt-4 mb-4 text-bold font-bold">
            Discover Food
          </h2>
          <nav className="child-hover:text-blue-500 child:list-none">
            {categories &&
              categories.map((category, index) => {
                return (
                  // <Link href={`${category}`}> This will be put in later on
                  <li className="pb pt-2 cursor-pointer italic text-gray-500" key={index}>
                    {category.name}
                  </li>
                  // </Link>
                );
              })}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
