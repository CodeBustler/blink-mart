import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoChatbubbles } from "react-icons/io5";

import { Link } from "react-router-dom";

function Footer() {
  const context = useContext(MyContext);
  const { mode } = context;

  const darkMode = {
    backgroundColor: mode === "dark" ? "#2F2F2F" : "#F3F4F6",
    color: mode === "dark" ? "white" : "",
  };
  return (
    <footer className="mt-10">
      {/*FOOTER LINKS*/}
      <div
        className={`p-2  lg:p-7 ${
          mode === "light" ? "bg-[#D1D5DB]" : "bg-[#2F2F2F]"
        }`}
      >
        <div className="container  m-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 md:gap-5">
            <div className=" p-5 flex flex-col">
              <h3 className="font-semibold tracking-wider mb-1">NAVIGATE</h3>
              <Link to="/" className="opacity-50">
                Home
              </Link>
              <Link to="/all_products" className="opacity-50">
                Products
              </Link>
              <Link to="/order" className="opacity-50">
                Order
              </Link>
              <Link to="/cart" className="opacity-50">
                Cart
              </Link>
            </div>

            <div className=" p-5 flex flex-col">
              <h3 className="font-semibold tracking-wider mb-1 ">KNOW US</h3>
              <a
                href="mailto:codebustler@gmail.com"
                className="opacity-50"
                target="_blank"
              >
                About Us
              </a>
              <a href="#" className="opacity-50">
                Careers
              </a>
              <a href="#" className="opacity-50">
                Press Releases
              </a>
              <a href="#" className="opacity-50">
                Know BlinkMart
              </a>
            </div>
            <div className=" p-5 flex flex-col">
              <h3 className="font-semibold tracking-wider mb-1 ">
                MODE OF PAYMENT
              </h3>
              <a href="#" className="opacity-50">
                <img src="" alt="" className=" mb-[2px] mr-2" />
                Cash On Delivery
              </a>
              <a href="#" className="opacity-50">
                Debit & Credit Card
              </a>
              <a href="#" className="opacity-50">
                PayPal
              </a>
              <a href="#" className="opacity-50">
                Net Banking
              </a>
            </div>
            <div className=" p-5 flex flex-col">
              <h3 className="font-semibold tracking-wider mb-1">CONTACT US</h3>
              <a
                href="mailto:codebustler@gmail.com"
                className="opacity-50"
                target="_blank"
              >
                <MdEmail className="inline mb-[2px] mr-2" />
                Email
              </a>
              <a href="#" className="opacity-50">
                <MdCall className="inline mb-[2px] mr-2" />
                Tollfree
              </a>
              <a href="#" className="opacity-50">
                <IoLogoWhatsapp className="inline mb-[2px] mr-2" />
                WhatsApp
              </a>
              <a href="#" className="opacity-50">
                <IoChatbubbles className="inline mb-[2px] mr-2" />
                Chat Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*FOOTER COPYRIGHT*/}
      <div className={` ${mode === "light" ? "bg-[#E5E7EB]" : "bg-[#404246]"}`}>
        <div className="container m-auto flex flex-col md:flex-row gap-4 items-center justify-between py-5 lg:py-4">
          {/*LEFT */}
          <div className="flex items-center gap-3 ">
            <h2 className="font-bold">BlinkMart</h2>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} BlinkMart
              <span className="ml-2 opacity-50">www.blinkmart.com</span>
            </p>
          </div>
          {/*RIGHT*/}
          <div className="flex items-center gap-3 ">
            <a href="https://www.instagram.com/codebustler" target="_blank">
              <IoLogoInstagram className="text-gray-500" />
            </a>
            <a href="https://www.twitter.com/codebustler" target="_blank">
              <IoLogoTwitter className="text-gray-500" />
            </a>
            <a href="https://www.facebook.com/codebustler" target="_blank">
              <IoLogoFacebook className="text-gray-500" />
            </a>

            <a href="https://www.youtube.com/@codebustler" target="_blank">
              <IoLogoYoutube className="text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
