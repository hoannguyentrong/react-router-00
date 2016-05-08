import React from 'react'
import { render } from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'

// debugger;
render((
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<Route path='/about' component={About}/>
			<Route path='/repos' component={Repos}>
				<Route path=':repoName/:version' component={Repo}/>
			</Route>
		</Route>
	</Router>
), document.getElementById('app'));
