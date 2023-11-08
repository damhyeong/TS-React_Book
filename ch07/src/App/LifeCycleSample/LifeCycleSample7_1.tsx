import React, {Component, createRef} from "react";

interface PFace{
    color : string;
}
interface SFace{
    number : number;
    color : string;
}

class LifeCycleSample7_1 extends Component<PFace, SFace> {
    public numberRef = createRef<HTMLHeadingElement>();

    constructor(props : PFace) {
        super(props);
        this.state = {
            number : 0,
            color : props.color,
        }

        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps : PFace, prevState : SFace){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color)
            return {color : nextProps.color};
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps: Readonly<PFace>, nextState: Readonly<SFace>, nextContext: any): boolean {
        console.log('shouldComponentUpdate', nextProps, nextState, nextContext);
        // 숫자의 마지막 자리가 4면 리렌더링 하지 않는다.
        return nextState.number % 4 !== 0;
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<PFace>, prevState: Readonly<SFace>): any {
        console.log('getShapshotBeforeUpdate');
        if(prevProps.color !== this.props.color)
            return this.numberRef.current?.style.color;
    }

    componentDidUpdate(prevProps: Readonly<PFace>, prevState: Readonly<SFace>, snapshot?: any) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot)
            console.log('업데이트 되기 직전 색상', snapshot);
    }

    render() : JSX.Element {
        console.log('render');

        const style = {
            color : this.props.color
        }

        return (
            <div>
                <h1
                    style={style}
                    ref={this.numberRef}
                >{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>
                    +1
                </button>
            </div>
        );
    }
}
export default LifeCycleSample7_1;