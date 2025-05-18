import { useNavigate, useOutletContext } from "react-router-dom";
import SideBar from "../components/SideBar";
import RemoveForm from "../components/RemoveForm";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const RemoveItemPage = () => {
  const {
    selectedCatagory,
    setSelectedCatagory,
    loginState,
    adminState,
    onAdmin,
    setOnAdmin,
  } = useOutletContext();

  const [searchLine, setSearchLine] = useState("");

  const navigate = useNavigate();

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
          <div className="flex flex-col items-center justify-center w-[98%] max-w-[50rem] place-self-center">
            <SearchBar searchLine={searchLine} setSearchLine={setSearchLine} />
          </div>
        </div>

        <RemoveForm
          searchLine={searchLine
            .trim()
            .toLowerCase()
            .split("")
            .filter(
              (ch) =>
                (ch >= "a" && ch <= "z") ||
                (ch >= "A" && ch <= "Z") ||
                (ch >= "0" && ch <= "9")
            )
            .join("")}
        />
      </div>
    </div>
  );
};

export default RemoveItemPage;
