import React, { useContext, useState } from "react";
import MyContext from "../../context/data/MyContext";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
	const [open, setOpen] = useState(false);

	const context = useContext(MyContext);
	const { mode, toggleMode } = context;
	return (
		<>
			<header className="header-container mb-5">
				{/*PUSH NOTIFICATION*/}
				<p className="text-center bg-green-500 text-md text-white py-1">
					50% Off Bumber Offer!
				</p>
				{/*NAVBAR*/}
				<nav className="navbar flex items-center justify-between py-4 px-4 shadow-xl shadow-gray-800">
					{/*LOGO*/}
					<h1 className="text-2xl font-bold">BlinkMart</h1>

					{/*NAV-LINKS*/}
					<ul className="navlinks flex items-center gap-5">
						<li>
							<NavLink to="/all_products">All Products</NavLink>
						</li>
						<li>
							<NavLink to="/order">Order</NavLink>
						</li>
						<li>
							<NavLink to="/dashboard">Admin</NavLink>
						</li>
						<li>
							<NavLink to="">Logout</NavLink>
						</li>
						<li>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBWPQ3eQmMBLPFLRr5gLrySx-rrkp8NRK5mzynUlQL_8hQf9FbgxZaxRBDRw6Y3e_QhM&usqp=CAU"
								alt=""
								className="w-9 rounded-full"
							/>
						</li>
						<li onClick={toggleMode} className="cursor-pointer">
							{mode === "light" ? (
								<MdOutlineLightMode className="text-2xl animate-[spin_1s_ease-in-out_1]" />
							) : (
								<MdDarkMode className="text-2xl animate-[spin_1s_ease-in-out_1]" />
							)}
						</li>
						<NavLink to="/cart">
							<FiShoppingCart className="text-2xl animate-[bounce_1s_ease-in-out_1] " />
						</NavLink>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
