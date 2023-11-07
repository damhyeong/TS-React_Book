import React from "react";
import {Component} from "react";

interface SFace{
    username : string,
    message : string,
}

class EventPractice4_8 extends Component<any, SFace> {
    state : SFace = {
        username : '',
        message : '',
    }

    handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        this.setState({
            // username : this.state.username, message : this.state.message,
            ...this.state,
            [e.target.name] : e.target.value
        });
    }
    handleClick = () : void => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username : '',
            message : '',
        });
    }
    handleKeyPress = (e : React.KeyboardEvent) : void => {
        if(e.key === 'Enter')
            this.handleClick();
    }

    render() {
        return (
            <div>
                <h1>Event Practice 4-8</h1>
                <input
                    type={"text"}
                    name={"username"}
                    placeholder={"User name"}
                    onChange={this.handleChange}
                    value={this.state.username}
                />
                <input
                    type={"text"}
                    name={"message"}
                    placeholder={"Message"}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    value={this.state.message}
                />
                <button
                    onClick={this.handleClick}
                >확인</button>
            </div>
        );
    }
}
export default EventPractice4_8;