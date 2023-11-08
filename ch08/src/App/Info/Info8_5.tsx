import React, {useEffect, useState} from "react";

interface SFace{
    name : string;
    nickname : string;
}

const Info8_5 = () => {
    const [names, setNames] = useState<SFace>({
        name : '',
        nickname : '',
    });

    useEffect(() => {
        console.log('effect');
        console.log(names.name);
        return () => {
            console.log('cleanup');
            console.log(names.name);
        }
    }, []);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setNames({
            ...names,
            [e.target.name] : e.target.value,
        })
    }

    return (
        <div>
            <div>
                <input value={names.name} onChange={onChange} name={"name"}/>
                <input value={names.nickname} onChange={onChange} name={"nickname"}/>
            </div>
            <div>
                <div>
                    <b>Name : </b> {names.name}
                </div>
                <div>
                    <b>NickName : </b> {names.nickname}
                </div>
            </div>
        </div>
    )
}
export default Info8_5;