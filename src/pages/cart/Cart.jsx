import React from "react";

function Cart() {
	return (
		<section className="my-[120px]">
			<h1 className="text-center font-semibold text-3xl">Cart Items</h1>
			{/* CONTAINER */}
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 items-start  gap-20 lg:gap-4 mt-5">
					{/* ITEMS */}
					<div className="flex flex-col items-center lg:items-end gap-5 max-w-full">
						{/* ITEM */}
						<div className="border shadow-lg max-w-[500px] p-5 rounded-lg mx-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Voluptatum aliquam minima illum nesciunt
							atque, exercitationem ad, mollitia quidem illo qui
							enim unde eveniet deleniti provident cupiditate
							accusamus quae eos neque?
						</div>
						<div className="border shadow-lg max-w-[500px] p-5 rounded-lg mx-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Voluptatum aliquam minima illum nesciunt
							atque, exercitationem ad, mollitia quidem illo qui
							enim unde eveniet deleniti provident cupiditate
							accusamus quae eos neque?
						</div>
						<div className="border shadow-lg max-w-[500px] p-5 rounded-lg mx-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Voluptatum aliquam minima illum nesciunt
							atque, exercitationem ad, mollitia quidem illo qui
							enim unde eveniet deleniti provident cupiditate
							accusamus quae eos neque?
						</div>
					</div>
					{/* BUY NOW */}
					<div className=" flex items-center justify-center  lg:justify-start ">
						<div className="border  shadow-lg p-5 rounded-lg max-w-[500px]  lg:max-w-[400px] mx-4">
							Buy lo luptatum aliquam minima illum nesciunt atque,
							exercitationem ad, mollitia quidem ill
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cart;
