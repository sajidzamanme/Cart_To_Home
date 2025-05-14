const SideBar = ({ selectedCatagory, setSelectedCatagory }) => {
  return (
    <div className="flex flex-col w-[95%] mt-5">
      <div className="flex flex-col gap-1 ml-4 w-[85^]">
        <h1 className="bg-[#dddddd] w-full p-2 rounded-lg">Categories</h1>
        <div className="flex flex-col gap-2 ml-4 w-3/4">
          <button
            onClick={() =>
              setSelectedCatagory((prevState) =>
                prevState !== "keyboard" ? "keyboard" : "none"
              )
            }
            className={`w-full p-2 rounded-lg text-left hover:bg-[#dddddd] ${
              selectedCatagory === "keyboard" ? "bg-[#dddddd]" : ""
            }`}
          >
            Keyboard
          </button>
          <button
            onClick={() =>
              setSelectedCatagory((prevState) =>
                prevState !== "mouse" ? "mouse" : "none"
              )
            }
            className={`w-full p-2 rounded-lg text-left hover:bg-[#dddddd] ${
              selectedCatagory === "mouse" ? "bg-[#dddddd]" : ""
            }`}
          >
            Mouse
          </button>
          <button
            onClick={() =>
              setSelectedCatagory((prevState) =>
                prevState !== "headphone" ? "headphone" : "none"
              )
            }
            className={`w-full p-2 rounded-lg text-left hover:bg-[#dddddd] ${
              selectedCatagory === "headphone" ? "bg-[#dddddd]" : ""
            }`}
          >
            Headphone
          </button>
          <button
            onClick={() =>
              setSelectedCatagory((prevState) =>
                prevState !== "cables" ? "cables" : "none"
              )
            }
            className={`w-full p-2 rounded-lg text-left hover:bg-[#dddddd] ${
              selectedCatagory === "cables" ? "bg-[#dddddd]" : ""
            }`}
          >
            Cables
          </button>
          <button
            onClick={() =>
              setSelectedCatagory((prevState) =>
                prevState !== "powerbank" ? "powerbank" : "none"
              )
            }
            className={`w-full p-2 rounded-lg text-left hover:bg-[#dddddd] ${
              selectedCatagory === "powerbank" ? "bg-[#dddddd]" : ""
            }`}
          >
            Power Banks
          </button>
          <button
            onClick={() =>
              setSelectedCatagory((prevState) =>
                prevState !== "mousepad" ? "mousepad" : "none"
              )
            }
            className={`w-full p-2 rounded-lg text-left hover:bg-[#dddddd] ${
              selectedCatagory === "mousepad" ? "bg-[#dddddd]" : ""
            }`}
          >
            Mouse Pad
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
