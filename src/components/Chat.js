import React, {Component} from 'react';
import {clickOnUser} from '../reducers/index';

class Chat extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		
		return (
			<p onClick={clickOnUser}>{this.props.name}</p>
		)
	}
}

export default Chat;