import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-dvh max-h-full w-full">
      <NavBar />
      <div className="flex-grow mb-4 mt-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
