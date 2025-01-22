import React from "react";

export const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-[#4EE783] ">
      <Icon className="h-8 group-hover:animate-bounce mb-1" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};
