import React from 'react'
import {Link} from 'react-router'


module.exports = React.createClass({
  render() {
    return (
    	<div>
	    	<h1>Tony React Router Tutorial</h1>
	    	<ul>
	    		<li><Link to='/about' activeClassName='active'>About1</Link></li>
	    		<li><Link to='/repos' activeClassName='active'>Repos1</Link></li>
	    	</ul>
        	{this.props.children}
    	</div>
	);
  }
})
