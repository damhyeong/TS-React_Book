import React, {Component} from "react";



class ScrollBox5_2 extends Component<{}, any>  {
    box : React.RefObject<HTMLDivElement> = React.createRef();


    scrollToBottom = () => {
        if(this.box.current){
            const {scrollHeight, clientHeight} = this.box.current;
            this.box.current.scrollTop = scrollHeight - clientHeight;
        }

    }

    render() {
        const style = {
            width : '300px',
            height : '300px',
            border : '1px solid black',
            overflow : 'auto',
        }

        const innerStyle = {
            width : '100%',
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
        );
    }
}
export default ScrollBox5_2;