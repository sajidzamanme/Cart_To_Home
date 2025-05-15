const CustomBtn = ({
  label = "Button",
  classList = "px-4 py-2",
  onClickFunc = () => {},
}) => {
  return (
    <button
      className={`bg-[#DBE2EF] rounded-md cursor-pointer sm:rounded-lg hover:bg-[#F9F7F7] ${classList}`}
      onClick={() => onClickFunc()}
    >
      <h1 className="text-[0.8rem]">{label}</h1>
    </button>
  );
};

export default CustomBtn;
