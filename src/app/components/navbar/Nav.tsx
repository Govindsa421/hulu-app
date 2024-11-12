"use client";
// import requests from "";
import { useRouter } from "next/navigation";
import React from "react";
import requests from "../../../libs/requests";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20  text-xl font-semibold whitespace-nowrap space-x-10 sm:space-x-8 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-[#4EE783] active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className=" absolute top-0 right-0 bg-gradient-to-l from-[#06202a] w-1/4 h-full pointer-events-none"></div>
    </nav>
  );
};

export default Nav;
