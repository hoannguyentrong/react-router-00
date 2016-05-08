import React from 'react'
import {Link, IndexLink} from 'react-router'
import NavLink from './NavLink'


module.exports = React.createClass({
  render() {
    return (
    	<div>
	    	<h1>Tony React Router Tutorial</h1>
	    	<ul >
	    		<li><NavLink to='/' activeClassName='active' onlyActiveOnIndex>Home1</NavLink></li>
	    		<li><IndexLink to='/' activeClassName='active'>Home1</IndexLink></li>
	    		<li><NavLink to='/about' activeClassName='active'>About1</NavLink></li>
	    		<li><NavLink to='/repos' activeClassName='active'>Repos1</NavLink></li>
	    	</ul>
        	{this.props.children}
    	</div>
	);
  }
})
