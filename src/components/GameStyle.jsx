import React, { useState } from "react";
import teamIcon from "../assets/teamIcon.svg";
import filterEngage from "../assets/GameStyleFilters/filterEngage.svg";
import filterPick from "../assets/GameStyleFilters/filterPick.svg";
import filterProtect from "../assets/GameStyleFilters/filterProtect.svg";
import filterSiege from "../assets/GameStyleFilters/filterSiege.svg";
import filterSplit from "../assets/GameStyleFilters/filterSplit.svg";

const filterIcons = [
  filterEngage,
  filterPick,
  filterProtect,
  filterSiege,
  filterSplit,
];
export const GameStyle = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleClick = (index) => {
    setActiveFilter(index === activeFilter ? null : index);
  };
  console.log(activeFilter);

  return (
    <div className="flex flex-col text-white pt-6 gap-y-4">
      <div className="flex text-center justify-center gap-3 ">
        <img src={teamIcon} alt="teamIcon" className="w-5 md:w-6" />
        <h1 className="font-medium text-lg md:text-3xl">
          <span className="font-bold">Team</span> Compositions
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 md:flex-row">
        <p className="text-secondaryText">Filter by Gamestyles: </p>
        <div className="flex flex-row gap-3 items-center justify-center">
          {filterIcons.map((icon, index) => (
            <div
              className={`flex items-center justify-center cursor-pointer w-10 h-10 rounded-full p-2 
              ${
                index === activeFilter
                  ? "bg-[#132623] border-2 border-[#16FFE5]"
                  : "bg-[#1C1C1C]"
              } 
              hover:bg-bgHover transition duration-300 ease-in-out`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <img src={icon} alt="GameStyleIcon" className="w-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
