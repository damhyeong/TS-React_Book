import React, {useState, useEffect} from "react";

const Info8_4 = () => {
    const [name, setName] = useState<string>('');
    const [nickname, setNickname] = useState<string>('');

    useEffect(() => {
        console.log(name);
    }, [name]);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const eName = e.target.name;
        if(eName === 'name')
            setName(e.target.value);
        else if(eName === 'nickname')
            setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChange} name={"name"}/>
                <input value={nickname} onChange={onChange} name={"nickname"}/>
            </div>
            <div>
                <div>
                    <b>Name</b> : {name}
                </div>
                <div>
                    <b>Nickname</b> : {nickname}
                </div>
            </div>
        </div>
    )
}
export default Info8_4;