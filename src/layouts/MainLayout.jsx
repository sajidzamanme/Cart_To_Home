import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedCatagory, setSelectedCatagory] = useState("none");

  return (
    <div className="flex flex-col min-h-dvh max-h-full w-full">
      <NavBar setIsMenuVisible={setIsMenuVisible} />
      <div className="relative flex-grow">
        <div className="z-10">
          <Outlet context={{ selectedCatagory, setSelectedCatagory }} />
        </div>
        {isMenuVisible && (
          <>
            <div
              onClick={() => setIsMenuVisible((prevState) => !prevState)}
              className="z-30 absolute top-0 w-full h-full bg-black opacity-50"
            ></div>
            <div className="z-50 absolute top-0 h-full w-2/3 bg-white">
              <SideBar
                selectedCatagory={selectedCatagory}
                setSelectedCatagory={setSelectedCatagory}
                setIsMenuVisible={setIsMenuVisible}
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
