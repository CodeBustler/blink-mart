import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="p-5 mt-[90px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
