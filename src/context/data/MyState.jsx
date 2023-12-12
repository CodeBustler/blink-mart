import MyContext from "./MyContext";
import { useEffect, useState } from "react";

function MyState(props) {
	const [mode, setMode] = useState("light");
	const [storeData, setStoreData] = useState([]);

	// FETCH STORE DATA
	const fetchStoreData = async () => {
		const obj = {
			id: 21,
			title: "DANVOUY Womens T Shirt Casual Cotton Short",
			price: 12.99,
			description:
				"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
			category: "women's clothing",
			image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
			rating: {
				rate: 3.6,
				count: 145,
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
