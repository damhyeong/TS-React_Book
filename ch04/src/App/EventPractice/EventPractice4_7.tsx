import React, {Component} from "react";

interface SFace{
    username : string,
    message : string,
}

class EventPractice4_7 extends Component<any, SFace> {
    state : SFace = {
        username : '',
        message : '',
    }

    handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        const name = e.target.name;
        this.setState({
            message: this.state.message, username: this.state.username,
            [e.target.name] : e.target.value
        });
    }
    handleClick = () : void => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username : '',
            message : '',
        })
    }

    render() {
        return (
            <div>
                <h1>Event Practice4-7</h1>
                <input
                    type={"text"}
                    name={"username"}
                    placeholder={"User Name"}
                    onChange={this.handleChange}
                    value={this.state.username}
                />
                <input
                    type={"text"}
                    name={"message"}
                    placeholder={"Message"}
                    onChange={this.handleChange}
                    value={this.state.message}
                />
                <button
                    onClick={this.handleClick}
                >확인</button>
            </div>
        );
    }
}
export default EventPractice4_7;