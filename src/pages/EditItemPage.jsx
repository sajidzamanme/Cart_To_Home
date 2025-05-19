import { useNavigate, useOutletContext } from "react-router-dom";
import SideBar from "../components/SideBar";
import SlimItemCard from "../components/SlimItemCard";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import useItemStore from "../stores/useItemStore";
import { FaRegEdit } from "react-icons/fa";
import GoBackBtn from "../components/GoBackBtn";

const EditItemPage = () => {
  const {
    selectedCatagory,
    setSelectedCatagory,
    loginState,
    adminState,
    onAdmin,
    setOnAdmin,
  } = useOutletContext();

  const itemStore = useItemStore();

  const [searchLine, setSearchLine] = useState("");

  const navigate = useNavigate();

  const handleEdit = (item) => {
    navigate("/admin-panel/edit/form", { state: { item } });
  };

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
      <div className="col-span-2 w-full md:col-span-3 xl:col-span-4">
        <div className="w-full px-6 mt-4">
          <div className="flex flex-row items-center justify-center w-[98%] max-w-[50rem] place-self-center">
            <div className="hidden md:flex">
              <GoBackBtn />
            </div>
            <SearchBar searchLine={searchLine} setSearchLine={setSearchLine} />
          </div>
        </div>

        <div className="flex flex-col items-center py-4 px-6 w-full">
          <div className="flex flex-col gap-3 w-[98%] max-w-[50rem] items-center">
            {itemStore.items.map((item) => {
              if (
                item.name.toLowerCase().includes(searchLine) ||
                item.catagory.toLowerCase().includes(searchLine)
              ) {
                return (
                  <SlimItemCard
                    key={item.id}
                    item={item}
                    btnIcon={
                      <FaRegEdit
                        className="size-6 hover:text-[#3F72AF]"
                        onClick={() => handleEdit(item)}
                      />
                    }
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItemPage;
