import React, {Component} from 'react';
import './ChatWindow.css';
import ChatMessage from './ChatMessage';

class ChatWindow extends Component{
    constructor(props) {
        super(props);
        this.renderMessages = this.renderMessages.bind(this);
    }

    renderMessages()    {
        return this.props.messages.map((message, i) => (
            <ChatMessage messageText={message} key={i.toString()} />
        ));
    }
    render()    {
        return (
            <div className="ChatWindow">
                {this.renderMessages()}
            </div>
        )
    }
}


export default ChatWindow;