import React from "react";

let pins = [
  {
    author: "Justin",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Alex",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Ibs",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Jag",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Hey",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Bomm",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Justin",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Tomb",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Lomb",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Ghey",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "May",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Say",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Chay",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Faye",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Lay",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
];

function PinGallery() {

  return (
    <div className="lg:grid lg:grid-cols-5 md:grid-col-3 sm:flex sm:flex-col auto-rows-auto auto-cols-auto mt-12 self-center gap-8 sm:flex sm:flex-col">
      {pins.map((pin, index) => {
        return (
          <div key={index} className="align-center content-center h-fit">
            <img className="rounded-2xl" src={pin.image} alt="Main pin image"></img>
            <div className="mt-2">
              <h3 className="font-bold">{pin.author}</h3>
              <img className="rounded-xl" src={pin.profileImage} alt="Author Image" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PinGallery;
