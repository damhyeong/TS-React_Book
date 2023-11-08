import React from "react";
import {Component} from "react";

class ErrorBoundary extends Component<any, any>{
    state = {
        error : false
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({
            error : true
        });
        console.log({error, errorInfo})
    }
    render() {
        if(this.state.error) return <div>Error Was Occured!</div>;
        return this.props.children;
    }
}
export default ErrorBoundary;