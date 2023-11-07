import React from "react";
import {Component} from "react";

interface SFace{
    message : string,
}

class EventPractice4_5 extends Component<any, SFace> {
    constructor(props : SFace){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e : React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            message : e.target.value
        })
    }
    handleClick() : void {
        alert(this.state.message);
        this.setState({
            message : '',
        })
    }

    render(){
        return (
            <div>
                <h1>Event Pracetice 4-5</h1>
                <input
                    type={"text"}
                    name={"message"}
                    placeholder={"type anything"}
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick}
                >+1</button>
            </div>
        )
    }
}
export default EventPractice4_5;