import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
	render(){
		console.log('repo-render');
		console.log(this.props.params);
		return (
			<div>
				Repo {this.props.params.repoName} {this.props.params.version}
			</div>
		);
	}
})