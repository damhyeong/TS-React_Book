import React, {Component} from "react";

class EventPractice4_2 extends Component<any, any> {
    render() {
        return (
            <div>
                <h1>Event Handler Practice</h1>
                <input
                    type={"text"}
                    name={"message"}
                    placeholder={"Type Anithing"}
                    onChange={
                        (e : React.ChangeEvent<HTMLInputElement>) => {
                            console.log(e);
                        }
                    }
                />
            </div>
        )
    }
}
export default EventPractice4_2;