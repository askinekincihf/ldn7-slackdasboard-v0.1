// import UserDropdown from "./Dropdown";
import ChannelButton from "./Button";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Home.css";
// todo replace:
// import users from "../fakeData/users.json";

const Home = () => {
	return (
		<main>
			<NavBar />
			<div className="introMessage">
				<h3>Hi there, welcome to CYF Slacktastic dashboard!</h3>
				<h4>
					This site allows you to access all sorts of stats about the Code Your
					Future slack channels and users.
				</h4>
			</div>
			<ChannelButton />
			{/* <UserDropdown users={users} /> */}
			<Footer />
		</main>
	);
};
export default Home;
