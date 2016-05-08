import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
	render(){
		console.log('repos-render');
		return (
			<div>
				Tony Repos
				<ul>
					<li><NavLink to='/repos/angular/01' activeClassName='active'>Angular repo</NavLink></li>
					<li><NavLink to='/repos/react/02' activeClassName='active'>React repo</NavLink></li>
				</ul>
			</div>
		);
	}
})