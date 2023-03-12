import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import MobileMenu from "./mobilemenu";
import { useMediaQuery } from "@/hooks/hooks";
import useSWR from "swr";
import axios from "axios";
import { getAllCategories } from "@/utils/apiRoutes";

function CategorySelector() {
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const { data, error, isLoading } = useSWR('/localhost:8000/categories', fetcher)
  const [categories, setCategories] = useState([]);
  // console.log(data)

  const fetchCategories = () => {
    console.log("BEFORE", categories)
    const apiCall = getAllCategories().then(response => {
      setCategories(response)
    })

    setCategories(apiCall)
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log("AFTER", categories);

  const isMobile = useMediaQuery(640);
  //hard coding categories for now
  // let categories = [
  //   "Recommended",
  //   "Top-Picks",
  //   "Asian",
  //   "Poultry",
  //   "Meat",
  //   "Middle-East",
  //   "Quick",
  //   "Cheap",
  //   "Noodles",
  //   "Vegan",
  //   "Beef",
  //   "Breakfast",
  //   "Lunch",
  //   "Dinner",
  //   "Snacks",
  //   "Dessert",
  //   "Savory",
  //   "Spicy",
  //   "Non-Spicy",
  // ];

  return <>{isMobile ? null : <Sidebar categories={categories} />}</>;
}

export default CategorySelector;
