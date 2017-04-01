import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { routes } from './routes';
import firebase from 'firebase';
import Index from "./Views/Index";
import Login from "./Views/Login";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			userDetails: {
				displayName: null,
				email: null,
				emailVerified: null,
				photoURL: null,
				uid: null,
				accessToken: null,
				providerData: null
			}
		};
	}
	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				// User is signed in.
				let displayName = user.displayName;
				let email = user.email;
				let emailVerified = user.emailVerified;
				let photoURL = user.photoURL;
				let uid = user.uid;
				let providerData = user.providerData;
				user.getToken().then(accessToken => {
					this.setState({userDetails:{
						displayName: displayName,
						email: email,
						emailVerified: emailVerified,
						photoURL: photoURL,
						uid: uid,
						accessToken: accessToken,
						providerData: providerData
					}});
				});
			} else {
				// User is signed out.
				this.setState({userDetails:{
					displayName: null,
					email: null,
					emailVerified: null,
					photoURL: null,
					uid: null,
					accessToken: null,
					providerData: null
				}});
			}
		}, (error) => {
			console.log(error);
		});
	}
	render() {
		const LoginWrapper = ({match}) => {
			return <Login provider={this.props.provider} />;
		};
		return (
			<div className="App">
				{routes.map((route, i) => <Link to={route.path}>{route.label}</Link>)}
				<Switch>
						<Route exact path={'/'} component={Index} />
						<Route path={'/login'} component={LoginWrapper} />
				</Switch>
				{JSON.stringify(this.state.userDetails)}
			</div>
		);
	}
}