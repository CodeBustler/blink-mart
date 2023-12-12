import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../context/data/MyContext";
import { MdStarBorder } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { GoPlus } from "react-icons/go";

function ProductInfo() {
	const context = useContext(MyContext);
	const { mode, toggleMode } = context;
	const darkMode = {
		backgroundColor: mode === "dark" ? "#2F2F2F" : "#F3F4F6",
		color: mode === "dark" ? "white" : "",
	};
	return (
		<section className=" mt-[120px]">
			<div className="flex  items-center md:items-start justify-center  flex-col md:flex-row gap-10 ">
				{/*IMG*/}
				<div className=" w-[90%] object-center object-cover bg-red-400  lg:w-[35%]  m-2 rounded-md overflow-hidden ">
					<img
						src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41a4-vgETkL._SX300_SY300_QL70_FMwebp_.jpg"
						alt=""
						className="w-full h-full"
					/>
				</div>
				{/*DETAIL*/}
				<div className="px-6 max-w-[550px]">
					<p className="text-md pt-3 text-gray-400">Brand Name</p>
					<h2 className="font-bold text-2xl pt-2">Product Title</h2>
					<div className="flex items-center gap-5">
						<div className="flex my-4">
							<MdStar />
							<MdStar />
							<MdStar />
							<MdStar />
							<MdStarBorder />
						</div>
						<div className="text-gray-500">1,869 Ratings</div>
					</div>
					<p className="text-gray-500">
						Product description consectetur adipisicing elit elit
						lorem Product description consectetur adipisicing elit
						elit loremProduct description consectetur adipisicing
						elit elit lorem.
					</p>
					<div className="flex items-center justify-between gap-10 my-5">
						<h3 className="font-bold py-3 text-2xl">₹ 500</h3>
						<button
							className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 w-[50%] rounded-md py-2 mt-1 font-semibold cursor-pointer"
							style={{
								color: mode === "dark" ? "white" : "white",
							}}
						>
							<GoPlus className="inline mb-1 mr-2" />
							Add to Cart
						</button>
					</div>
					{/*BENEFITS*/}
					<div
						className={`flex flex-wrap justify-around md:justify-between gap-4 mt-10 border-t border-gray-800 pt-10 ${
							mode === "light" ? "border-t-gray-300" : ""
						} `}
					>
						<div className="flex flex-col items-center gap-2  max-w-[100px] shadow-lg p-5 rounded-lg">
							<FaArrowRotateLeft className="text-xl text-red-500" />
							<p className="text-center text-sm text-gray-500">
								10 days Returnable
							</p>
						</div>
						<div className="flex flex-col items-center gap-2  max-w-[100px] shadow-lg p-5 rounded-lg">
							<RiMotorbikeFill className="text-xl text-purple-500" />
							<p className="text-center text-sm text-gray-500">
								Free delivery
							</p>
						</div>
						<div className="flex flex-col items-center gap-2  max-w-[100px] shadow-lg p-5 rounded-lg">
							<AiOutlineTrophy className="text-xl text-orange-500" />

							<p className="text-center text-sm text-gray-500">
								Top Brand
							</p>
						</div>
						<div className="flex flex-col items-center gap-2  max-w-[100px] shadow-lg p-5 rounded-lg">
							<GrSecure className="text-xl text-green-500" />
							<p className="text-center text-sm text-gray-500">
								Secure Transaction
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductInfo;
