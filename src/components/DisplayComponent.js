import React, {Component} from "react";

class DisplayComponent extends Component{
    render() {
        let{display} = this.props;
        return (
            <div className= "display">
                <p>display</p>
            </div>
        );
    }
}

export default DisplayComponent;
