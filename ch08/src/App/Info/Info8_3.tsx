import React, {useEffect, useState} from "react";

const Info8_3 = () => {
    const [name, setName] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');

    useEffect(() => {
        console.log('Complete Mount!!');
    }, []);

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
                    <b>Name : </b> {name}
                </div>
                <div>
                    <b>Nickname : </b> {nickname}
                </div>
            </div>
        </div>
    )
}
export default Info8_3;