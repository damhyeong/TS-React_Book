import React from "react";
import PropTypes from "prop-types";

interface IFace{
    name? : string;
    children : string;
}

const MyComponent3_6 : React.FC<IFace> = ({name, children} : IFace) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다.<br/>
            children 값은 {children}
            입니다.
        </div>
    );
};

MyComponent3_6.defaultProps = {
    name : '기본 이름',
}
MyComponent3_6.propTypes = {
    name : PropTypes.string
}
export default MyComponent3_6;