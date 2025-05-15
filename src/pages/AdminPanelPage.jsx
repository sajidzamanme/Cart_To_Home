import { useNavigate, useOutletContext } from "react-router-dom";
import SideBar from "../components/SideBar";
import CustomBtn from "../components/CustomBtn";

const AdminPanelPage = () => {
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
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center gap-4 w-[23rem] rounded-xl mt-12 py-10 bg-[#6090ca]">
            <CustomBtn label="Add Item" classList="p-5 w-[35%]" onClickFunc={() => navigate("/admin-panel/add")} />
            <CustomBtn label="Edit Item" classList="p-5 w-[35%]" onClickFunc={() => navigate("/admin-panel/edit")} />
            <CustomBtn label="Remove Item" classList="p-5 w-[35%]" onClickFunc={() => navigate("/admin-panel/remove")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelPage;
