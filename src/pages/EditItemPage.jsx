import { useNavigate, useOutletContext } from "react-router-dom";
import SideBar from "../components/SideBar";

const EditItemPage = () => {
  const {
    selectedCatagory,
    setSelectedCatagory,
    loginState,
    adminState,
    onAdmin,
    setOnAdmin,
  } = useOutletContext();

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
      <div className="col-span-2 md:col-span-3 xl:col-span-4">
        Edit Item Page
      </div>
    </div>
  );
};

export default EditItemPage;
