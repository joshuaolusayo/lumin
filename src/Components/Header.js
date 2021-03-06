import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

const Header = () => {
	const [selectedOption, setSelectedOption] = useState();

	return (
		<div className="header">
			<div className="border-bottom fixed">
				<nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm py-3">
					<Link to="/" className="navbar-brand text-capitalize">
						Lumin
					</Link>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse w-100" id="collapsibleNavId">
						<ul className="navbar-nav mr-auto mt-2 mt-md-0 w-100 d-flex justify-content-between align-items-center text-center">
							<div className="d-flex">
								<li className="nav-item m-3 my-md-auto">
									<Link to="/" className="nav-link">
										Shop
									</Link>
								</li>
								<li className="nav-item m-3 my-md-auto">
									<Link to="/" className="nav-link">
										Learn
									</Link>
								</li>
							</div>
							<div className="d-flex">
								<li className="nav-item m-3 my-md-auto active">
									<Link to="/" className="nav-link">
										Account
									</Link>
								</li>
								<li className="nav-item m-3 my-md-auto">
									<Link to="/" className="nav-link">
										Cart
									</Link>
								</li>
							</div>
						</ul>
					</div>
				</nav>
			</div>

			<div className="products pt-5 container">
				<div className="row flex-column flex-md-row justify-content-center justify-content-md-between align-items-center text-center text-md-left px-3 px-sm-0">
					<div>
						<h1>All Products</h1>
						<p className="text-dark-pry">A 360° look at Lumin</p>
					</div>
					<div className="select">
						<Select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} options={options} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
