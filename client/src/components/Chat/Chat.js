import React from 'react';
// import { Container } from 'reactstrap';
import './Chat.css';
import { Sidebar } from './containers/Sidebar';
import { MessagesList } from './containers/MessagesList';
import { AddMessage } from './containers/AddMessage';
  
const Chat = (props) => (
	<div className="wrapper">
		<div className="chat-container">
	    <Sidebar />
	    <section id="main">
	    	<h1>UN Chatter</h1>
	      <MessagesList />
	      <AddMessage />
	    </section>
	  </div>
	 </div>
 )

  export default Chat;