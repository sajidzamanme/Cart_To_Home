import { IoTrash } from "react-icons/io5";
import useItemStore from "../stores/useItemStore";

const SlimItemCard = ({ item }) => {
  const itemStore = useItemStore();

  const handleRemove = () => {
    itemStore.setItems(
      itemStore.items.filter((current) => {
        return current.id != item.id;
      })
    );
  };

  return (
    <div className="grid grid-cols-7 items-center place-items-center w-full bg-[#DBE2EF] rounded-lg gap-2 px-3 py-2 h-22">
      <div className="col-span-6 flex flex-row items-center w-full bg-white rounded-lg h-16 p-2">
        <h1>{item.name}</h1>
      </div>
      <div className="flex flex-row items-center justify-center w-full bg-white rounded-lg h-16 p-2">
        <IoTrash className="size-6 hover:text-red-600" onClick={handleRemove} />
      </div>
    </div>
  );
};

export default SlimItemCard;
