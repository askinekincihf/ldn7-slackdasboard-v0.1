import React, { useState } from "react";
import cyfBrand from "./cyf_brand.png";
import "./Home.css";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

const NavBar = () => {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => setCollapsed(!collapsed);

	return (
		<div>
			<Navbar className="navbar" color="light" light>
				<NavbarBrand href="/" className="mr-auto">
					<img className="cyf_logo" src={cyfBrand} alt="CYF logo" />
				</NavbarBrand>
				<NavbarToggler onClick={toggleNavbar} className="mr-2" />
				<Collapse isOpen={!collapsed} navbar className="collapsedItems">
					<Nav navbar>
						<NavItem>
							<NavLink href="/components/">Login</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://codeyourfuture.io/about/">Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
