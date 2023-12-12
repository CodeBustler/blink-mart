import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../context/data/MyContext";
import { MdStarBorder } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { AiOutlineTrophy } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { GoPlus } from "react-icons/go";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductInfo() {
	const { id } = useParams();
	console.log("Param", id);
	const navigate = useNavigate();
	const context = useContext(MyContext);
	const { mode, toggleMode, storeData } = context;
	const [product, setProduct] = useState([]);
	const [reletedProducts, setRelatedProduct] = useState([]);

	useEffect(() => {
		const filterProduct = storeData.filter((item) => item.id == id);
		setProduct(filterProduct[0]);
	}, [id]);

	const darkMode = {
		backgroundColor: mode === "dark" ? "#2F2F2F" : "#F3F4F6",
		color: mode === "dark" ? "white" : "",
	};
	console.log(id);
	return (
		<section className=" mt-[80px]">
			{product && Object.keys(product).length > 0 ? (
				<div className="flex  items-center md:items-start justify-center  flex-col md:flex-row gap-10 ">
					{/*IMG*/}
					<div className=" w-[90%] object-center object-cover   lg:w-[35%]  m-2 rounded-md overflow-hidden bg-white">
						<img
							src={product.image}
							alt="product-image"
							className="object-contain w-full h-[280px] md:h-[300px] lg:h-[530px]"
						/>
					</div>
					{/*DETAIL*/}
					<div className="px-6 max-w-[550px]">
						<p className="text-md pt-3 text-gray-400 capitalize">
							{product.category}
						</p>
						<h2 className="font-bold text-2xl pt-2">
							{product.title}
						</h2>
						<div className="flex items-center gap-5">
							<div className="flex my-4">
								<MdStar />
								<MdStar />
								<MdStar />
								<MdStar />
								<MdStarBorder />
							</div>
							<div className="text-gray-500">
								{product.rating.rate} &nbsp; | &nbsp;
								{product.rating.count}
								&nbsp; Ratings
							</div>
						</div>
						<p className="text-gray-500">{product.description}</p>
						<div className="flex items-center justify-between gap-10 my-3">
							<h3 className="font-bold py-3 text-2xl">
								₹ {product.price}
							</h3>
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
							className={`flex flex-wrap justify-around md:justify-between gap-4 mt-5 border-t border-gray-800 pt-10 ${
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
			) : (
				navigate("/")
			)}
		</section>
	);
}

export default ProductInfo;
