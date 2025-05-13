import Button from "./Button";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const openMenu = () => {};

  return (
    <div className="flex flex-row justify-center items-center bg-[#8400ff] px-3 md:px-8">
      <div className="flex flex-row items-center py-3 w-full justify-between">
        <button
          onClick={openMenu}
          className="left-2 flex flex-col gap-2 md:hidden"
        >
          <div className="bg-white w-[2.5rem] h-[3px]"></div>
          <div className="bg-white w-[2.5rem] h-[3px]"></div>
          <div className="bg-white w-[2.5rem] h-[3px]"></div>
        </button>

        <div className="flex flex-row items-center text-3xl text-white font-bold md:w-fit md:text-nowrap">
          <h1 className="text-center font-bold">Cart To Home</h1>
        </div>

        <div className="hidden flex-row w-full px-3 md:flex">
          <SearchBar />
        </div>
        
        <div className="md:mr-13">
          <Button label={"Login"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
