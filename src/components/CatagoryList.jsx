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
  setPageNumber
}) => {
  const itemStore = useItemStore();
  const selectedItems = itemStore.items.filter(
    (item) => item.catagory == selectedCatagory
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
  }, [searchLine, itemStore.items, selectedCatagory]);
  return (
    <>
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
    </>
  );
};

export default CatagoryList;
