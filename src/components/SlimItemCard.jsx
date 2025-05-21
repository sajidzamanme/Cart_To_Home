const SlimItemCard = ({ item, btnIcon }) => {
  return (
    <div className="grid grid-cols-7 items-center place-items-center w-full bg-[#DBE2EF] rounded-lg gap-2 px-3 py-2 h-22">
      <div className="col-span-6 flex flex-row items-center w-full bg-white rounded-lg h-16 p-2">
        <h1>{item.name}</h1>
      </div>
      <div className="flex flex-row items-center justify-center w-full bg-white rounded-lg h-16 p-2">
        {btnIcon}
      </div>
    </div>
  );
};

export default SlimItemCard;
