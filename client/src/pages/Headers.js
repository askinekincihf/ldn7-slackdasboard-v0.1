import React from "react";
import "./Home.css";
import cyfLogo from "./cyf_logo.png";
import slackLogo from "./slack_tastic_logo.png";

const Headers = (props) => {
	return (
		<header className="header">
			<img className={"logo " + props.size} src={cyfLogo} alt="CYF logo" />
			<img className={"logo " + props.size} src={slackLogo} alt="slack logo" />
		</header>
	);
};

export default Headers;
