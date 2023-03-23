import React, { useEffect, useState } from "react";
// import axios from "axios";

function Pin({ pin, index, session }) {
  const [imageURL, setImageURL] = useState(null)
  const [height, setHeight] = useState();
  const heights = [24, 48, 32, 80];

  const token = session.user.token;
  const userId = session.user.account[0].user_id;

  const getRecipeImage = async (recipeId, imageId) => {
    try {
      if(imageId === null) {
        throw "Image is null"
      }
      // console.log(`Im recipe ${recipeId} trying to access image ${imageId}`)

      const response = await fetch(`http://localhost:8000/recipes/${recipeId}/images/${imageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      // console.log(response.blob())

      // Something needs to be fixed here so the image is displayed:
      // - - - - - - - - - -
      // const blob = new Blob([response.data], { type: response.headers["content-type"] })
      const blob = await response.blob()
      console.log(blob)
      
      const url = URL.createObjectURL(blob)
      console.log(url)
      // - - - - - - - - - -
      setImageURL(url)
    }
    catch(error) {
      switch(error) {
        case "Image is null": {
          console.log(error)
          break
        }
        default: {
          console.log(error)
          break
        }
      }
    }
  }

  function getRandomHeight(heights) {
    // generate a random index between 0 and the length of the array minus 1
    const randomIndex = Math.floor(Math.random() * heights.length);
    // return the element at the random index
    return heights[randomIndex];
  }

  useEffect(() => {
    const length = getRandomHeight(heights);
    setHeight(length);
    getRecipeImage(index, pin.image_id)
  }, []);

  return (
    <div key={index} className={`align-center content-center rounded-xl m-4`}>
      {
        imageURL && (
          <img
            className={`rounded-2xl h-${height} w-full`}
            src={imageURL}
            alt="Main pin image"
          ></img>
        )
      }
      <h2 className="italic text-sm text-gray-500 mt-2">{pin.date ? pin.date.slice(0, 10) : "Sample date"}</h2>
      <h2 className="font-bold font-serif text-xl mt-2">{pin.name}</h2>
      <div className="mt-2 flex">
        <h3 className="font-bold mr-2">{pin.username}</h3>
        {/* <img className="rounded-lg" src={pin.profileImage} alt="Author Image" /> */}
      </div>
    </div>
  );
}

export default Pin;
