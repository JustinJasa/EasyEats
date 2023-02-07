import React from "react";
import Sidebar from "./sidebar";
import MobileMenu from "./mobilemenu";
import { useMediaQuery } from "@/hooks/hooks";


function CategorySelector() {
  const isMobile = useMediaQuery(640);
  //hard coding categories for now
  let categories = [
    "Recommended",
    "Top-Picks",
    "Asian",
    "Poultry",
    "Meat",
    "Middle-East",
    "Quick",
    "Cheap",
    "Noodles",
    "Vegan",
    "Beef",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Dessert",
    "Savory",
    "Spicy",
    "Non-Spicy",
  ];

  return <>{isMobile ? null : <Sidebar categories={categories} />}</>;
}

export default CategorySelector;
