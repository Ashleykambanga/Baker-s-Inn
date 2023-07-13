import React from "react";
import OurMission from "../componets/OurMission";
import Footer from "../componets/Footer";




const About = () => {
	return (
		<div className="About">
			<div className="about">
				<img src={require('../img/Rectangle 347.png')} alt="Rectangle 347.png" className="img-fluid" />
				<h1>
					About Us
				</h1>
			</div>
			<OurMission />
			<Footer />
		</div>
	);
};

export default About;

