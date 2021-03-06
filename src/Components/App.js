import React, { useState, useEffect } from "react";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";
// import { items } from "./items";
import { useQuery, gql } from "@apollo/client";

const App = () => {
	const [clicked, setClicked] = useState(false);
	const [performComputation, setPerformComputation] = useState(false);
	const [cart, setCart] = useState([]);
	const [currency, setCurrency] = useState("USD");

	// eslint-disable-next-line react-hooks/exhaustive-deps
	let items = [];

	const GET_PRODUCTS = gql`
		query Products($currency: Currency) {
			products {
				id
				title
				image_url
				price(currency: $currency)
			}
		}
	`;

	const { data } = useQuery(GET_PRODUCTS, {
		variables: { currency },
	});

	const addToCart = (item) =>
		setCart((currentCart) => {
			if (currentCart.length > 0 && currentCart.findIndex((product) => item.id === product.id) !== -1) {
				const indexOfItem = currentCart.findIndex((product) => item.id === product.id);
				return [
					...currentCart.slice(0, indexOfItem),
					{
						...currentCart[indexOfItem],
						quantity: currentCart[indexOfItem].quantity + 1,
					},
					...currentCart.slice(indexOfItem + 1),
				];
			}

			item = { ...item };
			item.quantity = 1;
			return [...currentCart, item];
		});

	const increaseItemQty = (item) => {
		item.quantity++;
		setPerformComputation(!performComputation);
		return item;
	};

	const reduceItemQty = (item) => {
		item.quantity--;
		if (item.quantity <= 0) removeFromCart(item);
		setPerformComputation(!performComputation);
		return item;
	};

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

	const calculateTotal = (store) => {
		let prices = [],
			total = 0;

		if (store.length > 0) {
			store.map((item) => prices.push(item.quantity * item.price));
			total = prices.reduce((total, price) => total + price, 0);
		} else {
			total = 0;
		}
		return total;
	};

	// function GetProducts(currency) {
	// 	const { loading, error, data } = useQuery(GET_PRODUCTS, {
	// 		variables: { currency },
	// 	});

	// 	if (loading) return null;
	// 	if (error) return `Error! ${error}`;

	// 	console.log(data);
	// 	items = data.products;

	// 	return data;
	// }

	// GetProducts("NGN");

	useEffect(() => {}, [items]);

	// if (loading) return null;
	// if (error) return `Error! ${error}`;

	if (data && data.products) {
		items = data.products;
	}

	console.log(items);
	return items.length > 0 ? (
		<div id="overlay">
			<Header />
			<Products changeClicked={changeClicked} items={items} addToCart={addToCart} />
			<Cart
				changeClicked={changeClicked}
				clicked={clicked}
				cart={cart}
				removeFromCart={removeFromCart}
				increaseItemQty={increaseItemQty}
				reduceItemQty={reduceItemQty}
				performComputation={performComputation}
				calculateTotal={calculateTotal}
				setCurrency={setCurrency}
				// updateCurrency={updateCurrency}
			/>
		</div>
	) : (
		<div className="loading-component bg-pry text-dark-pry d-flex justify-content-center align-items-center text-center">
			Loading...
		</div>
	);
};

export default App;
