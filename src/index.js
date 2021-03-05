import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./Components/App";

import "./styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
