import React from "react";

interface IFace{
    name? : string,
    children : string,
}

const MyComponent3_4 : React.FC<IFace> = (props : IFace) => {
    const {name, children} : IFace = props;
    return (
        <div>
            Hello, My name is {name}. <br/>
            Value of Children is {children}.
        </div>
    );
};

MyComponent3_4.defaultProps = {
    name : '기본 이름,'
}

export default MyComponent3_4;