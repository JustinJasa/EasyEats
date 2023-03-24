import React from "react";
import { signOut } from "next-auth/react";

function User({ session }) {
  const handleSignOut = () => {
    signOut({ callbackUrl: "http://localhost:3000" });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {session && (
        <div>
          <p className="text-8xl bg-gray-300 text-center p-12 rounded-full mb-4">
            {session.user.account[0].username.charAt(0).toUpperCase()}
          </p>
          <p className="text-center text-4xl font-md">{`Hey ${session.user.account[0].username}!`}</p>
          <p className="text-center text-md text-gray-400 mt-2 mb-2">@{session.user.account[0].username}</p>
        </div>
      )}
      <div className="flex">
      <button className="text-center bg-rose-600 mt-4 mr-2 text-white text-lg rounded p-2"onClick={handleSignOut}>Sign Out.</button>
      <button className="text-center bg-rose-400 mt-4 text-white text-lg rounded p-2">Edit Profile.</button>
      </div>
     
    </div> 
  );
}

export default User;
