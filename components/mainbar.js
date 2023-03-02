import React from "react";

function Mainbar() {
  return (
    <div className="flex flex-row justify-end p-6">
      <input type="text" placeholder="Search Here!" className="w-72 shadow-lg drop-shadow-md rounded-lg mr-12 p-3"/>
      <div className="flex justify-center items-center">
        <div className="flex bg-black justify-center items-center mr-4 rounded-lg p-2">
          <span className="text-3xl mr-2 text-white rounded-full">+</span>
          <p className="text-white">Create Receipe</p>
        </div>
        <button>User</button>
      </div>
    </div>
  );
}

export default Mainbar;
