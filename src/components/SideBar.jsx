import SideBarTile from "./SideBarTile";
import useItemStore from "../stores/useItemStore";
import { useNavigate } from "react-router-dom";

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

  const itemCatagories = [
    ...new Set(itemStore.items.map((item) => item.catagory)),
  ];

  const navigate = useNavigate();

  const adminPanelFunc = () => {
    onAdmin === false ? navigate("/admin-panel") : navigate("/");
    setOnAdmin((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col w-[95%] mt-5">
      <div className="flex flex-col gap-1 ml-4 w-[85%]">
        {loginState && adminState && (
          <button
            onClick={adminPanelFunc}
            className={`w-full p-2 rounded-lg text-left hover:bg-[#DBE2EF] ${
              onAdmin ? "bg-[#DBE2EF]" : ""
            }`}
          >
            Admin Panel
          </button>
        )}

        <h1 className="bg-[#DBE2EF] w-full p-2 rounded-lg">Categories</h1>
        <div className="flex flex-col gap-2 ml-4 w-[80%]">
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
