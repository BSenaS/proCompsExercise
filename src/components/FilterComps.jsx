import React from "react";

export const FilterComps = () => {
  return (
    <div className="w-11/12 mx-auto text-primaryText hidden md:block">
      <div className="flex flex-row w-11/12 mx-auto">
        <div className="w-[25%] cursor-pointer">Name</div>
        <div className="w-[22.5%] cursor-pointer">Champions</div>
        <span className="w-[15.5%] text-center cursor-pointer">Gamestyles</span>
        <span className="w-[14%] text-center cursor-pointer">Scaling</span>
        <span className="w-[15%] text-center cursor-pointer">Added</span>
      </div>
    </div>
  );
};
