import { useOutletContext } from "react-router-dom";
import SideBar from "../components/SideBar";
import AddForm from "../components/AddForm";

const AddItemPage = () => {
  const {
    selectedCatagory,
    setSelectedCatagory,
    loginState,
    adminState,
    onAdmin,
    setOnAdmin,
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
        <AddForm />
      </div>
    </div>
  );
};

export default AddItemPage;
