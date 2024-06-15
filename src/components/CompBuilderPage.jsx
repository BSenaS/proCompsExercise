import React, { useContext } from "react";
import { CompContext } from "../context/CompContext";
import { IoClose } from "react-icons/io5";

export const CompBuilderPage = () => {
  const { currentComp, compBuilderActive, handleCompBuilder } =
    useContext(CompContext);

  if (!compBuilderActive) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="flex flex-col w-[400px]  bg-[#0F0F0F] rounded-lg mx-auto relative gap-8">
        <div
          className="absolute top-3 right-3 text-white hover:text-red-500 cursor-pointer"
          onClick={() => handleCompBuilder()}
        >
          <IoClose size={24} />
        </div>
        <div className="flex flex-col mx-auto text-center mt-7">
          <span className="text-primaryText max-w-[300px]">
            {currentComp?.compName}
          </span>
          <span className="text-secondaryText">{`${currentComp?.createTime} hours ago`}</span>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center border-l border-l-[#0F0F0F]">
          {currentComp?.champions.map((champion, index) => (
            <div className="mr-[-10px] z-1" key={index}>
              <img
                src={champion}
                alt={`champions ${index}`}
                className="w-12 h-12 rounded-full border-4 border-[#0F0F0F]"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-6 mb-8">
          <div className="flex flex-row gap-2 justify-center items-center">
            <img
              src={currentComp?.gameStyles.icon}
              alt={currentComp?.gameStyles.name}
            />
            <p className="text-secondaryText">{currentComp?.gameStyles.name}</p>
          </div>
          <div>
            <img src={currentComp?.scale} alt="Scale" />
          </div>
        </div>
      </div>
    </div>
  );
};
