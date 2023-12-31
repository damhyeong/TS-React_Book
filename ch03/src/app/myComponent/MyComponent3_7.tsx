import React from "react";
import PropTypes from "prop-types";

interface IFace{
    name? : string;
    favoriteNumber : number;
    children : string;
}

const MyComponent3_7 : React.FC<IFace> = ({name, favoriteNumber, children} : IFace) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name} 입니다.<br/>
            children 값은, {children}입니다.<br/>
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    );
};

MyComponent3_7.defaultProps = {
    name : '기본 이름'
}

MyComponent3_7.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
}

export default MyComponent3_7;