import React, {createRef} from "react";
import {Component} from "react";
import './ValidationSample.css'

interface SFace {
    password : string;
    clicked : boolean;
    validated : boolean;
}

class ValidationSample5_2 extends Component<any, SFace> {
    state : SFace = {
        password : '',
        clicked : false,
        validated : false,
    }
    input : React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

    handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password : e.target.value
        });
    }
    handleButtonClick = () : void => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        });
        if(this.input.current){
            this.input.current.focus();
        }
    }
    render() {
        return (
            <div>
                <input
                    type={"password"}
                    ref={this.input}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleButtonClick}
                >Confirm</button>
            </div>
        );
    }
}
export default ValidationSample5_2;