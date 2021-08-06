import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SingleUser from "./pages/SingleUser";
import Channels from "./pages/Channels";
import Channel from "../src/pages/Channel";

const App = () => (
	<Switch>
		<Route path="/" exact>
			<Home />
		</Route>
		<Route path="/user/:channelId/:userId/:userName">
			<SingleUser />
		</Route>
		<Route path="/channels">
			<Channels />
		</Route>
		<Route path="/channel/:name/:channelId">
			<Channel />
		</Route>
	</Switch>
);

export default App;
