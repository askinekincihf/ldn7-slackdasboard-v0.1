import React, { useState } from "react";
import arrow from "./arrow.png";
import "./Home.css";
import { Link } from "react-router-dom";

const TableRow = ({ channel }) => {
	const [selectedRow, setSelectedRow] = useState(false);

	function rowSelected() {
		setSelectedRow(!selectedRow);
	}

	return (
		<tr className={selectedRow ? "selectedRow" : " "} onClick={rowSelected}>
			<th scope="row">
				<Link
					style={{
						textDecoration: "none",
						color: "black",
						fontWeight: "lighter",
					}}
					to={`/channel/${channel.name}/${channel.id}`}
				>
					{channel.name}
				</Link>
			</th>
			<td>
				<Link
					style={{
						textDecoration: "none",
						color: "black",
						fontWeight: "lighter",
					}}
					to={`/channel/${channel.name}/${channel.id}`}
				>
					{channel.num_members}
				</Link>
			</td>
			<td className="arrowSelector">
				<Link
					style={{
						textDecoration: "none",
						color: "black",
						fontWeight: "lighter",
					}}
					to={`/channel/${channel.name}/${channel.id}`}
				>
					{<img className="arrow" src={arrow} alt="arrow" />}
				</Link>
			</td>
		</tr>
	);
};

export default TableRow;
