import React, {Component} from 'react';
import { clickOnUser } from '../actions/';
import { connect } from 'react-redux';

class Chat extends Component {
	constructor(props) {
		super(props)

		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(e) {
		// call action creator
		clickOnUser(e);
	}

	render() {
		return (
			<p onClick={this.onClickHandler}>{this.props.name}</p>
		)
	}
}

export default Chat;