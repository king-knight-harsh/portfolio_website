import React, { useState } from "react";
import Typical from "react-typical";
import { toast } from "react-toastify";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/Footer/Footer";
import "./ContactMe.min.css";
import emailjs from "@emailjs/browser";

export const ContactMe = (props) => {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};

	ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [banner, setBanner] = useState("");
	const [bool, setBool] = useState(false);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleMessage = (e) => {
		setMessage(e.target.value);
	};
	const sendEmail = (e) => {
		e.preventDefault();
		if (name.length === 0 || email.length === 0 || message.length === 0) {
			setBanner("Please fill all the fields");
			toast.error("Please fill all the fields");
			setBool(false);
		} else {
			emailjs
				.sendForm(
					"service_rmfb9nj",
					"template_ac0ufyl",
					e.target,
					"o3CTSuvvIgdPR9cwP"
				)
				.then(
					(result) => {
            console.log(result)
						setBanner("Thank You For Contacting Harsh Sharma");
						toast.success("Thank You For Contacting Harsh Sharma");
						setBool(false);
            // Clearing up all the fields
						setName("");
						setEmail("");
						setMessage("");
					},
					(error) => {
            console.log(error.message)
						toast.error("Unable to send the email");
					}
				);
		}
	};

	return (
		<div className="main-container fade-in" id={props.id || ""}>
			<ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
			<div className="central-form">
				<div className="col">
					<h2 className="title">
						<Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
					</h2>{" "}
					<a href="https://www.facebook.com/profile.php?id=100007081242171">
						<i className="fa fa-facebook-square"></i>
					</a>
					<a href="https://www.linkedin.com/in/harsh-sharma-7b26a1196/">
						<i className="fa fa-linkedin-square "></i>
					</a>
					<a href="https://github.com/king-knight-harsh">
						<i className="fa fa-github-square"></i>
					</a>
					<a href="https://www.youtube.com/channel/UC5jMQT-4e75CABHeTOOc8WQ">
						<i className="fa fa-youtube-square"></i>
					</a>
				</div>
				<div className="back-form">
					<div className="img-back">
						<h4>Send Your Email Here!</h4>
						<img
							src={require("../../../src/images/mailz.jpeg")}
							alt="not found"
						/>
					</div>
					<form onSubmit={sendEmail}>
						<p>{banner}</p>
						<label>Name</label>
						<input type="text" name="name" onChange={handleName} value={name} />

						<label>Email</label>
						<input
							type="email"
							name="email"
							onChange={handleEmail}
							value={email}
						/>

						<label>Message</label>
						<textarea
							type="text"
							name="message"
							onChange={handleMessage}
							value={message}
						/>

						<div className="send-btn">
							<button type="submit">
								send
								<i className="fa fa-paper-plane" />
								{bool ? (
									<b className="load">
										<img
											src={require("../../../src/images/load2.gif")}
											alt="not responding"
										/>
									</b>
								) : (
									""
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};
