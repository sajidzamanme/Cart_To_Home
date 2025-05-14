import { MdOutlineRemoveCircle } from "react-icons/md";

const SideBarTile = ({
  label,
  selectedCatagory,
  setSelectedCatagory,
  setIsMenuVisible,
}) => {
  return (
    <div className="">
      <button
        onClick={() => {
          setSelectedCatagory((prevState) =>
            prevState !== label.toLowerCase() ? label.toLowerCase() : "none"
          );
          setIsMenuVisible((prevState) => !prevState);
        }}
        className={`flex flex-row items-center justify-between w-full p-2 rounded-lg text-left hover:bg-[#dddddd] ${
          selectedCatagory === label.toLowerCase() ? "bg-[#dddddd]" : ""
        }`}
      >
        {label}{" "}
        <h1
          className={`${
            selectedCatagory === label.toLowerCase() ? "flex" : "hidden"
          } flex-row justify-center items-center size-6 rounded-lg hover:bg-gray-100`}
        >
          <MdOutlineRemoveCircle />
        </h1>
      </button>
    </div>
  );
};

export default SideBarTile;
