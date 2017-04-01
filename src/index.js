import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom'

import './index.scss';

import App from './App';

const config = {
	apiKey: "AIzaSyCF7CktRWP_7IFQAa7mF271W0YZXbVbJQk",
	authDomain: "react-firebase-996a0.firebaseapp.com",
	databaseURL: "https://react-firebase-996a0.firebaseio.com",
	projectId: "react-firebase-996a0",
	storageBucket: "react-firebase-996a0.appspot.com",
	messagingSenderId: "963135217420"
};

firebase.initializeApp(config);
let provider = new firebase.auth.GoogleAuthProvider();

render(
	<BrowserRouter>
		<App provider={provider} />
	</BrowserRouter>
, document.getElementById('root'));