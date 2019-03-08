import React, { Component } from "react";

function Contact(props) {
	return(
		<div className="row justify-content-center">
			<div className="col-sm">
				<div className="row justify-content-sm-end justify-content-center text-pink">
					איריס הוניג
				</div>
				<div className="row justify-content-sm-end justify-content-center">
					honigarc@gmail.com
				</div>
				<div className="row justify-content-sm-end justify-content-center">
					052-3700702
				</div>
			</div>
			<div className="buffer mx-3"></div>
			<div className="col-sm mt-2 mt-sm-0">
				<div className="row justify-content-sm-start justify-content-center text-pink">
					ענת עצמון
				</div>
				<div className="row justify-content-sm-start justify-content-center">
					honigarc@gmail.com
				</div>
				<div className="row justify-content-sm-start justify-content-center">
					050-2121232
				</div>
			</div>
		</div>
	)
};

export default Contact;