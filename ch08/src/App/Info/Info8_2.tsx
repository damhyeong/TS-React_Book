import React, {useEffect, useState} from "react";

const Info8_2 = () => {
    const [name, setName] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');

    const onChangeName = (e : React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const onChangeNickname = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    }

    useEffect(() => {
        console.log('Complete Rendering!!');
        console.log({
            name,
            nickname
        })
    });

    return(
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
export default Info8_2;