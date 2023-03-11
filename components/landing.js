import React from "react";
import Link from "next/link";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        {/* <img className="w-32 h-32" src="https://img.icons8.com/ios/512/man-logo.png" alt="Logo" /> */}
      </div>
      <h1 className="font-serif lg:text-6xl">
        Food for Students... By Students.
      </h1>
      <h3 className="text-slate-500 lg:text-lg m-4 italic">
        Freshly curated recipes created by students around the world.
      </h3>
      <div className="flex w-4/5">
        <Link href={`/login`}>
          <button className="m-4 text-lg text-white bg-green-600 w-full rounded-md lg:hover:scale-110  transition transition-duration: 150ms">
            Sign Up
          </button>
        </Link>
        <Link href={`/signup`}>
          <button className="m-4 text-lg text-green-600 border-solid border-2 border-green-600 w-full p-2 rounded-md transition transition-duration: 150ms lg:hover:scale-110">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
