import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/data/MyContext";

function Home() {
  const context = useContext(MyContext);
  const { mode } = context;

  useEffect(() => {
    faviconDynamic(); // DYNAMIC FAVICON
  }, [mode]);

  // DYNAMIC FAVICON
  const faviconDynamic = () => {
    const favicon = document.getElementById("favicon");
    if (mode === "light") {
      favicon.href = "https://cdn-icons-png.flaticon.com/128/891/891462.png";
    } else {
      favicon.href = "https://cdn-icons-png.flaticon.com/128/3737/3737151.png";
    }
  };

  console.log(context);
  return <div className="flex items-center gap-2 ">Home</div>;
}

export default Home;
