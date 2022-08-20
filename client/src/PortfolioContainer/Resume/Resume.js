import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
	/* STATES */
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
	const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;

		Animations.animations.fadeInScreen(props.id);
	};
	const fadeInSubscription =
		ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

	/* REUSABLE MINOR COMPONENTS */
	const ResumeHeading = (props) => {
		return (
			<div className="resume-heading">
				<div className="resume-main-heading">
					<div className="heading-bullet"></div>
					<span>{props.heading ? props.heading : ""}</span>
					{props.fromDate && props.toDate ? (
						<div className="heading-date">
							{props.fromDate + " - " + props.toDate}
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className="resume-sub-heading">
					<span>{props.subHeading ? props.subHeading : ""}</span>
				</div>
				<div className="resume-heading-description">
					<span>{props.description ? props.description : ""}</span>
				</div>
			</div>
		);
	};

	/* STATIC RESUME DATA FOR THE LABELS*/
	const resumeBullets = [
		{ label: "Education", logoSrc: "education.svg" },
		{ label: "Work History", logoSrc: "work-history.svg" },
		{ label: "Programming Skills", logoSrc: "programming-skills.svg" },
		{ label: "Projects", logoSrc: "projects.svg" },
		{ label: "Interests", logoSrc: "interests.svg" },
	];

	//here we have
	const programmingSkillsDetails = [
		{ skill: "Python", ratingPercentage: 90 },
		{ skill: "Express JS", ratingPercentage: 89 },
		{ skill: "Node JS", ratingPercentage: 89 },
		{ skill: "JavaScript", ratingPercentage: 85 },
		{ skill: "React JS", ratingPercentage: 80 },
		{ skill: "Core Java", ratingPercentage: 80 },
		{ skill: "HTML", ratingPercentage: 80 },
		{ skill: "CSS", ratingPercentage: 80 },
		{ skill: "Mongo DB", ratingPercentage: 75 },
		{ skill: "C", ratingPercentage: 65 },
		{ skill: "Sqlite", ratingPercentage: 75 },
		{ skill: "PostgreSQL", ratingPercentage: 60 },
	];

	const projectsDetails = [
		{
			title: "Personal Portfolio Website",
			duration: {  },
			description:
				"A Personal Portfolio website to showcase all my details and projects at one place.",
			subHeading: "Technologies Used: React JS, Bootstrap",
		},
		{
			title: "OneStopAgro",
			duration: {  },
			description:
				"Project build for Hack Frost NL to provide complete solution from early disease detection in crop to marketplace to sell the product ",
			subHeading:
				"Python, Tensorflow, Keras, Scikit-learn, JavaScript, HTML, CSS, Bootstrap ",
		},
		{
			title: "S.B. Telecom webStore",
			duration: { },
			description:
				"An eCommerce application designed to sell products online wth payment system integration",
			subHeading:
				"Technologies Used:  ReactJs, Mongo DB, Express Js, Node Js, Redux, StripeJs, GraphJs.",
		},
		{
			title: "The Game of Focus",
			duration: { },
			description:
				"Four player board game developed using java swing, serialization module",
			subHeading: "Technologies Used: Java",
		},
	];

	const resumeDetails = [
		<div className="resume-screen-container" key="education">
			<ResumeHeading
				heading={"Memorial University of Newfoundland"}
				subHeading={"Bachelor of computer science [GPA 3.8]"}
				fromDate={"2020"}
				toDate={"Present"}
			/>
			<ResumeHeading
				heading={"High School "}
				subHeading={"Shri Ram Ashram Public School [ Grade A ]"}
				fromDate={"2015"}
				toDate={"2019"}
			/>
		</div>,

		/* WORK EXPERIENCE */
		<div className="resume-screen-container" key="work-experience">
			<div className="experience-container">
				<ResumeHeading
					heading={"Cadence Design Systems"}
					subHeading={"SOFTWARE DEVELOPER"}
					fromDate={"June 2022"}
					toDate={"Present"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						Currently working as software developer with inspectAR team for Cadence Design System
						lab.
					</span>
				</div>
				
			</div>
			<div className="experience-container">
				<ResumeHeading
					heading={"Data and Image analysis Lab, Memorial University"}
					subHeading={"FULL STACK DEVELOPER"}
					fromDate={"January 2022"}
					toDate={"Present"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						Currently working as full stack developer with WIMARS team for DIAG
						lab.
					</span>
				</div>
				
			</div>
		</div>,

		/* PROGRAMMING SKILLS */
		<div
			className="resume-screen-container programming-skills-container"
			key="programming-skills"
		>
			{programmingSkillsDetails.map((skill, index) => (
				<div className="skill-parent" key={index}>
					<div className="heading-bullet"></div>
					<span>{skill.skill}</span>
					<div className="skill-percentage">
						<div
							style={{ width: skill.ratingPercentage + "%" }}
							className="active-percentage-bar"
						></div>
					</div>
				</div>
			))}
		</div>,

		/* PROJECTS */
		<div
			className="resume-screen-container project-skills-container"
			key="projects"
		>
			{projectsDetails.map((projectsDetails, index) => (
				<ResumeHeading
					key={index}
					heading={projectsDetails.title}
					subHeading={projectsDetails.subHeading}
					description={projectsDetails.description}
					fromDate={projectsDetails.duration.fromDate}
					toDate={projectsDetails.duration.toDate}
				/>
			))}
		</div>,

		/* Interests */
		<div className="resume-screen-container" key="interests">
			<ResumeHeading
				heading="Cyber Security"
				description="I really love learning more and more about the field of cyber security to make internet safe and secure for everyone."
			/>
			<ResumeHeading
				heading="Music"
				description="Listening to soothing music is something I can never compromise with, skimming through Spotify's sufi songs charts is at times the best stress reliever that i can get my hands on."
			/>
			<ResumeHeading
				heading="Hiking"
				description="I love going on different trails around the city to enjoy the nature and relax."
			/>
		</div>,
	];

	const handleCarousal = (index) => {
		let offsetHeight = 360;

		let newCarousalOffset = {
			style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
		};

		setCarousalOffsetStyle(newCarousalOffset);
		setSelectedBulletIndex(index);
	};

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				onClick={() => handleCarousal(index)}
				className={
					index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
				}
				key={index}
			>
				<img
					className="bullet-logo"
					src={require(`../../assets/Resume/${bullet.logoSrc}`)}
					alt="B"
				/>
				<span className="bullet-label">{bullet.label}</span>
			</div>
		));
	};

	const getResumeScreens = () => {
		return (
			<div
				style={carousalOffsetStyle.style}
				className="resume-details-carousal"
			>
				{resumeDetails.map((ResumeDetail) => ResumeDetail)}
			</div>
		);
	};

	useEffect(() => {
		return () => {
			/* UNSUBSCRIBE THE SUBSCRIPTIONS */
			fadeInSubscription.unsubscribe();
		};
	}, [fadeInSubscription]);

	return (
		<div
			className="resume-container screen-container fade-in"
			id={props.id || ""}
		>
			<div className="resume-content">
				<ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
				<div className="resume-card">
					<div className="resume-bullets">
						<div className="bullet-container">
							<div className="bullet-icons"></div>
							<div className="bullets">{getBullets()}</div>
						</div>
					</div>

					<div className="resume-bullet-details">{getResumeScreens()}</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
