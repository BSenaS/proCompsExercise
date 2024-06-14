import { createContext, useState } from "react";
import { gameData } from "../data";

export const CompContext = createContext();

const CompContextProvider = ({ children }) => {
  const [compData, setCompData] = useState(gameData);

  return (
    <CompContext.Provider value={{ compData, setCompData }}>
      {children}
    </CompContext.Provider>
  );
};

export default CompContextProvider;
