import SideBarTile from "./SideBarTile";
import useItemStore from "../stores/useItemStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const SideBar = ({
  selectedCatagory,
  setSelectedCatagory,
  setIsMenuVisible = () => {},
  loginState,
  adminState,
  onAdmin,
  setOnAdmin,
}) => {
  const itemStore = useItemStore();
  const [isCatagoryClicked, setIsCatagoryClicked] = useState(false);

  const itemCatagories = [
    ...new Set(itemStore.items.map((item) => item.catagory)),
  ];

  const navigate = useNavigate();

  const adminPanelFunc = () => {
    onAdmin === false ? navigate("/admin-panel") : navigate("/");
    setOnAdmin((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col w-[95%] mt-5 h-full">
      <div className="flex flex-col gap-2 ml-4 w-[85%] h-full">
        {loginState && adminState && (
          <button
            onClick={adminPanelFunc}
            className={`flex flex-row items-center justify-between w-full px-3 py-2 rounded-lg shadow-[0px_0px_3px_1px_rgb(199,224,255)] ${
              onAdmin ? "bg-[#DBE2EF]" : ""
            }`}
          >
            Admin Panel
          </button>
        )}

        <button
          onClick={() => setIsCatagoryClicked((prevState) => !prevState)}
          className={`flex flex-row items-center justify-between w-full px-3 py-2 rounded-lg shadow-[0px_0px_3px_1px_rgb(199,224,255)] ${
            isCatagoryClicked ? "bg-[#DBE2EF]" : ""
          }`}
        >
          <h1>Categories</h1>
          {isCatagoryClicked ? (
            <IoIosArrowDropdownCircle />
          ) : (
            <IoIosArrowDropdown />
          )}
        </button>

        <div
          className={`flex flex-col gap-2 pb-1 w-full overflow-hidden transform transition-all duration-500 ease-in-out ${
            isCatagoryClicked ? "max-h-full" : "max-h-0"
          }`}
        >
          {itemCatagories.map((item, index) => (
            <SideBarTile
              key={index}
              label={item}
              selectedCatagory={selectedCatagory}
              setSelectedCatagory={setSelectedCatagory}
              setIsMenuVisible={setIsMenuVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
