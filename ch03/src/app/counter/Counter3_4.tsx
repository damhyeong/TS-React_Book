import React from "react";
import {Component} from "react";

interface SFace{
    number : number;
    fixedNumber : number;
}

class Counter3_4 extends Component<any, SFace> {
    state : SFace = {
        number : 0,
        fixedNumber : 0,
    }
    render() {
        const {number, fixedNumber} : SFace = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>fixedNumber : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        this.setState(
                            {number : number + 1},
                                () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                                }
                        )
                    }}
                >+1</button>
            </div>
        )
    }
}
export default Counter3_4;