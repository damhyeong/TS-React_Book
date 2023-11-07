import React, {Component, createRef} from "react";

class ScrollBox5_1 extends Component<any, any> {
    box : React.RefObject<HTMLDivElement>= createRef<HTMLDivElement>();

    render() {
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
        }

        const innerStyle = {
            width: '100%',
            height : '650px',
            background : 'linear-gradient(white, black)',
        }

        return (
            <div
                style={style}
                ref={this.box}
            >
                <div style={innerStyle}/>
            </div>
        )
    }
}
export default ScrollBox5_1;