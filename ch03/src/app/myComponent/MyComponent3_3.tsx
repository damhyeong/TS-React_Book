import React from "react";

interface IFace {
    name? : string,
    children : string,
}

const MyComponent3_3 : React.FC<IFace> = (props: IFace) => {
    return (
        <div>
            안녕하세요, 제 이름은 {props.name} 입니다. <br/>
            children 값은 {props.children}
            입니다.
        </div>
    );
};

MyComponent3_3.defaultProps = {
    name : '기본 이름',
}

export default MyComponent3_3;