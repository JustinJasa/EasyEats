import React, { useState } from "react";
import { UserIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

function Mainbar() {
  const [user, setUser] = useState(false);

  return (
    <div className="flex flex-row justify-end p-6">
      <input
        type="text"
        placeholder="Search Here!"
        className="w-72 shadow-lg drop-shadow-md rounded-lg mr-12 p-3"
      />
      <div className="flex justify-center items-center">
        <div className="flex bg-black justify-center items-center mr-4 rounded-lg p-2 text-white">
          <PlusIcon className="h-4 w-4 mr-2"/>
          <p>Create Receipe</p>
        </div>
        {user ? (
          <button>User</button>
        ) : (
          <Link href={`/login`}>
          <div className="flex items-center bg-green-600 text-white p-2 rounded-lg">
            <UserIcon className="h-4 w-4 mr-2"/>
            <button>Sign In</button>
          </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Mainbar;
