import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = ({
  isMenuVisible,
  setIsMenuVisible,
  loginState,
  setShowLogoutMenu,
  searchLine,
  setSearchLine,
  setSelectedCatagory,
  setOnAdmin,
}) => {
  const openMenu = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-row items-center justify-center bg-[#3F72AF]">
      <div className="absolute flex flex-row items-center md:hidden md:w-fit">
        <Link
          to={"/"}
          className="w-full text-center text-2xl text-white font-bold md:text-nowrap xs:text-5xl sm:text-3xl"
          onClick={() => {
            setIsMenuVisible(false);
            setSelectedCatagory("none");
            setOnAdmin(false);
          }}
        >
          Cart To Home
        </Link>
      </div>

      <div className="flex flex-row justify-between items-center pl-0 p-3 w-full md:px-8">
        <button
          onClick={openMenu}
          className="flex flex-col justify-center items-center gap-1 w-[4rem] h-[1.7rem] sm:gap-2 md:hidden"
        >
          <div
            className={`bg-white w-[2rem] h-[3px] sm:w-[2.5rem] transform transition-all duration-300 rounded-2xl ease-in-out ${
              isMenuVisible
                ? "rotate-45 translate-y-[0.4rem] sm:translate-y-[0.7rem]"
                : ""
            }`}
          ></div>
          <div
            className={`bg-white w-[2rem] h-[3px] sm:w-[2.5rem] transform transition-all duration-300 rounded-2xl ease-in-out ${
              isMenuVisible ? "opacity-0 duration-1" : "duration-500"
            }`}
          ></div>
          <div
            className={`bg-white w-[2rem] h-[3px] sm:w-[2.5rem] transform transition-all duration-300 rounded-2xl ease-in-out ${
              isMenuVisible
                ? "-rotate-45 translate-y-[-0.48rem] sm:translate-y-[-0.66rem]"
                : ""
            }`}
          ></div>
        </button>

        <div className="hidden flex-row items-center text-3xl text-white font-bold md:flex md:w-fit">
          <Link
            to={"/"}
            className="w-full text-center font-bold md:text-nowrap"
          >
            Cart To Home
          </Link>
        </div>

        <div className="hidden flex-row w-full px-3 md:flex">
          <SearchBar searchLine={searchLine} setSearchLine={setSearchLine} />
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <FaShoppingCart className="text-white size-7"/>
          <button
            onClick={() => {
              if (loginState) {
                setShowLogoutMenu((prevState) => !prevState);
              } else {
                navigate("/signup-login");
              }
            }}
            className="mr-4 flex flex-row items-center justify-center"
          >
            <FaUser className="text-white size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
