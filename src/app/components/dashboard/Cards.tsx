import Image from "next/image";
import React from "react";

const Cards = () => {
  const CardData = [
    {
      id: 0,
      title: "TV Shows",
      content: "Past & Current Seasons",
      img: "/img/card1.png",
    },
    { id: 1, title: "Movies", content: "New & Classic", img: "/img/card2.jpg" },
    {
      id: 2,
      title: "Hulu Originals",
      content: "Groundbreaking",
      img: "/img/card3.jpg",
    },
    { id: 3, title: "Premiums", content: "Add-on", img: "/img/card4.jpg" },
  ];
  return (
    <div className="py-20">
      <div className="text-center space-y-4">
        <p className="font-bold">INCLUDED IN ALL PLANS</p>
        <h1 className="text-5xl text-white font-bold">All The TV You Love</h1>
        <div className=" tracking-wider">
          <p className="text-white text-lg">
            Watch full seasons of exclusive streaming series, current-season
          </p>
          <p className="text-white text-lg">
            episodes, hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>
      </div>
      <div className="flex gap-8 justify-center mt-10 relative  ">
        {CardData.map((itm) => {
          return (
            <div key={itm.id} className="">
              <Image
                src={itm.img}
                alt="cards"
                width={1000}
                height={100}
                className="w-full h-[451px] object-cover rounded-md  brightness-50 hover:border-2 duration-300  transition border-gray-300 "
              />
              <div className="text-white absolute top-0 p-7 ">
                <h1 className="text-lg ">{itm.content}</h1>
                <p className="text-2xl font-bold">{itm.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
