import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { routes } from './routes';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				{routes.map((route, i) => <Link to={route.path}>{route.label}</Link>)}
				<Switch>
					{routes.map((route, i) => (
						<Route exact path={route.path} component={route.component} />
					))}
				</Switch>
			</div>
		);
	}
}