import React, { Component } from 'react';

class MessageField extends Component {
	constructor(props) {
		super(props);
		
		this.onMessageSubmit = this.onMessageSubmit.bind(this);
	}

	onMessageSubmit(e) {
		e.preventDefault();
		
		this.refs.message.value = '';
	}

	render() {
		let placeholder_text = `Message ${this.props.chat_name}`;
		return(
			<div className="row">
				<div className="col-lg-12 ">
					<form onSubmit={this.onMessageSubmit}>
						<div className="form-group">
							<input type="text" ref='message' className="form-control" placeholder={placeholder_text} /> 
						</div>
					</form>
					
				</div>
				
			</div>
		)
	}
}

export default MessageField;