import React, { Component } from 'react';

import './App.css';
import SideBar from './components/Sidebar';
import ChatBox from './components/ChatBox';
import { connect } from 'react-redux';



class App extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className="row">
        <SideBar channel_name={this.props.users.channel_name} chats={this.props.users.chats} />
        <ChatBox chat_name={this.props.users.active}  />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(App);

