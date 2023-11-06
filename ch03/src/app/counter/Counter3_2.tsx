import React from "react";
import {Component} from "react";

interface SFace{
    number : number,
    fixedNumber : 0,
}

class Counter3_2 extends Component<any, SFace> {
    constructor(props : any) {
        super(props);
        this.state = {
            number : 0,
            fixedNumber : 0,
        };
    }
    render() {
        const {number, fixedNumber} : SFace = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>fixedNumber : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState({number : number + 1})
                    }}
                >+1</button>
            </div>
        )
    }
}
export default Counter3_2;