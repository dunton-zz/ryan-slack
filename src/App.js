import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar';
import ChatBox from './components/ChatBox';

class App extends Component {
  constructor() {
    super();
    let chats_fakeState = [{name:'Ashley', id:0}, {name:'Allysha', id:1}];
    this.state = {
      channel_name: 'Area 23 Friends',
      chats: chats_fakeState,
      active: chats_fakeState[0].name
    }
  }

  

  render() {
    return (
      <div className="row">
        <SideBar channel_name={this.state.channel_name} chats={this.state.chats} />
        <ChatBox chat_name={this.state.active} status='false' />
      </div>
    );
  }
}

export default App;
