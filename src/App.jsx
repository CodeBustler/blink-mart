import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES & COMPONENTS
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import Layout from "./components/layout/Layout";
import MyState from "./context/data/MyState";
import AllProducts from "./pages/allproducts/AllProducts";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollToTop from "./components/scrollTopTop/ScrollToTop";

function App() {
  return (
    /*CONTEXT DATA*/
    <MyState>
      <Router>
        <ScrollToTop />
        <Routes>
          {/*LAYOUT*/}
          <Route path="" element={<Layout />}>
            {/*CHILDRENS*/}
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productInfo/:id" element={<ProductInfo />} />
            <Route path="/allProducts" element={<AllProducts />} />
          </Route>
          {/*ERROR PAGE*/}
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
