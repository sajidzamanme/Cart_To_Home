import { MdOutlineRemoveCircle } from "react-icons/md";

const SearchBar = ({ searchLine, setSearchLine }) => {
  return (
    <div className="flex flex-row items-center w-full h-[3rem] px-3 bg-[#f0f3fa] border-2 border-gray-500 rounded-lg">
      <input
        value={searchLine}
        type="text"
        className="w-full pl-2 placeholder:text-[#3F72AF] border-0 outline-none"
        placeholder="Type to search catalogue"
        onChange={(e) => setSearchLine(e.target.value)}
      />

      {searchLine !== "" && (
        <button className="flex flex-row items-center justify-center px-2" onClick={() => setSearchLine("")}>
          <MdOutlineRemoveCircle className="text-[#112D4E] size-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
