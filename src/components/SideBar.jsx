const SideBar = () => {
  return (
    <div className="flex flex-col w-[95%] mt-5">
      <div className="flex flex-col gap-1 ml-4 w-3/4">
        <h1 className="bg-[#dddddd] w-full p-2 rounded-lg">Categories</h1>
        <div className="flex flex-col gap-2 ml-4">
          <button className="w-full p-2 rounded-lg text-left hover:bg-[#dddddd]">Keyboard</button>
          <button className="w-full p-2 rounded-lg text-left hover:bg-[#dddddd]">Mouse</button>
          <button className="w-full p-2 rounded-lg text-left hover:bg-[#dddddd]">Headphone</button>
          <button className="w-full p-2 rounded-lg text-left hover:bg-[#dddddd]">Cables</button>
          <button className="w-full p-2 rounded-lg text-left hover:bg-[#dddddd]">PowerBanks</button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
