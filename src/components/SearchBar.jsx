const SearchBar = () => {
  return (
    <div className="w-full px-3">
      <input
        type="text"
        className="w-full h-[3rem] bg-[#f0f3fa] border-2 border-gray-500 rounded-lg p-2 placeholder:text-[#3F72AF]"
        placeholder="Type to search catalogue"
      />
    </div>
  );
};

export default SearchBar;
