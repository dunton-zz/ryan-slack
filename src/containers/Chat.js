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
		this.props.clickOnUser(e);
	}

	render() {
		return (
			<p onClick={this.onClickHandler}>{this.props.name}</p>
		)
	}
}

function mapStateToProps(state) {
	return { active: state.active };
}


export default connect(mapStateToProps, { clickOnUser })(Chat);