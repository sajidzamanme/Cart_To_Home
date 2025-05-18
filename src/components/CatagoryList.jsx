import { useEffect, useState } from "react";
import useItemStore from "../stores/useItemStore";
import ItemCard from "./ItemCard";
import PageBar from "./PageBar";

const CatagoryList = ({ selectedCatagory, searchLine }) => {
  const itemStore = useItemStore();
  const selectedItems = itemStore.items.filter(
    (item) => item.catagory == selectedCatagory
  );
  const [pageNumber, setPageNumber] = useState(1);
  const itemPerPage = 2;

  const [showedItems, setShowedItems] = useState(selectedItems);

  useEffect(() => {
    setPageNumber(1);
  }, [selectedCatagory]);

  useEffect(() => {
    setShowedItems(
      selectedItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchLine) ||
          item.catagory.toLowerCase().includes(searchLine)
      )
    );
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

      <PageBar
        length={showedItems.length}
        itemPerPage={itemPerPage}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default CatagoryList;
