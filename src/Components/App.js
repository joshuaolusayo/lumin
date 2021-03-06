import React, { useState, useEffect } from "react";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";

const App = () => {
	const [clicked, setClicked] = useState(true);

	const changeClicked = (boolean) => {
		setClicked(boolean);
	};

	useEffect(() => {
		console.log(clicked);

		if (clicked) {
			document.documentElement.style.overflowY = "hidden";
		} else {
			document.documentElement.style.overflowY = "scroll";
		}
	}, [clicked]);

	return (
		<div id="overlay">
			<Header />
			<Products changeClicked={changeClicked} />
			<Cart changeClicked={changeClicked} clicked={clicked} />
		</div>
	);
};

export default App;
