import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";
import "./filter.css";
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

function Filter() {
	const context = useContext(MyContext);
	const { mode } = context;

	const darkMode = {
		backgroundColor: mode === "dark" ? "rgb(64 66 70)" : "white",
		color: mode === "dark" ? "white" : "",
	};

	return (
		<div
			className="border-b border-gray-600 shadow-xl py-4 px-4 pt-5 mb-5 flex gap-4 flex-wrap items-center justify-between   z-10 "
			style={{
				backgroundColor: `${mode === "light" ? "#F3F4F6" : "#2F2F2F"}`,
				borderColor: `${mode === "light" ? "transparent" : ""}`,
			}}
		>
			{/*SEARCH BOX*/}
			<div
				className={`flex items-center gap-3 px-5 py-2 rounded-md  ${
					mode === "light" && "border border-gray-400"
				} `}
				style={darkMode}
				id="searchInput"
			>
				<input
					type="text"
					placeholder="Search here"
					className="bg-transparent outline-none w-[100%] "
				/>
				<CiSearch className="text-2xl font-cursor-pointer hover:text-orange-500 " />
			</div>

			{/*FILTER OPTION*/}
			<div className="flex flex-wrap gap-5" id="filter">
				<select
					className={`px-3 py-2 rounded-md outline-none  border border-r-[10px] border-gray-500 cursor-pointer  ${
						mode === "light" && "border border-gray-400"
					} `}
					style={darkMode}
				>
					<option default>Category</option>
					<option value="jacket">Jacket</option>
					<option value="shirt">Shirt</option>
					<option value="mobile">Mobile</option>
					<option value="jacket">Jacket</option>
				</select>
				<select
					className={`px-3  py-2 rounded-md outline-none  border border-r-[10px] border-gray-500 cursor-pointer  ${
						mode === "light" && "border border-gray-400"
					} `}
					style={darkMode}
				>
					<option default>Price</option>
					<option value="100">₹ 100</option>
					<option value="200">₹ 200</option>
					<option value="300">₹ 300</option>
					<option value="400">₹ 400</option>
					<option value="400">₹ 500</option>
				</select>
				<button
					className="px-5 py-2 rounded-md font-semibold bg-blue-500 hover:bg-blue-800 active:bg-blue-600"
					style={{ color: mode === "light" ? "white" : "white" }}
				>
					Reset
				</button>
			</div>
		</div>
	);
}

export default Filter;
