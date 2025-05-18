import { useState } from "react";

const SearchBar = ({ searchLine, setSearchLine }) => {
  return (
    <div className="w-full px-3">
      <input
        value={searchLine}
        type="text"
        className="w-full h-[3rem] bg-[#f0f3fa] border-2 border-gray-500 rounded-lg p-2 placeholder:text-[#3F72AF]"
        placeholder="Type to search catalogue"
        onChange={(e) => setSearchLine(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
