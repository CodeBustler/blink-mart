import React, { useContext, useState } from "react";
import MyContext from "../../context/data/MyContext";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
	const [open, setOpen] = useState(false);

	const context = useContext(MyContext);
	const { mode, toggleMode } = context;

	function handleHamburger() {
		setOpen(!open);
		console.log(open);
	}
	return (
		<>
			<header
				className={`header-container mb-5 sticky w-1[100vw] ${
					mode === "light"
						? "bg-white text-black"
						: "bg-[#212121] text-white"
				}`}
			>
				{/*PUSH NOTIFICATION*/}
				<p className="text-center bg-green-500 text-md text-white py-1">
					50% Off Bumber Offer!
				</p>
				{/*NAVBAR*/}
				<nav
					className={`navbar flex items-center justify-between py-3 px-4 shadow-xl `}
				>
					{/*LOGO*/}
					<Link
						to="/"
						className="text-2xl font-bold flex items-center gap-2.5"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
							alt="blinkMart-logo"
							className="w-8"
						/>
						BlinkMart
					</Link>

					{/*NAV-LINKS*/}
					<div
						className={`flex items-center gap-4 text-md  ${
							open ? "right-0 " : "right-[-200px] "
						} ${
							mode === "light"
								? "bg-white text-black"
								: "bg-[#212121] text-white"
						}`}
						id="navlinks"
					>
						<NavLink to="/all_products">All Products</NavLink>
						<NavLink to="/order">Order</NavLink>
						<NavLink to="/dashboard">Admin</NavLink>
						<NavLink to="">Logout</NavLink>
						<NavLink to="">Login</NavLink>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBWPQ3eQmMBLPFLRr5gLrySx-rrkp8NRK5mzynUlQL_8hQf9FbgxZaxRBDRw6Y3e_QhM&usqp=CAU"
							alt=""
							className="w-10 rounded-full"
						/>

						<div
							onClick={toggleMode}
							className=" cursor-pointer"
							title="Light/Dark Mode"
						>
							{mode === "light" ? (
								<MdOutlineLightMode className="text-3xl" />
							) : (
								<MdDarkMode className="text-3xl" />
							)}
						</div>
						<NavLink to="/cart" className="flex items-center gap-2">
							<FiShoppingCart className="text-3xl" />
							<span>10</span>
						</NavLink>
					</div>
					{/*HAMBURGER */}
					<GiHamburgerMenu
						className="text-4xl cursor-pointer hover:text-orange-400 "
						id="hamburger"
						onClick={handleHamburger}
					/>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
