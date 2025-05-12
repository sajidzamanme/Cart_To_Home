import ItemCard from "./ItemCard";
import useItemStore from "../stores/useItemStore";

const ItemList = () => {
  const itemStore = useItemStore();
  
  return (
    <div className="grid place-items-center w-full px-3 py-1">
      <div className="grid grid-cols-2 gap-4 w-full place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          itemStore.items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

export default ItemList;
