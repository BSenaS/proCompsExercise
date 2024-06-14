import React from "react";
import { MdOutlineConstruction } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";

export const TeamComp = ({ team, index }) => {
  //Some elements only visible in mobile view, search md:hidden for them.
  return (
    <div
      className="flex mx-auto py-4 border-2 border-[#2D2D2D] 
     w-11/12 text-primaryText justify-center flex-wrap rounded-lg md:rounded-full hover:bg-bgHover transition duration-300 ease-in-out cursor-pointer relative group "
    >
      <div className="flex flex-col gap-2 mx-2 w-full md:w-11/12 md:flex-row">
        <div className="flex gap-1 md:items-center md:w-1/4 font-bold">
          <p className="md:hidden">Name:</p>
          <h2 className="w-full md:max-w-[200px] ">{team.compName}</h2>
        </div>
        <div className="flex flex-row flex-wrap md:w-1/4 md:items-center md:justify-center md:border-l md:border-l-[#2D2D2D]">
          <p className="mr-1 md:hidden font-semibold">Champions: </p>
          {team.champions.map((champion, index) => (
            <div className="md:mr-[-10px] md:z-1" key={index}>
              <img
                src={champion}
                alt={`champions ${index}`}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full md:border-4 md:border-[#1c1c1c]"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-2 items-center md:w-1/6 md:justify-center">
          <p className="md:hidden font-semibold">Game Style:</p>
          <img src={team.gameStyles.icon} alt={team.index} />
          <span>{team.gameStyles.name}</span>
        </div>
        <div className="flex items-center gap-1 md:w-1/6">
          <p className="md:hidden font-semibold">Scale:</p>
          <img src={team.scale} alt={team.index} className="w-16" />
        </div>
        <div className="flex gap-1 md:w-1/6 md:items-center">
          <p className="md:hidden font-semibold">Added:</p>
          {team.createTime}
        </div>
        {/* On Click, will lead to pop-up */}
        <div className="flex w-12 h-12 mx-auto items-center justify-center rounded-full text-[#5E5E5E] border-2 border-[#5E5E5E] transition duration-300 ease-in-out hover:text-white hover:border-hidden hover:bg-[#07C5AF] cursor-pointer md:mr-0 opacity-0 group-hover:opacity-100 ">
          <MdOutlineConstruction className="w-8 h-8" />
        </div>
        {/* On Click, will delete the individual team*/}

        <div className="rounded-full w-8 h-8 bg-[#2D2D2D] p-2 flex items-center justify-center absolute right-[-1rem] top-1/2 transform -translate-y-1/2 hover:bg-[#FF0000] text-[#5E5E5E] hover:text-white  opacity-0 group-hover:opacity-100 transition-all duration-300 mx-auto">
          <FaMinus size={24} />
        </div>
      </div>
    </div>
  );
};
