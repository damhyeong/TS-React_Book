import React, {useState} from "react";

interface SFace {
    username : string;
    message : string;
}

const EventPractice4_10 : React.FC = () => {
    const [form, setForm] = useState<SFace>({
        username : '',
        message : '',
    })
    const {username, message} = form;
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const nextForm = {
            ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name] : e.target.value // 원하는 값을 덮어 씌운다.
        }
        setForm(nextForm);
    }
    const onClick = () : void => {
        alert("User Name : " + username + ", Message is : " + message);
        setForm({
            username : '',
            message : '',
        })
    }
    const onKeyPress = (e : React.KeyboardEvent) => {
        if(e.key === 'Enter')
            onClick();
    }

    return (
        <div>
            <h1>Event Practice 4-10</h1>
            <input
                type={"text"}
                name={"username"}
                placeholder={"User Name"}
                onChange={onChange}
                value={username}
            />
            <input
                type={"text"}
                name={"message"}
                placeholder={"Message Place"}
                onChange={onChange}
                value={message}
                onKeyPress={onKeyPress}
            />
            <button
                onClick={onClick}
            >Confirm</button>
        </div>
    )
}
export default EventPractice4_10;