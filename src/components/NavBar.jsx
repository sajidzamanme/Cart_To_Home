import Button from "./Button";
import SearchBar from "./SearchBar";

const NavBar = ({ setIsMenuVisible }) => {
  const openMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  return (
    <div className="relative flex flex-row items-center justify-center bg-[#8400ff]">
      <div className="absolute flex flex-row items-center md:hidden md:w-fit">
        <h1 className="w-full text-center text-2xl text-white font-bold md:text-nowrap sm:text-3xl">
          Cart To Home
        </h1>
      </div>

      <div className="flex flex-row justify-between items-center p-3 w-full md:px-8">
        <button
          onClick={openMenu}
          className="flex flex-col gap-1 sm:gap-2 md:hidden"
        >
          <div className="bg-white w-[2rem] h-[3px] sm:w-[2.5rem]"></div>
          <div className="bg-white w-[2rem] h-[3px] sm:w-[2.5rem]"></div>
          <div className="bg-white w-[2rem] h-[3px] sm:w-[2.5rem]"></div>
        </button>

        <div className="hidden flex-row items-center text-3xl text-white font-bold md:flex md:w-fit">
          <h1 className="w-full text-center font-bold md:text-nowrap">
            Cart To Home
          </h1>
        </div>

        <div className="hidden flex-row w-full px-3 md:flex">
          <SearchBar />
        </div>

        <div className="">
          <Button label={"Signup/Login"} classList="p-1 sm:p-2 md:p-3" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
