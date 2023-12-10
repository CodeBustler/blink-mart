import React, { useContext, useEffect, useState } from "react";
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
	const hideSideBar = () => setOpen(!open);
	const isAuth = false;
	return (
		<>
			<header
				className={`${
					mode === "light" ? "bg-[#F3F4F6] " : "bg-[#2f2f2f] "
				}`}
				id="header-container"
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
						className={`flex items-center gap-6 text-md  font-semibold
						${open ? "right-0  " : "right-[-300px] "} 
						${mode === "light" ? "bg-[#F3F4F6] " : "bg-[#2f2f2f] "}`}
						id="navlinks"
						onClick={hideSideBar}
					>
						<NavLink
							to="/productInfo"
							onClick={hideSideBar}
							className="page"
						>
							All Products
						</NavLink>
						<NavLink
							to="/order"
							onClick={hideSideBar}
							className="page"
						>
							Order
						</NavLink>
						<NavLink
							to="/dashboard"
							onClick={hideSideBar}
							className="page"
						>
							Admin
						</NavLink>
						<NavLink
							to="/cart"
							className="page flex items-center gap-2 "
							onClick={hideSideBar}
						>
							<FiShoppingCart className="text-3xl" />
							<span>10</span>
						</NavLink>
						<div
							onClick={toggleMode}
							className="cursor-pointer"
							title="Light/Dark Mode"
						>
							{mode === "light" ? (
								<MdOutlineLightMode className={`text-3xl `} />
							) : (
								<MdDarkMode className="text-3xl" />
							)}
						</div>

						{isAuth ? (
							<button
								to=""
								onClick={hideSideBar}
								className={`px-5 py-2 rounded-md bg-green-600 hover:bg-green-800 active:bg-green-600 ${
									mode === "light"
										? "text-white"
										: "text-white"
								}`}
							>
								Login
							</button>
						) : (
							<>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBWPQ3eQmMBLPFLRr5gLrySx-rrkp8NRK5mzynUlQL_8hQf9FbgxZaxRBDRw6Y3e_QhM&usqp=CAU"
									alt=""
									className="w-10 rounded-full"
									onClick={hideSideBar}
								/>

								<button
									to=""
									onClick={hideSideBar}
									className={`px-5 py-2 rounded-md bg-red-700 hover:bg-red-800 active:bg-red-600 ${
										mode === "light"
											? "text-white"
											: "text-white"
									}`}
								>
									Logout
								</button>
							</>
						)}
					</div>
					{/*HAMBURGER */}
					<GiHamburgerMenu
						className={`text-4xl cursor-pointer ${
							open ? "text-yellow-500" : ""
						}`}
						id="hamburger"
						onClick={() => setOpen(!open)}
					/>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
