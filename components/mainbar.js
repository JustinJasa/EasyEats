import React from "react";

function Mainbar() {
  return (
    <div className="flex flex-row justify-between p-6">
      <input type="text" placeholder="Search Here!" className="w-72 shadow-lg drop-shadow-md rounded-lg mr-12 p-3"/>
      <div className="flex justify-center items-center">
        <button className="text-3xl mr-6 bg-black text-white pr-2 pl-2 rounded-full">+</button>
        <button>User</button>
      </div>
    </div>
  );
}

export default Mainbar;
