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

function App() {
  /*FAVICON*/

  return (
    /*CONTEXT DATA*/
    <MyState>
      <Router>
        <Routes>
          {/*LAYOUT*/}
          <Route path="" element={<Layout />}>
            {/*CHILDRENS*/}
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/all_products" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          {/*ERROR PAGE*/}
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
