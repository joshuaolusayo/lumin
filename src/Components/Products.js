import React from "react";

const Products = (props) => {
	console.log(props);
	
	return (
		<div className="bg-pry p-3 p-md-5 products text-dark-pry">
			<div className="container">
				<div className="row">
					<div className="row py-5">
						<div className="col-md-6 col-lg-4 my-4 my-lg-5">
							<div className="card bg-transparent border-0">
								<div className="img-container mb-2">
									<img src="/assets/jewellery.jpeg" className="card-img-top" alt="Jewellery" />
								</div>
								<div className="card-body text-center mb-0">
									<h4 className="card-title txt-gray">Age Management Collection</h4>
									<p className="card-text font-weight-bold">From $48</p>
									<button
										className="btn rounded py-2 px-5 btn-dark-pry text-light"
										onClick={() => props.setClicked(true)}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 my-4 my-lg-5">
							<div className="card bg-transparent border-0">
								<div className="img-container mb-2">
									<img src="/assets/jewellery.jpeg" className="card-img-top" alt="Jewellery" />
								</div>
								<div className="card-body text-center mb-0">
									<h4 className="card-title txt-gray">Age Management Collection</h4>
									<p className="card-text font-weight-bold">From $48</p>
									<button
										className="btn rounded py-2 px-5 btn-dark-pry text-light"
										onClick={() => props.setClicked(true)}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 my-4 my-lg-5">
							<div className="card bg-transparent border-0">
								<div className="img-container mb-2">
									<img src="/assets/jewellery.jpeg" className="card-img-top" alt="Jewellery" />
								</div>
								<div className="card-body text-center mb-0">
									<h4 className="card-title txt-gray">Age Management Collection</h4>
									<p className="card-text font-weight-bold">From $48</p>
									<button
										className="btn rounded py-2 px-5 btn-dark-pry text-light"
										onClick={() => props.setClicked(true)}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 my-4 my-lg-5">
							<div className="card bg-transparent border-0">
								<div className="img-container mb-2">
									<img src="/assets/jewellery.jpeg" className="card-img-top" alt="Jewellery" />
								</div>
								<div className="card-body text-center mb-0">
									<h4 className="card-title txt-gray">Age Management Collection</h4>
									<p className="card-text font-weight-bold">From $48</p>
									<button
										className="btn rounded py-2 px-5 btn-dark-pry text-light"
										onClick={() => props.setClicked(true)}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 my-4 my-lg-5">
							<div className="card bg-transparent border-0">
								<div className="img-container mb-2">
									<img src="/assets/jewellery.jpeg" className="card-img-top" alt="Jewellery" />
								</div>
								<div className="card-body text-center mb-0">
									<h4 className="card-title txt-gray">Age Management Collection</h4>
									<p className="card-text font-weight-bold">From $48</p>
									<button
										className="btn rounded py-2 px-5 btn-dark-pry text-light"
										onClick={() => props.setClicked(true)}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4 my-4 my-lg-5">
							<div className="card bg-transparent border-0">
								<div className="img-container mb-2">
									<img src="/assets/jewellery.jpeg" className="card-img-top" alt="Jewellery" />
								</div>
								<div className="card-body text-center mb-0">
									<h4 className="card-title txt-gray">Age Management Collection</h4>
									<p className="card-text font-weight-bold">From $48</p>
									<button
										className="btn rounded py-2 px-5 btn-dark-pry text-light"
										onClick={() => props.setClicked(true)}
									>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
