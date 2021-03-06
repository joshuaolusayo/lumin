import React, { useState, useEffect } from "react";
import Select from "react-select";
import { currency } from "./currency";

const Cart = (props) => {
	const [selectedOption, setSelectedOption] = useState("USD");

	useEffect(() => {}, [props.performComputation]);

	return (
		<div className={`cart-overlay ${props.clicked ? "d-block shadow" : "d-none"}`}>
			<div className="cart p-3 p-lg-5">
				<div className="cart__items">
					<div className="cart__items-header d-flex">
						<span className="d-inline-block rounded-circle left text-center" onClick={() => props.changeClicked(false)}>
							<i className="fa fa-arrow-left" aria-hidden="true"></i>
						</span>
						<span className="txt-gray text-uppercase w-100 text-center">Your cart</span>
					</div>
					<div className="select my-3">
						<Select
							defaultValue={{ label: "USD", value: "USD" }}
							value={selectedOption}
							onChange={(e) => {
								console.log(e);
								setSelectedOption(e);
								// props.setCurrency(e.value);
								// props.updateCurrency(e.value);
							}}
							options={currency}
						/>
					</div>
					<div className="cart__items-list">
						{props.cart.map((item) => (
							<div key={item.id} className="item d-flex mb-4 shadow-sm">
								<div className="bg-white w-70 p-3 d-flex flex-column justify-content-between">
									<span className="txt-gray">{item.title}</span>
									<div className="d-flex justify-content-between align-items-center">
										<div className="d-flex flex-no-wrap border count">
											<span onClick={() => props.reduceItemQty(item)}>-</span>
											<span>{item.quantity}</span>
											<span onClick={() => props.increaseItemQty(item)}>+</span>
										</div>
										<div>${item.price}</div>
									</div>
								</div>
								<div className="w-30 bg-item d-flex justify-content-center align-items-center">
									<span className="close" onClick={() => props.removeFromCart(item)}>
										<i className="fa fa-times"></i>
									</span>
									<img src={item.image_url} alt={item.title} loading="lazy" />
								</div>
							</div>
						))}
					</div>

					<div className="result">
						<div className="d-flex justify-content-between py-3">
							<span>Subtotal</span>
							<span>${props.calculateTotal(props.cart)}</span>
						</div>
						<button className="w-100 px-4 py-3 btn-light-pry mb-4 text-uppercase">Make this a subscription (save 20%)</button>
						<button className="w-100 px-4 py-3 btn-dark-pry text-uppercase">Proceed to checkout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
