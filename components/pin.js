import React, { useEffect, useState } from "react";
import axios from "axios";

function Pin({ pin, index, session }) {
  const [imageURL, setImageURL] = useState("https://picsum.photos/300")
  const [categories, setCategories] = useState([])
  const [height, setHeight] = useState();
  const heights = [24, 48, 32, 80];

  const token = session.user.token;
  const userId = session.user.account[0].user_id;

  const getRecipeImage = async (recipeId, imageId) => {
    try {
      if(imageId === null) {
        throw "Image is null"
      }

      const response = await fetch(`http://localhost:8000/recipes/${recipeId}/images/${imageId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      const blob = await response.blob()
      
      const url = URL.createObjectURL(blob)
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

  const getRecipeCategories = async (recipeId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/recipes/${recipeId}/categories`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  function getRandomHeight(heights) {
    // generate a random index between 0 and the length of the array minus 1
    const randomIndex = Math.floor(Math.random() * heights.length);
    // return the element at the random index
    return heights[randomIndex];
  }

  async function fetchCategories() {
    const response = await getRecipeCategories(index)
    setCategories(response)
  }

  useEffect(() => {
    const length = getRandomHeight(heights);
    setHeight(length);
    getRecipeImage(index, pin.image_id)
    fetchCategories()
  }, []);

  return (
    <div key={index} className={`align-center content-center rounded-xl m-4 p-2 shadow-md`}>
      {
        imageURL && (
          <img
            className={`rounded-2xl h-${height} w-full`}
            src={imageURL}
            alt="Main pin image"
          ></img>
        )
      }
      <h2 className="italic text-sm text-gray-500 mt-2 mb-2">{pin.date ? pin.date.slice(0, 10) : "Sample date"}</h2>
      <div className="flex flex-wrap">
      {
        categories && categories.map((category, index) => {
          return (
            <span
              key={index}
              className="border-2 rounded-2xl border-green-400 px-2 py-1 mr-1 text-xs"
            >
              {category.name}
            </span>
          )
        })
      }
      </div>
      <h2 className="font-bold font-serif text-xl mt-2">{pin.name}</h2>
      <h3 className="font-bold mr-2">{pin.username}</h3>
    </div>
  );
}

export default Pin;
