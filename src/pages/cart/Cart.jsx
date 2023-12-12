import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";
import { MdDeleteForever } from "react-icons/md";

function Cart() {
	const context = useContext(MyContext);
	const { mode, toggleMode } = context;
	const darkMode = {
		backgroundColor: mode === "dark" ? "#2F2F2F" : "#F3F4F6",
		color: mode === "dark" ? "white" : "",
	};

	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const monthsOfYear = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const currentDate = new Date().getDate();
	const currentMonth = monthsOfYear[new Date().getMonth()].slice(0, 3);

	return (
		<section className="my-[120px] mt-[80px] m-2">
			<h1 className=" text-2xl md:text-3xl font-semibold text-center pb-3">
				Cart Items
			</h1>
			{/*CARTS CONTAINER*/}
			<div className="flex flex-col md:flex-row items-center md:items-start justify-center p-1 md:p-5 ">
				{/* CART ITEMS CONTAINER */}
				<div className="w-full md:w-2/3 grow ">
					{/* ITEMS */}
					<div
						className={` md:w-[90%] p-5 mb-5 rounded-lg flex flex-col md:flex-row gap-5 relative md:hover:translate-x-2 transition  ${
							mode === "light"
								? "border border-gray-300"
								: "border-none"
						} `}
						style={darkMode}
					>
						<img
							src="https://placehold.co/200"
							alt=""
							className="rounded-md cursor-pointer"
						/>
						<div className="flex flex-col justify-between ">
							<div className="">
								<h3 className="font-semibold text-xl">
									Product Title
								</h3>
								<p className="mt-2 text-gray-500">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Facilis sapiente
									consectetur assumenda illum magnam veniam
									vitae rem ad provident
								</p>
								<h3 className="font-semibold text-xl mt-2">
									₹ 100
								</h3>
								<p className="italic text-gray-500 mt-2 text-sm">
									Delivery by {currentDate + 5} {currentMonth}{" "}
									| 9 PM
								</p>
							</div>
							<div className="flex items-center justify-between mt-2">
								<div className="">
									<button className="bg-blue-500 w-[25px] rounded-sm  mx-2 text-lg  font-semibold cursor-pointer">
										-
									</button>
									<span className="mx-1 font-semibold text-lg border px-5 rounded border-gray-600">
										1
									</span>
									<button className="bg-blue-500 w-[25px] rounded-sm mx-2 text-lg font-semibold cursor-pointer ">
										+
									</button>
								</div>
								<MdDeleteForever className="text-3xl text-red-500 cursor-pointer" />
							</div>
						</div>
					</div>
					{/*ITEM END*/}
				</div>

				{/* BILLING */}
				<div
					className={` w-full md:w-1/3 p-6 rounded-lg  ${
						mode === "light"
							? "border border-gray-300"
							: "border-none"
					} `}
					style={darkMode}
				>
					<div className="flex justify-between">
						<div>Price (2 Items)</div>
						<div className="font-bold">₹ 2000</div>
					</div>
					<div className="flex justify-between mt-3">
						<div>Shipping</div>
						<div className="font-bold">₹ 20</div>
					</div>
					<div className="flex justify-between mt-3">
						<div>5% Discount </div>
						<div className="font-bold">₹ 100</div>
					</div>
					<button className="rounded-lg text-center w-full mt-7 bg-blue-500 py-2 ">
						Buy Now
					</button>
				</div>
			</div>
		</section>
	);
}

export default Cart;
