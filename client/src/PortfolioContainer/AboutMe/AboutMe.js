import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.min.css";

export default function AboutMe(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const SCREEN_CONSTANTS = {
		description:
			"Third-year computer science and mathematics student at the Memorial University of Newfoundland, I am a Cyber Security enthusiast who loves talking about security in day-to-day life. I have experience with developing web apps using the MERN stack and game development with the Java swing module.",
		highlights: {
			bullets: [
				"Experienced with various operating systems including Linux, macOS and Windows",
				"Experienced with developing software using Python, Java, C and JavaScript",
				"Experienced with Full-Stack development using MERN stack and various other libraries.",
				"Experienced with various version control systems like GitHub and GitLab ",
				"Experienced with various database management systems.",
				"Critical Thinking, Effective Communication, Problem Solving.",
			],
			heading: "Here are a Few Highlights:",
		},
	};
	const renderHighlight = () => {
		return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
			<div className="highlight" key={i}>
				<div className="highlight-blob"></div>
				<span>{value}</span>
			</div>
		));
	};

	return (
		<div
			className="about-me-container screen-container fade-in"
			id={props.id || ""}
		>
			<div className="about-me-parent">
				<ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
				<div className="about-me-card">
					<div className="about-me-profile"></div>
					<div className="about-me-details">
						<span className="about-me-description">
							{SCREEN_CONSTANTS.description}
						</span>
						<div className="about-me-highlights">
							<div className="highlight-heading">
								<span>{SCREEN_CONSTANTS.highlights.heading}</span>
							</div>
							{renderHighlight()}
						</div>
						<div className="about-me-options">
							<button
								className="btn primary-btn"
								onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
							>
								{" "}
								Hire Me{" "}
							</button>
							<a
								href="hsharma_resume.pdf"
								download="Hsharma_resume"
							>
								<button className="btn highlighted-btn">Get Resume</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
