import React, {Component, createRef} from "react";
import ScrollBox from "./ScrollBox/ScrollBox5_2";

class App5_3 extends Component<any, any> {
    scrollBox : React.RefObject<ScrollBox> = createRef<ScrollBox>() as React.RefObject<ScrollBox>;

    render() {
        return (
            <div>
                <ScrollBox ref={this.scrollBox}/>
                <button onClick={() => {
                    if(this.scrollBox.current) {
                        this.scrollBox.current.scrollToBottom()
                    }
                }}>
                    맨 밑으로
                </button>
            </div>
        );
    }
}
export default App5_3;