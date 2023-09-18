import React from "react";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./Carousel.min.css";
import oneStopAgro from "./images/OneStopAgro.svg";
import co2by from "./images/co2by.png";
import gameOfFocus from "./images/game_of_focus.svg";
import mentNL from "./images/ment-nl.webp";
import portfolioImage from "./images/portfolioImage.svg";
import sbTelecomWebstore from "./images/sb_telecom_webstore.webp";

export default function Testimonial(props) {
	let fadeInScreenHandler = (screen) => {
		console.log(props);
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	return (
		<div>
			<ScreenHeading
				title={"Projects"}
				subHeading={"Have a look at my projects"}
			/>
			<section className="testimonial-section fade-in" id={props.id || ""}>
				<div className="row">
					<div className="col-lg-4 col-md-6 mb-4">
						<div className="card" style={{ width: "22rem", height: "32rem" }}>
							<img
								style={{
									width: "22rem",
									height: "12rem",
									objectFit: "cover",
								}}
								src={co2by}
								alt="CO2BY"
							/>
							<div className="card-body" style={{ textAlign: "center" }}>
								<h5
									className="card-title"
									style={{ fontWeight: "bold", fontSize: "25px" }}
								>
									CO2BY
								</h5>
								<p className="card-text">
									CO2By is a project developed by a team of five students with
									diverse backgrounds during the Hackfrost 3.0 hackathon.
								</p>
								<a
									href="https://devpost.com/software/co2by"
									className="btn btn-primary"
									style={{ background: "#ff5823" }}
								>
									View
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-4">
						<div className="card" style={{ width: "22rem", height: "32rem" }}>
							<img
								style={{
									width: "22rem",
									height: "12rem",
									objectFit: "cover",
								}}
								src={portfolioImage}
								alt="Portfolio Website"
							/>
							<div className="card-body" style={{ textAlign: "center" }}>
								<h5
									className="card-title"
									style={{ fontWeight: "bold", fontSize: "25px" }}
								>
									Portfolio Website
								</h5>
								<p className="card-text">
									A Personal Portfolio website to showcase all my details and
									projects at one place using React JS, Bootstrap.
								</p>
								<a
									href="#"
									className="btn btn-primary"
									style={{ background: "#ff5823" }}
								>
									View
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-4">
						<div className="card" style={{ width: "22rem", height: "32rem" }}>
							<img
								style={{
									width: "22rem",
									height: "12rem",
									objectFit: "cover",
								}}
								src={oneStopAgro}
								alt="OneStopAgro"
							/>
							<div className="card-body" style={{ textAlign: "center" }}>
								<h5
									className="card-title"
									style={{ fontWeight: "bold", fontSize: "25px" }}
								>
									OneStopAgro
								</h5>
								<p className="card-text">
									Project built for Hack Frost NL to provide a complete solution
									from early disease detection in crops to marketplace to sell
									the product using Python, Tensorflow, Keras, Scikit-learn, JS,
									HTML, CSS, Bootstrap.
								</p>
								<a
									href="https://devpost.com/software/one-stop-agro?ref_content=user-portfolio&ref_feature=in_progress%5C"
									className="btn btn-primary"
									style={{ background: "#ff5823" }}
								>
									View
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-4">
						<div className="card" style={{ width: "22rem", height: "32rem" }}>
							<img
								style={{
									width: "22rem",
									height: "12rem",
									objectFit: "cover",
								}}
								src={mentNL}
								alt="Ment-NL Website"
							/>
							<div className="card-body" style={{ textAlign: "center" }}>
								<h5
									className="card-title"
									style={{ fontWeight: "bold", fontSize: "25px" }}
								>
									Ment-NL Website
								</h5>
								<p className="card-text">
									TechNL FWD Hackathon project to help mitigate the problem of
									tech-sector employment shortage by providing mentorship and
									open source project contribution platform for new developers.
								</p>
								<a
									href="https://king-knight-harsh.github.io/ment-nl/"
									className="btn btn-primary"
									style={{ background: "#ff5823" }}
								>
									View
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-4">
						<div className="card" style={{ width: "22rem", height: "32rem" }}>
							<img
								style={{
									width: "22rem",
									height: "12rem",
									objectFit: "cover",
								}}
								src={sbTelecomWebstore}
								alt="S.B. Telecom WebStore"
							/>
							<div
								className="card-body"
								style={{ textAlign: "center", borderColor: "#1f2235" }}
							>
								<h5
									className="card-title"
									style={{ fontWeight: "bold", fontSize: "25px" }}
								>
									S.B. Telecom WebStore
								</h5>
								<p className="card-text">
									An eCommerce application with admin dashboard for selling and
									managing products and users using ReactJs, MongoDB, ExpressJs,
									NodeJs, Redux, StripeJs, GraphJs.
								</p>
								<a
									href="https://github.com/king-knight-harsh/sbtelecom-webstore/tree/main/iteration_3"
									className="btn btn-primary"
									style={{ background: "#ff5823" }}
								>
									View
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 mb-4">
						<div className="card" style={{ width: "22rem", height: "32rem" }}>
							<img
								style={{
									width: "22rem",
									height: "12rem",
									objectFit: "cover",
								}}
								src={gameOfFocus}
								alt="The Game of Focus"
							/>
							<div
								className="card-body"
								style={{ textAlign: "center", borderColor: "#1f2235" }}
							>
								<h5
									className="card-title"
									style={{ fontWeight: "bold", fontSize: "25px" }}
								>
									The Game of Focus
								</h5>
								<p className="card-text">
									Four-player board game developed using Java Swing,
									serialization module built using Java.
								</p>
								<a
									href="https://github.com/king-knight-harsh/comp2005-fall21-group4/tree/main/Group%204%20Iteration%204"
									className="btn btn-primary"
									style={{ background: "#ff5823" }}
								>
									View
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
