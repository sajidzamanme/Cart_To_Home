import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [selectedCatagory, setSelectedCatagory] = useState("none");
  const [loginState, setLoginState] = useState(false);
  const [adminState, setAdminState] = useState(false);
  const [onAdmin, setOnAdmin] = useState(false);
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);

  const [searchLine, setSearchLine] = useState("");
  const [length, setLength] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setIsMenuVisible(false);
    setSelectedCatagory("none");
    setOnAdmin(false);
  }, []);

  return (
    <div className="flex flex-col min-h-dvh max-h-full w-full">
      {showLogoutMenu && <div
        className="fixed z-47 top-0 left-0 w-full h-full"
        onClick={() => setShowLogoutMenu(false)}
      ></div>}

      <NavBar
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        loginState={loginState}
        setShowLogoutMenu={setShowLogoutMenu}
        searchLine={searchLine}
        setSearchLine={setSearchLine}
        setSelectedCatagory={setSelectedCatagory}
        setOnAdmin={setOnAdmin}
      />
      {showLogoutMenu && (
        <div className="absolute z-48 right-4 top-11">
          <button
            onClick={() => {
              setLoginState(false);
              setShowLogoutMenu(false);
            }}
            className="bg-white px-2 py-0.5 border rounded-xl w-[6rem] h-[4rem]"
          >
            Logout
          </button>
        </div>
      )}

      <div className="relative h-full flex-grow bg-white">
        <div className="z-10 h-full">
          <Outlet
            context={{
              selectedCatagory,
              setSelectedCatagory,
              loginState,
              setLoginState,
              adminState,
              setAdminState,
              onAdmin,
              setOnAdmin,
              searchLine,
              setSearchLine,
              length,
              setLength,
              itemPerPage,
              setItemPerPage,
              pageNumber,
              setPageNumber,
            }}
          />
        </div>

        <div
          onClick={() => {
            if (isMenuVisible) setIsMenuVisible((prevState) => !prevState);
          }}
          className={`z-30 absolute top-0 w-full h-full bg-black md:hidden transform transition-all duration-300 ease-in-out ${
            isMenuVisible
              ? "opacity-50 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        ></div>

        <div
          className={`z-46 absolute top-0 h-full w-2/3 bg-white md:hidden transform transition-all duration-300 ease-in-out ${
            isMenuVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar
            selectedCatagory={selectedCatagory}
            setSelectedCatagory={setSelectedCatagory}
            setIsMenuVisible={setIsMenuVisible}
            loginState={loginState}
            adminState={adminState}
            onAdmin={onAdmin}
            setOnAdmin={setOnAdmin}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
