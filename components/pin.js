import React, { useEffect, useState } from "react";

function Pin({ pin, index, session }) {
  const [height, setHeight] = useState();
  const [imageURL, setImageURL] = useState("")

  const heights = [24, 48, 32, 80];

  console.log

  // const token = session.user.token;
  // const userId = session.user.account[0].user_id;

  const getRecipeImage = async (recipeId, imageId) => {
    // try {
    //   if(imageId === null) {
    //     throw "Image is null"
    //   }
    //   // console.log(`Im recipe ${recipeId} trying to access image ${imageId}`)

    //   const response = await axios.get(`http://localhost:8000/recipes/${recipeId}/images/${imageId}`, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   })

    //   console.log(response)
    //   // Something needs to be fixed here so the image is displayed:
    //   // - - - - - - - - - -
    //   const blob = new Blob([response.data], { type: response.headers["content-type"] })
    //   const url = URL.createObjectURL(blob)
    //   // - - - - - - - - - -

    //   setImageURL(url)

    //   console.log("URL",url)
    //   console.log("Image", imageURL)

  
    // }
    // catch(error) {
    //   switch(error) {
    //     case "Image is null": {
    //       console.log(error)
    //       break
    //     }
    //     default: {
    //       console.log(error)
    //       break
    //     }
    //   }
    // }
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
      {/* {
        imageURL && (
          <img
            className={`rounded-2xl h-${height} w-full`}
            src={imageURL ? imageURL : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" }
            alt="Main pin image"
          ></img>
        )
      } */}
       <img
            className={`rounded-2xl h-${height} w-full`}
            src={imageURL ? imageURL : "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" }
            alt="Main pin image"
        ></img>
      <h2 className="italic text-sm text-gray-500 mt-2">{pin.date ? pin.date : "Sample date"}</h2>
      <h2 className="font-bold font-serif text-xl mt-2">{pin.name}</h2>
      <div className="mt-2 flex">
        <h3 className="font-bold mr-2">{pin.author}</h3>
        <img className="rounded-lg" src={pin.profileImage} alt="Author Image" />
      </div>
    </div>
  );
}

export default Pin;
