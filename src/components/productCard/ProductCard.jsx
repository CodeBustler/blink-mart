import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

function ProductCard() {
	const context = useContext(MyContext);
	const { mode, storeData } = context;
	const darkMode = {
		backgroundColor: mode === "dark" ? "#2F2F2F" : "#F3F4F6",
		color: mode === "dark" ? "white" : "",
	};
	console.log("Product Card", storeData);
	return (
		<section className="flex items-center justify-center ">
			<div className="container 0 p-4 ">
				{/*TITLE*/}
				<div className="">
					<h1 className={`text-2xl md:text-3xl font-semibold`}>
						Latest Products
					</h1>
					<div className="h-1 w-20 bg-green-600 rounded mt-1"></div>
				</div>
				{/*CARDS*/}
				<div className="flex flex-wrap items-center justify-center mx-auto my-8 ">
					{/*GRID*/}
					<div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
						{/*CART*/}
						{storeData.length !== 0 ? (
							storeData.map((card, index) => {
								return (
									<div
										className={`rounded-md shadow-2xl  md:hover:-translate-y-2 hover:drop-shadow-2xl transition overflow-hidden  ${
											mode === "light"
												? "border border-gray-300"
												: "border-none"
										} `}
										style={darkMode}
										key={index}
									>
										<div className="pb-6 flex flex-col h-100 ">
											<Link
												to={`/productInfo/${card.id} `}
												className="overflow-hidden cursor-pointer h-full border-b-2 flex items-center justify-center bg-white"
											>
												<img
													src={card.image}
													alt=""
													className="object-contain w-full h-[280px] md:h-[300px] lg:h-[230px]"
												/>
											</Link>

											<div className="px-6">
												<p className="text-md pt-3 text-gray-400 capitalize">
													{card.category}
												</p>
												<h2 className="font-bold text-lg pt-2">
													{card.title.slice(0, 20)}
												</h2>
												<p className="text-gray-500 ">
													{card.description.slice(
														0,
														80,
													)}
													...
												</p>
												<h3 className="font-bold py-3 text-lg">
													₹ {card.price}
												</h3>
												<button
													className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 w-[100%] rounded-md py-2 mt-1 font-semibold cursor-pointer"
													style={{
														color:
															mode === "dark"
																? "white"
																: "white",
													}}
												>
													<GoPlus className="inline mb-1" />{" "}
													Add to Cart
												</button>
											</div>
										</div>
									</div>
								);
							})
						) : (
							<div>Loading</div>
						)}
						{/*CARD-2*/}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductCard;
