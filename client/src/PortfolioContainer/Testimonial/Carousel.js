import React from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardImage,
	MDBBtn,
} from "mdb-react-ui-kit";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Carousel.min.css";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import portfolioImage from "./images/portfolioImage.webp";
import sbTelecomWebstore from "./images/sb_telecom_webstore.webp";
import gameOfFocus from "./images/game_of_focus.webp";
import oneStopAgro from "./images/OneStopAgro.webp";
import mentNL from "./images/ment-nl.webp";

export default function Testimonial(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
	const options = {
		items: 1,
		nav: true,
		rewind: true,
		autoplay: true,
		margin: 50,
		responsive: {
			0: {
				items: 1,
			},
			450: {
				items: 1,
			},
			600: {
				items: 1,
			},
		},
	};
	return (
		<div>
			<ScreenHeading
				title={"Projects"}
				subHeading={"Have a look at my projects"}
			/>
			<section className="testimonial-section fade-in" id={props.id || ""}>
				<OwlCarousel options={options}>
					<div className="item">
						<div className="card">
							<MDBCard
								style={{
									width: "22rem",
									height: "32rem",
								}}
							>
								<MDBCardImage
									style={{
										width: "22rem",
										height: "12rem",
										backgroundSize: "cover",
									}}
									src={portfolioImage}
									position="top"
									alt="..."
								/>
								<MDBCardBody
									style={{
										textAlign: "center",
									}}
								>
									<MDBCardTitle
										style={{
											fontWeight: "bold",
											fontSize: "25px",
											textAlign: "center",
										}}
									>
										{" "}
										Portfolio Website{" "}
									</MDBCardTitle>{" "}
									<MDBCardText>
										A Personal Portfolio website to showcase all my details and
										projects at one place using React JS, Bootstrap.{" "}
									</MDBCardText>{" "}
									<MDBBtn
										style={{
											background: "#ff5823",
										}}
										href="#"
									>
										{" "}
										View{" "}
									</MDBBtn>{" "}
								</MDBCardBody>{" "}
							</MDBCard>{" "}
						</div>{" "}
					</div>
					<div class="item">
						<div className="card">
							<MDBCard
								style={{
									width: "22rem",
									height: "32rem",
								}}
							>
								<MDBCardImage src={oneStopAgro} position="top" alt="..." />
								<MDBCardBody
									style={{
										textAlign: "center",
									}}
								>
									<MDBCardTitle
										style={{
											fontWeight: "bold",
											fontSize: "25px",
											textAlign: "center",
										}}
									>
										{" "}
										OneStopAgro{" "}
									</MDBCardTitle>{" "}
									<MDBCardText>
										Project build for Hack Frost NL to provide complete solution
										from early disease detection in crop to marketplace to sell
										the product using Python, Tensorflow, Keras, Scikit - learn,
										JS, HTML, CSS, Bootstrap{" "}
									</MDBCardText>{" "}
									<MDBBtn
										style={{
											background: "#ff5823",
										}}
										href="https://github.com/king-knight-harsh/OneStopAgro"
									>
										{" "}
										View{" "}
									</MDBBtn>{" "}
								</MDBCardBody>{" "}
							</MDBCard>{" "}
						</div>{" "}
					</div>
					<div className="item">
						<div className="card">
							<MDBCard
								style={{
									width: "22rem",
									height: "32rem",
								}}
							>
								<MDBCardImage
									style={{
										width: "22rem",
										height: "12rem",
										backgroundSize: "cover",
									}}
									src={mentNL}
									position="top"
									alt="..."
								/>
								<MDBCardBody
									style={{
										textAlign: "center",
									}}
								>
									<MDBCardTitle
										style={{
											fontWeight: "bold",
											fontSize: "25px",
											textAlign: "center",
										}}
									>
										{" "}
										Ment-NL Website{" "}
									</MDBCardTitle>{" "}
									<MDBCardText>
										TechNL FWD Hackathon project to help mitigate the problem of
										tech-sector employment shortage by providing mentorship and
										open source project contribution platform for new developers{" "}
									</MDBCardText>{" "}
									<MDBBtn
										style={{
											background: "#ff5823",
										}}
										href="http://sharmaharsh.me/ment-nl/"
									>
										{" "}
										View{" "}
									</MDBBtn>{" "}
								</MDBCardBody>{" "}
							</MDBCard>{" "}
						</div>{" "}
					</div>
					<div class="item">
						<div className="card">
							<MDBCard
								style={{
									width: "22rem",
									height: "32rem",
								}}
							>
								<MDBCardImage
									src={sbTelecomWebstore}
									position="top"
									alt="..."
								/>
								<MDBCardBody
									style={{
										textAlign: "center",
										borderColor: "#1f2235",
									}}
								>
									<MDBCardTitle
										style={{
											fontWeight: "bold",
											fontSize: "25px",
											textAlign: "center",
										}}
									>
										{" "}
										S.B. Telecom WebStore{" "}
									</MDBCardTitle>{" "}
									<MDBCardText>
										An eCommerce application with admin dashboard for sell and
										manage products and users using ReactJs, Mongo DB, Express
										Js, Node Js, Redux, StripeJs, GraphJs.{" "}
									</MDBCardText>{" "}
									<MDBBtn
										style={{
											background: "#ff5823",
										}}
										href="https://github.com/king-knight-harsh/sbtelecom-webstore"
									>
										{" "}
										View{" "}
									</MDBBtn>{" "}
								</MDBCardBody>{" "}
							</MDBCard>{" "}
						</div>{" "}
					</div>
					<div class="item">
						<div className="card">
							<MDBCard
								style={{
									width: "22rem",
									height: "32rem",
								}}
							>
								<MDBCardImage src={gameOfFocus} position="top" alt="..." />
								<MDBCardBody
									style={{
										textAlign: "center",
										borderColor: "#1f2235",
									}}
								>
									<MDBCardTitle
										style={{
											fontWeight: "bold",
											fontSize: "25px",
											textAlign: "center",
										}}
									>
										{" "}
										The Game of Focus{" "}
									</MDBCardTitle>{" "}
									<MDBCardText>
										Four player board game developed using java swing,
										serialization module build using Java.{" "}
									</MDBCardText>{" "}
									<MDBBtn
										style={{
											background: "#ff5823",
										}}
										href="https://github.com/king-knight-harsh/comp2005-fall21-group4"
									>
										{" "}
										View{" "}
									</MDBBtn>{" "}
								</MDBCardBody>{" "}
							</MDBCard>{" "}
						</div>{" "}
					</div>
				</OwlCarousel>
			</section>
		</div>
	);
}
