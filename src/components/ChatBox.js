import React, {Component} from 'react';
import ChatHeader from './ChatHeader';
import MessageField from './MessageField';

class ChatBox extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div className="col-lg-8">
				<ChatHeader chat_name={this.props.chat_name} status={this.props.status} />
				<MessageField chat_name={this.props.chat_name} />
			</div>
		) 
	}
}

export default ChatBox;