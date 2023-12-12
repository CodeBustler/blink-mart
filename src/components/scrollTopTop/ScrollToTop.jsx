import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
	const location = useLocation();
	console.log(location);
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location]);

	return null;
}

export default ScrollToTop;