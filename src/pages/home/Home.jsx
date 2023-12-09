import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  const context = useContext(MyContext);
  const { mode } = context;

  return (
    <div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Testimonial />
    </div>
  );
}

export default Home;
