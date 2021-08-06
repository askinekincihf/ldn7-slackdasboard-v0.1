import React, { useState, useEffect } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import "./Home.css";

const UserDropdown = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [userList, setUserList] = useState([]);
	useEffect(() => {
		fetch("/api/userList")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setUserList(body.members);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	console.log(userList);

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<Dropdown
			className="linkButtons greenButton"
			isOpen={dropdownOpen}
			toggle={toggle}
		>
			<DropdownToggle caret>View Slack users</DropdownToggle>
			<DropdownMenu bottom>
				{userList.map((user, index) => {
					return (
						<DropdownItem key={index} href={`/user/${user.id}`}>
							{user.real_name}
						</DropdownItem>
					);
				})}
			</DropdownMenu>
		</Dropdown>
	);
};

export default UserDropdown;
