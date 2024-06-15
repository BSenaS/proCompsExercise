import { createContext, useState } from "react";
import { gameData } from "../data";

export const CompContext = createContext();

const CompContextProvider = ({ children }) => {
  const [originalData, setOriginalData] = useState(gameData);
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

  const handleDelete = (comp) => {
    setCompData(compData.filter((item) => item !== comp));
  };

  const gameStyleFilter = (activeFilterName) => {
    if (activeFilterName == null) {
      setCompData(gameData);
      return;
    }
    const filteredData = gameData.filter(
      (item) => item.gameStyles.name === activeFilterName
    );
    setCompData(filteredData);
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
        handleDelete,
        gameStyleFilter,
        originalData,
      }}
    >
      {children}
    </CompContext.Provider>
  );
};

export default CompContextProvider;
