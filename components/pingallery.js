import React from "react";
import Link from "next/link";
import Pin from "./pin";

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
];

function PinGallery() {
  // hardcoding id for now
  let id = 1;

  return (
    <div className="lg:grid lg:grid-cols-3 md:grid-col-3 sm:flex sm:flex-col auto-rows-auto auto-cols-auto mt-12 self-center gap-16 sm:flex sm:flex-col">
      {pins.map((pin, index) => {
        return (
          <>
            <Link href={`/recipe/${encodeURIComponent(id)}`}>
              <Pin pin={pin} />
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default PinGallery;
