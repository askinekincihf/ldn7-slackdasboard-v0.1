import React, { useState, useEffect } from "react";
import Headers from "./Headers";
import { Table } from "reactstrap";
import { useParams, Link } from "react-router-dom";
import SingleChannelChart from "./SingleChannelChart";

const Channel = () => {
	const { name, channelId } = useParams();
	const [userList, setUserList] = useState([]);
	const [message, setMessage] = useState("");
	const [reaction, setReaction] = useState("");

	useEffect(() => {
		fetch(`/api/channelUser/${channelId}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setUserList(body);
			})
			.catch((err) => {
				console.error(err);
			});

		fetch(`/api/channelSum/${channelId}`)
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				console.log(body);
				setMessage(body[1].total_message);
				setReaction(body[1].total_reaction);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [channelId]);

	return (
		<main role="main">
			<div className="container">
				<Headers size="small" />
				<div>
					<h1 className="text-center">
						{name.replace(/^./, name[0].toUpperCase())} Channel Users
					</h1>
					<p>
						Last week Channel Average: Messages: {(message / 7).toFixed(2)},
						Reactions: {(reaction / 7).toFixed(2)}
					</p>
					<Table hover>
						<thead>
							<tr>
								<th>#</th>
								<th>User Name</th>
								<th>Messages</th>
								<th>Reactions</th>
							</tr>
						</thead>
						<tbody>
							{userList.map((user, index) => (
								<tr key={index}>
									<th scope="row">{index + 1}</th>
									<td>
										<Link
											to={`/user/${channelId}/${user.id}/${user.real_name}`}
										>
											{user.real_name}
										</Link>
									</td>
									<td></td>
									<td></td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>
			<div>
				<SingleChannelChart
					messagesDataSet={[50, 22, 38]} // TODO: Replace with data from endpoint
					reactionsDataSet={[110, 103, 89]} // TODO: Replace with data from endpoint
				/>
			</div>
		</main>
	);
};

export default Channel;
