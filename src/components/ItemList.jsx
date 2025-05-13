import ItemCard from "./ItemCard";
import useItemStore from "../stores/useItemStore";
import { useEffect, useState } from "react";

const ItemList = () => {
  const itemStore = useItemStore();

  const [pageNumber, setPageNumber] = useState(1);

  // useEffect(() => {
  //   start = (start * 4) + 1;
  //   end = (end * pageNumber) + 1;
  // }, [pageNumber])

  return (
    <div className="grid place-items-center w-full px-3 mt-4">
      <div className="grid grid-cols-2 gap-4 w-full place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {itemStore.items
          .slice(pageNumber * 4 - 4, pageNumber * 4)
          .map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}

        <div className="flex flex-row justify-center items-center w-full gap-4 col-span-2">
          {Array.from({ length: itemStore.items.length / 4 }).map(
            (_, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setPageNumber(index + 1)}
                  className={`w-8 h-8 cursor-pointer ${
                    pageNumber === index + 1 ? "font-bold text-[#9d33ff]" : ""
                  }`}
                >
                  {index + 1}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
