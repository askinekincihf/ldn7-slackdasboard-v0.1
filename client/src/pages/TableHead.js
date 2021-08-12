import React from "react";
import slack_logo from "./slack_logo.png";
import free_icon_team_new from "./free_icon_team_new.png";
import "./Home.css";

const TableHead = () => {
	return (
		<tr>
			<th>
				<img className="slack_logo" src={slack_logo} alt="Slack logo" /> Channel
				name
			</th>
			<th>
				<img className="users_icon" src={free_icon_team_new} alt="Users icon" />
				No. of users
			</th>
		</tr>
	);
};

export default TableHead;
