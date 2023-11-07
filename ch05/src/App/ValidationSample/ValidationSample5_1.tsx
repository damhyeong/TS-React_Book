import React from "react";
import {Component} from "react";
import './ValidationSample.css'

interface SFace{
    password : string;
    clicked : boolean;
    validated : boolean;
}

class ValidationSample5_1 extends Component<any, SFace> {
    state : SFace = {
        password : '',
        clicked : false,
        validated : false,
    }

    handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password : e.target.value
        });
    }
    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        })
    }

    render() {
        return (
            <div>
                <input
                    type={"password"}
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button
                    onClick={this.handleButtonClick}
                >검증하기</button>
            </div>
        );
    }
}
export default ValidationSample5_1;