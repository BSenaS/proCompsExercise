import React from "react";
import { GameStyle } from "../components/GameStyle";
import { TeamCompList } from "../components/TeamCompList";

const TeamCompPage = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <GameStyle />
      <TeamCompList />
    </div>
  );
};

export default TeamCompPage;
