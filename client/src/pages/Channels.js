import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Channels = () => {
	const [channelList, setChannelList] = useState([]);
	useEffect(() => {
		fetch("/api/channelList")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				const sortedChannels = body.channels.sort(
					(firstEl, secondEl) => secondEl.num_members - firstEl.num_members
				);
				setChannelList(sortedChannels);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main>
			<NavBar />
			<Table borderless hover className="table" responsive>
				<thead className="text-center">
					<TableHead />
				</thead>
				<tbody className="text-center">
					{channelList.map((channel, index) => (
						<TableRow channel={channel} key={index} />
					))}
				</tbody>
			</Table>
			<Footer />
		</main>
	);
};

export default Channels;
