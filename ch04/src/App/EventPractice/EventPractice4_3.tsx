import React , {Component} from "react";

interface SFace{
    message : string;
}

class EventPractice4_3 extends Component<any, SFace> {
    state: SFace = {
        message : '',
    }

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type={"text"}
                    name={"message"}
                    placeholder={"Type Anithing"}
                    value={this.state.message}
                    onChange={
                        (e : React.ChangeEvent<HTMLInputElement>) => {
                            this.setState({message : e.target.value})
                        }
                    }
                />
            </div>
        );
    }
}
export default EventPractice4_3;