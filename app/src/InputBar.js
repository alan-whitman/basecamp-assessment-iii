import React, {Component} from 'react';
import './InputBar.css';

class InputBar extends Component    {
    constructor(props) {
        super(props);
        this.state={inputValue: ''};
        this.inputUpdate = this.inputUpdate.bind(this);
        this.wasItEnter = this.wasItEnter.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }
    inputUpdate(e)  {
        this.setState({inputValue: e.target.value})
    }
    sendMessage()   {
        this.props.sendMessage(this.state.inputValue);
        this.setState({inputValue: ''});
    }
    wasItEnter(e)   {
        if(e.key ==="Enter")
            this.sendMessage();
    }
    render()  {
        return (
            <div className="InputBar">
                <input type="text" onChange={this.inputUpdate} onKeyPress={this.wasItEnter} value={this.state.inputValue}></input>
                <button onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}

export default InputBar;