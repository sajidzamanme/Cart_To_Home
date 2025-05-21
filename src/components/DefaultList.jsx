import { useEffect, useState } from "react";
import useItemStore from "../stores/useItemStore";
import ItemCard from "./ItemCard";

const DefaultList = ({
  searchLine,
  setLength,
  itemPerPage,
  setItemPerPage,
  pageNumber,
}) => {
  const itemStore = useItemStore();
  setItemPerPage(16);

  const [showedItems, setShowedItems] = useState([]);

  useEffect(() => {
    setLength(showedItems.length);
  }, [showedItems]);

  useEffect(() => {
    if (searchLine != "") {
      setShowedItems(
        itemStore.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchLine) ||
            item.catagory.toLowerCase().includes(searchLine)
        )
      );
    } else setShowedItems([...itemStore.items]);
  }, [searchLine, itemStore.items]);

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

export default DefaultList;
