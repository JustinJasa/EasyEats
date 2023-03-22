import React, { useState, useEffect } from "react";
import Link from "next/link";
import Pin from "./pin";
import Masonry from "react-masonry-css";
import { Fade } from "react-awesome-reveal";
import { getRecipeInfo, getRecipeCategories, getRecipeIngredients, getRecipeSteps } from "@/utils/apiRoutes";
import axios from "axios";

let pins1 = [
  {
    author: "Justin",
    profileImage: "https://picsum.photos/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Alex",
    profileImage: "https://picsum.photos/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Ibs",
    profileImage: "https://picsum.photos/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Jag",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Hey",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bomm",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Justin",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Tomb",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Lomb",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Ghey",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "May",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Say",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Chay",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Faye",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Lay",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/300",
    title: "Delicious tacos",
    date: "Jan 9, 2023",
  },
];

const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  1000: 2,
  500: 1,
};

function PinGallery({ session }) {
  const [pins, setPins] = useState([]);

  const token = session.user.token;
  const userId = session.user.account[0].user_id;

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/recipes/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      // console.log("DATA", response.data)
      setPins(response.data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllRecipes()
  }, [])

  return (
    <>
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={breakpointColumnsObj}
      >
        {pins.map((pin) => (
          <div key={pin.recipe_id}>
            <Fade cascade damping={0.1}>
              <Link href={`/recipe/${encodeURIComponent(pin.recipe_id)}`}>
                <Pin pin={pin} index={pin.recipe_id} session={session} className="w-max" />
              </Link>
            </Fade>
          </div>
        ))}
      </Masonry>
    </>
  );
}

export default PinGallery;
