import React, { useContext } from "react";
import { TeamComp } from "./TeamComp";
import { CompContext } from "../context/CompContext";

export const TeamCompList = () => {
  const { compData, setCompData } = useContext(CompContext);
  return (
    <div className="flex flex-col gap-4 bg-bgPrimary">
      {compData.map((team, index) => (
        <TeamComp team={team} key={index} />
      ))}
    </div>
  );
};
