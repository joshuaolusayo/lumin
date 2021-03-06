import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./Components/App";
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery  } from '@apollo/client';

import "./styles.css";

const client = new ApolloClient({
	uri: 'https://pangaea-interviews.now.sh/api/graphql',
	cache: new InMemoryCache()
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App} />
				</Switch>
			</BrowserRouter>
		</React.StrictMode>
	</ApolloProvider>,
	document.getElementById("root")
);
