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

  useEffect(() => {
    setPageNumber(1);
  }, [selectedCatagory])
  return (
    <>
      {selectedItems
        .slice(pageNumber * itemPerPage - itemPerPage, pageNumber * itemPerPage)
        .map((item) => {
          if (
            item.name.toLowerCase().includes(searchLine) ||
            item.catagory.toLowerCase().includes(searchLine)
          ) {
            return <ItemCard key={item.id} item={item} />;
          }
        })}

      <PageBar
        length={selectedItems.length}
        itemPerPage={itemPerPage}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default CatagoryList;
