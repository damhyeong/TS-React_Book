import React from "react";
import {useParams} from "react-router-dom";

interface DataIFace{
    [key : string] : {
        name : string;
        description : string;
    };
}
const data : DataIFace = {
    velopert : {
        name : '김민준',
        description : '개발을 좋아하는 velog 창시자'
    },
    gildong : {
        name : '홍길동',
        description : '고전 소설의 주인공'
    },
}

const Profile13_1 = () => {
    const {username} = useParams() as {username : string};
    const profile = data[username];

    return (
        <div>
            <h1>User Profile</h1>
            {
                profile ? (
                    <div>
                        <h2>{profile.name}</h2>
                        <p>{profile.description}</p>
                    </div>
                ) : (<p>존재하지 않는 프로필입니다.</p>)
            }
        </div>
    )
}
export default Profile13_1;