import { MdOutlineRemoveCircle } from "react-icons/md";

const SideBarTile = ({
  label,
  selectedCatagory,
  setSelectedCatagory,
  setIsMenuVisible,
}) => {
  return (
    <button
      onClick={() => {
        setSelectedCatagory((prevState) =>
          prevState !== label.toLowerCase() ? label.toLowerCase() : "none"
        );
        setIsMenuVisible((prevState) => !prevState);
      }}
      className={`flex flex-row items-center justify-between w-[99%] self-center p-2 rounded-lg text-left shadow-[0px_0px_3px_1px_rgb(199,224,255)] hover:bg-[#DBE2EF] ${
        selectedCatagory === label.toLowerCase() ? "bg-[#DBE2EF]" : ""
      }`}
    >
      {label[0].toUpperCase() + label.slice(1)}{" "}
      <h1
        className={`${
          selectedCatagory === label.toLowerCase() ? "flex" : "hidden"
        } flex-row justify-center items-center size-6 rounded-lg hover:bg-[#F9F7F7]`}
      >
        <MdOutlineRemoveCircle className="text-[#112D4E]" />
      </h1>
    </button>
  );
};

export default SideBarTile;
