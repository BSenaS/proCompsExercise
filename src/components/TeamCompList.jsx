import React, { useContext } from "react";
import { TeamComp } from "./TeamComp";
import { CompContext } from "../context/CompContext";
import { FilterComps } from "./FilterComps";

export const TeamCompList = () => {
  const { compData, setCompData } = useContext(CompContext);
  return (
    <div className="custom-scrollbar flex flex-col gap-4 bg-bgPrimary rounded-2xl py-8 my-8 max-h-[650px] overflow-y-auto">
      <FilterComps />
      {compData.map((team, index) => (
        <TeamComp team={team} key={index} />
      ))}
    </div>
  );
};
