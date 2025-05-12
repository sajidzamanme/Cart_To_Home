import Button from "./Button";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const openMenu = () => {};

  return (
    <div className="relative flex flex-row justify-center items-center bg-[#8400ff] md:px-8">
      <button
        onClick={openMenu}
        className="absolute left-2 flex flex-col gap-2 md:hidden"
      >
        <div className="bg-white w-[2.5rem] h-[3px]"></div>
        <div className="bg-white w-[2.5rem] h-[3px]"></div>
        <div className="bg-white w-[2.5rem] h-[3px]"></div>
      </button>

      <div className="flex flex-row items-center py-3 w-full md:justify-between">
        <h1 className="w-full text-3xl text-white font-bold text-center md:text-left">
          Cart To Home
        </h1>
        <div className="hidden flex-row w-full md:flex">
          <SearchBar />
        </div>
        <div className="hidden md:flex">
          <Button label={"Login"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
