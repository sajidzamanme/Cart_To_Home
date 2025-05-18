const CustomBtn = ({
  label = "Button",
  bgCol = "bg-[#DBE2EF]",
  padding = "px-4 py-2",
  hoverEffect = "hover:bg-[#F9F7F7]",
  onClickFunc = () => {},
  classList = "",
}) => {
  return (
    <button
      className={`${bgCol} rounded-md cursor-pointer sm:rounded-lg ${hoverEffect} ${padding} ${classList}`}
      onClick={() => onClickFunc()}
    >
      <h1 className="text-[0.8rem]">{label}</h1>
    </button>
  );
};

export default CustomBtn;
