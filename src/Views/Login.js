import React, { Component } from 'react';
import firebase from 'firebase';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {loginStatus: false};
	}
	componentDidMount() {
		if(firebase.auth().currentUser) {
			this.setState({loginStatus: true});
			return;
		}
		firebase.auth().signInWithPopup(this.props.provider).then(result => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			let token = result.credential.accessToken;
			// The signed-in user info.
			let googleUser = result.user;
			// ...
			let unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser =>  {
				unsubscribe();
				// Check if we are already signed-in Firebase with the correct user.
				if (!this.isUserEqual(googleUser, firebaseUser)) {
					// Build Firebase credential with the Google ID token.
					let credential = firebase.auth.GoogleAuthProvider.credential(
						googleUser.getAuthResponse().id_token);
					// Sign in with credential from the Google user.
					firebase.auth().signInWithCredential(credential).catch(function(error) {
						// Handle Errors here.
						let errorCode = error.code;
						let errorMessage = error.message;
						// The email of the user's account used.
						let email = error.email;
						// The firebase.auth.AuthCredential type that was used.
						let credential = error.credential;
						// ...
					});
				} else {
					console.log('User already signed-in Firebase.');
				}
			});
		}).catch(function(error) {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			// The email of the user's account used.
			let email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			let credential = error.credential;
			// ...
		});
	}
	isUserEqual(googleUser, firebaseUser) {
		if (firebaseUser) {
			let providerData = firebaseUser.providerData;
			for (let i = 0; i < providerData.length; i++) {
				if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
					providerData[i].uid === googleUser.getBasicProfile().getId()) {
					// We don't need to reauth the Firebase connection.
					return true;
				}
			}
		}
		return false;
	}
	render() {
		return (
			<div className="Login">
				<h1>Login</h1>
				{this.state.loginStatus &&
				<div>You're already signed in!</div>
				}
			</div>
		);
	}
}