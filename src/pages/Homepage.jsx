import SearchBar from "../components/SearchBar";
import ItemList from "../components/ItemList";
import SideBar from "../components/SideBar";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const homepage = () => {
  const {
    selectedCatagory,
    setSelectedCatagory,
    loginState,
    adminState,
    onAdmin,
    setOnAdmin,
    searchLine, 
    setSearchLine
  } = useOutletContext();

  

  return (
    <div className="grid grid-cols-2 w-full md:grid-cols-4 xl:grid-cols-5">
      {/* SideBar */}
      <div className="hidden h-full md:flex">
        <SideBar
          selectedCatagory={selectedCatagory}
          setSelectedCatagory={setSelectedCatagory}
          loginState={loginState}
          adminState={adminState}
          onAdmin={onAdmin}
          setOnAdmin={setOnAdmin}
        />
      </div>

      {/* Search Bar & ItemList */}
      <div className="col-span-2 md:col-span-3 xl:col-span-4">
        <div className="flex flex-row justify-center items-center px-2 pt-4 pb-0 md:hidden">
          <SearchBar searchLine={searchLine} setSearchLine={setSearchLine} />
        </div>
        <ItemList selectedCatagory={selectedCatagory} searchLine={searchLine.toLowerCase()} />
      </div>
    </div>
  );
};

export default homepage;
