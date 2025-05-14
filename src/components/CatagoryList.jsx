import { useState } from "react";
import useItemStore from "../stores/useItemStore";
import ItemCard from "./ItemCard";
import PageBar from "./PageBar";

const CatagoryList = ({ selectedCatagory }) => {
  const itemStore = useItemStore();
  const selectedItems = itemStore.items.filter(
    (item) => item.catagory == selectedCatagory
  );
  const [pageNumber, setPageNumber] = useState(1);
  const itemPerPage = 2;
  return (
    <>
      {selectedItems
        .slice(pageNumber * itemPerPage - itemPerPage, pageNumber * itemPerPage)
        .map((found) => {
          return <ItemCard key={found.id} item={found} />;
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
