import React, { useEffect, useState } from "react";

function Pin({ pin, index }) {
  const [height, setHeight] = useState();

  const heights = [24, 48, 32, 80];

  function getRandomHeight(heights) {
    // generate a random index between 0 and the length of the array minus 1
    const randomIndex = Math.floor(Math.random() * heights.length);
    // return the element at the random index
    return heights[randomIndex];
  }

  useEffect(() => {
    const length = getRandomHeight(heights);
    setHeight(length);
  });

  return (
    <div key={index} className={`align-center content-center rounded-xl m-4`}>
      <img
        className={`rounded-2xl h-${height} w-full`}
        src={pin.image}
        alt="Main pin image"
      ></img>
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
