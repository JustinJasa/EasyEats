import React from "react";

let pins = [
  {
    author: "Justin",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/500",
  },
  {
    author: "Alex",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/100",
  },
  {
    author: "Ibs",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/400",
  },
  {
    author: "Jag",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/600",
  },
  {
    author: "Hey",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/300",
  },
  {
    author: "Bomm",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/300",
  },
  {
    author: "Justin",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/200",
  },
  {
    author: "Tomb",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/250",
  },
  {
    author: "Lomb",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/350",
  },
  {
    author: "Ghey",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/450",
  },
  {
    author: "May",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/650",
  },
  {
    author: "Say",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/100",
  },
  {
    author: "Chay",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/300",
  },
  {
    author: "Faye",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/200",
  },
  {
    author: "Lay",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/100",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/420",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/340",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/580",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/240",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/300",
  },
  {
    author: "Bray",
    profileImage: "https://picsum.photos/20/20",
    image: "https://picsum.photos/200/190",
  },
];

function PinGallery() {
  return (
    <div className="grid grid-cols-5 auto-cols-auto mt-12 gap-2.5 ">
      {pins.map((pin) => {
        return (
          <div className="row-span-2 align-center content-center">
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
