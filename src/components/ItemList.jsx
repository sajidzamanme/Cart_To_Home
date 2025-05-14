import ItemCard from "./ItemCard";
import useItemStore from "../stores/useItemStore";
import { useEffect, useState } from "react";

const ItemList = ({ selectedCatagory }) => {
  const itemStore = useItemStore();

  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="grid place-items-center w-full px-3 my-4">
      <div className="grid grid-cols-2 gap-4 w-full place-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {selectedCatagory === "none" &&
          itemStore.items
            .slice(pageNumber * 6 - 6, pageNumber * 6)
            .map((item) => <ItemCard key={item.id} item={item} />)}

        {selectedCatagory !== "none" &&
          itemStore.items
            .filter((item) => item.catagory == selectedCatagory)
            .map((found, index) => {
              return <ItemCard key={found.id} item={found} />;
            })}

        {selectedCatagory === "none" && (
          <div className="flex flex-row justify-center items-center w-full gap-4 col-span-2 sm:col-span-3 lg:col-span-4 xl:col-span-5">
            {Array.from({ length: itemStore.items.length / 6 }).map(
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
        )}
      </div>
    </div>
  );
};

export default ItemList;
