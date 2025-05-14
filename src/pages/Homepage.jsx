import SearchBar from "../components/SearchBar";
import ItemList from "../components/ItemList";
import SideBar from "../components/SideBar";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const homepage = () => {
  const { selectedCatagory, setSelectedCatagory } = useOutletContext();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
      {/* SideBar */}
      <div className="hidden h-full md:flex">
        <SideBar
          selectedCatagory={selectedCatagory}
          setSelectedCatagory={setSelectedCatagory}
        />
      </div>

      {/* Search Bar & ItemList */}
      <div className="col-span-3 xl:col-span-4">
        <div className="flex flex-row justify-center items-center px-2 pt-4 pb-0 md:hidden">
          <SearchBar />
        </div>
        <ItemList selectedCatagory={selectedCatagory} />
      </div>
    </div>
  );
};

export default homepage;
