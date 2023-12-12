import MyContext from "./MyContext";
import { useState } from "react";

function MyState(props) {
	const [mode, setMode] = useState("light");

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

	const data = fetch("https://fakestoreapi.com/products")
		.then((res) => res.json())
		.then((json) => console.log(json));

	console.log(data);
	return (
		<MyContext.Provider value={{ mode, toggleMode }}>
			{props.children}
		</MyContext.Provider>
	);
}

export default MyState;
