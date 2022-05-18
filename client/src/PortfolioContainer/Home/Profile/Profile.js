import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import Animations from "../../../utilities/Animations";
import "./Profile.css";

export default function Profile(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
	
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icon">
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
					</div>
					<div className="profile-details-name">
						<span className="primary-text">
							{" "}
							Hello, I'M <span className="highlighted-text">Harsh Sharma</span>
						</span>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							{" "}
							<h1>
								{""}
								<Typical
									loop={Infinity}
									steps={[
										"CyberSecurity Enthusiast ",
										1000,
										"Full-Stack Developer",
										1000,
										"Software Developer",
										1000,
									]}
								/>
							</h1>
							<span className="profile-role-tagline">
								Knack of building applications with front and back end
								operations.
							</span>
						</span>
					</div>
					<div className="profile-options">
						<button
							className="btn primary-btn"
							onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
						>
							{" "}
							Hire Me{" "}
						</button>
						<a
							href="hsharma_resume.pdf"
							download="Hsharma_resume hsharma_resume.pdf"
						>
							<button className="btn highlighted-btn"> Get Resume</button>
						</a>
					</div>
				</div>
				<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>
			</div>
		</div>
	);
}
