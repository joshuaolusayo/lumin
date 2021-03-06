import React, { useState, useEffect } from "react";
import Select from "react-select";

const options = [
	{ value: 1, label: "USD" },
	{ value: 380, label: "NAIRA" },
	{ value: 3.29, label: "INR" },
];

const Cart = (props) => {
	const [selectedOption, setSelectedOption] = useState("USD");
	console.log();

	// const addTotal = () => {};

	// useEffect(() => {}, [selectedOption, props.cart]);

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
						<Select value={selectedOption} onChange={(e) => setSelectedOption(e)} options={options} />
					</div>
					<div className="cart__items-list">
						{props.cart.map((item) => (
							<div key={item.id} className="item d-flex mb-4 shadow-sm">
								<div className="bg-white w-70 p-3 d-flex flex-column justify-content-between">
									<span className="txt-gray">{item.name}</span>
									<div className="d-flex justify-content-between align-items-center">
										<div className="d-flex flex-no-wrap border count">
											<span>-</span>
											<span>{item.quantity}</span>
											<span>+</span>
										</div>
										<div>${item.price}</div>
									</div>
								</div>
								<div className="w-30 bg-item d-flex justify-content-center align-items-center">
									<span className="close">
										<i className="fa fa-times"></i>
									</span>
									<img src={item.img} alt={item.name} />
								</div>
							</div>
						))}
						{/* <div className="item d-flex mb-4 shadow-sm">
							<div className="bg-white w-70 p-3 d-flex flex-column justify-content-between">
								<span className="txt-gray">Dark Circle Defense</span>
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex flex-no-wrap border count">
										<span>-</span>
										<span>1</span>
										<span>+</span>
									</div>
									<div>$29.00</div>
								</div>
							</div>
							<div className="w-30 bg-item d-flex justify-content-center align-items-center">
								<span className="close">
									<i className="fa fa-times"></i>
								</span>
								<img src="/assets/jewellery.jpeg" alt="Jewellery" />
							</div>
						</div>
						<div className="item d-flex mb-4 shadow-sm">
							<div className="bg-white w-70 p-3 d-flex flex-column justify-content-between">
								<span className="txt-gray">Dark Circle Defense</span>
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex flex-no-wrap border count">
										<span>-</span>
										<span>1</span>
										<span>+</span>
									</div>
									<div>$29.00</div>
								</div>
							</div>
							<div className="w-30 bg-item d-flex justify-content-center align-items-center">
								<span className="close">
									<i className="fa fa-times"></i>
								</span>
								<img src="/assets/jewellery.jpeg" alt="Jewellery" />
							</div>
						</div>
						<div className="item d-flex mb-4 shadow-sm">
							<div className="bg-white w-70 p-3 d-flex flex-column justify-content-between">
								<span className="txt-gray">Dark Circle Defense</span>
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex flex-no-wrap border count">
										<span>-</span>
										<span>1</span>
										<span>+</span>
									</div>
									<div>$29.00</div>
								</div>
							</div>
							<div className="w-30 bg-item d-flex justify-content-center align-items-center">
								<span className="close">
									<i className="fa fa-times"></i>
								</span>
								<img src="/assets/jewellery.jpeg" alt="Jewellery" />
							</div>
						</div> */}
					</div>

					<div className="result">
						<div className="d-flex justify-content-between py-3">
							<span>Subtotal</span>
							<span>$61.00</span>
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
