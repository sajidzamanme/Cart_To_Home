import useItemStore from "../stores/useItemStore";
import SlimItemCard from "./SlimItemCard";
import { IoTrash } from "react-icons/io5";

const RemoveForm = ({ searchLine }) => {
  const itemStore = useItemStore();

  const handleRemove = (item) => {
    itemStore.setItems(
      itemStore.items.filter((current) => {
        return current.id != item.id;
      })
    );
  };

  return (
    <div className="flex flex-col items-center py-4 px-6 w-full">
      <div className="flex flex-col gap-3 w-[98%] max-w-[50rem] items-center">
        {itemStore.items.map((item) => {
          if (
            item.name.toLowerCase().includes(searchLine) ||
            item.catagory.toLowerCase().includes(searchLine)
          ) {
            return (
              <SlimItemCard
                key={item.id}
                item={item}
                btnIcon={
                  <IoTrash
                    className="size-6 hover:text-red-600"
                    onClick={() => handleRemove(item)}
                  />
                }
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default RemoveForm;
