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

const GET_PRODUCTS = gql`
	query Products($currency){
		products {
			price(currency: $currency)
			id
			title
		}
}`;

function GetProducts({ currency }) {
	const { loading, error, data } = useQuery(GET_PRODUCTS, {
		variables: { currency }
	});
	
	if (loading) return null;
	if (error) return `Error! ${error}`;
	
	return data;
}

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
