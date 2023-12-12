import MyContext from "./MyContext";
import { useEffect, useState } from "react";

function MyState(props) {
	const [mode, setMode] = useState("light");
	const [storeData, setStoreData] = useState([]);

	// FETCH STORE DATA
	const fetchStoreData = async () => {
		const obj = {
			id: 22,
			title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
			price: 9.85,
			description:
				"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
			category: "women's clothing",
			image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
			rating: {
				rate: 4.7,
				count: 130,
			},
		};

		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				const mergeData = [...data, obj];
				setStoreData(mergeData);
				console.log(mergeData);
			});
	};

	useEffect(() => {
		fetchStoreData();
		console.log(storeData);
	}, []);

	// HAMBURGER TOGGLE
	const toggleMode = () => {
		document.body.style.transition = "all 0.3s";
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#212121";
			document.body.style.color = "white";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
		}
	};

	return (
		<MyContext.Provider value={{ mode, toggleMode, storeData }}>
			{props.children}
		</MyContext.Provider>
	);
}

export default MyState;
