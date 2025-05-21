import { useEffect, useState } from "react";
import useItemStore from "../stores/useItemStore";
import ItemCard from "./ItemCard";

const CatagoryList = ({
  selectedCatagory,
  searchLine = "",
  setLength,
  itemPerPage,
  setItemPerPage,
  pageNumber,
  setPageNumber,
  itemSelected = null,
}) => {
  const itemStore = useItemStore();
  const selectedItems = itemStore.items.filter(
    (item) =>
      item.catagory == selectedCatagory &&
      (itemSelected == null ? true : item.id !== itemSelected.id)
  );

  const [showedItems, setShowedItems] = useState(selectedItems);

  useEffect(() => {
    setItemPerPage(2);
  }, []);

  useEffect(() => {
    setPageNumber(1);
  }, [selectedCatagory]);

  useEffect(() => {
    setLength(showedItems.length);
  }, [showedItems]);

  useEffect(() => {
    setShowedItems(
      selectedItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLine) ||
          item.catagory.toLowerCase().includes(searchLine)
      )
    );
  }, [searchLine, itemStore.items, selectedCatagory, itemSelected]);
  return (
    <div className="col-span-2 sm:col-span-3 lg:col-span-4 xl:col-span-5 grid grid-cols-2 gap-4 w-full place-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {showedItems.length === 0 ? (
        <h1>No Results Found</h1>
      ) : (
        showedItems
          .slice(
            pageNumber * itemPerPage - itemPerPage,
            pageNumber * itemPerPage
          )
          .map((item) => {
            return <ItemCard key={item.id} item={item} />;
          })
      )}
    </div>
  );
};

export default CatagoryList;
