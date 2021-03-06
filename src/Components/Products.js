import React from "react";

const Products = (props) => {
	return (
		<div className="bg-pry p-3 p-md-5 products text-dark-pry">
			<div className="container">
				<div className="row">
					<div className="row py-5">
						{props.items.map((item) => {
							return (
								<div key={item.id} className="col-md-6 col-lg-4 my-4 my-lg-5">
									<div className="card bg-transparent border-0">
										<div className="img-container mb-2">
											<img src={item.img} className="card-img-top" alt="Jewellery" />
										</div>
										<div className="card-body text-center mb-0">
											<h4 className="card-title txt-gray">{item.name}</h4>
											<p className="card-text font-weight-bold">From ${item.price}</p>
											<button
												className="btn rounded py-2 px-5 bg-dark-pry text-light"
												onClick={() => {
													props.addToCart(item);
													props.changeClicked(true);
												}}
											>
												Add to Cart
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
