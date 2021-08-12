import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import SingleUserChart from "./SingleUserChart";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Home.css";
// todo: delete when using api
import notFound from "./unknown_profile.png";

const SingleUser = () => {
	const location = useLocation();
	const { userId, channelId, userName } = useParams();
	const [userData, setUserData] = useState(null);
	const channelData = location.state?.channelData;

	useEffect(() => {
		fetch(`/api/userSum/${channelId}/${userId}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setUserData(body.splice(0, 4));
			})
			.catch((err) => {
				console.error(err);
			});
	}, [channelId, userId]);

	return (
		<main role="main">
			<div className="container">
				<NavBar />
				<div className="username">{userName}</div>
				<div className="userDetails">
					{/* <img
						className="profilePic"
						data-qa="logo"
						src={notFound}
						alt="profile pic"
					/> */}
					<div className="userStats"></div>
				</div>
			</div>
			<div>
				{userData ? (
					<SingleUserChart
						messagesDataSet={userData.map((message) => message.total_message)}
						reactionsDataSet={userData.map(
							(reaction) => reaction.total_reaction
						)}
						label={userData.map((week) => `Week ${week.week_no}`)}
					/>
				) : null}
			</div>
			<Footer />
		</main>
	);
};

export default SingleUser;
