import React, {Component} from 'react';


class ChatHeader extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div>
				
				<p>{this.props.chat_name}</p>
				<p>{this.props.status}</p>
			</div>
		) 
	}
}

export default ChatHeader;