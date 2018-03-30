import React, { Component } from 'react';

import './App.css';
import SideBar from './components/Sidebar';
import ChatBox from './components/ChatBox';
import clickOnUser from './actions'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showUsers;
  }

  render() {
    console.log(this.props)
    return (
      <div className="row">
        <SideBar channel_name={this.props.channel_name} chats={this.props.chats} />
        <ChatBox chat_name={this.props.active}  />
      </div>
    );
  }
}

export default App;
