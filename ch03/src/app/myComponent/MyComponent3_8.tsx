import React from "react";
import PropTypes from "prop-types";
import {Component} from "react";

interface IFace{
    name? : string;
    children : string;
    favoriteNumber : number
}

class MyComponent3_8 extends Component<IFace, any> {
    static defaultProps = {
        name : '기본 이름',
    };
    static propTypes = {
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    }
    render() : JSX.Element {
        const {name, favoriteNumber, children} : IFace = this.props;
        return (
            <div>
                Hello, My name is {name}.<br/>
                Value of Children is {children}<br/>
                My Favorite Number is {favoriteNumber}.
            </div>
        );
    }
}

export default MyComponent3_8;