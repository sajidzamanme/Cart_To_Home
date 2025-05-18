import CatagoryList from "./CatagoryList";
import DefaultList from "./DefaultList";

const ItemList = ({ selectedCatagory, searchLine }) => {
  return (
    <div className="grid place-items-center w-full px-3 my-4">
      <div className="grid grid-cols-2 gap-4 w-full place-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {selectedCatagory === "none" && <DefaultList searchLine={searchLine} />}

        {selectedCatagory !== "none" && (
          <CatagoryList
            selectedCatagory={selectedCatagory}
            searchLine={searchLine}
          />
        )}
      </div>
    </div>
  );
};

export default ItemList;
