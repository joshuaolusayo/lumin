import React, { useState, useEffect } from "react";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";
import { items } from "./items";

const App = () => {
	const [clicked, setClicked] = useState(false);

	const [cart, setCart] = useState([]);

	const addToCart = (item) =>
		setCart((currentCart) => {
			console.log(currentCart);
			// check if the item exist. If it does, increase the quantity
			console.log(currentCart.findIndex(product => item.id === product.id));
			if (currentCart.length > 0 && currentCart.findIndex(product => item.id === product.id) !== -1) {
				const indexOfItem = currentCart.findIndex((product) => item.id === product.id);
				// console.log(currentCart[indexOfItem].quantity);
				currentCart[indexOfItem].quantity++;
				// console.log(currentCart[indexOfItem].quantity);
				return [...currentCart];
			}

			item["quantity"] = 1
			return [...currentCart, item];
		});

	const removeFromCart = (item) => {
		setCart((currentCart) => {
			const indexOfItem = currentCart.findIndex((product) => item.id === product.id);

			if (indexOfItem === -1) return currentCart;

			return [...currentCart.slice(0, indexOfItem), ...currentCart.slice(indexOfItem + 1)];
		});
	};

	const changeClicked = (boolean) => {
		setClicked(boolean);
	};

	console.log(cart);

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
			<Products changeClicked={changeClicked} items={items} addToCart={addToCart} />
			<Cart changeClicked={changeClicked} clicked={clicked} cart={cart} />
		</div>
	);
};

export default App;
