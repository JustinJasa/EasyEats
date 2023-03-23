import React, { useState, useEffect } from "react";
import Link from "next/link";
import Pin from "./pin";
import Masonry from "react-masonry-css";
import { Fade } from "react-awesome-reveal";
import {
  getRecipeInfo,
  getRecipeCategories,
  getRecipeIngredients,
  getRecipeSteps,
} from "@/utils/apiRoutes";
import axios from "axios";
import { useRouter } from "next/router";

const breakpointColumnsObj = {
  default: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

function PinGallery({ session }) {
  const [pins, setPins] = useState([]);

  const token = session.user.token;
  const router = useRouter();

  const searchParameter = router.asPath;
  const searchQuery = router.query;

  const getAllRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/recipes/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchRecipesByName = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/recipes/name/${searchQuery.search}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSearchRecipesByCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/recipes/category/${searchQuery.category}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPins(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPins = () => {
    if (searchParameter.includes("category")) {
      getSearchRecipesByCategory();
    } else if (searchParameter.includes("search")) {
      getSearchRecipesByName();
    } else {
      getAllRecipes();
    }
  };

  useEffect(() => {
    fetchPins();
  }, [searchQuery]);

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
                <Pin
                  pin={pin}
                  index={pin.recipe_id}
                  session={session}
                  className="w-max"
                />
              </Link>
            </Fade>
          </div>
        ))}
      </Masonry>
    </>
  );
}

export default PinGallery;
