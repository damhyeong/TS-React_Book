import React, {useState} from "react";

const Info8_1 = () => {
    const [name, setName] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');

    const onChangeName = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const onChangeNickname = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>name</b> : {name}
                </div>
                <div>
                    <b>nickname</b> : {nickname}
                </div>
            </div>
        </div>
    )
}
export default Info8_1;