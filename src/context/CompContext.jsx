import { createContext, useState } from "react";
import { gameData } from "../data";

export const CompContext = createContext();

const CompContextProvider = ({ children }) => {
  const [compData, setCompData] = useState(gameData);
  const [currentComp, setCurrentComp] = useState(null);
  const [compBuilderActive, setCompBuilderActive] = useState(false);

  const handleCurrentComp = (comp) => {
    setCurrentComp(comp);
    setCompBuilderActive(!compBuilderActive);
    console.log(comp);
  };

  const handleCompBuilder = () => {
    setCompBuilderActive(!compBuilderActive);
  };

  return (
    <CompContext.Provider
      value={{
        compData,
        setCompData,
        currentComp,
        setCurrentComp,
        handleCurrentComp,
        handleCompBuilder,
        compBuilderActive,
      }}
    >
      {children}
    </CompContext.Provider>
  );
};

export default CompContextProvider;
