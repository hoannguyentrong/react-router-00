import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
	render(){
		console.log('Home ' + this.props.params);
		return (
			<div>
				Home
			</div>
		);
	}
})