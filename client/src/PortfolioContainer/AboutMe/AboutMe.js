import a from"react";import b from"../../utilities/ScreenHeading/ScreenHeading";import c from"../../utilities/ScrollService";import d from"../../utilities/Animations";import"./AboutMe.min.css";export default function e(b){c.currentScreenFadeIn.subscribe(a=>{a.fadeInScreen===b.id&&d.animations.fadeInScreen(b.id)});let a={description:"Third-year computer science and mathematics student at the Memorial University of Newfoundland, I am a Cyber Security enthusiast who loves talking about security in day-to-day life. I have experience with developing web apps using the MERN stack and game development with the Java swing module.",highlights:{bullets:["Experienced with various operating systems including Linux, macOS and Windows","Experienced with developing software using Python, Java, C and JavaScript","Experienced with Full-Stack development using MERN stack and various other libraries.","Experienced with various version control systems like GitHub and GitLab ","Experienced with various database management systems.","Critical Thinking, Effective Communication, Problem Solving.",],heading:"Here are a Few Highlights:"}};return<div className="about-me-container screen-container fade-in"id={b.id||""}>

			<div className="about-me-parent">

				<b title={"About Me"}subHeading={"Why Choose Me?"}/>

				<div className="about-me-card">

					<div className="about-me-profile"></div>

					<div className="about-me-details">

						<span className="about-me-description">

							{a.description}

						</span>

						<div className="about-me-highlights">

							<div className="highlight-heading">

								<span >{a.highlights.heading}</span>

							</div>

							{a.highlights.bullets.map((a,b)=><div className="highlight"key={b}>

				<div className="highlight-blob"></div>

				<span >{a}</span>

			</div>)}

						</div>

						<div className="about-me-options">

							<button className="btn primary-btn"onClick={()=>c.scrollHandler.scrollToHireMe()}>

								{" "}

								Hire Me{" "}

							</button>

							<a href="hsharma_resume.pdf"download="Hsharma_resume">

								<button className="btn highlighted-btn">Get Resume</button>

							</a>

						</div>

					</div>

				</div>

			</div>

		</div>}