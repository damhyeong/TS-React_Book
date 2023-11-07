import React from "react";
import {Component} from "react";

class RefSample extends Component<any, any> {
    input: React.RefObject<HTMLInputElement> = React.createRef();

    handleFocus = () : void => {
        if (this.input.current) {
            let current: HTMLInputElement = this.input.current;
            current.focus();
        }
    }

    render() {
        return (
            <div>
                <input ref={this.input}/>
            </div>
        );
    }
}