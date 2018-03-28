import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar';
import ChatBox from './components/ChatBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      channel_name: 'Area 23 Friends',
      chats: [{name:'Ashley', id:0}, {name:'Allysha', id:1}]
    }
  }
  render() {
    return (
      <div className="row">
        <SideBar channel_name={this.state.channel_name} chats={this.state.chats} />
        <ChatBox chat_name='Kelsey' status='false' />
      </div>
    );
  }
}

export default App;
