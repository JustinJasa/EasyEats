import React from "react";

function Pin({ pin, index }) {
  return (
    <div key={index} className="align-center content-center h-fit p-4">
      <img className="rounded-2xl" src={pin.image} alt="Main pin image"></img>
      <h2 className="italic text-sm text-gray-500 mt-2">{pin.date}</h2>
      <h2 className="font-bold font-serif text-xl mt-2">{pin.title}</h2>
      <div className="mt-2 flex">
        <h3 className="font-bold mr-2">{pin.author}</h3>
        <img className="rounded-lg" src={pin.profileImage} alt="Author Image" />
      </div>
    </div>
  );
}

export default Pin;
