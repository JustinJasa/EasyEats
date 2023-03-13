import React from "react";
import Link from "next/link";
import Pin from "./pin";
import Masonry from "react-masonry-css";
import { Fade } from "react-awesome-reveal";
import { getRecipeInfo, getRecipeCategories, getRecipeIngredients, getRecipeSteps } from "@/utils/apiRoutes";

let pins = [
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

function PinGallery() {
  // hardcoding id for now
  let id = 1;

  return (
    <>
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={breakpointColumnsObj}
      >
        {pins.map((pin, index) => (
          <>
            <Fade cascade damping={0.1}>
              <Link href={`/recipe/${encodeURIComponent(id)}`}>
                <Pin pin={pin} className="w-max" />
              </Link>
            </Fade>
          </>
        ))}
      </Masonry>
    </>
  );
}

export default PinGallery;
