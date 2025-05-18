import { useEffect, useState } from "react";
import useItemStore from "../stores/useItemStore";
import ItemCard from "./ItemCard";
import PageBar from "./PageBar";
import { HiH1 } from "react-icons/hi2";

const DefaultList = ({ searchLine }) => {
  const itemStore = useItemStore();
  const itemPerPage = 6;

  const [pageNumber, setPageNumber] = useState(1);

  const [showedItems, setShowedItems] = useState([]);

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

      <PageBar
        length={showedItems.length}
        itemPerPage={itemPerPage}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default DefaultList;
