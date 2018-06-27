import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route';
import Wrapper from './loader/wrapper';
import Loadable from 'react-loadable';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavigationContainer from './navigation/navigation_container';
import Home from './home/home';

const App = () => (
	<div id="app">
		<header />
		<Switch>
			<Route exact path="/" component={Home} />
			<AuthRoute path="/signup" component={SignupContainer} />
			<AuthRoute path="/login" component={LoginContainer} />
			<Redirect to="/" />
		</Switch>
		<footer>
			<Route path="/" component={NavigationContainer} />
		</footer>
	</div>
);

export default App;
