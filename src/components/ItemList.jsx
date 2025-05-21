import { useEffect } from "react";
import CatagoryList from "./CatagoryList";
import DefaultList from "./DefaultList";
import PageBar from "./PageBar";
import { useOutletContext } from "react-router-dom";

const ItemList = ({ selectedCatagory, searchLine }) => {
  const {
    length,
    setLength,
    itemPerPage,
    setItemPerPage,
    pageNumber,
    setPageNumber,
  } = useOutletContext();

  useEffect(() => {
    setPageNumber(1);
  }, [searchLine, selectedCatagory]);

  return (
    <div className="grid place-items-center w-full px-3 my-4">
      <div className="grid grid-cols-2 gap-4 w-full place-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {selectedCatagory === "none" && (
          <DefaultList
            searchLine={searchLine}
            setLength={setLength}
            itemPerPage={itemPerPage}
            setItemPerPage={setItemPerPage}
            pageNumber={pageNumber}
          />
        )}

        {selectedCatagory !== "none" && (
          <CatagoryList
            selectedCatagory={selectedCatagory}
            searchLine={searchLine}
            setLength={setLength}
            itemPerPage={itemPerPage}
            setItemPerPage={setItemPerPage}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        )}

        <PageBar
          length={length}
          itemPerPage={itemPerPage}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};

export default ItemList;
