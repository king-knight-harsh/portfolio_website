import React, { useEffect, useState } from "react";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./Resume.min.css";

const Resume = (props) => {
	/* STATES */
	const [currentHeader, setCurrentHeader] = useState("Education");
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

	// Programming Skills
	const programmingSkillsDetails = [
		{ skill: "Python", ratingPercentage: 90 },
		{ skill: "Golang", ratingPercentage: 90 },
		{ skill: "JavaScript", ratingPercentage: 90 },
		{ skill: "TypeScript", ratingPercentage: 90 },
		{ skill: "C", ratingPercentage: 70 },
		{ skill: "Bash", ratingPercentage: 75 },
	];

	// Web Development Skills
	const webDevelopmentSkills = [
		{ skill: "HTML", ratingPercentage: 90 },
		{ skill: "CSS", ratingPercentage: 90 },
		{ skill: "ExpressJS", ratingPercentage: 90 },
		{ skill: "NodeJS", ratingPercentage: 85 },
		{ skill: "JavaScript", ratingPercentage: 85 },
		{ skill: "ReactJS", ratingPercentage: 90 },
		{ skill: "WebFlow", ratingPercentage: 70 },
		{ skill: "Shopify", ratingPercentage: 70 },
	];

	// Database Skills
	const databaseSkills = [
		{ skill: "MongoDB", ratingPercentage: 95 },
		{ skill: "Sqlite", ratingPercentage: 95 },
		{ skill: "PostgreSQL", ratingPercentage: 100 },
		{ skill: "DynamoDB", ratingPercentage: 60 },
	];

	// Security Skills
	const securitySkills = [
		{ skill: "Burp Suite", ratingPercentage: 80 },
		{ skill: "OpenVAS", ratingPercentage: 75 },
		{ skill: "Metasploit", ratingPercentage: 90 },
		{ skill: "GoBuster", ratingPercentage: 100 },
		{ skill: "sqlMap", ratingPercentage: 95 },
		{ skill: "sublist3r", ratingPercentage: 95 },
		{ skill: "enum4linux", ratingPercentage: 95 },
	];

	const projectsDetails = [
		{
			title: "CO2BY",
			duration: {
				fromDate: "Apr 2023",
				toDate: "Apr 2023",
			},
			description:
				"CO2By is a project developed by a team of five students with diverse backgrounds during the HackFrost 3.0 hackathon. We aimed to create a carbon capture technology that captures carbon dioxide (CO2) emissions from vehicles and transforms them into a valuable commodity. Our technology captures the CO2 and stores it safely in capsules that can be sold to companies looking to offset their carbon footprint on our marketplace. Our vision is to contribute to a more sustainable future by reducing CO2 emissions released into the atmosphere and creating a marketplace for selling captured CO2 as a raw material.",
			subHeading:
				"Technologies Used: ReactJs, ExpressJs, NodeJs, Bootstrap, Heroku, Git",
		},
		{
			title: "Ment-NL",
			duration: { fromDate: "Jul 2022", toDate: "Jul 2022" },
			description:
				"TechNL FWD hackathon project to help mitigate the problem of tech-sector employment shortage by providing mentorship and open source project contribution platform. ",
			subHeading:
				"Technologies Used: ReactJs, ExpressJs, NodeJs, Bootstrap, Heroku, Git",
		},
		{
			title: "S.B. Telecom webStore",
			duration: { fromDate: "Jan 2022", toDate: "April 2022" },
			description:
				"An eCommerce application designed to sell products online wth payment system integration. E-commerce website, created for the S.B. Telecom(a small electronic store in India) using MERN stack to showcase the product and categories to increase the reach and sales for the company and make the inventory management easier and faster using the Admin Dashboard. The website allows the company to receive payment using the Stripe payment API.",
			subHeading:
				"Technologies Used:  ReactJs, Mongo DB, Express Js, Node Js, Redux, StripeJs, GraphJs.",
		},
		{
			title: "Personal Portfolio Website",
			duration: { fromDate: "Apr 2022", toDate: "Apr 2022" },
			description:
				"A Personal Portfolio website to showcase all my details and projects at one place. A personal portfolio website, created to show personal projects and create a platform to act as a digital resume to showcase creativity and programming skills. Moreover, providing an easy way to contact and visit other social media platforms.",
			subHeading: "Technologies Used: React JS, Bootstrap",
		},
		{
			title: "OneStopAgro",
			duration: { fromDate: "Feb 2022", toDate: "Feb 2022" },
			description:
				"Project build for Hack Frost NL to provide complete solution from early disease detection in crop to marketplace to sell the product. The project was created for HackFrostNL 2.0 and provides the solution to the problem of food waste through 3 simple platforms: an AI-based crop disease detector, a discussion portal and a marketplace to sell food products directly to the consumers.",
			subHeading:
				"Technologies Used: Python, Tensorflow, Keras, Scikit-learn, JavaScript, HTML, CSS, Bootstrap ",
		},
		{
			title: "The Game of Focus",
			duration: { fromDate: "Sept 2021", toDate: "Dec 2021" },
			description:
				'Four player board game developed using java swing, serialization module. The computerized version of the board game called "Domination", with the capability to save and load the game, playing alone with computer bots with 2 different difficulty settings and 3 different colour options to accommodate people with colour blindness.',
			subHeading: "Technologies Used: Java",
		},
	];

	const resumeDetails = [
		<div className="resume-education-container" key="education">
			<ResumeHeading
				heading={"Memorial University of Newfoundland"}
				subHeading={"Bachelor of computer science "}
				fromDate={"January 2020"}
				toDate={"Present"}
				description={
					<div>
						Awards: <strong>Dean's List 2020-2021 </strong>(top 10% in Faculty
						of Science)
						<br />
						<span className="tabbed-text">
							<strong>Dean's List 2021-2022 </strong>(top 10% in Faculty of
							Science)
							<br />
							<strong>Dean's List 2022-2023 </strong>(top 10% in Faculty of
							Science)
						</span>
					</div>
				}
			/>
		</div>,
		/* WORK EXPERIENCE */
		<div className="resume-experience-container" key="work-experience">
			<div className="experience-container">
				<ResumeHeading
					heading={"Data and Image Analysis Group, Memorial University"}
					subHeading={"FULL STACK DEVELOPER"}
					fromDate={"May 2023"}
					toDate={"Present"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						Containerized the WIMARS project with Docker and Terraform, reducing
						deployment time by 70%. Also, debugged code, enhancing the customer
						experience, and created technical documentation, saving developers
						1-2 hours of research time.
					</span>
				</div>
			</div>
			<div className="experience-container">
				<ResumeHeading
					heading={"Cadence Design Systems"}
					subHeading={"SOFTWARE DEVELOPER"}
					fromDate={"June 2022"}
					toDate={"August 2023"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						Developed RBAC (Role-Based Access Control) admin portal for
						inspectAR (Cadence's Augmented Reality Toolkit for PCBs), enhancing
						organization and user management, creating user docs, optimizing
						code by 40%, and improving QA for a better customer experience.
						<br />
						Awarded: <strong>Pass with Distinction</strong>
					</span>
				</div>
			</div>
			<div className="experience-container">
				<ResumeHeading
					heading={"Data and Image Analysis Group, Memorial University"}
					subHeading={"FULL STACK DEVELOPER"}
					fromDate={"December 2021"}
					toDate={"December 2022"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						Deployed Wimars website with Django, Postgres, Nginx, and Gunicorn
						on an Ubuntu server. Conducted testing, bug fixes, and code
						restructuring in MVC format to enhance the user experience.
						Documented tasks and progress for faster adaptation using SharePoint
						tools.
					</span>
				</div>
			</div>
			<div className="experience-container">
				<ResumeHeading
					heading={"Walmart Canada"}
					subHeading={
						"Customer Experience Salesfloor & Online Grocery Section Associate"
					}
					fromDate={"April 2020"}
					toDate={"June 2022"}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
						Maintained the designated location, assisted, fulfilled, and
						answered daily 60-100 customers' inquiries and trained more than 15
						new employees for their assigned locations
					</span>
					<br />
					<span className="resume-description-text">
						Awarded: <strong>Shining Star Award </strong>for exceptional
						customer service and work ethic
					</span>
				</div>
			</div>
		</div>,

		/* PROGRAMMING SKILLS */
		<div>
			<div className="skill-header">Programming Languages</div>
			<div className="programming-skills-container" key="programming-skills">
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
			</div>
			<br />
			<div className="skill-header">Web Development</div>
			<div className="programming-skills-container" key="programming-skills">
				{webDevelopmentSkills.map((skill, index) => (
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
			</div>
			<br />
			<div className="skill-header">Database Management</div>
			<div className="programming-skills-container" key="programming-skills">
				{databaseSkills.map((skill, index) => (
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
			</div>
			<br />
			<div className="skill-header">Security </div>
			<div className="programming-skills-container" key="programming-skills">
				{securitySkills.map((skill, index) => (
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
			</div>
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
				description="My passion for cybersecurity has been a driving force in my academic and professional journey. From my internship experience at Cadence Design Systems Inc., where I immersed myself in security practices, to my active participation in cybersecurity challenges on platforms like TryHackMe, I have consistently sought opportunities to deepen my knowledge and skills in this critical field. I am dedicated to ensuring the safety of digital assets and promoting secure online environments, making cybersecurity a central focus of my career aspirations."
			/>
			<ResumeHeading
				heading="Music"
				description="Music has always been an essential part of my life, offering a sense of comfort and inspiration. Listening to soothing melodies is something I can never compromise with. One of my favorite ways to unwind and find solace is by exploring Spotify's Sufi songs charts. The ethereal tunes and soulful lyrics in Sufi music have a unique power to soothe the mind and relieve stress. Whether it's a moment of reflection or a way to recharge after a busy day, I often turn to these melodies for solace and inspiration. The harmonious blend of voices and instruments creates a beautiful escape, allowing me to find a sense of tranquility amidst the fast-paced world of technology."
			/>
			<ResumeHeading
				heading="Hiking"
				description="Beyond my passion for technology, I find solace and adventure in the breathtaking landscapes of St. John's, Newfoundland. The rugged beauty and diverse trails of this region have fueled my love for hiking. Exploring the scenic routes and coastal cliffs that surround St. John's has become a cherished pastime. It's a perfect balance to the fast-paced world of technology, allowing me to disconnect and reconnect with nature while staying active and energized."
			/>
			<ResumeHeading
				heading="Entrepreneurship"
				description="Entrepreneurship is a journey of passion and innovation for me. Alongside my academic and professional pursuits, I run 'The Emporio,' a small side hustle on Facebook Marketplace. Here, I offer a unique range of home decor and electronics items to cater to diverse tastes. Managing 'The Emporio' has honed my business skills and reaffirmed my commitment to delivering quality and personalized service. It's a testament to my belief in the joy of bringing delightful products to people's lives."
			/>
		</div>,
	];

	const handleCarousal = (index) => {
		let offsetHeight = 1;

		let newCarousalOffset = {
			style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
		};

		setCarousalOffsetStyle(newCarousalOffset);
		setSelectedBulletIndex(index);
	};

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				onClick={() => {
					handleCarousal(index);
					setCurrentHeader(bullet.label);
				}}
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

	const getCurrentScreen = () => {
		if (currentHeader === "Education") {
			return resumeDetails[0];
		} else if (currentHeader === "Work History") {
			return resumeDetails[1];
		} else if (currentHeader === "Programming Skills") {
			return resumeDetails[2];
		} else if (currentHeader === "Projects") {
			return resumeDetails[3];
		} else if (currentHeader === "Interests") {
			return resumeDetails[4];
		}
	};
	const getResumeScreens = () => {
		return (
			<div
				style={carousalOffsetStyle.style}
				className="resume-details-carousal"
			>
				{" "}
				{getCurrentScreen()}
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
