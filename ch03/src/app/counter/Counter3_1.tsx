import React from "react";
import {Component} from "react";

interface SFace{
    number : number
}

class Counter3_1 extends Component<any, SFace>{
    constructor(props : any) {
        super(props);
        this.state = {
            number : 0
        }
    }
    render() : JSX.Element {
        const {number} : SFace = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick={() =>{
                        this.setState({number : number + 1})
                    }}
                >+1</button>
            </div>
        )
    }
}
export default Counter3_1;