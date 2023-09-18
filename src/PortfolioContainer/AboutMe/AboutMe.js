import { Icon } from "@iconify/react";
import React from "react";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./AboutMe.min.css";
export default function AboutMe(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	const SCREEN_CONSTANTS = {
		description:
			"Hello! I'm a 4th-year Computer Science and Mathematics student at Memorial University of Newfoundland. \
		As a dedicated enthusiast in the field of cybersecurity, I'm passionate about raising awareness about the critical role security plays in our daily lives.\
		My journey includes hands-on experience as software engineer, full-stack developer, game developer and IT support analyst.\
		Welcome to my portfolio!",
		highlights: {
			bullets: [
				"Skilled in software development with a wide array of programming languages, including GoLang, Python, Java, C, JavaScript, TypeScript, and jQuery, providing a versatile toolkit for various project requirements.",
				"Proficient across multiple operating systems, including Linux, MacOS, and Windows, enabling adaptability in diverse software environments.",
				"Proficient in Full-Stack development, utilizing an extensive array of libraries and frameworks including HTML/CSS, JavaScript, TypeScript, ReactJS, AngularJS, Sass, and Tailwind CSS to create dynamic and captivating web applications.",
				"Proficient in version control systems management, with experience in platforms like GitHub, GitLab, and BitBucket, ensuring efficient collaboration and code management in team environments.",
				"Experienced in working with diverse relational database systems, including PostgresSQL, SQL, MongoDB, DynamoDB, and AirTable, facilitating efficient data management and analysis.",
				"Recognized for critical thinking abilities, effective communication skills, problem-solving prowess, and excellence in project management, contributing to successful project outcomes and team collaboration.",
			],
			heading: "Here are a Few Highlights:",
		},
	};
	const renderHighlight = () => {
		return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
			<div className="highlight" key={i}>
				<div className="highlight-blob">
					<Icon icon="material-symbols:circle" color="#ff5823" />
				</div>
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
							<a href="hsharma_resume.pdf" download="Hsharma_resume">
								<button className="btn highlighted-btn">Get Resume</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
