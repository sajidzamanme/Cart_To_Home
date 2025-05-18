import { MdOutlineRemoveCircle } from "react-icons/md";

const SearchBar = ({ searchLine, setSearchLine }) => {
  return (
    <div className="flex flex-row items-center w-[95%] h-[3rem] px-3 bg-white md:bg-[#f0f3fa] rounded-lg shadow-[0px_0px_10px_0.5px_rgb(199,224,255)] md:shadow-none">
      <input
        value={searchLine}
        type="text"
        className="w-full pl-2 placeholder:text-[#3F72AF] border-0 outline-none"
        placeholder="Type to search catalogue"
        onChange={(e) => setSearchLine(e.target.value)}
      />

      {searchLine !== "" && (
        <button
          className="flex flex-row items-center justify-center px-2"
          onClick={() => setSearchLine("")}
        >
          <MdOutlineRemoveCircle className="text-[#112D4E] size-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
