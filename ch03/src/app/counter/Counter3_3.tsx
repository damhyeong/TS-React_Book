import React from "react";
import {Component} from "react";

interface SFace{
    number : number;
    fixedNumber : number;
}

class Counter3_3 extends Component<any, SFace> {
    state : SFace = {
        number : 0,
        fixedNumber : 0,
    };
    render(){
        const {number, fixedNumber} : SFace = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>fixedNumber : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState(prevState => {
                            return {
                                number : prevState.number + 1
                            };
                        });
                        this.setState(prevState => ({
                            number : prevState.number + 1
                        }))
                    }}
                >+1</button>
            </div>
        )
    }
}
export default Counter3_3;