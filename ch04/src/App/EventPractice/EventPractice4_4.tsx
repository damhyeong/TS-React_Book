import React, {Component} from "react";

interface SFace {
    message : string,
}

class EventPractice4_4 extends Component<any, SFace> {
    state : SFace = {
        message : '',
    }

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type={"text"}
                    name={"message"}
                    placeholder={"type anithing"}
                    value={this.state.message}
                    onChange={
                        (e : React.ChangeEvent<HTMLInputElement>) => {
                            this.setState({message : e.target.value})
                        }
                    }
                />
                <button
                    onClick={() => {
                        alert(this.state.message);
                        this.setState({
                            message : '',
                        });
                    }}
                >확인</button>
            </div>
        );
    }
}
export default EventPractice4_4;