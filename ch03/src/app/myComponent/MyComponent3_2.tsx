import React from "react";

interface IFace{
    name : string;
}

const MyComponent3_2 : React.FC<IFace> = (props: IFace) => {
    return <div>안녕하세요, 제 이름은 {props.name} 입니다.</div>
}

MyComponent3_2.defaultProps = {
    name : 'default Name',
}

export default MyComponent3_2;