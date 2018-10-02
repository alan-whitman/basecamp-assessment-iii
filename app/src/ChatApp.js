import React, {Component} from 'react';
import './ChatApp.css';
import ChatWindow from './ChatWindow';
import InputBar from './InputBar';

class ChatApp extends Component{
    constructor(props)  {
        super(props);
        this.state = {messages: []};
        this.sendMessage = this.sendMessage.bind(this);
    }
    sendMessage(newMessage) {
        this.setState({messages: [...this.state.messages, newMessage]});
    }
    render()    {
        return(
        <div className="ChatApp">
            <ChatWindow messages={this.state.messages} />
            <InputBar sendMessage={this.sendMessage} />
        </div>
        )
    }
}

export default ChatApp;