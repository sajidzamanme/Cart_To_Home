import SearchBar from "../components/SearchBar";
import ItemList from "../components/ItemList";
import SideBar from "../components/SideBar";

const homepage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5">
      {/* SideBar */}
      <div className="hidden h-full md:flex">
        <SideBar />
      </div>
      
      {/* Search Bar & ItemList */}
      <div className="col-span-3 xl:col-span-4">
        <div className="flex flex-row justify-center items-center p-3 md:hidden">
          <SearchBar />
        </div>
        <ItemList />
      </div>
    </div>
  );
};

export default homepage;
