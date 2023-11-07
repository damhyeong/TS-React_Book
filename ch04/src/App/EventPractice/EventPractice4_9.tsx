import React , {useState} from "react";

const EventPractice4_9 : React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [message, setMessage]  = useState<string>('');
    const onChangeUsername = (e : React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onChangeMessage = (e : React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = (e : React.KeyboardEvent) => {
        if(e.key === 'Enter')
            onClick();
    }

    return (
        <div>
            <h1>Event Practice 4-9</h1>
            <input
                type={"text"}
                name={"username"}
                placeholder={"User Name"}
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type={"text"}
                name={"message"}
                placeholder={"Message"}
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button
                onClick={onClick}
            >확인</button>
        </div>
    )
}
export default EventPractice4_9;