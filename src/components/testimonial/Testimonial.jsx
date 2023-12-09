import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";

function Testimonial() {
	const context = useContext(MyContext);
	const { mode } = context;
	const darkMode = {
		backgroundColor: mode === "dark" ? "#2F2F2F" : "#F3F4F6",
		color: mode === "dark" ? "white" : "",
	};
	return (
		<section className="flex items-center justify-center">
			<div className="container 0 p-4 ">
				{/*TITLE*/}
				<div className="">
					<h1 className={`text-2xl md:text-3xl font-semibold`}>
						What Our Customer Say
					</h1>
					<div className="h-1 w-20 bg-green-600 rounded mt-1"></div>
				</div>
				{/* TESTIMONIAL */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
					{/*T CARDS*/}
					<div
						className="rounded-md flex flex-col items-center p-7  shadow-xl hover:-translate-y-2  hover:drop-shadow-2xl transition text-center cursor-pointer"
						style={darkMode}
					>
						<div className="rounded-full shadow-2xl h-100 max-w-[110px] overflow-hidden">
							<img
								src="https://pbs.twimg.com/profile_images/1618167652295532544/xAOUT_Px_400x400.jpg"
								alt=""
							/>
						</div>
						<h3 className="pt-5 text-xl font-semibold">
							Arjun Mavnoor
						</h3>
						<p className="pt-2 text-gray-400">React JS Developer</p>
						<p className="pt-2">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Rem, in. Dolor ullam laudantium nihil, quasi
							saepe omnis sint unde, esse. lorem20
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonial;
