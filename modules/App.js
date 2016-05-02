import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'


module.exports = React.createClass({
  render() {
    return (
    	<div>
	    	<h1>Tony React Router Tutorial</h1>
	    	<ul>
	    		<li><NavLink to='/about' activeClassName='active'>About1</NavLink></li>
	    		<li><NavLink to='/repos' activeClassName='active'>Repos1</NavLink></li>
	    	</ul>
        	{this.props.children}
    	</div>
	);
  }
})
