import React from "react";

function Mainbar() {
  return (
    <div className="flex flex-row justify-between m-6">
      <input type="text" className="w-10/12 shadow-lg drop-shadow-md rounded-lg"/>
      <div className="flex justify-center">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-6 rounded-full bg-gray-500 p-4 mr-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          ></path>
        </svg>
        <button>User</button>
      </div>
    </div>
  );
}

export default Mainbar;
