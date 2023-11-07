import React from "react";
import {Component} from "react";

interface SFace{
    message : string,
}

class EventPractice4_6 extends Component<any, SFace> {
    state : SFace = {
        message : '',
    }

    handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            message : e.target.value
        });
    }
    handleClick = () : void => {
        alert(this.state.message);
        this.setState({
            message : '',
        })
    }

    render() {
        return (
            <div>
                <h1>Event Pracetice4-6</h1>
                <input
                    type={"text"}
                    name={"message"}
                    placeholder={"type everything"}
                    onChange={this.handleChange}
                    value={this.state.message}
                />
                <button
                    onClick={this.handleClick}
                >OK</button>
            </div>
        );
    }
}
export default EventPractice4_6