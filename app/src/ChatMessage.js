import React, {Component} from 'react';
import './ChatMessage.css';

class ChatMessage extends Component{
    constructor(props)  {
        super(props);
    }
    render()  {
        return  (
            <div className="ChatMessage">
                <p>{this.props.messageText}</p>
            </div>
        )
    }
}


export default ChatMessage;