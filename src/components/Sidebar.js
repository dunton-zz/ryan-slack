import React, { Component } from 'react';
import Chat from '../containers/Chat'

class SideBar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className="col-lg-4 sidebar">
				<div>
					{this.props.channel_name}
				</div>
				<div>
					<p>Direct Messages</p>
				</div>
				<div>
					{
						this.props.chats.map( chat => {
							
							return <Chat 
								name = {chat.name}
								key =  {chat.id}
								
							/>
						})
					}
				</div>
			</div>
		)
	}
}

export default SideBar;