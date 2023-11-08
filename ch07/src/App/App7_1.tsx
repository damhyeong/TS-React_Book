import React, {Component} from "react";
import LifeCycleSample from './LifeCycleSample/LifeCycleSample7_1';
import ErrorBoundary from "./ErrorBoundary";

const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App7_1 extends Component<{}, {}> {
    state = {
        color : '#000000'
    }

    handleClick = () => {
        this.setState({
            color : getRandomColor()
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Random Color</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
}
export default App7_1;
