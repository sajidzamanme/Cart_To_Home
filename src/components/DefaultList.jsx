import useItemStore from "../stores/useItemStore";
import ItemCard from "./ItemCard";
import PageBar from "./PageBar";

const DefaultList = ({ pageNumber, setPageNumber, searchLine }) => {
  const itemStore = useItemStore();
  const itemPerPage = 6;
  return (
    <>
      {itemStore.items
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
        length={itemStore.items.length}
        itemPerPage={itemPerPage}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};

export default DefaultList;
