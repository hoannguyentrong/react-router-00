import React from 'react'
import {Link} from 'react-router'

export default React.createClass({

	render(){
		// console.log(this.props);
		return <Link {...this.props}></Link>
	}
})
