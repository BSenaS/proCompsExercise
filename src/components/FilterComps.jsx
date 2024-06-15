import React, { useContext, useState } from "react";
import { CompContext } from "../context/CompContext";
import { FaSortDown } from "react-icons/fa6";
import { FaSortUp } from "react-icons/fa6";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export const FilterComps = () => {
  const { compData, setCompData, originalData } = useContext(CompContext);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("none");

  const handleSort = (field) => {
    if (sortField !== field || sortOrder === "none") {
      const sorted = [...originalData].sort((a, b) => {
        if (field === "createTime") {
          return a[field] - b[field];
        } else if (field === "gameStyles") {
          return a.gameStyles.name.localeCompare(b.gameStyles.name);
        } else {
          return a[field].localeCompare(b[field]);
        }
      });
      setCompData(sorted);
      setSortField(field);
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      const sorted = [...originalData].sort((a, b) => {
        if (field === "createTime") {
          return b[field] - a[field];
        } else if (field === "gameStyles") {
          return b.gameStyles.name.localeCompare(a.gameStyles.name);
        } else {
          return b[field].localeCompare(a[field]);
        }
      });
      setCompData(sorted);
      setSortOrder("desc");
    } else {
      setCompData([...originalData]);
      setSortField(null);
      setSortOrder("none");
    }
  };

  console.log(sortField);
  console.log(sortOrder);

  return (
    <div className="w-11/12 mx-auto text-secondaryText hidden md:block text-sm">
      <div className="flex flex-row w-11/12 mx-auto">
        <div
          className="w-[25%] cursor-pointer flex items-center"
          onClick={() => handleSort("compName")}
        >
          <span
            className={
              sortField === "compName" ? "text-[#06D6BE]" : "text-secondaryText"
            }
          >
            Name
          </span>
          {sortField === "compName" && sortOrder === "asc" && (
            <FaCaretUp size={20} className="text-[#06D6BE]" />
          )}
          {sortField === "compName" && sortOrder === "desc" && (
            <FaCaretDown size={20} className="text-[#06D6BE]" />
          )}
        </div>
        <div className="w-[22.5%] cursor-pointer">Champions</div>

        <div
          className="w-[15.5%]  cursor-pointer flex"
          onClick={() => handleSort("gameStyles")}
        >
          <span
            className={`${
              sortField === "gameStyles"
                ? "text-[#06D6BE]"
                : "text-secondaryText"
            } ml-8 `}
          >
            Gamestyles
          </span>

          {sortField === "gameStyles" && sortOrder === "asc" && (
            <FaCaretUp size={20} className="text-[#06D6BE]" />
          )}
          {sortField === "gameStyles" && sortOrder === "desc" && (
            <FaCaretDown size={20} className="text-[#06D6BE]" />
          )}
        </div>

        <span className="w-[14%] text-center cursor-pointer">Scaling</span>
        <div
          className="w-[15%] text-center cursor-pointer flex"
          onClick={() => handleSort("createTime")}
        >
          <span
            className={`${
              sortField === "createTime"
                ? "text-[#06D6BE]"
                : "text-secondaryText"
            } ml-11 `}
          >
            Added
          </span>

          {sortField === "createTime" && sortOrder === "asc" && (
            <FaCaretUp size={20} className="text-[#06D6BE]" />
          )}
          {sortField === "createTime" && sortOrder === "desc" && (
            <FaCaretDown size={20} className="text-[#06D6BE]" />
          )}
        </div>
      </div>
    </div>
  );
};
