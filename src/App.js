import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { logout, login } from './features/userSlice';
import { useDispatch } from "react-redux"

function App() {
	const user = null;

	const dispatch = useDispatch();

	useEffect(() => {
		/*this is a state Listener. also firebase save the data into the local cookies for your next time sign in */
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {			
				dispatch(login({
					uid: userAuth.uid,
					email: userAuth.email
				}))
			} else {
				dispatch(logout)
			}
		});
	}, []);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route exact path="/">
							<HomeScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
