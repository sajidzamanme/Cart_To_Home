import SideBarTile from "./SideBarTile";
import useItemStore from "../stores/useItemStore";

const SideBar = ({
  selectedCatagory,
  setSelectedCatagory,
  setIsMenuVisible = () => {},
}) => {
  const itemStore = useItemStore();

  let itemCatagories = [
    ...new Set(itemStore.items.map((item) => item.catagory)),
  ];

  return (
    <div className="flex flex-col w-[95%] mt-5">
      <div className="flex flex-col gap-1 ml-4 w-[85%]">
        <h1 className="bg-[#dddddd] w-full p-2 rounded-lg">Categories</h1>
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
