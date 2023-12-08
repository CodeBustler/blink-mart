import MyContext from "./MyContext";
import { useState } from "react";

function MyState(props) {
	const [mode, setMode] = useState("light");

	const toggleMode = () => {
		document.body.style.transition = "background-color 1s";
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
		<MyContext.Provider value={{ mode, toggleMode }}>
			{props.children}
		</MyContext.Provider>
	);
}

export default MyState;
