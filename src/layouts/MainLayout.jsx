import React, { useState } from "react";
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

  return (
    <div className="flex flex-col min-h-dvh max-h-full w-full">
      <NavBar
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        loginState={loginState}
        setLoginState={setLoginState}
      />
      <div className="relative flex-grow bg-white">
        <div className="z-10">
          <Outlet
            context={{
              selectedCatagory,
              setSelectedCatagory,
              loginState,
              setLoginState,
              adminState,
              setAdminState,
              onAdmin,
              setOnAdmin
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
          className={`z-50 absolute top-0 h-full w-2/3 bg-white md:hidden transform transition-all duration-300 ease-in-out ${
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
