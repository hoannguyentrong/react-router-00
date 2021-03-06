import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'

// debugger;
render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='about' component={About}/>
			<Route path='repos' component={Repos}>
				<Route path=':repoName/:version' component={Repo}/>
			</Route>
		</Route>
	</Router>
), document.getElementById('app'));
