import React, { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Mainbar() {
  const [user, setUser] = useState(false);

  return (
    <div className="flex flex-row justify-end md:p-6 p-4">
      <input
        type="text"
        placeholder="Search Here!"
        className="md:w-72 w-48 shadow-lg drop-shadow-md rounded-lg md:mr-12 m-8 p-3"
      />
      <div className="flex justify-center items-center">
        <Link href={`/create`}>
          <div className="flex bg-black justify-center items-center mr-4 rounded-lg p-2 text-white">
            <PlusIcon className="h-8 w-8 sm:h-4 sm:w-4 mr-2" />
            <p className="hidden sm:block">Create Receipe</p>
          </div>
        </Link>
        {user ? (
          <button>User</button>
        ) : (
          <Link href={`/login`}>
            <div className="flex items-center bg-green-600 text-white p-2 rounded-lg">
              <UserIcon className="h-8 w-8 sm:h-4 sm:w-4 mr-2" />
              <button className="hidden sm:block">Sign In</button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Mainbar;
